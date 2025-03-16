import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
const [Person,Setperson]=useState([{fullname:"Mohamed amin",bio:"tunisia",imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/250px-Lionel_Messi_20180626.jpg",profession:"doctor"}])
 const[show,Setshow]=useState(false)
return (
  <div>
    <button onClick={()=>Setshow(!show)}>show profile</button>
    {show && (
      <div>
        {Person.map((p,i)=>(
          <div key={i}>
          <h1>{p.fullname}</h1>
          <h1>{p.bio}</h1>
<img src={p.imgSrc} width={200} height={200}/>
          <h1>{p.fullname}</h1>
          </div>
          
        ))}
          </div>
    )}
  </div>
  )
}

export default App
