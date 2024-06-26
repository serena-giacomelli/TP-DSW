import { Repository } from "../shared/repository.js";
import { Usuario } from "./usuarios.entity.js";

const usuarios= [
    new Usuario(
        'Serena', 
        'Giacomelli', 
        "45638062", 
        "2004-06-04", 
        "sere22giacomelli@gmail.com"),
  
    new Usuario(
        'Sofia', 
        'Coppari', 
        "44658779", 
        "2004-03-25", 
        "sofia@gmail.com"),
    ]

export class UsuarioRepository implements Repository<Usuario>{

    public findAll(): Usuario[] | undefined{
        return usuarios;

    }

    public findOne(item: {dni:string; }): Usuario | undefined{
        return usuarios.find((usuario) => usuario.dni === item.dni)
    }

    public add(item: Usuario): Usuario | undefined {
        usuarios.push(item)
        return item
    }

    public update(item: Usuario): Usuario | undefined {
        const usuarioIdx = usuarios.findIndex((usuario) => usuario.dni === item.dni)
    if(usuarioIdx !== -1){
       usuarios[usuarioIdx] = {...usuarios[usuarioIdx], ...item}     
    }
    return usuarios[usuarioIdx]
}

public delete(item: { dni:string; }): Usuario | undefined {
    const usuarioIdx = usuarios.findIndex((usuario) => usuario.dni === item.dni)

    if(usuarioIdx !== -1){
        const deletedUsuarios = usuarios[usuarioIdx]
        usuarios.splice(usuarioIdx, 1)
        return deletedUsuarios
    }
}

}