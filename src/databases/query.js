export const querys = {
    getDispositivos : 'select * from Dispositivos',
    createDispositivo : "insert into Dispositivos(Nombre_Equipo,ADDR,Timestamp) values(@Nombre,@AD,@Time)",
    getID : 'select * from Dispositivos where id = @id',
    DeleteID : 'Delete from Dispositivos where id = @id',
    getTtotal : 'select count(*) from Dispositivos',
    UpdateDispositivos : 'Update Dispositivos set Nombre_Equipo = @Nombre, ADDR = @AD, Timestamp = @Time  where id = @id '
}