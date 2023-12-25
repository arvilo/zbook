import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AdminAllfaculties.css';
import { useNavigate } from 'react-router-dom';
import { setAdminCurrentFacultyR} from '../config/universitySlice.js'

const AdminAllfaculties = () => {

    const faculties = useSelector(state => state.university.faculties);
    const users = useSelector(state => state.university.users);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function goToFaculity(e) {
        e.preventDefault();
        dispatch(setAdminCurrentFacultyR(JSON.parse(e.currentTarget.dataset.faculty)))
        navigate("/zbook/admin/faculty")
    }

    return (
    <div className='AdminAllfaculties'>
        <table>
            <thead>
                <tr>
                    <th>N</th>
                    <th>Ad</th>
                    <th>Simvol</th>
                    <th>Dekan</th>
                </tr>
            </thead>
            <tbody>
                {
                    faculties.map((f,ind) => (
                        <tr key={ind} data-faculty={JSON.stringify(f)} onClick={goToFaculity}>
                            <td></td>
                            <td>{f.name}</td>
                            <td>{f.symbol}</td>
                            <td>{`${users.find(u => u.id === f.dean_id).name} ${users.find(u => u.id === f.dean_id).surname}`}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default AdminAllfaculties
