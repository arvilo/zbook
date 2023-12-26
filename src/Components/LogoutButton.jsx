import React, { useState } from 'react'
import './LogoutButton.css'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from '../config/universitySlice';

const LogoutButton = () => {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.university.currentUser);
    const [content,setContent] = useState(`${currentUser.name} ${currentUser.surname}`)
    const navigate = useNavigate();

    function overFunc() {
        setContent("çıxış")
    }

    function leaveFunc() {
        setContent(`${currentUser.name} ${currentUser.surname}`)
        
    }

    function clickFunc() {
        dispatch(setCurrentUser({}));
        navigate("/zbook")
    }

  return (
    <div className='LogoutButton' onMouseOver={overFunc} onMouseLeave={leaveFunc} onClick={clickFunc}>
      <p>{content}</p>
    </div>
  )
}

export default LogoutButton
