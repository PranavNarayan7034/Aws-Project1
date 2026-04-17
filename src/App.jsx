import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {

  const [data, setDate] = useState()

  useEffect(() => {
    axios.get('http://35.154.221.173/api/test')
      .then(response => {
        console.log("Api response from backend", response.data)
        setDate(response.data.message)
      })
      .catch(error => {
        console.log("Error in api call :", error)
      })
  }, [])

  return (
    <div className='page'>
      <h1 className='head'>Welcome to My application</h1>
      <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet error beatae nobis sequi aut, est quod ex harum perferendis alias enim, nam nisi. Magni, fugiat voluptates. Harum, fugiat obcaecati.
        Quibusdam officia officiis delectus veniam ad libero laudantium aliquam aliquid assumenda modi doloribus dolorem dignissimos dolores molestiae adipisci enim harum aut, soluta natus neque provident voluptate iste. Quia, voluptatum. Beatae?</p>
      <div className='btns'>
        <button>Explore More</button>
        <button>Connect Us</button>
      </div>
      <h2>From backend : {data}</h2>
    </div>
  )
}

export default App