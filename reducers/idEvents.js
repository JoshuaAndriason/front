export default function(idEvent = '', action) {
    if(action.type == 'saveEventId') {
        return action.idEvent;
    } else {
        return idEvent;
    }
}