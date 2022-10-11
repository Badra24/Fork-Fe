const initialState = {
    category: "",
    filter: "",
    order: "",
    orderby: "",
    datefrom : "",
    dateto :"",
    offset: 0,
    banner: true,
  };

  const filterReducer = (state = initialState, action) => {
    if (action.type === "SET_FILTER") {
      return {
        category: action.payload.category,
        filter: action.payload.filter,
        order: action.payload.order,
        orderby: action.payload.orderby,
        datefrom :action.payload.datefrom, 
        dateto : action.payload.dateto, 
        offset: action.payload.offset,
        banner: action.payload.banner,
      };
    }
    if (action.type === "UNSET_FILTER") {
      return initialState;
    }
    return state;
  };
  
  export default filterReducer;
  