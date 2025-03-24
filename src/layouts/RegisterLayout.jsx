import React, { useState } from 'react'

// pages 
import Register from "../pages/Register";
import CreatePassword from "../pages/CreatePassword"
import BioPage from "../pages/Bio";

const RegisterLayout = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "Muhammadali",
        username: "mukhamadali.001",
        email: "zokerzokerivic795@gmail.com",
        bio: "",
        password: "12345678",
        avatar: ""
    })

    // next tugmasi bosilganda keyingi form korsatish uchun     
    const nextStep = () => setStep(step + 1);

    // orqaga qaytarish 
    const prevStep = () => setStep(step - 1);

    // add informations 
    const updateform = (data) => setFormData({
        ...formData,
        ...data
    })

    return (
        <div>
            {step === 1 && <Register nextStep={nextStep} formData={formData} updateform={updateform} />}
            {step === 2 && <CreatePassword prevStep={prevStep} nextStep={nextStep} formData={formData} updateform={updateform} />}
            {step === 3 && <BioPage prevStep={prevStep} nexStep={nextStep} formData={formData} updateform={updateform} />}
        </div>
    )
}

export default RegisterLayout