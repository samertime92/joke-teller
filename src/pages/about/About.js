import React from 'react'
import {ReactComponent as Border} from '../../../src/assets/Border.svg';
import styles from './About.module.css'
export default function About() {
    window.scroll({
        top:0
    })
  return (
    <div>
      <br/>
     

      <Border className={styles.face}/>
    <div className={styles.titles}>
      <h1>
        a test app uses react js , node and firebase as a backend ,
        it lists the jokes and controls the types ,
        also it can add new jokes to the database  and can save existing ones to a favourite collection on a database

      <br/>
     <br/>
     <br/>


        
      this apps shows usage of react and its hooks useState useEffect  useref useContext,  reducer ,props, events, and data movement between parents and children and otherwise

      <br/>
     <br/>
     <br/>


        
        
        shows aswell  experince in Javascript  with  array actions ,dom manipulations , event handelers animation controlers 
           and  Css from styling to  responsiveness for many devices and animations 
           </h1>
    </div>
    <h2 className={styles.titles2}> ©copyrights reserved 2022</h2>
   </div>
  )
}
