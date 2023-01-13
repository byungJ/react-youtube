import React from 'react';
import { useParams } from 'react-router-dom';

export default function ThumbDetail() {
    const { videoId } = useParams();

    return (
        <div>
            {videoId} 디테일 원투 췍췍~~!!
        </div>
    );
}

