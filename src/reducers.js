import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch(action.type){
    
    case 'add' : {
      const copyState = [...state, {name :action.name}]
      return copyState;
    }
  }
};

export default reducer;
