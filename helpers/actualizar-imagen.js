const fs = require('fs'); //para leer archivos y carpetas del filesystem
const Usuario = require('../models/usuario.model');
const Club = require('../models/club.model');

const Entrenador = require('../models/entrenador.model');
const Estadio = require('../models/estadio.model');
const Jugador = require('../models/jugador.model');
const borrarImagen = (path)=>{
    
    if(fs.existsSync(path)){
        //borrar la imagen anterior
        fs.unlinkSync(path);
    }
}

const actualizarImagen = async (tipoColeccion,id, nombreArchivo) =>{
    let pathViejo = '';
    switch (tipoColeccion) {
        case 'clubes':
            const club = await Club.findById(id);
            if(!club){
                console.log('Id de investigador no encontrado');
                return false;
            }
            pathViejo = `./uploads/clubes/${club.img}`;
            borrarImagen(pathViejo);
            //grabando path de la nueva imagen
            club.img = nombreArchivo;
            await club.save();
            return true;
        break;
            
        case 'entrenadores':
            const entrenador = await Entrenador.findById(id);
            if(!entrenador){
                console.log('Id de proyecto no encontrado');
                return false;
            }
            pathViejo = `./uploads/entrenadores/${entrenador.img}`;
            borrarImagen(pathViejo);
            //grabando path de la nueva imagen
            entrenador.img = nombreArchivo;
            await entrenador.save();
            return true;
            
            break;
        case 'usuarios':
            const usuario = await Usuario.findById(id);
            if(!usuario){
                console.log('Id de usuario no encontrado');
                return false;
            }
            pathViejo = `./uploads/usuarios/${usuario.img}`;
            borrarImagen(pathViejo);
            //grabando path de la nueva imagen
            usuario.img = nombreArchivo;
            await usuario.save();
            return true;
            break;
            case 'jugadores':
            const jugador = await Jugador.findById(id);
            if(!jugador){
                console.log('Id de usuario no encontrado');
                return false;
            }
            pathViejo = `./uploads/jugadores/${jugador.img}`;
            borrarImagen(pathViejo);
            //grabando path de la nueva imagen
            jugador.img = nombreArchivo;
            await jugador.save();
            return true;
            break;
            case 'estadios':
            const estadio = await Estadio.findById(id);
            if(!estadio){
                console.log('Id de usuario no encontrado');
                return false;
            }
            pathViejo = `./uploads/estadios/${esatdio.img}`;
            borrarImagen(pathViejo);
            //grabando path de la nueva imagen
            estadio.img = nombreArchivo;
            await estadio.save();
            return true;
            break;
        default:
            break;
    }

}


module.exports = {
    actualizarImagen
}