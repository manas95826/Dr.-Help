import { useState } from "react";
import PatientCard from "./PatientCard";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Patient = () => {
  const { state } = useLocation();
  const [image, setImage] = useState("/assets/defaultpfp.jpg");
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="bg-amber-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            height={200}
            width={200}
            src={image}
            onMouseEnter={() => {
              setImage("/public/assets/qr.png");
            }}
            onMouseLeave={() => {
              setImage("/assets/defaultpfp.jpg");
            }}
            className="max-w-sm rounded-3xl shadow-2xl p-3 m-10"
          />
          <div>
            <h1 className="text-3xl font-bold">{state.name}</h1>
            <p className="py-3 min-w-max">{state.desc}</p>
            <PatientCard
              third="- Allergic to Penicillin; use alternative antibiotics."
              fourth="- History of Hypertension."
              first="- Severe nut allergy."
              second="- Previous surgery for appendicitis in 2018; scar on lower right abdomen."
            ></PatientCard>
            <Link to={"/"} className="btn btn-secondary">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
