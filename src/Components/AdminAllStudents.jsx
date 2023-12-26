import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setAdminAboutStudentId } from '../config/universitySlice.js';
import './AdminAllStudents.css'
import { useNavigate } from 'react-router-dom';

const AdminAllStudents = (props) => {

  const dispatch = useDispatch();
  const [searchKeys, setSearchKeys] = useState({ student: "", faculity: "", group: "" })
  const navigator = useNavigate();

  let users = useSelector(state => state.university.users)
  let students = users.filter(item => {if (props.groupId) {return item.group_id === props.groupId} else {return item.type === 'student'}})
  let groups = useSelector(state => state.university.groups)
  let faculties = useSelector(state => state.university.faculties)
  let specialties = useSelector(state => state.university.specialties)
 
  function searchStudent(e) {
    setSearchKeys({...searchKeys,student: e.target.value.toLowerCase()});
  }
  
  function searchFaculity(e) {
    setSearchKeys({...searchKeys,faculity: e.target.value.toLowerCase()});
  }
  
  function searchGroup(e) {
    setSearchKeys({...searchKeys,group: e.target.value.toLowerCase()});
  }

  function moreFunction(e) {
    dispatch(setAdminAboutStudentId(JSON.parse(e.currentTarget.dataset.student).id));
    navigator('/zbook/about/student')
  }

  return (
    <div className='AdminAllStudent'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th colSpan={3}><input type="text" placeholder='Tələbə' onChange={searchStudent} /></th>
            <th><input type="text" placeholder='Fakültə' onChange={searchFaculity} /></th>
            <th><input type="text" placeholder='Qrup' onChange={searchGroup} /></th>
          </tr>
          <tr>
            <th>N</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Ata adı</th>
            <th>Fakültə</th>
            <th>Qrup</th>
          </tr>
        </thead>
        <tbody>
          {
            students.filter(item => (item.name.toLowerCase().includes(searchKeys.student) || 
            item.surname.toLowerCase().includes(searchKeys.student)) &&  
            faculties.find(faculty => faculty.id === specialties.find(specialty => specialty.id === groups.find(group => group.id === item.group_id).specialty_id).faculty_id).symbol.toLowerCase().includes(searchKeys.faculity) && 
            groups.find(group => group.id === item.group_id).number.toLowerCase().includes(searchKeys.group)).map(student => (
              <tr key={student.id} data-student={JSON.stringify(student)} onClick={moreFunction}>
                <td></td>
                <td>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.father}</td>
                <td>{faculties.find(faculty => faculty.id === specialties.find(specialty => specialty.id === groups.find(group => group.id === student.group_id).specialty_id).faculty_id).symbol}</td>
                <td>{groups.find(group => group.id === student.group_id).number}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default AdminAllStudents
