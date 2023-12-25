import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../config/universitySlice.js';
import './AdminUsers.css';

const AdminUsers = () => {

    const users = useSelector(state => state.university.users);
    const [resetPasswordUser,setResetPasswordUser] = useState({});
    const dispatch = useDispatch();

    

    function translateRole(user) {
        switch (user.type) {
            case "admin":
                return "İT mütəxəsisi"
            case "dean":
                return "Dekan"

            case "head of department":
                return "Kafedra müdiri"
            case "tutor":
                return "Tyutor"
            case "teacher":
                return "Müəllim"
            case "student":
                return "Tələbə"
        }
    }

    function submitResetPassword(e) {
        e.preventDefault();
        const formData = new FormData(e.target.parentElement);
        const newPassword = formData.get("new-password");
        dispatch(resetPassword({...resetPasswordUser,newPassword}))
        setResetPasswordUser({});
        e.target.parentElement.children[0].value = ""
    }

    return (
        <div className='AdminUsers'>

            <table>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Vəzifə</th>
                        <th>İstifadəçi adı</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, ind) => (
                            <tr key={ind}>
                                <td></td>
                                <td>{u.name}</td>
                                <td>{u.surname}</td>
                                <td>{translateRole(u)}</td>
                                <td>{u.username}</td>
                                <td><button onClick={() => {setResetPasswordUser(u)}}>Şifrəni sıfılra</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className={resetPasswordUser.username ? "reset-password-cover" : "display-none"} onClick={(e) => {e.preventDefault();if (e.target === e.currentTarget) {setResetPasswordUser({}); e.currentTarget.children[0].children[1].children[0].value = ""}}}>
                <div className="reset-password">
                    <p>İstifadəçi: {resetPasswordUser.username}</p>
                    <form autoComplete='off'>
                        <input name="new-password" type="text" minLength={8} required />
                        <button onClick={submitResetPassword}>Təsdiq et</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminUsers
