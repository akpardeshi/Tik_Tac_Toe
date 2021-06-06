function F_ClearCanvas( l_Width, l_Height, l_Ctx)
{
	l_Ctx.clearRect( 0, 0, l_Width, l_Height );
	l_Ctx.fillStyle = "gray";
	l_Ctx.fillRect( 0, 0, l_Width, l_Height );
	l_Ctx.lineWidth =  "4";
	l_Ctx.strokeRect(0, 0, l_Width, l_Height);
}