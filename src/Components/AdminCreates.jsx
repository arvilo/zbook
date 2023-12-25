import React from 'react';
import './AdminCreates.css';
import { useNavigate } from 'react-router-dom';

const AdminCreates = () => {

    const navigate = useNavigate();

    function newFaculity() {
        navigate("/zbook/create/faculity")
    }

    function newDepartment() {
      navigate("/zbook/create/department")
    }
    
    function newSpecialty() {
      navigate("/zbook/create/specialty")
    }

    function newGroup() {
      navigate("/zbook/create/group")
    }

  return (
    <div className='AdminCreates'>
      <button onClick={newFaculity}>Yeni fakültə</button>
      <button onClick={newDepartment}>Yeni kafedra</button>
      <button onClick={newSpecialty}>Yeni ixtisas</button>
      <button onClick={newGroup}>Yeni qrup</button>
    </div>
  )
}

export default AdminCreates
