import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import './AdminFaculty.css'
import { setAdminCurrentGroupIdR } from '../config/universitySlice.js'
import { useNavigate } from 'react-router-dom'

const AdminFacultyPage = () => {

    let faculty = useSelector(state => state.university.adminCurrentFaculty);
    let allSpecialties = useSelector(state => state.university.specialties);
    let specialties = allSpecialties.filter(s => s.faculty_id === faculty.id)
    let allGroups = useSelector(state => state.university.groups);
    let groups = allGroups.filter(g => specialties.find(s => s.id === g.specialty_id));
    let users = useSelector(state => state.university.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();


  function goToGroup(e) {
    e.preventDefault();

    dispatch(setAdminCurrentGroupIdR({id: Number(e.currentTarget.dataset.id)}))    
    navigate("/zbook/group");
  }

  return (
    <div className='AdminFacultyPage'>
      <Header/>
      <div className="main">
        <h1>{faculty.symbol} fakültəsinin qrupları</h1>
        <table>
            <thead>
                <tr>
                <th>N</th>
                <th>Qrup nömrəsi</th>
                <th>İxtisas</th>
                <th>Qəbul ili</th>
                <th>Tələbə sayı</th>
                </tr>
            </thead>
            <tbody>
                {
                    groups.map((g,ind) => (
                        <tr key={ind} data-id={g.id} onClick={goToGroup}>
                            <td></td>
                            <td>{g.number}</td>
                            <td>{specialties.find(s => s.id === g.specialty_id).name}</td>
                            <td>{g.enterance_year}</td>
                            <td>{users.filter(u => u.group_id === g.id).length}</td>
                        </tr>
                    ))    
                }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminFacultyPage
