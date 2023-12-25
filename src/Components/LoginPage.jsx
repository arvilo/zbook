import React, { useState } from 'react';
import './LoginPage.css';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, setPasswordForUser } from '../config/universitySlice.js';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.university.users);
    const currentUser = useSelector(state => state.university.currentUser);


    const [loginButtonIsDisabled, setLoginButtonIsDisabled] = useState(true);
    const [setPasswordButtonIsDisabled, setSetPasswordButtonIsDisabled] = useState(true);
    const [newPasswordDivClass, setNewPasswordDivClass] = useState("set-new-password display-none");
    const [loginPageDivClass, setLoginPageDivClass] = useState("login");
    const [alertDivClass, setAlertDivClass] = useState("alert display-none");

    function usernameOnChange(e) {
        setLoginButtonIsDisabled(!Boolean(e.target.value))
    }

    function loginButton(e) {
        e.preventDefault();
        const data = new FormData(e.target.parentElement);
        let newCurrentUser = users.find(item => item.username === data.get("username") && item.password === data.get("password"))
        if (newCurrentUser) {
            dispatch(setCurrentUser(newCurrentUser));

            if (newCurrentUser.password_reseted) {
                setLoginPageDivClass("LoginPage display-none")
                setNewPasswordDivClass("set-new-password");
            }
            else {
                navigate(`/zbook/${newCurrentUser.type.split(" ").join("/")}/home`)

            }
        }
        else {
            setAlertDivClass("alert")
        }
    }

    function setNewPasswordKeyup(e) {
        const data = new FormData(e.target.parentElement);
        if (data.get("new-password") === data.get("re-new-password") && data.get("new-password").length >= 8) {
            setSetPasswordButtonIsDisabled(false);
        }
        else {
            setSetPasswordButtonIsDisabled(true);
        }
    }

    function setPassword(e) {
        e.preventDefault();
        const data = new FormData(e.target.parentElement);
        dispatch(setPasswordForUser({ id: currentUser.id, password: data.get("new-password") }))
        dispatch(setCurrentUser({ ...currentUser, password: data.get("new-password"), password_reseted: false }))
        navigate(`/zbook/${currentUser.type.split(" ").join("/")}/home`)
    }

    return (
        <div className="LoginPage">
            <div className={loginPageDivClass}>
                <p>Xoş gəlmisiniz</p>
                <form autoComplete='off'>
                    <label htmlFor="username">İstifadəçi adı</label>
                    <input type="text" id="username" name="username" onChange={usernameOnChange} />
                    <label htmlFor="password" name="password">Şifrə</label>
                    <input type="password" id="password" name="password" />
                    <button disabled={loginButtonIsDisabled} onClick={loginButton}>Daxil ol</button>
                </form>
                <div className={alertDivClass}>
                    <p>İstifadəçi adı mövcud deyil və ya şifrə düzgün daxil edilməmişdir.</p>
                </div>
            </div>
            <div className={newPasswordDivClass}>
                <p>Şifrəniz sıfırlanmışdır.<br /> Yeni şifrə təyin edin.</p>
                <form>
                    <label htmlFor="new-password">Yeni şifrə</label>
                    <input type="password" name="new-password" id="new-password" placeholder="Ən az 8 simvol" onChange={setNewPasswordKeyup} />
                    <label htmlFor="re-new-password">Yeni şifrənin təkrarı</label>
                    <input type="password" name="re-new-password" id="re-new-password" placeholder="Ən az 8 simvol" onChange={setNewPasswordKeyup} />
                    <button disabled={setPasswordButtonIsDisabled} onClick={setPassword}>Təsdiq et</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
