import './AdminHome.css';
import AdminAllStudents from './AdminAllStudents';
import Header from './Header';
import AdminCreates from './AdminCreates';
import { useState } from 'react';
import AdminAllfaculties from './AdminAllfaculties';
import AdminAllDepartments from './AdminAllDepartments';
import AdminUsers from './AdminUsers';




const AdminHome = () => {

  const [nav, setNav] = useState('faculties')

  function goToList(e) {
    e.preventDefault()
    setNav(e.target.dataset.page)
  }

  return (
    <div className='AdminHome'>
      <Header />
      <div className="main">
        <div className='admin-aside'>
          <div className="faculties">
            <button data-page={"faculties"} onClick={goToList}>Fakültələr</button>
          </div>
          <div className="departments">
            <button data-page={"departments"} onClick={goToList}>Kafedralar</button>
          </div>
          <div className="students">
            <button data-page={"students"} onClick={goToList}>Tələbələr</button>
          </div>
          <div className="users">
            <button data-page={"users"} onClick={goToList}>İstifadəçilər</button>
          </div>
        </div>

        {nav === 'faculties' ?
          <AdminAllfaculties /> :
          nav === 'departments' ?
            <AdminAllDepartments /> :
            nav === 'students' ?
              <AdminAllStudents /> :
              nav === 'users' &&
              <AdminUsers />
        }
        <AdminCreates />
      </div>
    </div>
  )
}

export default AdminHome
