import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../redux/auth/auth.actions'

const ButtonLogout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(logOut(navigate))}>LogOut</button>
  )
}

export default ButtonLogout