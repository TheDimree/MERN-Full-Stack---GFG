const INC=(data)=>{
    return {type:'INC',payload:data}
}
const DEC=(data)=>{
    return {type:'DEC',payload:data}
}
const RESET=()=>{
    return {type:'RESET'}
}
export {INC,DEC,RESET}