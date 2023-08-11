import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const Navigate = useNavigate();
    const clickHandler = (e) => {
        e.preventDefault();
        Navigate('/login');
    }

    return (
        <section id='Core-part'>
            <nav className="navbar-expand">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img style={{ height: 120, width: 160 }} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                    </Link>
                </div>

                <div className='section-2' >
                    <select className='backg' >
                        <option value="ENGLISH">ENGLISH</option>
                        <option value="HINDI">HINDI</option>
                    </select>
                    <button className="btn" onClick={clickHandler}>Signin</button>
                </div>


            </nav>
            <div className="banner">
                <div className="banner__contents">
                    <h1 className="banner__title">Ginny &amp; Georgia</h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button button">My List</button>
                    </div>
                    <p className="banner__description">
                        Angsty and awkward fifteen year old Ginny Miller often feels more
                        mature than her thirty year old mother, the irresistible and dynamic
                        Georgia Miller...
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Header
