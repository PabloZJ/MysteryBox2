import React from 'react';
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (activeUser) setUser(activeUser);
    }, []);

    const register = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === email)) {
        return { success: false, message: "El email ya está registrado" };
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
    };

    const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(u => u.email === email && u.password === password);
    if (existingUser) {
        setUser(existingUser);
        localStorage.setItem("activeUser", JSON.stringify(existingUser));
        return { success: true };
    }
    return { success: false, message: "Email o contraseña incorrectos" };
    };

    const logout = () => {
    setUser(null);
    localStorage.removeItem("activeUser");
    };

    return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);