export default function(idRoomDirectoryLetter = '', action) {
    if(action.type == 'saveRoomDirectoryId') {
        return action.idRoomDirectoryLetter;
    } else {
        return idRoomDirectoryLetter;
    }
}