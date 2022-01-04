import React from 'react';
import { FaUserMd, FaFacebook, FaGooglePlus, FaLinkedin, FaTwitter } from "react-icons/fa";

const OurDoctor = (props) => {
    const {name, img, detail, sub, title, email} = props.ourDoctor;
    return (
        <div className='doctor-card'>
            <div className='doctor-container'>
            <img src={img} alt="" />
           <div>
           <h2 className='name'><span className='icon'><FaUserMd/></span> {name} <span className='sub'>{sub}</span></h2>
            <p className='detail'>{detail}</p>
            <h5 className='title'>{title}</h5>
            <p className='email'>Email: <span>{email}</span></p>
          <div className='more-icon'>
            <a href="/doctors"><FaFacebook className='fa'/></a>
            <a href="/doctors"><FaGooglePlus className='fa'/></a>
            <a href="/doctors"><FaLinkedin className='fa'/></a>
            <a href="/doctors"><FaTwitter className='fa'/></a>
          </div>
           </div>
        </div>
        </div>
    );
};

export default OurDoctor;