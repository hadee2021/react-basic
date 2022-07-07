import './App.css'
import Box from './components/Box'
function App() {
  const arr = [
    {name: '지수', num: 1},
    {name: '나연', num: 2},
    {name: '수지', num: 3}
  ]
  return (
    <div>
      {arr.map((x,index) => {
        return <Box key={index} num={x.num} name={x.name}/>
      })}
      
    </div>
  )
}

export default App
