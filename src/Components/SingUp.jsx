import { NavLink, useLocation, useNavigate} from 'react-router-dom';
import useAuth from './Providers/UseAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const SingUp = () => {
    const {goggleLogin,githubLogin} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/home';
    const handleSocialLogin = (socialProvider)=>{
        socialProvider()
        .then(result =>{
            if(result.user){
                navigate(from)
            }
        })
    }
    const handleSingUp = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value; 
        signInWithEmailAndPassword(auth, email, password)
    }
    
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content shadow-2xl flex-col ">
                <h1 className='text-6xl font-semibold'>Log in</h1>
                <div className=" shrink-0 w-full  ">
                    <form onSubmit={handleSingUp} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered  " required />
                            <label className="">
                                <a href="#" className=" link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log in</button>
                            <NavLink to="/signin">Didn't Have an Account?</NavLink>
                        </div>
                    </form>
                        <div className='flex justify-around'>
                            <button onClick={()=>handleSocialLogin(goggleLogin)}  className='btn'>google</button>
                            <button onClick={()=>handleSocialLogin(githubLogin)}  className='btn'>GitHub</button>
                            
                        </div>
                </div>
            </div>

        </div>
    );
};

export default SingUp;