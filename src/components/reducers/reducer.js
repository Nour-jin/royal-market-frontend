import combineReducers from "react-combine-reducers";

export const usersReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      const user = action.payload;
      return {
        user,
        loggedIn: true,
      };
    case "FACK_USER":
      return {
        user: action.payload,
        loggedIn: false,
      };
    case "LOGOUT_USER":
      return action.payload;
    case "PASS_WRONG":
      return action.payload;
    case "EMAIL_WRONG":
      return action.payload;
    case "GET_USER_LOCAL":
      return action.payload;
    default:
      return state;
  }
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "FATCH_SUCCESS":
      return action.payload;
   
    default:
      return state;
  }
};

export const likesReducer = (state , action) => {
  switch (action.type) {
    case "ADD_LIKE":
      console.log("likeProduct", action.payload.likes)
      const hasLike = action.payload.likes.some((item) => item == action.payload.likeProduct);
      console.log("hasLike", hasLike)
      if (hasLike) {
          console.log("state", state)
          return true
        } else {
          return false
        }
    default:
      return state;
  }
};


export const discountsReducer = (state, action) => {
  switch (action.type) {
    case "FATCH_SUCCESS_DISCOUNTS":
      return action.payload;
      case "GET_DISCOUNTS_LOCAL":
        return action.payload;
    default:
      return state;
  }
};

export const recentReducer = (state, action) => {
  switch (action.type) {
    case "RECENT_ITEM":
      const hasItem = state.some((el) => el._id === action.payload._id);
      if (!hasItem) {
        const recent = [...state, action.payload];
        return recent;
      } else {
        return state
      }
    case "GET_RECENT_LOCAL":
      return action.payload;
    case "DELETE_ITEM_RECENT":
      return state.filter((el) => el._id !== action.payload._id);
    default:
      return state;
  }
};


export const watchReducer = (state, action) => {
  switch (action.type) {
    case "WATCH_ITEM":
      const hasItem = state.some((el) => el._id === action.payload._id);
      if (!hasItem) {
        const watch = [...state, action.payload];
        return watch;
      } else {
        return state.filter((el) => el._id !== action.payload._id);
      }
      case "SEARCH_DATA":
        return action.payload;
    case "DELETE_ITEM":
      return state.filter((el) => el._id !== action.payload._id);
    default:
      return state;
  }
};


export const basketReducer = (state = { total: 0, items: [] }, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const hasItem = state.items.some((el) => el._id === action.payload._id);

      if (hasItem) {
        // update item
        const updateItem = state.items.map((el) => {
          if (el._id === action.payload._id) {
            return {
              ...el,
              quantity: el.quantity + action.payload.quantity,
            };
          }
          return el; // <-- return current mapped element if no change
        });
        const totalPrice = totalprice(updateItem);
        return {
          ...state,
          items: updateItem,
          total: totalPrice,
        };
      } else {
        // add item
        const item = [...state.items, action.payload];
        const totalPrice = totalprice(item);
        return {
          ...state,
          items: state.items.concat(action.payload),
          total: totalPrice,
          userId: action.payload.userId,
        };
      }
    case "INCROMENT":
      const updateItems = state.items.map((el) => {
        if (el._id === action.payload._id) {
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });
      const totalsupdateItem = totalprice(updateItems);
      return {
        items: updateItems,
        total: totalsupdateItem,
      };
    case "DECROMENT":
      const updateItemsminus = state.items.map((el) => {
        if (el._id === action.payload._id) {
          if (el.quantity > 1) {
            return { ...el, quantity: el.quantity - 1 };
          }
        }
        return el;
      });
      const totalsupdateItemminus = totalprice(updateItemsminus);
      return {
        items: updateItemsminus,
        total: totalsupdateItemminus,
      };
    case "GET_BASKET_LOCAL":
      console.log("local", action.payload);
      return action.payload;
    case "DELETE_ITEM":
      const deleteiTEM = state.items.filter(
        (el) => el._id !== action.payload._id
      );
      const totalPriceD = totalprice(deleteiTEM);
      return {
        ...state,
        items: deleteiTEM,
        total: totalPriceD,
      };
    default:
      return state;
  }
};

const totalprice = (item) => {
  var totals = 0;
  item.forEach((el) => {
    totals += el.quantity * el.price;
  });
  return totals;
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "FATCH_SUCCESS_ITEM":
      const data = action.payload;
      return {
        ...data,
        quantity: 1,
      };
    case "INCROMENT_ITEM":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DECROMENT_ITEM":
      if (state.quantity > 1) {
        return { ...state, quantity: state.quantity - 1 };
      } else {
        return { ...state, quantity: state.quantity };
      }
    case "DELETE_ITEM":
      return action.payload;
    case "UPDATE_ITEM":
      return action.payload;
    default:
      return state;
  }
};

export const [profileReducer, initialProfile] = combineReducers({
  user: [usersReducer, {}],
  products: [productsReducer, []],
  discounts: [discountsReducer, []],
  watch: [watchReducer, []],
  recent: [recentReducer, []],
  product: [productReducer, []],
  like: [likesReducer, false],
  basket: [basketReducer, { items: [], total: 0 }],
});
