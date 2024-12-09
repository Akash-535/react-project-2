import React, { useState } from 'react'

const PracticeUseState = () => {
    const [name, setName] = useState('Hello')

    const toggleHandler = () => {
        setName((changeName) => (changeName === 'Hello' ? 'Hello-2' : 'Hello'))
    }
    return (
        <div className='bg-black min-h-screen flex flex-col items-center justify-center'>
            <p className='text-4xl text-white pb-5'>{name}</p>
            <button onClick={toggleHandler} className='px-5 py-3 bg-white rounded-xl border border-transparent hover:border-white hover:text-white hover:bg-transparent duration-300 ease-linear'>Change Name</button>
        </div>
    )
}

export default PracticeUseState