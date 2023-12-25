import React, { useState } from 'react'
import Header from './Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { createSpecialtyR } from '../config/universitySlice.js';
import './CreateSpecialty.css';
import { useNavigate } from 'react-router-dom';

const CreateSpecialty = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const faculties = useSelector(state => state.university.faculties);
    const subjects = useSelector(state => state.university.subjects);
    const specialties = useSelector(state => state.university.specialties)
    const users = useSelector(state => state.university.users)
    const [insertedSubjects, setInsertedSubjects] = useState([[null], [null], [null], [null], [null], [null], [null]]);
    const [showAlert, setShowAlert] = useState(false);
    const [showSuccesMesage, setShowSuccesMesage] = useState({});

    let subjectOptions = [null].concat(subjects);

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

    function addSubjectOption(e) {
        e.preventDefault();
        let arr = [...insertedSubjects];
        arr[Number(e.target.dataset.index)].push(null);
        setInsertedSubjects(arr);
    }

    function submitForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = removeAdditonalSpaces(formData.get("name"));
        const faculty_id = Number(formData.get("faculty"));
        const tutor = {
            name: formData.get("tutor-name"),
            surname: formData.get("tutor-surname"),
            father: formData.get("tutor-father"),
            birth: formData.get("tutor-birth").split("/").join("-"),
            gender: formData.get("tutor-gender")
        }
        let educationPlan = [];
        for (let i = 0; i < 7; i++) {
            let k = 0;
            let arr = [];
            while (formData.get(`${i}-${k}`)) {
                if (formData.get(`${i}-${k}`) !== "-1") {

                    arr.push({ subject_id: Number(formData.get(`${i}-${k}`)), name: subjects.find(item => item.id === Number(formData.get(`${i}-${k}`))).name, credit: Number(formData.get(`${i}-${k}-credit`)), semester: i + 1 })
                }
                k++;
            }
            educationPlan.push(arr)

        }
        if (canBeName(tutor.name)) {
            if (canBeName(tutor.surname)) {
                if (canBeName(tutor.father)) {
                    if (!specialties.find(item => item.name.toLowerCase() === name.toLowerCase())) {
                        let check = true;
                        let array = [];
                        educationPlan.forEach(item => {
                            item.forEach(element => {
                                array.push(element);
                            })
                        })
                        array.forEach(i => {
                            array.forEach(k => {
                                let r = 0;
                                if (i.name === k.name) {
                                    r++;
                                }
                                if (r > 1) {
                                    check = false;
                                }
                            })
                        })
                        if (check) {
                            let check = true;
                            educationPlan.forEach(item => {
                                let credits = 0;
                                item.forEach(element => {
                                    credits += element.credit;
                                })

                                if (credits !== 30) {
                                    check = false;
                                }
                            })

                            let education_plan = [];
                            educationPlan.forEach(i => {
                                i.forEach(k => {
                                    education_plan.push(k);
                                })
                            })

                            education_plan.forEach(e => {
                                let z = 0;
                                education_plan.forEach(e1 => {
                                    if (e.name === e1.name) {
                                        z = z + 1;
                                    }
                                })
                                if (z > 1) {
                                    check = false;
                                }
                            })
                            if (check) {
                                console.log(education_plan);

                                dispatch(createSpecialtyR({ name, faculty_id, tutor, education_plan }));



                                setShowSuccesMesage({name})

                                setShowAlert(false);

                                return;
                            }
                        }
                    }
                }
            }
        }

        setShowAlert(true);
    }

    return (
        <div className='CreateSpecialty'>
            <Header />
            <div className="main">
                <h1>Yeni ixtisas</h1>
                <form autoComplete='off' onSubmit={submitForm}>
                    <label htmlFor="name">İxtisasın adı</label>
                    <input type="text" name='name' required />
                    <label htmlFor="faculty">Fakültə</label>
                    <select name="faculty">
                        {
                            faculties.map(faculty => (
                                <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                            ))
                        }
                    </select>

                    {
                        insertedSubjects.map((sem, ind) => (
                            <label key={ind}>Semester: {ind + 1}
                                {
                                    sem.map((sub, subInd) => (
                                        <div className="select-div" key={subInd}>
                                            <select name={String(ind) + "-" + String(subInd)}  >
                                                {
                                                    subjectOptions.map(subject => (
                                                        <option key={subject ? subject.id : "-1"} value={subject ? subject.id : "-1"}>{subject ? subject.name : "Fənn seçin"}</option>
                                                    ))
                                                }
                                            </select>
                                            <input type="number" name={ind + "-" + subInd + "-credit"} />
                                        </div>
                                    ))
                                }
                                <button data-index={ind} onClick={addSubjectOption}>Fənn əlavə et</button>
                            </label>
                        ))
                    }
                    <label htmlFor="tutor">
                        <label>Tyutor</label>
                        <br />
                        <label htmlFor="tutor-name">Ad</label>
                        <input type="text" name='tutor-name' required />
                        <label htmlFor="tutor-surname">Soyad</label>
                        <input type="text" name='tutor-surname' required />
                        <label htmlFor="tutor-father">Ata adı</label>
                        <input type="text" name='tutor-father' required />
                        <label htmlFor="tutor-birth">Təvəllüd</label>
                        <input type="date" name='tutor-birth' required />
                        <label className='gender'>
                            <label htmlFor="m" className='gender'>Kişi
                                <input type="radio" name="tutor-gender" value="m" id="m" required />
                            </label>
                            <label htmlFor="f" className='gender'>Qadın
                                <input type="radio" name="tutor-gender" value="f" id="f" required />
                            </label>
                        </label>
                    </label>

                    <button type="submit">Təsdiq et</button>
                </form>
                <div className={showAlert ? "alert" : "alert display-none"}>
                    <p>Məlumatlar düzgün daxil edilməmişdir</p>
                    <ol>
                        <li>Daxil edilən ixtisas möcvud olmamalıdır</li>
                        <li>Bir fənn yalnız bir dəfə daxil edilə bilər</li>
                        <li>Hər semester üçün fənnlərin kredit cəmi 30-a bərabər olmalıdır</li>
                        <li>Tyutor məlumatları düzgün daxil edilməlidir</li>
                    </ol>
                </div>
                <div className={showSuccesMesage.name ? "succes-mesage-cover" : "succes-mesage-cover display-none"}>
                    <div className="succes-mesage">
                        <h4>İxtisas uğurla yaradıldı</h4>
                        <p>Tutorun istifadəçi adı: {showSuccesMesage.name && users.find(u => u.id === specialties.find(s => removeAdditonalSpaces(s.name).toLowerCase() === removeAdditonalSpaces(showSuccesMesage.name).toLowerCase()).tutor_id).username}</p>
                        <p>Tyutorun şifrəsi: {showSuccesMesage.name && users.find(u => u.id === specialties.find(s => removeAdditonalSpaces(s.name).toLowerCase() === removeAdditonalSpaces(showSuccesMesage.name).toLowerCase()).tutor_id).password}</p>
                        <button onClick={() => {navigate("/zbook/admin/home")}}>Geri</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSpecialty
