const stateBurger = {
    burger: [{name:'salad',amount:1,gia: 10000},{name:'cheese',amount:1,gia: 20000},{name:'beef',amount:1,gia: 55000}],
    // burgerImg: { salad: 1, cheese: 1, beef: 1 }, 
    // menu: { salad: 10, cheese: 20, beef: 55 },
    // total: 85

}

const burgerReducer = (state = stateBurger, action) => {
    switch (action.type) {
        case 'TANG_GIAM_SL': {
            let burgerCapNhat = [...state.burger];
            let index = burgerCapNhat.findIndex(thanhPhan => thanhPhan.name === action.name)
            if(index !== -1 && burgerCapNhat[index].amount!== -1){
                burgerCapNhat[index].amount += action.number;
                if(burgerCapNhat[index].amount === -1){
                    burgerCapNhat[index].amount = 0;
                }
            }
            state.burger = burgerCapNhat;


            return { ...state }
        }
        default: return { ...state }
    }
}

export default burgerReducer;