// this is the function to validate the game completion
function F_Validator( l_Ctx )
{
	for ( var i = 0; i < g_NumberOfSquares; i++ )
	{
		// this part will validate rows
		if( i % 3 == 0 )
		{
			if ( (g_goSquareArray[i].owner == 0 && g_goSquareArray[i + 1].owner == 0 && g_goSquareArray[i + 2].owner == 0 ) || ( g_goSquareArray[i].owner == 1 && g_goSquareArray[i + 1].owner == 1 && g_goSquareArray[i + 2].owner == 1 ) && g_goSquareArray[i].owner != -1)
			{
				//F_PrintWinnerMessage( g_goSquareArray[i].owner );
				g_Winner = g_goSquareArray[i].owner;

				l_Ctx.strokeStyle = "White";
				l_Ctx.beginPath();
				l_Ctx.lineWidth = "6";

				l_Ctx.moveTo( g_goSquareArray[i].PosX + g_goSquareArray[i].width / 2, g_goSquareArray[i].PosY + g_goSquareArray[i].height / 2);
				l_Ctx.lineTo( g_goSquareArray[i + 2].PosX + g_goSquareArray[i + 2].width / 2, g_goSquareArray[i + 2].PosY + g_goSquareArray[i + 2].height / 2);
				l_Ctx.stroke();
				g_StrState = "Completed";
			}
		}

		// this part will validate columns
		if( i < 3 )
		{
			if ( (g_goSquareArray[i].owner == 0 && g_goSquareArray[i + 3].owner == 0 && g_goSquareArray[i + 6].owner == 0 ) || ( g_goSquareArray[i].owner == 1 && g_goSquareArray[i + 3].owner == 1 && g_goSquareArray[i + 6].owner == 1 ) && g_goSquareArray[i].owner != -1)
			{
				//F_PrintWinnerMessage( g_goSquareArray[i].owner );
				g_Winner = g_goSquareArray[i].owner;

				l_Ctx.strokeStyle = "White";
				l_Ctx.beginPath();
				l_Ctx.lineWidth = "6";

				l_Ctx.moveTo( g_goSquareArray[i].PosX + g_goSquareArray[i].width / 2, g_goSquareArray[i].PosY + g_goSquareArray[i].height / 2);
				l_Ctx.lineTo( g_goSquareArray[i + 6].PosX + g_goSquareArray[i + 6].width / 2, g_goSquareArray[i + 6].PosY + g_goSquareArray[i + 6].height / 2);
				l_Ctx.stroke();
				g_StrState = "Completed";
			}
		 }

		// this part will validate the top left to bottom right diagonal
		if( i == 0 )
		if ( (g_goSquareArray[i].owner == 0 && g_goSquareArray[i + 4].owner == 0 && g_goSquareArray[i + 8].owner == 0 ) || ( g_goSquareArray[i].owner == 1 && g_goSquareArray[i + 4].owner == 1 && g_goSquareArray[i + 8].owner == 1 ) && g_goSquareArray[i].owner != -1)
		{
			//F_PrintWinnerMessage( g_goSquareArray[i].owner );
			g_Winner = g_goSquareArray[i].owner;

			l_Ctx.strokeStyle = "White";
			l_Ctx.beginPath();
			l_Ctx.lineWidth = "6";

			l_Ctx.moveTo( g_goSquareArray[i].PosX + g_goSquareArray[i].width / 2, g_goSquareArray[i].PosY + g_goSquareArray[i].height / 2);
			l_Ctx.lineTo( g_goSquareArray[i + 8].PosX + g_goSquareArray[i + 8].width / 2, g_goSquareArray[i + 8].PosY + g_goSquareArray[i + 8].height / 2);
			l_Ctx.stroke();
			g_StrState = "Completed";
		}

		// this part will validate the bottom left to top right diagonal
		if ( i == 2 )
		if ( (g_goSquareArray[i].owner == 0 && g_goSquareArray[i + 2].owner == 0 && g_goSquareArray[i + 4].owner == 0 ) || ( g_goSquareArray[i].owner == 1 && g_goSquareArray[i + 2].owner == 1 && g_goSquareArray[i + 4].owner == 1 ) && g_goSquareArray[i].owner != -1)
		{
			//F_PrintWinnerMessage( g_goSquareArray[i].owner );
			g_Winner = g_goSquareArray[i].owner;
			l_Ctx.strokeStyle = "White";
			l_Ctx.beginPath();
			l_Ctx.lineWidth = "6";

			l_Ctx.moveTo( g_goSquareArray[i].PosX + g_goSquareArray[i].width / 2, g_goSquareArray[i].PosY + g_goSquareArray[i].height / 2);
			l_Ctx.lineTo( g_goSquareArray[i + 4].PosX + g_goSquareArray[i + 4].width / 2, g_goSquareArray[i + 4].PosY + g_goSquareArray[i + 4].height / 2);
			l_Ctx.stroke();
			g_StrState = "Completed";
		}
	}
}

function F_PrintWinnerMessage( l_Winner )
{
	switch ( l_Winner )
	{
		case 0:
			console.log("p1 wins");
			g_Ctx.fillStyle = "red";
			g_Ctx.fillText("Player One Won" , 120, 300);
			break;

		case 1:
			console.log("p2 wins");
			g_Ctx.fillStyle = "blue";
			g_Ctx.fillText("Player Two Won" , 120, 300);
			break;
	}
}
