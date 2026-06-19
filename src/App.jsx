import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { BookHeart } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    
    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask);

    
    
    setTitle('')
    setDetails('')
    
  }

  const deleteNote = (idx)=>{
  const copyTask = [...task];
  copyTask.splice(idx,1)

  setTask(copyTask)
  
    
  }

  return (
    <div className="h-screen lg:flex text-white bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1767473213263-c7f8347ecce4?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex p-10 lg:w-1/2 gap-5 items-start flex-col '>
        <h1 className='flex items-center gap-2 text-4xl font-bold bg-blue-200 text-black rounded-xl py-2 px-4'>
          Add Notes 
          <h2 size={32}><NotebookPen /></h2>
          </h1>


        
          <input
        type="text"
        placeholder='Enter Notes Heading'
        className='px-5 w-full font-medium py-2 p-5 border-2 outline-none rounded bg-black'
        value={title}
        onChange={(e) => {
        setTitle(e.target.value);
          
        }}
        />
        
        <textarea type="text" 
        className='px-5 w-full h-32 py-2 font-medium bg-black flex items-start flex-row border-2 outline-none rounded'

        placeholder='Write details here'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />
        <button
        className=' bg-amber-300 active:bg-gray-300 text-black w-full font-medium px-5 py-2 outline-none rounded'
        >Add Notes
        </button>
        </form>
        <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='flex items-center gap-2 text-4xl font-bold bg-blue-200 text-black rounded-xl py-2 px-4 w-fit'>
          Recent Notes
          <h2 size={32}><BookHeart /></h2>
          </h1>


        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>

          {task.map(function(elem,idx){
            return <div key={idx} className="flex justify-between  overflow-auto-hidden  flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black py-8 pb-5 px-4 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
            <div>
            <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight text-xs font-semibold font-medium text-gray-700'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='cursor-pointer active:scale-95 w-full bg-amber-300 text-black ml-1 py-1 px-4 text-xs rounded'>Delete</button>
            </div>
          })}
          
        </div>
        </div>
    </div>
  )
}

export default App
