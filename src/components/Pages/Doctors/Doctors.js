import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";
import OurDoctor from "../OurDoctor/OurDoctor";
import './Doctors.css';

function Doctors() {
    const [doctors, setDoctors] = useState([]);
    useEffect( ()=> {
        fetch("data.json")
        .then(res => res.json())
        .then((data) => setDoctors(data))
    }, [])
    const [ourDoctors, setOurDoctors] = useState([]);
    useEffect( ()=> {
        fetch("doctor.json")
        .then(res => res.json())
        .then((data) => setOurDoctors(data))
    }, [])
   
    return (
      <div className="doctor">
            <div>
            <h1>Our Chief Doctors</h1>
          <div className="map">
          {
               doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
           }
          </div>
           <h1>Our Doctors</h1>
           <div className="map">
          {
               ourDoctors.map(ourDoctor => <OurDoctor ourDoctor={ourDoctor}></OurDoctor>)
           }
          </div>
          <h1>Physicians List</h1>
          {/* Table */}
        </div>
      </div>
    );
}

export default Doctors;

