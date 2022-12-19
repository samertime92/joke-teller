import React ,{createContext} from 'react'
import { useCollection2 } from '../hooks/useCollection2'

//this page was not nneeded but still is a showcase of use context in react 
export const FavouriteJokesContext= createContext()


export const FavouriteJokesProvider=({children})=> {

 const {favJokes}=useCollection2('favCollection')
 setTimeout(()=>{
  console.log(favJokes)

 },2000)
  return (
    <FavouriteJokesContext.Provider value={favJokes}>
      {children}
    </FavouriteJokesContext.Provider>
      
    
  )
}

