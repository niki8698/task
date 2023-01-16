import React from 'react'
import { Link,  useNavigate } from 'react-router-dom'

const Layout = ({ children }) => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/list')
    }
    return (
        <div>
            <div className="px-8 py-4 bottomBorder text-sm font-normal text-secondary sticky bg-brown flex items-center justify-between">
                <label className='text-white font-extrabold'>Testing</label>
                <div>
                    <Link to='/'>
                        <label className='text-white font-extrabold cursor-pointer' >Register</label></Link>
                    
                        <label className='text-white ml-10 font-extrabold cursor-pointer' onClick={handleClick}>List</label>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Layout