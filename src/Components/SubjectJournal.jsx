import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setResultByTeacherP, setResultByAdminP } from '../config/universitySlice.js';
import './SubjectJournal.css'

const SubjectJournal = (props) => {


    const currentUser = useSelector(state => state.university.currentUser)
    const subjectGroupId = props.id;
    const subjectGroups = useSelector(state => state.university.subject_groups);
    const subjectGroup = subjectGroups.find(item => item.id === subjectGroupId);
    const groups = useSelector(state => state.university.groups);
    const group = groups.find(g => g.id === subjectGroup.group_id);
    const subjects = useSelector(state => state.university.subjects);
    const subject = subjects.find(s => s.id === subjectGroup.subject_id);
    const credit = subjectGroup.credit;
    const semesterYear = subjectGroup.semester.split("_")[1];
    const year = subjectGroup.semester.split("_")[0];
    const semesterGroup = (Number(year.split("-")[0]) - Number(group.enterance_year.split("-")[0])) * 2 + 1 + ['payız', 'yaz'].indexOf(semesterYear);
    const allMainJournal = useSelector(state => state.university.main_journal);
    const mainJournal = allMainJournal.filter(m => m.subject_group_id === subjectGroupId);
    const users = useSelector(state => state.university.users);
    const students = users.filter(u => u.group_id === group.id);
    const [setResult,setSetResult] = useState({});
    const [showSetResult,setShowSetResult] = useState(false);
    const [showAlert,setShowAlert] = useState(false);
    const dispatch = useDispatch()


    function getMainJournal(studentId,point) {
        return mainJournal.find(m => m.student_id === studentId && m.name === point);
    }

    function getPoint(studentId,point) {
        return mainJournal.find(m => m.student_id === studentId && m.name === point);
    }

    function getEnterancePoint(studentId) {
        let teqdimat = 0;
        let mitderm = 0;
        let quiz = 0;
        if (getPoint(studentId,'təqdimat').amount) {
            teqdimat = getPoint(studentId,'təqdimat').amount
        }
        if (getPoint(studentId,'mitderm').amount) {
            mitderm = getPoint(studentId,'mitderm').amount
        }
        if (getPoint(studentId,'quiz').amount) {
            quiz = getPoint(studentId,'quiz').amount
        }
        
        return mitderm + teqdimat + quiz;
    }

    function getLastPoint(studentId) {
        if (getPoint(studentId,'təqdimat').amount && getPoint(studentId,'mitderm').amount && getPoint(studentId,'quiz').amount && getPoint(studentId,'imtahan').amount) {
            return getEnterancePoint(studentId) + getPoint(studentId,"imtahan").amount
        }
        else {
            return "d/e";
        }
    }

    function getResult(studentId) {
        const last = Number(getLastPoint(studentId));
        const exam = getPoint(studentId,'imtahan');

        if (getLastPoint(studentId) === "d/e") {
            return "d/e"
        }
        else if (last < 51 || exam.amount < 17) {
            return "F";
        }
        else if (last < 61) {
            return "E"
        }
        else if (last < 71) {
            return "D"
        }
        else if (last < 81) {
            return "C"
        }
        else if (last < 91) {
            return "B"
        }
        else if (last <= 100) {
            return "A"
        }
    }

    function onClickJournal(e) {
        e.preventDefault();
        setSetResult({student: `${students.find(s => s.id === JSON.parse(e.currentTarget.dataset.mainjournal).student_id).name} ${students.find(s => s.id === JSON.parse(e.currentTarget.dataset.mainjournal).student_id).surname}`,point: JSON.parse(e.currentTarget.dataset.mainjournal).name, mainJournal: JSON.parse(e.currentTarget.dataset.mainjournal)})
        setShowSetResult(true);
    }

    function submitResult(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        let result = data.get('result');
        let check = true;
        result.split("").forEach(letter => {
            if (["0","1","2","3","4","5","6","7","8","9"].indexOf(letter) === -1) {
                check = false;
            }
        })

        if (check) {
            result = Number(result)
            if (result >= 0 && result <= setResult.mainJournal.max) {
                if (currentUser.type === "admin") {
                    dispatch(setResultByAdminP({main_journal_id: setResult.mainJournal.id,amount: result}));
                    setSetResult({});
                    setShowSetResult(false);
                    setShowAlert(false);
                    e.target.children[0].value = "";
                }
                else if (currentUser.type === "teacher") {
                    dispatch(setResultByTeacherP({main_journal_id: setResult.mainJournal.id,amount: result}))
                    setSetResult({});
                    setShowSetResult(false);
                    setShowAlert(false);
                    e.target.children[0].value = "";
                }
            }
            else {
                setShowAlert(true);
            }
        }
        else {
            setShowAlert(true);
        }
    }

    function back(e) {
        if (e.currentTarget === e.target) {
            setSetResult({});
                    setShowSetResult(false);
                    setShowAlert(false);
                    e.currentTarget.children[0].children[2].children[0].value = "";
        }
    }

    return (
        <div className='SubjectJournal'>
            <h2>Qrup: {group.number}</h2>
            <h3>Fənn: {subject.name}</h3>
            <div className="about">
                <p>Kredit: {credit}</p>
                <p>Tədris ili: {year}</p>
                <p>Semester: {semesterYear}</p>
                <p>Kurs: {semesterYear === 'payız' ? Math.round(semesterGroup / 2) + 1 : Math.round(semesterGroup / 2)}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Tələbə</th>
                        <th>Mitderm</th>
                        <th>Təqdimat</th>
                        <th>Quiz</th>
                        <th>Giriş balı</th>
                        <th>İmtahan</th>
                        <th>Yekun</th>
                        <th>Qiymət</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student,ind) => (
                            <tr key={ind}>
                                <td></td>
                                <td>{`${student.name} ${student.surname}`}</td>
                                <td data-mainjournal={JSON.stringify(getMainJournal(student.id,"mitderm"))} onClick={onClickJournal}>{getPoint(student.id,"mitderm").amount ? getPoint(student.id,"mitderm").amount : 'd/e'}</td>
                                <td data-mainjournal={JSON.stringify(getMainJournal(student.id,"təqdimat"))} onClick={onClickJournal}>{getPoint(student.id,"təqdimat").amount ? getPoint(student.id,"təqdimat").amount : 'd/e'}</td>
                                <td data-mainjournal={JSON.stringify(getMainJournal(student.id,"quiz"))} onClick={onClickJournal}>{getPoint(student.id,"quiz").amount  ? getPoint(student.id,"quiz").amount : 'd/e'}</td>
                                <td>{getEnterancePoint(student.id)}</td>
                                <td data-mainjournal={JSON.stringify(getMainJournal(student.id,"imtahan"))} onClick={onClickJournal}>{getPoint(student.id,'imtahan').amount ? getPoint(student.id,"imtahan").amount : 'd/e'}</td>
                                <td>{getLastPoint(student.id)}</td>
                                <td>{getResult(student.id)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className={showSetResult ?"set-result-cover" : "set-result-cover display-none"} onClick={back}>
                <div className="set-result">
                    <p>Tələbə: {setResult.student}</p>
                    <p>Qiymət: {setResult.point}</p>
                    <form autoComplete='off' onSubmit={submitResult}>
                        <input type="number" name='result' required/>
                        <button type="submit">Təsdiq et</button>
                    </form>
                        <p className={showAlert ? "alert" : "alert display-none"}>Məlumat düzgün daxil edilməmişdir</p>
                </div>
            </div>
        </div>
    )
}

export default SubjectJournal
