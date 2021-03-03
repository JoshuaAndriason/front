export default function(idArticle = '', action) {
    if(action.type == 'saveId') {
        return action.idArticle;
    } else {
        return idArticle;
    }
}