import React from 'react';
import router from 'next/router';
export default function(){
    return (
        <div>
            <p>Profile</p>
            <button onClick={()=>router.back()}>返回</button>
        </div>
    )
}