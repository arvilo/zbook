import React, { useState } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { createGroupR } from '../config/universitySlice.js';
import './CreateGroup.css';

const CreateGroup = () => {

    const dispatch = useDispatch();
    const [numberOfStudents, setNumberOfStudents] = useState([true]);
    const [createdGroupNumber, setCreatedGroupNumber] = useState(false);
    const [showAlert,setShowAlert] = useState(false);
    const specialties = useSelector(state => state.university.specialties);
    const groups = useSelector(state => state.university.groups);
    const users = useSelector(state => state.university.users);

    const enteranceYears = [];
    for (let i = 0; i < 20; i++) {
        let now = new Date()
        enteranceYears.push(now.getFullYear() - 10 + i);
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

    function removeAdditonalSpaces(word) {
        return word.split(" ").filter(item => item).join(" ");
    }

    function submitForm(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        const number = removeAdditonalSpaces(formData.get("number"));
        const specialty_id = Number(formData.get("specialty"));
        const enteranceYear = formData.get("enterance-year");
        let students = []
        numberOfStudents.forEach((item, ind) => {
            if (item) {
                students.push({
                    name: formData.get(`name-${ind}`),
                    surname: formData.get(`surname-${ind}`),
                    father: formData.get(`father-${ind}`),
                    gender: formData.get(`gender-${ind}`),
                    birth: formData.get(`birth-${ind}`).split("/").join("-")
                })
            }
        })

        if (!groups.find(g => removeAdditonalSpaces(g.number).toLowerCase() === number.toLowerCase()) && students.length) {
            let check = true;
            students.forEach(s => {
                if (!canBeName(s.name)) {
                    check = false;
                }
                if (!canBeName(s.surname)) {
                    check = false;
                }
                if (!canBeName(s.father)) {
                    check = false;
                }
            })

            if (check) {
                dispatch(createGroupR({ number, specialty_id, enterance_year: `${enteranceYear}-${Number(enteranceYear) + 1}`, students }))
                setCreatedGroupNumber(number);
                setShowAlert(false);
                return
            }
        }
        setShowAlert(true);
    }
    return (
        <div className='CreateGroup'>
            <Header />
            <div className="main">
                <h1>Yeni qrup</h1>
                <form autoComplete='off' onSubmit={submitForm}>
                    <label htmlFor="number">Yeni qrupun nömrəsi</label>
                    <input type="text" name='number' required />
                    <label htmlFor="specialty">İxtisas</label>
                    <select name="specialty">
                        {
                            specialties.map(s => (
                                <option key={s.id} value={s.id}>{s.name}</option>
                            ))
                        }
                    </select>
                    <label htmlFor="enterance-year">Qəbul ili</label>
                    <select name="enterance-year">
                        {
                            enteranceYears.map((e, ind) => (
                                <option key={ind} value={e}>{e}</option>
                            ))
                        }
                    </select>
                    <table>
                        <thead>
                            <tr>
                                <th>Ad</th>
                                <th>Soyad</th>
                                <th>Ata adı</th>
                                {
                                    createdGroupNumber ?
                                    <>
                                        <th>İstifadəçi</th>
                                        <th>Şifrə</th>
                                    </>
                                    :
                                    <>
                                        <th>Cins</th>
                                        <th>Təvəllüd</th>
                                        <th><button onClick={(e) => { e.preventDefault(); setNumberOfStudents([...numberOfStudents, true]) }}>Əlavə et</button></th>
                                    </>

                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                createdGroupNumber ? users.filter(u => u.group_id === groups.find(g => g.number.toLowerCase() === createdGroupNumber.toLowerCase()).id).map((u, ind) => (
                                    <tr key={ind}>
                                        <td>{u.name}</td>
                                        <td>{u.surname}</td>
                                        <td>{u.father}</td>
                                        <td>{u.username}</td>
                                        <td>{u.password}</td>
                                    </tr>
                                ))

                                :
                                numberOfStudents.map((item, ind) => (
                                    item && <tr key={ind}>
                                        <td><input name={`name-${ind}`} type="text" required/></td>
                                        <td><input name={`surname-${ind}`} type="text" required/></td>
                                        <td><input name={`father-${ind}`} type="text" required/></td>
                                        <td>
                                            <select name={`gender-${ind}`} type="text">
                                                <option value='m'>K</option>
                                                <option value='f'>Q</option>
                                            </select>
                                        </td>
                                        <td><input name={`birth-${ind}`} type="date" required /></td>
                                        <td><button onClick={() => { let arr = [...numberOfStudents]; arr[ind] = false; setNumberOfStudents(arr) }}>Sil</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button className={createdGroupNumber ? "display-none" : undefined} type="submit">Təsdiq et</button>
                </form>
                <div className={showAlert ? "alert" : "alert display-none" }>
                    <p>Daxil etdiyiniz qrup nömrəsi mövcuddur və ya tələbə məlumatları düzgün daxil edilməyib</p>
                </div>
            </div>
        </div>
    )
}

export default CreateGroup
