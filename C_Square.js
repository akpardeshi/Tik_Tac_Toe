// this is the class to make square
function C_Square1(l_PosX, l_PosY, l_Color ){
	this.PosX = l_PosX;
	this.PosY = l_PosY;
	this.Color = l_Color;
	this.width = 140;
	this.height = 140;
	this.owner = -1;
	this.CircleStartingAngle = 0;
	this.CircleEndingAngle = 360;
	this.Radius = 50;
	this.DistanceForLines = 30;
	this.BoolIsLocked = false;
	
	this.M_DrawSquare = function( l_Ctx )
	{
		l_Ctx.fillStyle = 'black';
		l_Ctx.fillRect( this.PosX, this.PosY, this.width, this.height);
		l_Ctx.strokeStyle = "White";
		l_Ctx.lineWidth = "4";
		l_Ctx.strokeRect( this.PosX, this.PosY, this.width, this.height);
	}
	
	this.M_DrawOnSquare  =  function ( l_Ctx )
	{
		switch( this.owner )
		{
			case 0:
				// if the square has player one as the owner is should draw a circle
				l_Ctx.strokeStyle = "red";
				l_Ctx.beginPath();
				l_Ctx.lineWidth = "8";
				l_Ctx.arc(this.PosX + this.width / 2, this.PosY + this.height / 2, this.Radius, this.CircleStartingAngle, this.CircleEndingAngle );
 				l_Ctx.stroke();
				break;
				
			case 1:
				// if the square has player one as the owner is should draw a cross
				// this code will draw first line
				l_Ctx.strokeStyle = "blue";
				l_Ctx.beginPath();
				l_Ctx.lineWidth = "8";
				l_Ctx.moveTo( this.PosX + this.DistanceForLines, this.PosY + this.DistanceForLines );
				l_Ctx.lineTo( this.PosX + this.width - this.DistanceForLines, this.PosY + this.height - this.DistanceForLines );
				l_Ctx.stroke();
				
				// this code will draw second line
				l_Ctx.strokeStyle = "blue";
				l_Ctx.beginPath();
				l_Ctx.lineWidth = "8";
				l_Ctx.moveTo( this.PosX + this.DistanceForLines, this.PosY  + this.height - this.DistanceForLines );
				l_Ctx.lineTo( this.PosX + this.width - this.DistanceForLines, this.PosY  + this.DistanceForLines );
				l_Ctx.stroke();
				break;
		}
	}
}

// this function will create the squares on the grid 
function F_CreateSquares( l_LoopCounter, l_StartingPosX, l_StartingPosY)
{
	var l_SquareArray = new Array(l_LoopCounter);
	var l_PosX = l_StartingPosX ;
	var l_PosY = l_StartingPosY ;
	var l_Difference = 150;
	
	for ( var i =0; i < l_LoopCounter; i++)
	{
		if( i % 3 == 0 && i > 0)
		{
		    l_PosX = l_StartingPosX;
			l_PosY += l_Difference;
		}
		
		else
		{
			if(i > 0)
			{
				l_PosX += l_Difference;
			}
		}
		
		l_SquareArray[i] = new C_Square1(l_PosX, l_PosY, "Black");
	}
	
	return l_SquareArray;
}

// this function will draw the squares
// this function is supposed to called in game loop
function F_DrawSquares( l_LoopCounter )
{
	for ( var i = 0; i < l_LoopCounter; i++)
	{
		g_goSquareArray[i].M_DrawSquare(g_Ctx);
		g_goSquareArray[i].M_DrawOnSquare(g_Ctx);
	}
}