let VIDEO=null;
let CANVAS=null;
let CONTEXT=null;
let SCALER=0.6;
let SIZE={x:0,y:0,width:0,height:0, rows:10, columns:9};
let PIECES=[];
let MICROPHONE=null;
let levelMic = 0;

function main(){
	CANVAS=document.getElementById("myCanvas");
  VIDEO=document.getElementById("myVideo");
	CONTEXT=CANVAS.getContext("2d");
	
	let promise=navigator.mediaDevices.getUserMedia({
		video:true
	});
	promise.then(function(signal){
		VIDEO.srcObject=signal;
		VIDEO.play();

    MICROPHONE = new Microphone(1024);
		
		VIDEO.onloadeddata=function(){			
			handleResize();
			//window.addEventListener('resize',handleResize);
      initializePieces(SIZE.rows,SIZE.columns);
			updateCanvas();
		}
	}).catch(function(err){
		alert("Camera error: "+err);
	});
}

function handleResize(){
	CANVAS.width=window.innerWidth;
	CANVAS.height=window.innerHeight;
	
	let resizer=SCALER*
				Math.min(
					window.innerWidth/VIDEO.videoWidth,
					window.innerHeight/VIDEO.videoHeight
				);
	SIZE.width=resizer*VIDEO.videoWidth;
	SIZE.height=resizer*VIDEO.videoHeight;
	SIZE.x=window.innerWidth/2-SIZE.width/2;
	SIZE.y=window.innerHeight/2-SIZE.height/2;
}

function updateCanvas(){
  //console.log('updateCanvas');

	CONTEXT.clearRect(0,0,CANVAS.width,CANVAS.height);
	
	CONTEXT.globalAlpha=0.3;
	CONTEXT.drawImage(VIDEO,
		SIZE.x, SIZE.y,
		SIZE.width, SIZE.height);	
	CONTEXT.globalAlpha=1;
	
	for(let i=0;i<PIECES.length;i++){
		PIECES[i].draw(CONTEXT, levelMic);
	}
  if (MICROPHONE.initialized){
    levelMic = MICROPHONE.getVolume()*5;
    //console.log('initialized', levelMic);
  }else{
    console.log('not initialized');
  }
  
	window.requestAnimationFrame(updateCanvas);
}

function initializePieces(rows,cols){
	SIZE.rows=rows;
	SIZE.columns=cols;
	
	PIECES=[];
	for(let i=0;i<SIZE.rows;i++){
		for(let j=0;j<SIZE.columns;j++){
			PIECES.push(new Piece(i,j));
		}
	}
}

// function randomizePieces(){
// 	for(let i=0;i<PIECES.length;i++){
// 		let loc={
// 			x:Math.random()*(CANVAS.width-PIECES[i].width),
// 			y:Math.random()*(CANVAS.height-PIECES[i].height)
// 		}
// 		PIECES[i].x=loc.x;
// 		PIECES[i].y=loc.y;
// 	}
// }

class Piece{
	constructor(rowIndex,colIndex){
		this.rowIndex=rowIndex;
		this.colIndex=colIndex;
		this.x=SIZE.x+SIZE.width*this.colIndex/SIZE.columns;
		this.y=SIZE.y+SIZE.height*this.rowIndex/SIZE.rows;
		this.width=SIZE.width/SIZE.columns;
		this.height=SIZE.height/SIZE.rows;
	}
	draw(context, levelMic=0){
    const modulation=15;
		context.beginPath();
		
		context.drawImage(VIDEO,
			this.colIndex*VIDEO.videoWidth/SIZE.columns,
			this.rowIndex*VIDEO.videoHeight/SIZE.rows,
			VIDEO.videoWidth/SIZE.columns,
			VIDEO.videoHeight/SIZE.rows,
			this.x + levelMic*this.colIndex*modulation,
			this.y + levelMic*this.rowIndex*modulation,
			this.width,
			this.height);
		
		//context.rect(this.x,this.y,this.width,this.height);
		//context.stroke();
	}
}
