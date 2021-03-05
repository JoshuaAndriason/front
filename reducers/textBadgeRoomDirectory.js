export default function(textBadgeRoomDirectory = '', action) {
    if(action.type == 'saveBadge') {
        return action.textBadgeRoomDirectory;
    } else {
        return textBadgeRoomDirectory;
    }
}
