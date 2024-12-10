// import React from "react";
// import CountUp from "react-countup";
// import "../styles/homecircles.css";

// const HomeCircles = () => {
//   return (
//     <section className="container circles">
//       <div className="circle">
//         <CountUp
//           start={0}
//           end={1000}
//           delay={0}
//           enableScrollSpy={true}
//           scrollSpyDelay={500}
//         >
//           {({ countUpRef }) => (
//             <div className="counter">
//               <span ref={countUpRef} />+
//             </div>
//           )}
//         </CountUp>
//         <span className="circle-name">
//           Satisfied
//           <br />
//           Patients
//         </span>
//       </div>
//       <div className="circle">
//         <CountUp
//           start={0}
//           end={250}
//           delay={0}
//           enableScrollSpy={true}
//           scrollSpyDelay={500}
//         >
//           {({ countUpRef }) => (
//             <div className="counter">
//               <span ref={countUpRef} />+
//             </div>
//           )}
//         </CountUp>
//         <span className="circle-name">
//           Verified
//           <br />
//           Doctors
//         </span>
//       </div>
//       <div className="circle">
//         <CountUp
//           start={0}
//           end={75}
//           delay={0}
//           enableScrollSpy={true}
//           scrollSpyDelay={500}
//         >
//           {({ countUpRef }) => (
//             <div className="counter">
//               <span ref={countUpRef} />+
//             </div>
//           )}
//         </CountUp>
//         <span className="circle-name">
//           Specialist
//           <br />
//           Doctors
//         </span>
//       </div>
//     </section>
//   );
// };

// export default HomeCircles;



import React from "react";
import "../styles/homecircles.css";
import img1 from '../images/img01.jpg'
import img2 from '../images/img02.jpg'
import img3 from '../images/img03.jpg'

const HomeCircles = () => {
  // Example data for doctors
  const doctors = [
    {
      id: 1,
      name: " Dr. Aisha Singh",
      specialization: "Cardiologist",
      experience:"6+ Years",
      image: img1, // Replace with actual image path
    },
    {
      id: 2,
      name: "Dr. Nalini Rao",
      specialization: "Dermatologist",
      experience:"10+ Years",
      image: img2, // Replace with actual image path
    },
    {
      id: 3,
      name: "Dr. Rohan Sharma",
      specialization: "Neurologist",
      experience:"7+ Years",
      image: img3, // Replace with actual image path
    },
  ];

  return (
    <section className="container circles">
      {
        console.log(doctors[0].image)
        
      }
      {doctors.map((doctor) => (
        <div className="circle" key={doctor.id}>
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <span className="doctor-name">{doctor.name}</span>
          <span className="doctor-specialization">{doctor.specialization}</span>
          <span className="doctor-experience">{doctor.experience}</span>
        </div>
      ))}
    </section>
  );
};

export default HomeCircles;

