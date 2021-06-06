function C_Square( l_PosX, l_PosY, l_Color)
{
	this.PosX = l_PosX;
	this.PosY =  l_PosY;
	this.Color = l_Color;
	this.width = 150;
	this.height = 75;
	
	this.M_Check = function (l_Ctx)
	{
		l_Ctx.fillStyle = "Black";
		l_Ctx.fillRect(this.PosX, this.PosY, this.width, this.height);
	}
}
