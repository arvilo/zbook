import React, { useState } from 'react'
import Header from './Header'
import AdminAllStudents from './AdminAllStudents'
import { useSelector } from 'react-redux'
import SubjectJournal from './SubjectJournal'
import './GroupPage.css'

const GroupPage = (props) => {

  const allGroups = useSelector(state => state.university.groups)
  const group = allGroups.find(g => g.id === props.id);
  const allSpecialties = useSelector(state => state.university.specialties);
  const specialty = allSpecialties.find(s => s.id === group.specialty_id);
  const users = useSelector(state => state.university.users);
  const students = users.filter(u => u.group_id === group.id);
  const allGroupSubjects = useSelector(state => state.university.subject_groups);
  const groupSubjects = allGroupSubjects.filter(a => a.group_id === group.id);
  const allSubjects = useSelector(state => state.university.subjects)
  const [currentSubjectGroup, setCurrentSubjectGroup] = useState(undefined);

  function getSubjectById(id) {
    return allSubjects.find(a => a.id === id);
  }

  function goToSubject(e) {
    e.preventDefault();
    setCurrentSubjectGroup(JSON.parse(e.target.dataset.groupsubject))
  }

  function goToList() {
    setCurrentSubjectGroup(undefined)
  }

  return (
    <div className='GroupPage'>
      <Header />
    
          <h1 className={currentSubjectGroup ? "display-none" : ""}>Qrup: {group.number}</h1>
          <div className={currentSubjectGroup ?  "display-none":"about" }>
            <p>İxtisas: {specialty.name}</p>
            <p>Tələbə sayı: {students.length}</p>
          </div>
      <div className="main">
        {
          currentSubjectGroup === undefined ?
            <AdminAllStudents groupId={group.id} />
            : <SubjectJournal id={currentSubjectGroup.id} />
        }
        <div className="subjects">
          <button onClick={goToList}>Tələbələrin siyahısı</button>
          {
            groupSubjects.map((g, i) => (
              <button key={i} data-groupsubject={JSON.stringify(g)} onClick={goToSubject}>{getSubjectById(g.subject_id).name}</button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default GroupPage
