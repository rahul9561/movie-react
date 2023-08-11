import React, { useState } from 'react'
import './Pass.css'
import { Link,  useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase';
import Footer from '../Footer/Footer';
const auth = getAuth(app);
const Password = () => {
    const navigate = useNavigate();
    const [val, setVal] = useState('');
    const [Eid, setEid] = useState('');
    const [isEmpty, setEmpty] = useState(false);
    const Hadclick = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, Eid, val).then(auth => {
            if (auth) {
                navigate('/signup');
            }
        })
            .catch(getted => setEmpty(true));
    }
const clickPart=()=>{
    navigate('/signup')
}

    return (
        <section>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" style={{ height: 120, width: 150 }} />
                </div>
                <div>
                    <button className='btn-2' onClick={clickPart}>Sign In</button>
                </div>
            </nav>
            <hr />
            <div className='dager'>
                {isEmpty && <p style={{ margin: '1rem 0', width: '28%', fontSize: '1.1rem' }}>Sorry, we are currently unable to complete that action. Please try again later.</p>}
                <div style={{ margin: '1rem 0', width: '28%', fontSize: '1.3rem' }}>
                    <h1>Welcome back! Joining Netflix is easy.</h1>
                </div>
                <p style={{ margin: '1rem 0', width: '28%', fontSize: '1.1rem' }}>Enter your password and you'll be watching in no time.</p>
                <div>
                    <input type='email' value={Eid}  onChange={(e)=>setEid(e.target.value)} placeholder='Email' style={{ border: 'none', outline: 'none' }} />
                    <br />
                    <input type="password" placeholder='Enter the password' value={val} onChange={(e) => setVal(e.target.value)} style={{ outline: 'none' }} />
                    <br />
                    <Link to=''> <p style={{ margin: '1rem 0' }}> Forget password? </p></Link>
                </div>
                <button className='btn' onClick={Hadclick}>Next</button>
            </div>
            <footer className='footer-1'>
                <div>
                    <h1>Questions? Call 000-800-919-1694</h1>
                </div>
               
            <Footer/>
            </footer>
        </section>
    );
}

export default Password
