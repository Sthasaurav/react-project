import * as React from 'react';

function App() {
    var x = 10;
    function Favnum() {
        const [update, setupdate] = usestate(0);
       
    
    return (
        <>
            <h1 className='text-white'>Number {update}</h1>
            {/* <button onClick()=>setupdate("20") className='text-white'>Number</button> */}
        </>
    )
}
}
export default App;
