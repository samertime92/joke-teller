import { useEffect,useState,useRef } from "react"
import { dataStore } from "../firebase/config"

export const useCollection2=(collection)=>{
    const [newJokes,setNewJokes]=useState(null)
    const [error2,setError2]=useState(null)

useEffect(()=>{

    let ref =dataStore.collection(collection)
console.log(ref)
    
    const unsubscribe=ref.onSnapshot((snapshot)=>{
        let results=[]
        snapshot.docs.forEach(doc => {
            results.push({...doc.data(),id:doc.id})
            
        });
      setNewJokes(results)
      setError2(null)
        
        

        
    },(error)=>{
        setError2('couldnot retrive the data')
    })
    return ()=> unsubscribe()
},
[collection])

return {newJokes ,error2}
}