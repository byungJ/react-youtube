import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Nabvar';
import style from '../components/postCSS/Root.module.css'

export default function Root() {
    
    const [url, setUrl] = useState('data/youtube_keyword.json');

    const searchUrl = (update) => {
        return setUrl(update);
    }

    return (
        <div>
            <Navbar searchUrl={searchUrl}/>
            {/* <div style={{ background: 'blue'}} className={style.div}> */}
                {/* context는 Outlet에서 데이터를 자식에서 넘겨 줄 때 사용 합니다. */}
                <Outlet context={[url, setUrl]}/>
            {/* </div> */}
                
        </div>
    );
}

