window.addEventListener("mouseup", E_Click);

function E_Click( e )
{
	var e_PosX ;
	var e_PosY ;
	var l_CurrentElement ;

	e_PosX = e.clientX;
	e_PosY = e.clientY;

	if( g_StrState == "Completed"){
		if( e_PosX >= 220 && e_PosY >= 500 && e_PosX < 430 && e_PosY  < 575 ){
			g_Winner = undefined;
			g_StrState = "Running";
		}
	}

	if( g_StrState == "Running" )
	if(e.clientX >= 0 && e.clientX <= 600 && e.clientY >= 0 && e.clientY <= 600 )
	{

		switch( e.button)
		{
			case 0:
				if(g_Turn)
				{

					l_CurrentElement = F_GetCurrentElement( g_goSquareArray, e_PosX, e_PosY);

					if( l_CurrentElement != null )
					{
							if( g_goSquareArray[l_CurrentElement].owner == -1){
								g_goSquareArray[l_CurrentElement].owner = 0;
								g_Turn = !g_Turn;
							}
					}
				}

				else
				{
					console.log("P1 wait for your turn");
				}

				break;

			case 2 :
				if( !g_Turn )
				{
					e_PosX = e.clientX;
					e_PosY = e.clientY;
					l_CurrentElement = F_GetCurrentElement( g_goSquareArray, e_PosX, e_PosY);

					if( l_CurrentElement != null )
					{
							if ( g_goSquareArray[l_CurrentElement].owner == -1 ){
								g_goSquareArray[l_CurrentElement].owner = 1;
								g_Turn = !g_Turn;
							}
					}
				}

				else
				{
					console.log("P2 wait for your turn");
				}

				break;

			default:
				console.log("lol");
				break;
		}
	}

	if ( g_StrState == "Start" )
	{
		switch( e.button )
	{
		case 0 :
			if(e_PosX >= 220 && e_PosY >= 200 && e_PosX < 370 && e_PosY < 275)
			{

				if( g_goStartButton.IsActive )
				{
				   g_goStartButton.IsActive = false;
				   g_goHelpButton.IsActive = false;
				   g_goTitleText.IsActive = false;
				   g_goHelpText.IsActive = false;
				   g_goControlButton.IsActive = false ;
				   g_goBackButton.IsActive = false ;
				   g_goControlText.IsActive = false;
				   g_BoolShouldDisplayControls = false;
				   g_goInstructionButton.IsActive = false;
				   g_StrState = "Running";
				   break ;
				}

				if ( g_goControlButton.IsActive )
				{
				   g_goStartButton.IsActive = false ;
				   g_goHelpButton.IsActive = false ;
				   g_goTitleText.IsActive = false ;
				   g_goHelpText.IsActive = false ;
				   g_goControlButton.IsActive = false ;
				   g_goBackButton.IsActive = true ;
				   g_goControlText.IsActive = true;
				   g_BoolShouldDisplayControls = true;
				   g_goInstructionButton.IsActive = false;
				   break;
				}
			}

			if(e_PosX >= 220 && e_PosY >= 350 && e_PosX < 370 && e_PosY < 425)
			{
				if ( g_goHelpButton.IsActive )
				{
				   g_goStartButton.IsActive = false;
				   g_goHelpButton.IsActive = false;
				   g_goTitleText.IsActive = false;
				   g_goHelpText.IsActive = true;
				   g_goControlButton.IsActive = true;
				   g_goBackButton.IsActive = true;
				   g_goInstructionButton.IsActive = true;
				   break ;
				}

				if ( g_goInstructionButton.IsActive )
				{
				   g_goStartButton.IsActive = false;
				   g_goHelpButton.IsActive = false;
				   g_goTitleText.IsActive = false;
				   g_goHelpText.IsActive = false;
				   g_goControlButton.IsActive = false;
				   g_goBackButton.IsActive = true;
				   g_goInstructionButton.IsActive = false;
					 g_BoolShouldDisplayInstructions = true;
				   g_goInstructionText.IsActive = true;
				   break ;
				}
			}

			if( e_PosX >= 220 && e_PosY >= 500 && e_PosX < 370 && e_PosY  < 575 )
			{
				if ( g_goBackButton.IsActive )
				{
					if( g_goControlText.IsActive || g_goInstructionText.IsActive )
					{
						g_goControlText.IsActive = false;
						g_goStartButton.IsActive = false;
						g_goHelpButton.IsActive = false;
						g_goTitleText.IsActive = false;
						g_goHelpText.IsActive = true;
						g_goControlButton.IsActive = true;
						g_goInstructionButton.IsActive = true;
						g_goInstructionText.IsActive = false;
						g_BoolShouldDisplayInstructions = false;
						g_BoolShouldDisplayControls = false;
						g_goControlText.IsActive = false;
						break;
					}

					if( g_goHelpText.IsActive )
					{
						g_goTitleText.IsActive = true;
						g_goStartButton.IsActive = true;
						g_goHelpButton.IsActive = true;
						g_goHelpText.IsActive = false;
						g_goControlButton.IsActive = false;
						g_goInstructionText.IsActive = false;
						g_goInstructionButton.IsActive = false;
						g_goBackButton.IsActive = false;
						g_BoolShouldDisplayInstructions = false;
						g_BoolShouldDisplayControls = false;
						g_goControlText.IsActive = false;
						break;
					}
				}
			}
	}
	}
}

function F_GetCurrentElement ( l_goSquareArray, l_PosX, l_PosY )
{
	var l_length = l_goSquareArray.length;
	for ( var i = 0 ; i < l_length ; i++ )
	{
		if ( l_PosX > l_goSquareArray[i].PosX && l_PosY > l_goSquareArray[i].PosY && l_PosX <= l_goSquareArray[i].PosX +  l_goSquareArray[i].width && l_PosY <= l_goSquareArray[i].height + l_goSquareArray[i].PosY)
		{
			console.log( i  );
		   return i;
		}
	}

	return null;
}
