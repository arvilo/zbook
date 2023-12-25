import React, { useState } from 'react'
import Header from './Header'
import './CreateFaculity.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createFaculityR } from '../config/universitySlice.js';

const CreateFaculity = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [alert, setAlert] = useState(false);
    const [cratedFaculity,setCratedFaculity] = useState(false);

    const faculties = useSelector(state => state.university.faculties);
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

    function submit(e) {
        e.preventDefault();
        let data = new FormData(e.target);
        if (!faculties.find(item => item.name.toLowerCase() === removeAdditonalSpaces(data.get("name")).toLowerCase())) {
            if (!faculties.find(item => item.symbol === data.get("symbol"))) {
                if (canBeName(data.get("dean-name"))) {
                    if (canBeName(data.get("dean-surname"))) {
                        if (canBeName(data.get("dean-father"))) {
                            if (data.get("symbol").toUpperCase() === data.get("symbol")) {
                                const newFaculity = {
                                    name: data.get("name"),
                                    symbol: data.get("symbol"),
                                    dean: {
                                        name: data.get("dean-name"),
                                        surname: data.get("dean-surname"),
                                        father: data.get("dean-father"),
                                        gender: data.get("dean-gender"),
                                        birth: data.get("dean-birth").split("-").join("/")
                                    }
                                }
                                dispatch(createFaculityR(newFaculity));
                                setCratedFaculity(newFaculity);
                                return
                            }
                        }
                    }
                }
            }
        }
        setAlert(true)

    }

    return (
        <div className='CreateFaculity'>
            <Header />
            <div className={cratedFaculity ? "blur-cover main" : "main"}>
                <h1>Yeni fakültə</h1>
                <form autoComplete='off' onSubmit={submit}>
                    <label htmlFor="name">Fakültənin adı</label>
                    <input type="text" name='name' required />
                    <label htmlFor="symbol">Fakültə adının qısaltması</label>
                    <input type="text" name='symbol' required />
                    <label>Dekan</label>
                    <label htmlFor="dean-name">Ad</label>
                    <input type="text" name='dean-name' required />
                    <label htmlFor="dean-surname">Soyad</label>
                    <input type="text" name='dean-surname' required />
                    <label htmlFor="dean-father">Ata adı</label>
                    <input type="text" name='dean-father' required />
                    <label htmlFor="dean-birth">Təvəllüd</label>
                    <input type="date" name='dean-birth' required />
                    <label className='gender'>
                        <label htmlFor="m" className='gender'>Kişi
                            <input type="radio" name="dean-gender" value="m" id="m" required />
                        </label>
                        <label htmlFor="f" className='gender'>Qadın
                            <input type="radio" name="dean-gender" value="f" id="f" required />
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
                cratedFaculity && (
                    <div className='created'>
                        <h6>Fakültə uğurla yaradıldı</h6>
                        <p>Fakültə dekanının istifadəçi adı: {users.find(user => user.id === faculties.find(item => item.symbol === cratedFaculity.symbol).dean_id).username}</p>
                        <p>Fakültə dekanının şifrəsi: '{users.find(user => user.id === faculties.find(item => item.symbol === cratedFaculity.symbol).dean_id).password}'</p>
                        <button onClick={goToBack}>Çıxış</button>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default CreateFaculity
