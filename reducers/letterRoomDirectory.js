export default function(letterRoomDirectory = '', action) {
    if(action.type == 'saveLetter') {
        return action.letterRoomDirectory;
    } else {
        return letterRoomDirectory;
    }
}
