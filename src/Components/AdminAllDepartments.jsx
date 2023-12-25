import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './AdminAllDepartments.css';
import { setCurrentDepartmentR } from '../config/universitySlice.js';
import { useNavigate } from 'react-router-dom';

const AdminAllDepartments = () => {

    const departments = useSelector(state => state.university.departments);
    const users = useSelector(state => state.university.users);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function getHeadOfDepartment(department) {
        return users.find(u => u.id === department.head_of_department_id)
    }

    function trClick(e) {
        e.preventDefault();
        let department = JSON.parse(e.currentTarget.dataset.department);

        dispatch(setCurrentDepartmentR(department));
        navigate("/zbook/admin/department")
    }

    return (
        <div className='AdminAllDepartments'>
            <table>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Ad</th>
                        <th>Kafedra müdiri</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            departments.map((d,ind) => (
                                <tr key={ind} onClick={trClick} data-department={JSON.stringify(d)}>
                                    <td></td>
                                    <td>{d.name}</td>
                                    <td>{`${getHeadOfDepartment(d).name} ${getHeadOfDepartment(d).surname}`}</td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    )
}

export default AdminAllDepartments
