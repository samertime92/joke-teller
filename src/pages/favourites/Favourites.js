import React ,{useContext} from 'react'
import { FavouriteJokesContext } from '../../context/FavouriteJokesContext'
import styles from './Favourites.module.css'
import {ReactComponent as PacLogo} from '../../../src/assets/PacLogo.svg';
  


// this page is just to showcase the use of react context by wrapping the app with it and connecting this page to the database 
//  its also a showcase  for listing items or an array of items with keys from 

 
export default function Favourites() {
    const favJokes =useContext(FavouriteJokesContext)

  return (
    
    <div className={styles.container}>
        
        {favJokes&&<h1 className={styles.title}> favourites {favJokes.length}<br/>here sits   the jokes that you liked  in the main page </h1>}

      <div className={styles.lister}>
        {favJokes&&favJokes.map((favJoke)=>(
            <div className={styles.listo} key={favJoke.id}>
                <h1>{favJoke.setup}</h1>
                <br/>
                <h1>{favJoke.punchLine}</h1>

         </div>

        ))}

      </div>
      <PacLogo className={styles.logo} />
      <h2 className={styles.titles2}> ©copyrights reserved 2022</h2>

    </div>
  )
}
