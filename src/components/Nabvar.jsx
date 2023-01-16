import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './postCSS/Nabvar.module.css'
import { BsSearch } from 'react-icons/bs';
import { ImYoutube } from 'react-icons/im';
import { useQueryClient } from '@tanstack/react-query';


export default function Navbar({searchUrl}) {
    const [text, setText] = useState('');
    const client = useQueryClient();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&key=`
        const url = 'data/bts.json';
        searchUrl(url);
        //client.invalidateQueries(['top-videos'])
    }

    return (
        <header className={style}>
            <Link to='/' className={style.maintext}><ImYoutube className={style.mainlogo}/>YouTube</Link>
            <form className={style.form} onSubmit={handleSubmit}>
                <input type='text' className={style.input} value={text} onChange={handleChange}/>
                <button className={style.button}><BsSearch/></button>
            </form>
        </header>
    );
}