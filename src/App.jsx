  import { useState } from 'react'
  import './App.css'

  function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
      setInput(input + value);
    };

    const clearInput = () => {
      setInput('');
      setResult('');
    };

    const calculateResult = () => {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    };

    const deletevalue=()=>{
      setInput(input.slice(0,-1))
    }

    return (
      <>
      <div style={{height:"100vh",width:"100%"}} className="d-flex justify-content-center align-items-center flex-wrap">
        <div className="bg-secondary-subtle p-4" style={{width:"350px"}}>
          <h5 className='fs-2 fw-bold'>Calculator</h5>
      <div className="bg-light rounded">
        <input name='result' placeholder='0' value={result?result:input} className='w-100 p-2 rounded text-end fs-3' readOnly type="text" />
        
      </div>
      <div className='d-flex mb-3 justify-content-between mt-3'>
        <button onClick={clearInput} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>C</button>
        <button onClick={()=>handleClick("0")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>0</button>
        <button onClick={()=>handleClick(".")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>.</button>
        <button onClick={()=>handleClick("/")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'><i class="fa-solid fa-divide"></i></button>

      </div>
      <div className='d-flex mb-3 justify-content-between mt-3'>
        <button onClick={()=>handleClick("7")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>7</button>
        <button onClick={()=>handleClick("8")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>8</button>
        <button onClick={()=>handleClick("9")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>9</button>
        <button onClick={()=>handleClick("*")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>x</button>

      </div>
      <div className='d-flex mb-3 justify-content-between mt-3'>
        <button onClick={()=>handleClick("4")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>4</button>
        <button onClick={()=>handleClick("5")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>5</button>
        <button onClick={()=>handleClick("6")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>6</button>
        <button onClick={()=>handleClick("-")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>-</button>

      </div>
      <div className='d-flex mb-3 justify-content-between mt-3'>
        <button onClick={()=>handleClick("1")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>1</button>
        <button onClick={()=>handleClick("2")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>2</button>
        <button onClick={()=>handleClick("3")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>3</button>
        <button onClick={()=>handleClick("+")} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>+</button>

      </div>
      <div className='d-flex mb-3 justify-content-between mt-3'>
        <button onClick={clearInput} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>AC</button>
        <button onClick={deletevalue} style={{width:"70px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'><i class="fa-solid fa-delete-left"></i></button>
        
        <button onClick={calculateResult} style={{width:"145px",height:"60px"}} className='btn btn-dark p fw-bold fs-5'>=</button>

      </div>
        </div>
      </div>
      </>
    )
  }

  export default App
