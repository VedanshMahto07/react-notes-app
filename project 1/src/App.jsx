import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState([])

  const clickAddBtn = (e) => {
    e.preventDefault()
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill all fields")
      return
    }

    console.log("Add button clicked")
    const newNote = {
      title,
      description
    }
    const copyNotes = [...notes]
    copyNotes.push(newNote)
    setNotes(copyNotes)
    setTitle("")
    setDescription("")
  }
  return (
    <div >
      <h1 className='bg-black text-center text-white text-2xl p-6 font-bold'>My Notes App</h1>
      <div className='bg-gray-400 min-h-screen w-full'>
        <form className='py-8 w-3/4 mx-auto' onSubmit={clickAddBtn}>
          <span className='font-bold text-2xl'>Title :</span>
          <input
            type="text"
            placeholder='Enter Notes heading'
            className='mx-8 border border-black p-2 rounded-xl'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <br />
          <div className='flex'>
            <span className='font-bold text-2xl my-8'>Description : </span>
            <textarea
              placeholder='Write Details'
              className='mx-8 my-8 border border-black p-2 rounded-xl w-1/2'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            ></textarea>
          </div>
          <button type='submit' className='block bg-amber-300 text-black font-bold text-2xl p-3 rounded-2xl cursor-pointer hover:bg-amber-400'>Add</button>

          <hr className='my-8 border-black' />
          <h2 className="text-3xl font-bold mb-5">
            Your Notes :
          </h2>

          <h3 className="text-xl font-semibold mb-5 text-gray-800">
            Total Notes: {notes.length}
          </h3>
          <div className="flex flex-wrap gap-5">
            {
              notes.map((note, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl shadow-md mb-4 w-96"
                  >
                    <h3 className="text-2xl font-bold mb-2">
                      {note.title}
                    </h3>

                    <p className="text-gray-700">
                      {note.description}
                    </p>


                  </div>
                )
              })
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
