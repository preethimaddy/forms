import './App.css';
import { useState } from 'react';

function App() {
  const[userInfo, setUserInfo] =useState({
    firstName:"",
    lastname:"",
    email:"",
    dob:"",
    gender:"",

  })
console.log(userInfo);
const [prompts, setPrompts] = useState([{
  prompt:"",
  answer:"",
  timestamp: new Date().getTime()
}])
  const handleInput = e =>{
    e.preventDefault();
    const{name, value} = e.target;
    setUserInfo({...userInfo,
      [name]:value    })
    
  }
  const handlePrompt =(e,i)=>{

  }
  const handleAddPrompt = ()=>{
setPrompts([...prompts, {
  prompt:"",
  answer:"",
  timestamp: new Date().getTime()
}])  

  }
  const handleDelete = (i) =>{
    let deletePrompts = [...prompts];
    deletePrompts.splice(i,1);
    setPrompts(deletePrompts);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInfo.firstName || !userInfo.lastname || !userInfo.email) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log(userInfo);
    console.log(prompts)
  };
  return (
   <>
   <h1 className='text-3xl text-center my-4 py-3 px-2 mt-4 focus-outline-indigo-200'>
     React Forms
     <form className=' w=5/6 max-w-xl mx-auto py-2' onSubmit={handleSubmit}>
      <fieldset className='flex flex-col border gap-2 border py-1 px-4'>
        <legend className='text-xl text-left font-semibold mb-2 text-gray-500'>About You</legend>
        <label className='text-2xl text-left pl-2 font-semibold'>What's your name?</label>
        <input className="border rounded text-lg 
        leading-tight py-3 px-2 mt-4 mb-3 "id='firstName'
        name='firstName'
        placeholder='first name'
        onChange={handleInput}>
        </input>
        <input className=" w-3/5 border rounded text-lg 
        leading-tight py-3 px-2 mt-4 focus:outline-indigo-200" id='lastName'
        name='lastname'
        placeholder='Last Name'
        onChange={handleInput}>
        </input>
        <label className='text-2xl text-left pl-2 font-semibold'>What's your email?</label>
             <input className="border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3"id='email'
        name='email'
        placeholder='email@example.com'
        onChange={handleInput}>
        </input>
        <label className='text-2xl text-left pl-2 font-semibold' >What's your date of birth?</label>
        <input 
        className="border rounded text-lg 
        leading-tight py-3 px-2 mt-4 focus:outline-indigo-200"
        id='dob'
        name='dob'
        type='date'
        max="2024-11-27"
        placeholder='pick your dob'
        onChange={handleInput}></input>
<div  className='flex flex-col' >
    <label className='text-2xl text-left pl-2 font-semibold'>Select  your Gender in dropdown</label>
 <select id='gender' name="gender"  onChange={handleInput}className="border rounded text-lg 
        leading-tight py-3 px-2 mt-4 focus:outline-indigo-200">
    <option >Select</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="others">Others</option>
  </select>
          </div>
          
      </fieldset>
      <fieldset className='flex flex-col border gap-2 border py-1 px-4'>
        <legend className='text-xl text-left font-semibold mb-2 text-gray-500'>
          Prompts
        </legend>
        {prompts.map((prompt,i)=>(
          <div key={prompt.timestamp} className='flex flex-col'>
          <label  className='text-2xl text-left pl-2 font-semibold'>Select a prompt</label>
<div className='flex flex-row items-center gap-2'>
          <select className=" w-3/5 border rounded text-lg 
        leading-tight py-3 px-2 mt-4 focus:outline-indigo-200" id="prompt" name="prompt" onChange={e=> handlePrompt(e,i)}>
            <option value="going out with friends">Going out for a movie..</option>
            <option value="wake me soon">Wake soon</option>
            <option value="I spend most of my money On:">I spend most of my money On:</option>
            <option value="I want someone who...">I want someone who...</option>
            <option value="The most special day of my life">The most special day of my life</option>
          </select>
          <button className='border bg-red-400 py-2.5 px-4 rounded-lg text-white font-bold text-xl' onClick={handleDelete} >
           -
          </button>
          </div>
          <textarea
      className="border border-dashed py-3 px-2 mb-4 focus:outline-indigo-200 text-sm"
      id="answer1"
      name="answer1"
      rows={5}
      placeholder="Let your true colors shine through..."
      onChange={handleInput}
    />
        </div>

        )) }
        
        <div className='w-full flex justify-center'></div>
        <button className='border-bg-violet-400 py-1 px-2 rounded-lg text-black font-bold text-xl' onClick={handleAddPrompt}>Add prompt</button>
        <button className='bg-green-400'  onClick={handleSubmit}>Submit</button>
      </fieldset>
     </form>
   </h1>
   
   </>
  );
}

export default App;
