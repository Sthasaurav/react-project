import * as React from 'react';
import { useState } from 'react';

function App() {
    const[length, setLength]=useState(8)
    const [numberAllowed, setNumberAllowed]=useState(0)
    const[charAllowed,setCharAllowed]=useState(false)
    const [password,setPassword]=useState("")
 const passwordGenerator=()=>{

 }

return (
<>
<h1 className='text-black text-4xl text-center p-10 text'>Number</h1>
</>
)
}
export default App;
