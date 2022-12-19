import React,{useState,useEffect,useRef} from 'react'
import styles from './AddNewJoke.module.css'
 import { useDataStore } from '../hooks/useDataStore'
import {ReactComponent as Border} from '../../src/assets/Border.svg';
 export default function AddNewJoke() {

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
  const animate=()=>{
    document.querySelector('#alert').style.transform='translate(-50%,0%)'
    document.querySelector('#alert').style.top='0%'
    document.querySelector('#alert').style.opacity='1'

   setTimeout(()=>{
    document.querySelector('#alert').style.transform='translate(-50%,-100%)'
    document.querySelector('#alert').style.top='-100%'
    document.querySelector('#alert').style.opacity='0'


   },1500)
  }
  
  
  
 
  useEffect(()=>{
  console.log('scroll changed')
    if(response.isPending){
      animate()

    }
  },[response.isPending])

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
    <br/>
     <h1 id='alert' className={styles.alert}>your joke was added</h1>


    
    </>
     
   )
 }
 