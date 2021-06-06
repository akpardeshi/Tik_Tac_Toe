function C_Text( l_Text, l_PosX, l_PosY )
{
	this.Text = l_Text;
	this.PosX = l_PosX;
	this.PosY = l_PosY;
	this.IsActive = false;
	
	this.M_DrawText = function ( l_Ctx ) 
	{
		if(this.IsActive)
		{
			l_Ctx.font = "bold 48 serif";
			l_Ctx.fillStyle = "Black";
			l_Ctx.fillText( this.Text, this.PosX, this.PosY );
		}
	}
}