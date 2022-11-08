import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const MainNav = ({ shopList, os, setOs }) => {
    //중복이 제거된 배열 category...
    //https://kyounghwan01.github.io/JS/JSbasic/dupulication-property-remove/#filter
    // example.filter(
    //     (arr, index, callback) => index === callback.findIndex(t => t.id === arr.id)
    //   );
    //const [os, setOs] = useState('');
    const ncate = shopList.filter((itm, idx, it) => idx === it.findIndex(t => t.cate === itm.cate))
    return (
        <ul className='rn'>
            {/* <li><Link to='/'>BRAND</Link></li> */}
            <li onClick={() => setOs(false)}><Link to='/shopList'>SHOPPING</Link></li>
            {
                ncate.reverse().map((ca, idx) => {
                    return ca.cate && <li className='list' key={idx} onClick={() => setOs(false)}><Link to={'/shopList/' + ca.cate}>{ca.cate}</Link></li>
                })
            }
            <li onClick={() => setOs(!os)}><Link to='/board'>CS CENTER</Link></li>
        </ul>
    )
}

export default MainNav