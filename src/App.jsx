
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('button clicked');
  }
  const handleClick2=()=>{
    alert('button clicked')

    

    }
    const addToFive =(num)=>{
      alert ('button clicked')
    }
     
  

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>




      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click2</button>

      <button onClick={()=>{alert ('button clicked')}}>click3</button>
      <button onClick={()=>{alert ('4th btn clicked')}} > click 4</button>
      <button onClick={()=>addToFive(3)}>click5</button>
      
      
      
      
    </>
  )
}

export default App
