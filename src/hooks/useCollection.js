import { useEffect,useState,useRef } from "react"
import { dataStore } from "../firebase/config"

export const useCollection=(collection,id)=>{
    const [jokes,setJokes]=useState(null)
    const [error,setError]=useState(null)

useEffect(()=>{

    let ref =dataStore.collection(collection).doc(id)
console.log(ref)
    
    const unsubscribe=ref.onSnapshot((doc)=>{
        if(doc.data()){
      setJokes({...doc.data(),id:doc.id})
      setError(null)
        }
        else {
            setError('that document does not exist') 
          }

        
    },(error)=>{
        setError('couldnot retrive the data')
    })
    return ()=> unsubscribe()
},
[collection])

return {jokes ,error}
}