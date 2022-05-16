import { toast } from 'react-toastify';

const initalState = {
    Cart: localStorage.getItem('Content') ? JSON.parse(localStorage.getItem('Content')) : [],
};


const Shopingcart = (state = initalState, action) => {

    localStorage.setItem('Content', JSON.stringify(state.Cart))


    switch (action.type) {

        case "ADD_PRODUCT":
            const present = state.Cart.findIndex((items) => items.id == action.payload.id)
            if (present >= 0) {
                const updateadd = state.Cart.map((items) => {
                    if (items.id === action.payload.id) {
                        let cur = items.qnt
                        if (cur >= 5) {
                            toast.success('Not more than 5 items', {
                                position: "top-left",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                            return {
                                ...items,
                                qnt: cur
                            }
                        }
                        toast('Increase Quantity', {
                            position: "top-left",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        return {
                            ...items,
                            qnt: cur + 1
                        }

                    }
                    return items;
                })
                return {
                    ...state,
                    Cart: updateadd
                }

            }
            toast('Items added', {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return {
                ...state,
                Cart: [...state.Cart, action.payload]
            };

        case "REMOVE":
            const data = state.Cart.filter((items) => items.id != action.payload)
            toast('Product removed', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return {
                ...state,
                Cart: data
            }



        case "INC_QNT":
            const updateadd = state.Cart.map((items) => {
                if (items.id === action.payload) {
                    let cur = items.qnt
                    if (cur >= 5) {
                        toast.success('Not more than 5 items', {
                            position: "bottom-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        return {
                            ...items,
                            qnt: cur
                        }
                    }
                    return {
                        ...items,
                        qnt: cur + 1
                    }

                }
                return items;
            })
            return {
                ...state,
                Cart: updateadd
            }


        case "DEC_QNT":
            const updatedec = state.Cart.map((items) => {
                if (items.id == action.payload) {
                    let cur = items.qnt;
                    if (cur <= 1) {
                        toast.error('Negative value not allowed', {
                            position: "bottom-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        return {
                            ...items,
                            qnt: cur
                        }
                    }
                    return {
                        ...items,
                        qnt: cur - 1
                    }

                }
                return items;
            })
            return {
                ...state,
                Cart: updatedec
            };

        case "Clear":
            return {
                ...state,
                Cart: []
            }


        default: return state;
    };

};
export default Shopingcart;