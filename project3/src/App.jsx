import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [password, setpassword] = useState()
  const password_ref = useRef(null)

  const pass_generator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) {
      str += "0123456789"
    }
    if (character) {
      str += "!@#$%^&*()_+="
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char)
    }
    setpassword(password)
  }, [length, number, character, setpassword])

  const copy_password_ref = useCallback(() => {
    password_ref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    pass_generator()
  }, [number, character, setpassword, pass_generator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <div className=''>
          <br />
          <h1 className="text-center py-1">Password Generator</h1>
          <input id="inputfield" className='w-full rounded-md mx-4 my-4 h-9' type="text" value={password} placeholder='&nbsp;&nbsp;Password' readOnly ref={password_ref} />
          <button type="button" class="text-white bg-blue-700 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={copy_password_ref}>Copy</button>
        </div>

        <div className='flex space-x-3'>
          <div className='flex space-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
              setlength(e.target.value)
            }} />
            <label>Length: {length}</label>
          </div>
          <div className="flex space-x-1">
            <input type="checkbox" defaultChecked={number} id="numberInput" onChange={() => {
              setnumber((prev) => !prev);
            }} />
            <label>Numbers</label>
          </div>
          <div className="flex space-x-1">
            <input type="checkbox" defaultChecked={character} id="characterInput" onChange={() => {
              setcharacter((prev) => !prev);
            }} />
            <label>Characters</label>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

export default App
