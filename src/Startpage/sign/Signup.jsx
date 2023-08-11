import React, { useState } from 'react'
import './Sig.css'
import { Link,  useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase';
import Footer from '../Footer/Footer';
// import app from '../../firebase';
const auth = getAuth(app);
const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const subMit=()=>{
signInWithEmailAndPassword(auth, email, pass).then(auth=>{
if(auth){
    navigate('/database')
}

}).catch(err=>alert('Wrong Email or Password',err))
    }
    return (
        <main id='main' >
            <div>
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" style={{ height: 120, width: 150 }} />
            </div>
            <section id='start'>
                <div style={{ marginTop: '2rem', marginRight: '12rem' }}>
                    <h1 style={{ fontSize: '32px', fontWeight: '500' }} >Sign  In</h1>
                </div>
                <div className='inputbox-2'>
                    <input type="email" placeholder='Email or phone number' value={email} onChange={(e) => setEmail(e.target.value)} />  <br />
                    <input type="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} />

                </div>
                <div className='seco-1'>
                    <button onClick={subMit} >Sign In</button>
                    <div className='radio-sec'>
                        <input type="checkbox" id='readio' /><label htmlFor="readio">Remember me</label> <br />
                        <br /> <p> Need help?</p>

                    </div>
                </div>
                <div className='down-part'>

                    <p style={{ display: 'flex', margin: "1rem 0" }}>New to Netflix? <Link to='/'>Sign up now.</Link></p>

                    <p style={{ width: '75%' }}>This page is protected by Google reCAPTCHA to ensure you're not a  bot. <a href="/">Learn more.</a> </p>
                </div>
            </section>
            <hr />
            <main className='fooder'>
                <p >Questions? Call 000-800-919-1694</p>
               
               
            </main>
            <Footer/>
        </main>

    )
}

export default Signup
