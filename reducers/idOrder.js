export default function(idOrder = '', action) {
    if(action.type == 'saveOrderId') {
        return action.idOrder;
    } else {
        return idOrder;
    }
}