import {useReducer,  useEffect } from "react";
import { dataStore,timestamp } from "../firebase/config";


let initialState ={
    isPending:false,
    error:null,
}
const dataStoreReducer =(state,action)=>{
 switch(action.type){
   case 'IS_PENDING' :
    return {isPending:true ,error:null}
   case 'ADDED'      :
    return {isPending:false,error:null}
   case 'ERROR'      :
    return {isPending:false,error:action.payload,}
    default:
        return state
 }
}
export const useDataStore=(collection)=>{

 const [response , dispatch] = useReducer(dataStoreReducer,initialState)

 const ref= dataStore.collection(collection)

 const addDoc = async (doc)=>{

      dispatch({type:'IS_PENDING'})
    try{
      const createdAt =timestamp.fromDate(new Date())
      const added = await ref.add({...doc,createdAt})

      dispatch({type:'ADDED',payload:added})
    }
    catch (err) {
      console.log(err)
      dispatch({type:'ERROR',payload:err.message})

    }
 }


  useEffect(()=>{


  },[])

  return {addDoc,response}
}