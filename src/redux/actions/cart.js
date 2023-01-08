const AddCartItem = (item) => {
    return{
        type: 'ADD_ITEM',
        payload: item,
    }
};

const DecreaseCartItem = (item) => {
    return {
        type: 'REMOVE_ITEM',
        payload: item,
    }
}

const DeleteCartItem = (item) => {
    return {
        type: 'DELETE_ITEM',
        payload: item,
    }
}


export { AddCartItem, DeleteCartItem, DecreaseCartItem };