import React, { useEffect, useRef, useState } from 'react'
import MainNav from './MainNav'
import '../css/Header.scss'
import { FiShoppingCart, FiUserPlus, FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const Header = ({ cart, shopList, searchInput, setSearchInput, search, setSearch, os, setOs }) => {
    const [on, setOn] = useState(false);
    const HD = useRef(null);
    useEffect(() => {
        const scrollEvent = () => {
            let sct = window.scrollY;
            sct > 0 ? setOn(true) : setOn(false)
        }
        const stopEvent = e => {
            e.preventDefault();
        }
        window.addEventListener('scroll', scrollEvent);
        HD.current.addEventListener('wheel', stopEvent);
        return () => {
            window.removeEventListener('scroll', scrollEvent);
            HD.current.removeEventListener('wheel', stopEvent);
        }
    }, [])
    //const [os, setOs] = useState(false);
    return (
        <header className={`Header ${on ? 'on' : ''}  ${os ? 'os' : ''}  `} ref={HD}>
            <div className='gnb'>
                <h1>
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/assets/img/top_logo.png'} alt="" />
                    </Link>
                </h1>
                <nav className='inner'>
                    <MainNav shopList={shopList} os={os} setOs={setOs} />
                </nav>
                <ul className="rt">
                    <li ><FiUserPlus /></li>
                    <li>
                        <Link to="/cart">
                            <FiShoppingCart />
                            <span>{cart.length}</span>
                        </Link>
                    </li>
                    <li>
                        <div className='search'>
                            <SearchForm searchInput={searchInput} setSearchInput={setSearchInput} search={search} setSearch={setSearch} />
                        </div>
                        <FiSearch />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header