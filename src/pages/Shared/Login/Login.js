// THis is use for Import Section
import React, { useState } from 'react';
import { Container} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";
import initializeAuthentication from '../../../firebase/firebase.init';
import useAuth from '../../../hooks/useAuth';

// This is use for inilialize authentication firebase
initializeAuthentication()

// This is log in route or page or section
const Login = () => {
    // Here i use useAuth to set the data from the outer file or section
    const {signInWithGoogle} = useAuth();
    const auth = getAuth(); 
    
    // Here i use useState to get new update in the dom
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [isLogin, setIsLogin] = useState(false)
    console.log(user)
    const  [loading, setLoading] = useState(true);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './home';

    // THis is use for handleGoogleLogin Button
    const handleGoogleLogIn =() =>{
        signInWithGoogle()
        .then(result => {
            history.push(redirect_uri)
            setUser(result.user)
        })
        .finally(()=>setLoading(false))
    }
    // This is user for handle form submit. It will use for registration and login in the website
    const handleFormSubmit = e =>{
        e.preventDefault();
        console.log(email, password)
        setLoading(true);
        if(password.length <6){
            setError('Password must be a least 6 Characters long');
            return
        }
        // This is dynamicaliy use to get better view
       isLogin ? processLogin(email, password) : createNewUser(email, password)
    };

    // this is use for processing Login info
    const processLogin = (email, password) =>{
        signInWithEmailAndPassword (auth, email, password)
        .then(result => {
            history.push(redirect_uri)
            setUser(result.user||result.email)
        })
        .catch(error)
        .finally(()=>setLoading(false))
    }

    // This is use for create new user in the website.
    const createNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            history.push(redirect_uri)
            setUser(result.user||result.email)
        })
        .catch(error => {
            setError('You are Already Register. Please Login');
          })
        .finally(()=>setLoading(false))
            
    }

    const handleEmailBlur = e  =>{
        setEmail(e.target.value)
    }
    const handlePassWordBlur = e =>{
        setpassword(e.target.value)
    }
    // THis seciton use for toglein the register and login
    const togleLogin = e =>{
            setIsLogin(e.target.checked)
            console.log(e.target.checked)
    }

    return (
        <Container>
            <div className="my-5 py-5">

            <div className="px-5 mx-5">

                {/* This is user for form  that is dynamic  */}
            <form onSubmit={handleFormSubmit}>
                <h4 className="text-info">Please {isLogin ? 'Login' : 'Register'}</h4>
  <div className="mb-3">
      {/* THis is Email filed */}
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onBlur={handleEmailBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
      {/* THis is password filed */}
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onBlur={handlePassWordBlur} type="password" className="form-control" id="exampleInputPassword1" required/>
  </div>
  <div className="text-danger">
      {error}
  </div>
  <div className="mb-3 form-check">
      {/* This is use for toogle login check book */}
    <input onChange={togleLogin} type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Allready Registered?</label>
  </div>
  <button type="submit" className="btn btn-primary">{isLogin ? 'Login' :  'Register As A New User'}</button>
</form>
            </div>

            {/* This is use for singin in using google button */}

                <div>
                        <div className="my-2  ps-5 ms-5 py-2">
                        <button onClick={handleGoogleLogIn} className="btn btn-info">
                        Login In With Google
                        </button>
                        </div>
                </div>

            </div>
        </Container>
    );
};

export default Login;