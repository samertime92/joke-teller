import React,{useState} from 'react'
import styles from './AddNewJoke.module.css'
 import { useDataStore } from '../hooks/useDataStore'
import {ReactComponent as Border} from '../../src/assets/Border.svg';
 export default function AddNewJoke() {

  const [type, setType]=useState('general')
  const [setup, setSetup]=useState('')
  const [punchline, setPunchLine]=useState('')
  
    
  const {addDoc,response}=useDataStore('addedJokes')
  const handleSubmit=()=>{
    console.log(setup)
    addDoc({
      setup,
      punchline

    })
    setSetup('')
    setPunchLine('')


  }

   return (
    <>
    <h1 className={styles.headers} >we love to hear new jokes</h1>

    <h1  className={styles.headers}> add a new one here</h1>

    <div className={styles.face}>
    <Border/>
    </div>
    <div className={styles.face2}>
    <Border/>
    </div>
   
    <form className={styles.forms} >
         <span> setup </span>
         <input className={styles.space1} required onChange={(e)=>{setSetup(e.target.value)}} value={setup} />
         <span> punchLine</span>
         <input className={styles.space2}  required onChange={(e)=>{setPunchLine(e.target.value)}} value={punchline} />



         

    </form>
    <br/>

    {!response.isPending&&<button onClick={()=>handleSubmit()} className={styles.button} >+</button>}
    {response.isPending&&<button onClick={()=>handleSubmit()} className={styles.button} >;o</button>}

    
    </>
     
   )
 }
 