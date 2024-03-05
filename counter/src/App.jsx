import {useState} from "react";
import './App.css'

function App()
{
const [c, setCount]=useState(0)

function add()
{
setCount(c+1)
}
return  (
<div className="counter">
<p>
count:{c}</p>
<button onClick={add}>+</button>
<button onClick={()=>setCount(c-1)}>-</button>
</div>


)

}
export default App;
