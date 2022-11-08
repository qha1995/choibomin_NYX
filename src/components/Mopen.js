import React, { useState } from 'react'
import '../css/Mopen.css'


const Mopen = ({ os, setOs }) => {

    return (

        <div className={`mopen ${os ? "os" : ""}`} onClick={() => setOs(!os)}>
            <button>모바일메뉴열기</button>
        </div >

    )
}

export default Mopen

