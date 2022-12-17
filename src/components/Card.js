import React,{useState,useEffect} from 'react'
import styles from './Card.module.css'
import {ReactComponent as Shuffle} from '../../src/assets/Shuffle.svg';
import {ReactComponent as Visible} from '../../src/assets/Visible.svg';



export default function Card({joke,handleRandomClick,newJokesQuery,addedJoke}) {
    //  const [newJokesTriggered,setNewJokesTriggered]=useState(false)
    let randomBtnClicked =true
    const flip =()=>{
    document.querySelector('#card-container').style.transition='0.5s'
    document.querySelector('#card-container').style.transform='rotateY(10deg)rotateX(0deg)scale(0.85)'
    document.querySelector('#card-container').style.boxShadow='0px 0px 0px rgba(0, 0, 0, 0.51)'
    document.querySelector('#card-container').style.border='rgb(8, 254, 123) solid 10px'
    document.querySelector('#card-container').style.background='rgb(255, 255, 255)'
    document.querySelector('#card-container').style.color='rgb(0, 0, 0)'
    document.querySelector('#punch-line-box').style.transition='0.3s'
    setTimeout(()=>{
        document.querySelector('#punch-line-box').style.opacity=1
    document.querySelector('#control-btns').style.transform='translate(-50%,60%)scale(1.2)'

    },450)
    setTimeout(()=>{
    document.querySelector('#control-btns').style.transform='translate(-50%,60%)scale(1)'

    document.querySelector('#punch-line-box').style.top='-15px'
    },550)
   
    }


    const randomBtnFunctions =()=>{
        handleRandomClick(randomBtnClicked)
        document.querySelector('#punch-line').style.filter='blur(7px)'
        document.querySelector('#next-joke-btn').style.background='white'
        setTimeout(()=>{
            document.querySelector('#punch-line-box').style.opacity=0
            document.querySelector('#card-container').style.transform='rotateY(170deg)rotateX(0deg)scale(0.5)'
            document.querySelector('#card-container').style.boxShadow='10px 120px 5px rgba(0, 0, 0, 0.542)'
            document.querySelector('#card-container').style.border='rgb(110, 110, 110) solid 10px'
            document.querySelector('#card-container').style.background=' rgb(72, 73, 72'
            document.querySelector('#card-container').style.color='rgb(72, 73, 72)'
            document.querySelector('#next-joke-btn').style.background='initial'

        },550)
       setTimeout(() => {
        flip()
       }, 1000);
    
    
        }
        const reveal=()=>{
            document.querySelector('#punch-line').style.filter='blur(0)'
     document.querySelector('#reveal-btn').style.background='white'
        setTimeout(()=>{
            document.querySelector('#reveal-btn').style.background='initial'

        },400)
        }

        if(newJokesQuery){
          joke=addedJoke
          console.log(joke)
          
         }

    useEffect(()=>{

    

    },[newJokesQuery,joke])
    if (joke===null){

        
    }
     else {
       return (


    
  <div onClick={()=>flip()}  className={styles['perspective-div']}>
    <div id='card-container' className={styles['card-container']}>
    
      <h1 className={styles.setup} >{joke.setup} </h1>

      <div id='punch-line-box'  className={styles['punch-line-box']}>
        <h1 id='punch-line' className={styles['punch-line']}>{joke.punchline} </h1>
      </div>

      <div id='control-btns'  className={styles['control-btns']}>
         <div id='reveal-btn' onClick={()=>reveal()}  className={styles['reveal-btn']}>
           <Visible className={styles['eye-icon']} />

         </div>
         <div id='next-joke-btn'  onClick={()=>{randomBtnFunctions()}} className={styles['next-joke-btn']}>
           <Shuffle />

         </div>
         
     </div>


    

    </div>
    
    
</div>
  )
  
}
}