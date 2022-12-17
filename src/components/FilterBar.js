import React ,{useRef} from 'react'
import styles from './FilterBar.module.css'
export default function FilterBar({filterer}) {
  const query  = useRef('')
  let type = useRef('')

  const fun=(type)=>{
    filterer(query.value=type)
    document.querySelector(`#food`).style.background='none'
      document.querySelector(`#programming`).style.background='none'
      document.querySelector(`#general`).style.background='none'
      document.querySelector(`#new`).style.background='none'


    setTimeout(()=>{
      document.querySelector(`#${type}`).style.background='rgb(62, 255, 62)'
      
    },100)
  setTimeout(()=>{
    document.querySelector(`#${type}`).style.background=' none'
  },200)

  setTimeout(()=>{
    document.querySelector(`#${type}`).style.background='rgb(62, 255, 62)'
  },300)
  setTimeout(()=>{
    document.querySelector(`#${type}`).style.background='none'
  },400)
  setTimeout(()=>{
    document.querySelector(`#${type}`).style.background='rgb(62, 255, 62)'
  },500)
}






  return (
    <div className={styles['filter-bar']}>
       <button id='general' onClick={()=>fun(type='general')}>general</button>
       <button id='food' onClick={()=>fun(type='food')}>food</button>
       <button id='programming' onClick={()=>fun(type='programming')}>programming</button>
       <button id='new' onClick={()=>fun(type='new')}>new</button>

    </div>
  )
}
