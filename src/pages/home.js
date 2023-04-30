import React from "react";
import TeacherCard from "./teacherCard";
import Navbar from "./navbar";
import Attendance from "./attendance";

const Home= ()=> {


    const teachers = [
        {
            id: 1,
            name: "Dr Rabnawaz",
            img: process.env.PUBLIC_URL + '/asset/sirrabnawaz.png',
            job: "Lecturer CS ",

        },
        {
            id: 1,
            name: "Muhammad Ali",
            img: process.env.PUBLIC_URL + '/asset/sirali.jpg',
            job: "Lecturer CS ",
            
        },
        {
            id: 2,
            name: "Mukhiar Zamin",
            img: process.env.PUBLIC_URL + '/asset/Sirmukhtiar.png',
            job: "Lecturer CS ",
            
        },
        {
            id: 3,
            name: "Sana Malik",
            img: process.env.PUBLIC_URL + '/asset/mamlogo.png',
            job: "Lecturer CS ",
            
        },
        {
            id: 4,
            name: "Laila Bibi",
            img: process.env.PUBLIC_URL + '/asset/mamlogo.png',
            job: "Lecturer CS ",
            
        }
    ]
    return(
        
              
<div className="container">


        <section class="main"/>
            <div class="main-top">
                <h1>Attendance</h1>

            </div>
            <div class="user">
            {teachers.map((teacher)=> <TeacherCard teacher = {teacher}/>)}

                
            </div>
            <div class="atd"><img src="atd.jpg" alt=""/></div>
          </div>
        
        
    );
}



export default Home