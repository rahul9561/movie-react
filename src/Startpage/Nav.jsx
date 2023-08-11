import React from 'react'
import './Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRef } from 'react';
import Footer from './Footer/Footer';

const Nav = () => {
    const [text, setText] = useState(false);
    const [text1, setText1] = useState(false);
    const [text2, setText2] = useState(false);
    const [text3, setText3] = useState(false);
    const [text4, setText4] = useState(false);
    const textOpen = () => {
        if (text === false) {
            setText(true)
            setText1(false)
            setText2(false)
            setText3(false)
            setText4(false)
        }
        else {
            setText(false)
        }
    }
    const textOop = () => {
        if (text1 === false) {
            setText(false)
            setText1(true)
            setText2(false)
            setText3(false)
            setText4(false)
        }
        else {
            setText1(false)
        }
    }
    const textClose = () => {
        if (text2 === false) {
            setText(false)
            setText1(false)
            setText3(false)
            setText4(false)
            setText2(true)
        }
        else {
            setText2(false)
        }
    }
    const textCodi = () => {
        if (text3 === false) {
            setText3(true)
            setText4(false)
            setText(false)
            setText1(false)
            setText2(false)
        }
        else {
            setText3(false)
        }
    }
    const textPort = () => {
        if (text4 === false) {
            setText4(true)
            setText(false)
            setText1(true)
            setText2(false)
            setText3(false)
        }
        else {
            setText4(false)
        }
    }
    const Ref = useRef();
    const [email, setEmail] = useState('');
    const [fun, setFun] = useState(false);
    const navigate = useNavigate();
    
    const Getstart = (event) => {
        if (email) {

            event.preventDefault();
            navigate('/password', { state: { valu: email } });
        }
        else {
            Ref.current.focus();
            setFun(true);
        }

    }
    return (
        <>
            <div id='readyfor'>
                <nav className='navbar'>
                    <div>
                        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" style={{ height: 120, width: 160 }} />
                    </div>
                    <div className='section-2' >
                        <select className='backg' >
                            <option value="ENGLISH">ENGLISH</option>
                            <option value="HINDI">HINDI</option>
                        </select>
                        <Link to='/signup'> <button >Sign In</button></Link>
                    </div>
                </nav>
                <main id='second-2'>

                    <div className='ready-for '>
                        <h1 style={{ textAlign: 'center' }}> Unlimited movies, TV shows and more</h1>
                        <p style={{ textAlign: 'center', margin: '1rem 0' }}>Watch anywhere. cancer anytime.</p>
                        <p style={{ textAlign: 'center' }}>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div className='ready-for thory' style={{ textAlign: 'center', margin: '1rem 0' }}>
                        <input type="email" ref={Ref} name='email' placeholder='Enter email address' required className='input-box' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button onClick={Getstart}>Get Started  </button>
                        {fun && <p style={{ color: 'red', fontSize: '1.2rem' }}>Email is  required.</p>}
                    </div>
                </main>
            </div>
            <hr style={{ height: '8px', background: 'gray' }} />
            <section id='srcod-lov'>
                <div className='text-part'>
                    <h1>Enjoy on your TV</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='video-part'>

                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />

                </div>

            </section>
            <hr style={{ height: '8px', background: 'gray' }} />

            <section id='srcod-lov'>
                <div className='video-part'>

                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />

                </div>
                <div className='text-part'>
                    <h1>Download your shows to watch offline</h1>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>


            </section>
            <hr style={{ height: '8px', background: 'gray' }} />

            <section id='srcod-lov'>
                <div className='text-part'>
                    <h1>Watch everywhere</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className='video-part'>

                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />

                </div>

            </section>
            <hr style={{ height: '8px', background: 'gray' }} />
            <section id='srcod-lov'>
                <div className='video-part'>

                    <img src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />

                </div>
                <div className='text-part'>
                    <h1>Create profiles for kids</h1>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>


            </section>
            <hr style={{ height: '8px', background: 'gray' }} />
            <footer className='footer-section'>
                <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '800', marginBottom: '2rem' }}>Frequently Asked Questions</h1>
                <div className='footer-text' onClick={textOpen}>
                    <h2>What is Netflix</h2>
                    {text && <div>
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                        <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>

                    </div>}
                </div>
                <div className='footer-text' onClick={textOop}>
                    <h2>How much does  Netflix cost?</h2>

                    {text1 && <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 649 to ₹ 149 a month. No extra costs, no contracts.</p>}

                </div>
                <div className='footer-text' onClick={textClose}>
                    <h2>Where can I watch?</h2>
                    {text2 && <div>
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                        <p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>}
                </div>
                <div className='footer-text' onClick={textCodi}>
                    <h2>What  can I watch on Netflix?</h2>

                    {text3 && <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>}

                </div>
                <div className='footer-text' onClick={textPort}>
                    <h2>Is Netflix good for kids?</h2>
                    {text4 && <div>
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                        <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                    </div>}
                </div>
                <div className='ready-for thory' style={{ textAlign: 'center', margin: '3rem 0' }}>
                    <h3 style={{ margin: '1rem 0', fontWeight: '180' }}>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <input type="email" ref={Ref} name='email' placeholder='Enter email address' required className='input-box' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={Getstart}>Get Started  </button>
                    {fun && <p style={{ color: 'red', fontSize: '1.2rem' }}>Email is  required.</p>}
                </div>
                <hr style={{ height: '8px', background: 'gray' }} />
            </footer>
            <Footer/>
        </>
    )
}

export default Nav;
