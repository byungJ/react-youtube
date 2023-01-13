import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import style from './postCSS/Nabvar.module.css'
import { BsSearch } from 'react-icons/bs';
import { ImYoutube } from 'react-icons/im';


export default function Navbar({context}) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        // const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=AIzaSyC9UJRHS1DuCbVvT0cREQnucmhhx7nKY7g`
        const url = 'data/bts.json';
        context(url);
    }

    return (
        <nav className={style} onSubmit={submit}>
            <Link to='/' className={style.maintext}><ImYoutube className={style.mainlogo}/>YouTube</Link>
            <form className={style.form}>
                <input type='text' className={style.input} value={text} onChange={handleChange}/>
                <button className={style.button}><BsSearch/></button>
            </form>
        </nav>
    );
}