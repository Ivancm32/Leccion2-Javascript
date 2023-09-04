export const querys = {
    getDispositivos : 'select * from Dispositivos',
    createDispositivo : "insert into Dispositivos(Nombre_Equipo,ADDR,Timestamp) values(@Nombre,@AD,@Time)",
    getID : 'select * from Dispositivos where id = @id',
    DeleteID : 'Delete from Dispositivos where id = @id',
    getTtotal : 'select count(*) from Dispositivos',
    UpdateDispositivos : 'Update Dispositivos set Nombre_Equipo = @Nombre, ADDR = @AD, Timestamp = @Time  where id = @id ',
    cantidadEncuestas : 'SELECT n_encuesta FROM [Encuesta_javascript].[dbo].[Historial_de_encuesta] order by n_encuesta desc',
    insertaEncuesta :  `insert into Encuesta_javascript.dbo.Historial_de_encuesta([N_encuesta],[NPersonaEncuesta],[ID_Genero],
    [ID_TipoComida],[ID_ComidaChatarra],[ID_ComidaSana],[fecha]) values(@Nencuesta,@NPE,@genero,@TComida,@CCha,@CSan,@Fecha)`
}

        