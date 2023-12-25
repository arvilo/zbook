import React from 'react';
import LogoutButton from './LogoutButton';
import './Header.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const currentUserType = useSelector(state => state.university.currentUser.type);
  
  const navigate = useNavigate();

  return (
    <div className='Header'>
        <div onClick={() => navigate(`/zbook/${currentUserType.split(" ").join("/")}/home`)}>Z B O O K</div>
      <LogoutButton/>
    </div>
  )
}

export default Header
