const initialState={count:10};
const counterReducer=(state=initialState,actions)=>{
   switch(actions.type){
     case 'INC' : return {count: state.count+actions.payload}
     case 'DEC' : return {count: state.count-actions.payload}
     case 'RESET' : return {count: 0}
     default : return state
   }
}
export default counterReducer