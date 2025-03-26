import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const takeDoc = async () => {
            try {
                const response = await axios.get('http://localhost:5000/profile', { withCredentials: true })
                setUser(response.data)
            } catch (error) {
                console.log(error);
                
            }
        }
        takeDoc()
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };