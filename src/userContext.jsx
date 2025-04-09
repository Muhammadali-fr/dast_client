import React, { createContext, useState, useEffect, useContext } from "react";

// axios 
import axios from "axios";

// toast 
import toast from "react-hot-toast";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const takeDoc = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/profile`, { withCredentials: true });
                setUser(response.data);
            } catch (error) {
                setUser(null);
                // toast.error("Foydalanuvchi ma’lumotlarini olishda xatolik yuz berdi.");
                console.log(error);
            }
        };
        takeDoc();
    }, []);
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
