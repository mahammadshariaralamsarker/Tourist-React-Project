import { Fade, Slide,  } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import App from '../App';
import Header from './Header';
import Service from './Service';
import TravelGuides from './TravelGuides';
import { useState } from 'react';
const Home = () => {
    // const [theme, setTheme] = useState('light');
    // const toggleTheme = () => {
    //     setTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode');
    // };
    return (
        <>

        
        {/* <div className={`app ${theme} `}>
            <button onClick={toggleTheme}><label className="flex cursor-pointer  gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
            </button>
        </div> */}
            <div className=''>

                <Fade>
                    <Header></Header>
                </Fade>
                <App></App>

                <Slide>
                <h1 className='text-center font-bold lg:text-5xl text-3xl m-4'>Countries Section</h1>
                <div className='grid lg:grid-cols-6 gap-5 grid-cols-3 m-5'>
                    <Link to="/CountriesSection" className='btn'>Bangladesh</Link>
                    <Link to="/thailand" className='btn '>Thailand</Link>
                    <Link to="/Indonesia" className='btn'>Indonesia</Link>
                    <Link to="/Malaysia" className='btn'>Malaysia</Link>
                    <Link to="/Vietnam" className='btn'>Vietnam</Link>
                    <Link to="/Cambodia" className='btn'>Cambodia</Link>
                </div>
                </Slide>
                <Service></Service>
                <TravelGuides></TravelGuides>

            </div>
        
        </>

    );
};

export default Home;