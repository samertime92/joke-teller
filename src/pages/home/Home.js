import styles from './Home.module.css'
import React , {useEffect,useState} from 'react'
import Card from '../../components/Card'
import FilterBar from '../../components/FilterBar'
import AddNewJoke from '../../components/AddNewJoke'
import { useCollection } from '../../hooks/useCollection'
import { useCollection2 } from '../../hooks/useCollection2'
export default function Home() {

     const {jokes ,error}= useCollection('jokes','B64TqkXHM1dwSMYvblN7')
     const [oneJoke,setOneJoke]=useState(null)
     const[randomBtnClicked,setRandomBtnClicked]=useState(false)
     const [query,setQuery]=useState(null)
     
  //in case of adding a new joke extra excersize 
     const {newJokes  ,error2}= useCollection2('addedJokes')
     const [addedJoke,setAddedJoke]=useState(null)
     const [newJokesTrigger,setNewJokesTrigger]=useState(false)
     //------------------------------
    



     //functions coming from children showcase data movment
     const handleRandomClick=(randomBtnClicked)=>{
        setRandomBtnClicked(randomBtnClicked)
        
     }
     const filterer=(query)=>{
        setQuery(query)
     }
   
     //------------------------------

       
     

    useEffect(() => {
        setRandomBtnClicked(false)

        setTimeout(()=>{
            if(jokes &&query===null){
                setOneJoke(jokes.doc[Math.floor(Math.random()*jokes.doc.length)])
                }
                

                else if(jokes&&query!=='new') {
                  setNewJokesTrigger(false)

                 const filtered =jokes.doc.filter(item=>item.type===query)
                setOneJoke(filtered[Math.floor(Math.random()*filtered.length)])

                
                }
                 else if(jokes&&query==='new'){
                  setAddedJoke(newJokes[Math.floor(Math.random()*newJokes.length)])
                  setNewJokesTrigger(true)
                  console.log(addedJoke.setup)
                 
                }
         },700)

         window.scroll({
            top:0,
            left:0,

         })
                
      
     }, [jokes,randomBtnClicked,query])


  return (

        <div className={styles['card-container']}>
         {error&& <h1>{error}</h1>}


         {!jokes&& <h1 className={styles.loading}>loading ....</h1>}
          
          
         <div id='cards'>
          {jokes && <Card  joke={oneJoke}  handleRandomClick={handleRandomClick} newJokesQuery={newJokesTrigger} addedJoke={addedJoke} />}
         </div>


          <FilterBar  filterer={filterer} />
          <div id='new-jokes' className={styles['add-new-jokes']}>

          <AddNewJoke />
            
          </div>

        </div>
  )
}
