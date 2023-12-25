import React, { useState } from 'react'
import Header from './Header'
import './CreateDepartment.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createDepartmentR } from '../config/universitySlice.js';

const CreateDepartment= () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [alert, setAlert] = useState(false);
    const [cratedDepartment,setCratedDepartment] = useState(false);
    
    const departments = useSelector(state => state.university.departments);
    const users = useSelector(state => state.university.users);
    
    function removeAdditonalSpaces(word) {
        return word.split(" ").filter(item => item).join(" ");
    }
    
    const canBeName = (word) => {
        let arrayWord = word.split("");
        if (arrayWord.find(item => item.toLowerCase() === item.toUpperCase())) {
            return false;
        }
        else {
            if (arrayWord[0] === arrayWord[0].toUpperCase()) {
                arrayWord.shift();
                return word.substring(1, word.length).toLowerCase() === word.substring(1, word.length);
            }
            else {
                return false;
            }
        }
    }
    
    function goToBack() {
        navigate("/zbook/admin/home")
    }
    
    function submitF(e) {
        e.preventDefault();
        let data = new FormData(e.target);
        if (!departments.find(item => item.name.toLowerCase() === removeAdditonalSpaces(data.get("name")).toLowerCase())) {
            
            if (canBeName(data.get("head-of-department-name"))) {
                if (canBeName(data.get("head-of-department-surname"))) {
                    if (canBeName(data.get("head-of-department-father"))) {
                        const newDepartment = {
                            name: data.get("name"),
                            head_of_department: {
                                name: data.get("head-of-department-name"),
                                surname: data.get("head-of-department-surname"),
                                father: data.get("head-of-department-father"),
                                gender: data.get("head-of-department-gender"),
                                birth: data.get("head-of-department-birth").split("-").join("/")
                            }
                        }
                        dispatch(createDepartmentR(newDepartment));
                        setCratedDepartment(newDepartment);
                        return
                    }
                }
            }
        }
        setAlert(true)
        
    }
    
    return (
        <div className='CreateDepartment'>
            <Header />
            <div className={cratedDepartment ? "blur-cover main" : "main"}>
                <h1>Yeni kafedra</h1>
                <form autoComplete='off' onSubmit={submitF}>  
                    <label htmlFor="name">Kafedranın adı</label>
                    <input type="text" name='name' required />
                    <label>Kafedra müdiri</label>
                    <label htmlFor="head-of-department-name">Ad</label>
                    <input type="text" name='head-of-department-name' required />
                    <label htmlFor="head-of-department-surname">Soyad</label>
                    <input type="text" name='head-of-department-surname' required />
                    <label htmlFor="head-of-department-father">Ata adı</label>
                    <input type="text" name='head-of-department-father' required />
                    <label htmlFor="head-of-department-birth">Təvəllüd</label>
                    <input type="date" name='head-of-department-birth' required />
                    <label className='gender'>
                        <label htmlFor="m" className='gender'>Kişi
                            <input type="radio" name="head-of-department-gender" value="m" id="m" required />
                        </label>
                        <label htmlFor="f" className='gender'>Qadın
                            <input type="radio" name="head-of-department-gender" value="f" id="f" required />
                        </label>
                    </label>
                    <button type="submit">Təsdiq et</button>
                </form>
                <div className={alert ? "alert" : "alert display-none"}>
                    <p>Məlumatlar düzgün daxil edilməmişdir</p>
                </div>
            </div>
            <div className="created-cover">
            {
                cratedDepartment && (
                    <div className='created'>
                        <h6>Kafedra uğurla yaradıldı</h6>
                        <p>Kafedra müdirinin istifadəçi adı: {users.find(user => user.id === departments.find(item => removeAdditonalSpaces(item.name).toLowerCase() === removeAdditonalSpaces(cratedDepartment.name).toLowerCase()).head_of_department_id).username}</p>
                        <p>Kafedra müdirinin şifrəsi: {users.find(user => user.id === departments.find(item => removeAdditonalSpaces(item.name).toLowerCase() === removeAdditonalSpaces(cratedDepartment.name).toLowerCase()).head_of_department_id).password}</p>
                        <button onClick={goToBack}>Çıxış</button>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default CreateDepartment
