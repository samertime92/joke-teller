import React,{useEffect, useState  } from 'react'
import styles from './Card.module.css'
import {ReactComponent as Shuffle} from '../../src/assets/Shuffle.svg';
import {ReactComponent as Visible} from '../../src/assets/Visible.svg';
import {ReactComponent as Fav} from '../../src/assets/Fav.svg';
import { useDataStore } from '../hooks/useDataStore';


// this page is mainly for card rendering which shows the main joke and list the wanted buttons 


export default function Card({joke,handleRandomClick,newJokesQuery,addedJoke}) {
    let randomBtnClicked =true
    const [favBtn,setFavBtn]=useState(false)
    const [mainBtn,setMainBtn]=useState(false)

    const {addDoc,response}=useDataStore('favCollection')

    const flip =()=>{
    document.querySelector('#hint').style.display='none'
    document.querySelector('#punch-line-box').style.transition='0.3s'
    document.querySelector('#shine').style.display='none'

  const card =document.querySelector('#card-container')
   card.style.animationPlayState='paused'
   card.style.transition='0.5s'
   card.style.transform='rotateY(10deg)rotateX(0deg)scale(0.85)'
   card.style.boxShadow='0px 0px 0px rgba(0, 0, 0, 0.51)'
   card.style.border='rgb(8, 254, 123) solid 10px'
   card.style.background='rgb(255, 255, 255)'
   card.style.color='rgb(0, 0, 0)'
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
      
        setFavBtn(false)

        handleRandomClick(randomBtnClicked)
        document.querySelector('#control-btns').style.left='50%'

        document.querySelector('#punch-line').style.filter='blur(7px)'
        document.querySelector('#next-joke-btn').style.background='white'
        setTimeout(()=>{
            document.querySelector('#punch-line-box').style.opacity=0
            document.querySelector('#next-joke-btn').style.background='initial'
            const card =document.querySelector('#card-container')
            card.style.transform='rotateY(170deg)rotateX(0deg)scale(0.5)'
            card.style.boxShadow='10px 120px 5px rgba(0, 0, 0, 0.542)'
            card.style.border='rgb(110, 110, 110) solid 10px'
            card.style.background=' rgb(72, 73, 72'
            card.style.color='rgb(72, 73, 72)'

        },550)
       setTimeout(() => {
        flip()
       }, 1000);
    
    
        }
        const addToFav=(setup,punchLine)=>{
          setMainBtn(true)

          document.querySelector('#main-btn').style.opacity='0.5'

          const favLine=document.querySelector('#fav-alert')
          const favBtn=document.querySelector('#fav-btn')

          favBtn.style.background='white'

          addDoc({
            setup,punchLine
          })
          favLine.style.transition='0.5s'
          favLine.style.transform='translate(-50%,28%)'
          favLine.style.top='28%'

        setTimeout(()=>{
          favLine.style.transform='translate(-50%,100%)'
          favLine.style.top='100%'
          favBtn.style.background='none'


        },2000)
        setTimeout(()=>{
          favBtn.style.transform='scale(0)'
          document.querySelector('#control-btns').style.left='40%'
          document.querySelector('#main-btn').style.opacity='1'
          setMainBtn(false)


        },2300)


        }
        const reveal=()=>{
            setFavBtn(true)
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
     <>
   <h1 id='hint' className={styles.hint}>click on the card</h1>
    
  <div onClick={()=>flip()}  className={styles['perspective-div']}>

    <div id='card-container' className={styles['card-container']}>
      <div id='shine' className={styles.shine}>
      </div>
    
      <h1 className={styles.setup} >{joke.setup} </h1>
      <h1  id='fav-alert' className={styles['favourite-alert']}>joke added to favourite</h1>


      <div id='punch-line-box'  className={styles['punch-line-box']}>
        <h1 id='punch-line' className={styles['punch-line']}>{joke.punchline} </h1>

      </div>

      <div id='control-btns'  className={styles['control-btns']}>
        {!favBtn&&  <div id='reveal-btn' onClick={()=>reveal()}  className={styles['reveal-btn']}>
           <Visible className={styles['eye-icon']} />

         </div>}
         {favBtn&&<div id='fav-btn' onClick={()=>addToFav(joke.setup,joke.punchline)}  className={styles['reveal-btn']}>
           <Fav className={styles['eye-icon']} />

         </div>}
        {!mainBtn &&<div id='next-joke-btn'   onClick={()=>{randomBtnFunctions()}} className={styles['next-joke-btn']}>
           <Shuffle />

         </div>}
         {mainBtn &&<div id='main-btn'   className={styles['next-joke-btn']}>
           <Shuffle />

         </div>}
         
     </div>


    

    </div>
    
    
</div>
</>
  )
  
}
}