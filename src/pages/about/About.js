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
        test app using react js node and firebase as a backend 
        it shows the joke and filters the joke 
        also it can add new jokes to the database  click new to check them out  

      <br/>
     <br/>
     <br/>


        
      this apps shows usage of react and its hooks useState useEffect  useref ,  reducer ,props, events, and data movement between parents and children and otherwise

      <br/>
     <br/>
     <br/>


        
        
       could add react context to complete the  road map of react   but it doesnt need it because its such a tiny idea

     <br/>
     <br/>
     <br/>


        shows experince in Javascript 
           and  Css from styling to making it responsive for many devices
           </h1>
    </div>
    <h2 className={styles.titles2}> ©copyrights reserved 2022</h2>
   </div>
  )
}
