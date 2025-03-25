import React, { useState } from 'react'

// pages 
import Register from "../pages/Register";
import CreatePassword from "../pages/CreatePassword"
import BioPage from "../pages/Bio";
import FinishRegister from "../pages/FinishLogin"

// axios 
import axios from "axios";
import toast from 'react-hot-toast';

const RegisterLayout = () => {
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);


    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        bio: "",
        password: "",
        avatar: null
    });

    const handleRegister = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/api/users/", formData)
            console.log(response);

            toast.success("uraaaa")
        } catch (error) {
            console.log(error);
            toast.error("error while registering.")
        } finally {
            setLoading(false);
        }
    }

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
            {step === 3 && <BioPage setPreview={setPreview} preview={preview} prevStep={prevStep} nextStep={nextStep} formData={formData} updateform={updateform} />}
            {step === 4 && <FinishRegister handleRegister={handleRegister} preview={preview} prevStep={prevStep} nexStep={nextStep} formData={formData} updateform={updateform} />}
        </div>
    )
}

export default RegisterLayout