import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AdminAboutStudent.css'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../config/universitySlice.js';

const AdminAboutStudent = () => {

    let nowDate = new Date();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const student = useSelector(state => state.university.users.find(item => item.id === state.university.adminAboutStudent))
    const group = useSelector(state => state.university.groups.find(item => item.id === student.group_id));
    const speciality = useSelector(state => state.university.specialties.find(item => item.id === group.specialty_id))
    const course = nowDate.getMonth() < 8 ? Number(nowDate.getFullYear()) - Number(group.enterance_year.split("-")[0]) : Number(nowDate.getFullYear()) - Number(group.enterance_year.split("-")[0]) + 1
    const [showResetPassword,setShowResetPassword] = useState(false);




    function submitResetPassword(e) {
        e.preventDefault();
        let data = new FormData(e.target);
        dispatch(resetPassword({ id: student.id, newPassword: data.get("password") }))
        setShowResetPassword(false);
        e.target.children[0].value = "";
    }

    function goToResetPassword() {
        setShowResetPassword(true);
    }

    function backFromResetPassword(e) {
        if (e.target === e.currentTarget) {
            setShowResetPassword(false);
        }
    }

    return (
        <div className='AdminAboutStudent'>
            <Header />
            <div className={showResetPassword ? "profile-blur profile" : "profile"}>
                <div className="image">
                    <img src={student.gender === 'f' ? "https://media.istockphoto.com/id/1139495117/photo/facing-my-future-with-confidence.jpg?s=1024x1024&w=is&k=20&c=uKZVxDUVyqOftsePBUC65aX3RcplJuK1FV-zpy-eq18=" : "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4="} alt="profile" />
                </div>
                <div className="about">
                    <p>Ad: {student.name}</p>
                    <p>Soyad: {student.surname}</p>
                    <p>Ata adı: {student.father}</p>
                    <p>Cins: {student.gender === 'f' ? "Qadın" : "Kişi"}</p>
                    <p>Təvəllüd: {student.birth}</p>
                    <p>Qrup: {group.number}</p>
                </div>
                <div className="about">

                    <p>İxtisas: {speciality.name}</p>
                    <p>Kurs: {course}</p>
                    <p>Qəbul olduğu il: {group.enterance_year.split("-")[0]}</p>
                    <p>İstifadəçi adı: {student.username}</p>
                    <div className="buttons">
                        <button onClick={goToResetPassword}>Şifrəni sıfırla</button>
                    </div>
                </div>
            </div>
            <div className={showResetPassword ? "reset-password-cover" : "reset-password-cover display-none"} onClick={backFromResetPassword}>
                <div className="reset-password">
                    <h6>Şifrənin sıfırlanması</h6>
                    <p>İstifadəçi: {student.username}</p>
                    <form onSubmit={submitResetPassword}>
                        <input type="text" name="password" minLength="8" required/>
                        <button type="submit">Təsdiq et</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AdminAboutStudent
