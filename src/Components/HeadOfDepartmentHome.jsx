import React, { useState } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { createUserR,setTeacherR,createSubjectR } from '../config/universitySlice';
import './HeadOfDepartmentHome.css'

const HeadOfDepartmentHome = () => {

    const dispatch = useDispatch();
    // const department = allDepartments.find(a => a.head_of_department_id === currentUser.id);
    const department = useSelector(state => state.university.currentDepartment);
    const users = useSelector(state => state.university.users);
    const allGroups = useSelector(state => state.university.groups);
    const teachers = users.filter(t => t.department_id === department.id);
    const allSubjectGroups = useSelector(state => state.university.subject_groups);
    const allSubjects = useSelector(state => state.university.subjects)
    const subjects = allSubjects.filter(a => a.department_id === department.id)
    const subjectGroups = allSubjectGroups.filter(a => allSubjects.find(s => s.id === a.subject_id).department_id === department.id)
    const [showSetTeacher, setShowSetTeacher] = useState({});
    const [showNewTeacher, setShowNewTeacher] = useState(false);
    const [showNewSubject,setShowNewSubject] = useState(false);
    const [showNewSubjectAlert,setShowNewSubjectAlert] = useState(false);

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

    function createNewTeacher() {
        setShowNewTeacher(true)
    }

    function submitNewTeacher(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        if (canBeName(formData.get("name"))) {
            if (canBeName(formData.get("surname"))) {
                if (canBeName(formData.get("father"))) {
                    const newTeacher = {
                        name: formData.get("name"),
                        surname: formData.get("surname"),
                        father: formData.get("father"),
                        gender: formData.get("gender"),
                        birth: formData.get("birth").split("/").join("-"),
                        type: "teacher",
                        department_id: department.id
                    }
                    dispatch(createUserR(newTeacher));
                    setShowNewTeacher(false);
                }
            }
        }
    }

    function setTeacher(e) {
        e.preventDefault();
        const subjectGroupId = e.target.dataset.subjectgroupid;
        setShowSetTeacher({id: subjectGroupId})
    }

    function clickCover(e) {
        if (e.target === e.currentTarget) {
            setShowSetTeacher({});
            setShowNewTeacher(false);
            setShowNewSubject(false);
        }
    }

    function submitSetTeacher(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const data = {
            subject_group_id: Number(showSetTeacher.id),
            teacher_id: Number(formData.get("teacher"))
        }
        dispatch(setTeacherR(data));
        setShowSetTeacher({});
    }

    function createNewSubject(e) {
        e.preventDefault();
        setShowNewSubject(true);
    }

    function createNewSubjectSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const newSubjectName = removeAdditonalSpaces(data.get("name"));
        if (allSubjects.find(a => newSubjectName.toLowerCase() === a.name.toLowerCase())) {
            setShowNewSubjectAlert(true);
        }
        else {
            dispatch(createSubjectR({name: newSubjectName,department_id: department.id}));
            setShowNewSubject(false);
            setShowNewSubjectAlert(false);


        }
    }

    
        document.querySelectorAll(".HeadOfDepratmentHome input").forEach(i => {i.value="" ;});


    return (
        <div className='HeadOfDepratmentHome'>
            <Header />
            <div className="main">
                <div className="teachers">
                    <h2>Müəllimlər</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Ad</th>
                                <th>Soyad</th>
                                <th>Ata adı</th>
                                <th>Doğum tarixi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teachers.map((t, ind) => (
                                    <tr key={ind}>
                                        <td>{t.name}</td>
                                        <td>{t.surname}</td>
                                        <td>{t.father}</td>
                                        <td>{t.birth}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="subjects">
                    <h2>Fənnlər</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Fənn</th>
                                <th>Qrup</th>
                                <th>Kredit</th>
                                <th>Müəllim</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                subjectGroups.map((s, ind) => (
                                    <tr key={ind}>
                                        <td>{subjects.find(subject => subject.id === s.subject_id).name}</td>
                                        <td>{allGroups.find(a => a.id === s.group_id).number}</td>
                                        <td>{s.credit}</td>
                                        <td>{teachers.find(teacher => teacher.id === s.teacher_id) ? `${teachers.find(teacher => teacher.id === s.teacher_id).name} ${teachers.find(teacher => teacher.id === s.teacher_id).surname}` : <button data-subjectgroupid={s.id} onClick={setTeacher}>Təyin et</button>}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="creates">
                    <button className="teacher" onClick={createNewTeacher}>Yeni müəllim</button>
                    <button className="subject" onClick={createNewSubject}>Yeni fənn</button>
                </div>
            </div>
            <div className={showSetTeacher.id ? "set-teacher-cover" : "display-none"} onClick={clickCover}>
                <div className="set-teacher">
                    <form autoComplete='off' onSubmit={submitSetTeacher}>
                        <select name="teacher">
                            {
                                teachers.map((t,ind) => (
                                    <option key={ind} value={t.id}>
                                        {`${t.name} ${t.surname} ${t.father}`}
                                    </option>
                                ))
                            }
                        </select>
                            <button type="submit">Təsdiq et</button>
                    </form>
                </div>
            </div>
            <div className={showNewTeacher ? "new-teacher-cover" : "display-none"} onClick={clickCover}>
                <div className="new-teacher">
                    <h2>Yeni müəllim</h2>
                    <form autoComplete='off' onSubmit={submitNewTeacher}>
                        <label htmlFor="name">Ad</label>
                        <input type="text" name='name' required />
                        <label htmlFor="surname">Soyad</label>
                        <input type="text" name='surname' required />
                        <label htmlFor="father">Ata adı</label>
                        <input type="text" name='father' required />
                        <div className="gender">
                            <label htmlFor="gender">Kişi</label>
                            <input type="radio" name='gender' value={"m"} required />
                            <label htmlFor="gender">Qadın</label>
                            <input type="radio" name='gender' value={"f"} required />
                        </div>
                        <label htmlFor="birth">Təvəllüd</label>
                        <input type="date" name='birth' required/>
                        <button type="submit">Təsdiq et</button>
                    </form>
                </div>
            </div>
            <div className={showNewSubject ? "new-subject-cover" : "display-none"} onClick={clickCover}>
                <div className="new-subject">
                    <h3>Yeni fənn</h3>
                    <form autoComplete='off' onSubmit={createNewSubjectSubmit}>
                            <input type="text" name="name" required/>
                            <button type="submit">Təsdiq et</button>
                    </form>
                    {showNewSubjectAlert && 
                        <p>Daxil etdiyiniz adlı fənn mövcuddur</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default HeadOfDepartmentHome