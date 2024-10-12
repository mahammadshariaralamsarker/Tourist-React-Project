import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from './Providers/UseAuth';
import AuthProvider from './Providers/AuthProvider';
const auth = getAuth();

// import useAuth from './Providers/UseAuth';
const SingIn = () => {
    const { user } = useAuth(AuthProvider)

    const handleRegistrationForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                return <Navigate to="/" ></Navigate>
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode)
                console.log(errorMessage)
            });



    }
    return (
        <>



            <div className="hero min-h-screen ">
                <div className="hero-content border flex-col ">
                    <h1 className='text-6xl font-semibold'>Registor</h1>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
                        <form onSubmit={handleRegistrationForm} className="card-body">
                            <label className="label">
                                <span className="">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" required />
                                <label className="label">
                                    <span className="">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="">
                                    <a href="#" className=" link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registor</button>
                                <NavLink to="/signup">Already Have an Account?</NavLink>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SingIn;