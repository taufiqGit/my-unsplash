
export default (state, action)=>{
    switch (action.type) {
      case "GET_IMAGE_ALL":
      //  //console.log(action.payload)
      //  let reverseImage = action.payload.reverse()
        return {
          ...state,
          loading: false,
          images: action.payload
        }
      case "ADD_IMAGE":
        //console.log(action.payload)
        return {
          ...state,
          images: [...state.images, action.payload]
        }
      case "DELETE_IMAGE": 
        return {
          ...state,
          images: state.images.filter(image => image._id !== action.payload)
        }
      case "IMAGE_ERROR":
        //console.log(action.payload)
        return {
          ...state,
          error: action.payload
        }
      case "SHOW_ADD":
        return {
          ...state,
          showAdd: action.payload
        }
      case "SEARCH_IMAGE": 
      //console.log(action.payload)
        return {
          ...state,
          error: null,
          images: action.payload
        }
      case "IMAGE_404":
        return {
          ...state,
          images: [],
          error: action.payload
        }
      case "SHOW_DEL":
        return {
          ...state,
          showDel: action.payload
        }
      case "ID_DEL": 
        return {
          ...state,
          idDel: action.payload
        }
      default:
        return state
    }
}