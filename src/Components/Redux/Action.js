export const add_product = (items) => {
    return {
        type: "ADD_PRODUCT",
        payload: items
    }
};

export const remove_product = (id) => {
    return {
        type: "REMOVE",
        payload: id

    }
}

export const add_qnt = (id) => {
    return {
        type: 'INC_QNT',
        payload: id
    }
}
export const dec_qnt = (id) => {
    return {
        type: "DEC_QNT",
        payload: id
    }

}
export const clear = (items) => {
    return {
        type: "Clear",
        payload: items
    }
}