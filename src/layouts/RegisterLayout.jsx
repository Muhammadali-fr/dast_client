import React, { useContext, useEffect, useState } from 'react'

// react-router-dom 
import { useNavigate } from 'react-router-dom';

// pages 
import Register from "../pages/Register";
import CreatePassword from "../pages/CreatePassword"
import BioPage from "../pages/Bio";
import FinishRegister from "../pages/FinishLogin"

// axios 
import axios from "axios";
import toast from 'react-hot-toast';

// usercontext 
import { UserContext } from '../userContext';

const RegisterLayout = () => {

    // user 
    const { user } = useContext(UserContext);

    // navigate 
    const navigate = useNavigate();

    // states 
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);
    const [step, setStep] = useState(1);

    // register formData 
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        bio: "",
        password: "",
        avatar: null
    });

    useEffect(() => {
        if (user) navigate("/profile");
    }, [navigate, user])

    // register function 
    const handleRegister = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/api/users/", formData, { withCredentials: true });
            toast.success(response.data.message);
            navigate("/profile");
            return;
        } catch (error) {
            // toast.error(error.response.data)
            toast.error("username or email is already used.")
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
            {step === 4 && <FinishRegister loading={loading} handleRegister={handleRegister} preview={preview} prevStep={prevStep} nexStep={nextStep} formData={formData} updateform={updateform} />}
        </div>
    )
}

export default RegisterLayout