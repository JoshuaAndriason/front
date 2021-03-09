export default function(badgeRoomDirectory = '', action) {
    if(action.type == 'saveBadge') {
        return action.badgeRoomDirectory;
    } else {
        return badgeRoomDirectory;
    }
}
