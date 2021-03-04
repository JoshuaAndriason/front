export default function(idRoomDirectory = '', action) {
    if(action.type == 'saveRoomDirectoryId') {
        return action.idRoomDirectory;
    } else {
        return idRoomDirectory;
    }
}
console.log(idRoomDirectory)