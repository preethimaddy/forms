import './App.css';
function App() {

  const handleInput = () =>{
    
  }
  return (
   <>
   <h1 className='text-3xl text-center my-4 py-3 px-2 mt-4 focus-outline-indigo-200'>
     React Forms
     <form className=' w=5/6 max-w-md mx-auto'>
      <fieldset className='flex flex-col border py-1'>
        <legend className='text-2xl font-semibold mb-2 text-gray-500'>About You</legend>
        <label className='text-2xl text-left pl-2 font-semibold'>What's your name?</label>
        <input className="border rounded text-lg 
        leading-tight py-3 px-2 mt-4 mb-3 "id='firstName'
        name='firstName'
        placeholder='first name'
        onChange={handleInput}>
        </input>
        <input className="border rounded text-lg 
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
        placeholder='pick your dob'
        onChange={handleInput}></input>
      </fieldset>
     </form>
   </h1>
   
   </>
  );
}

export default App;
