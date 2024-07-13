
import { createContext, useContext, useState } from "react";

const EditFormContext = createContext();

export const EditFormProvider = ({ children }) => {
    const [showForm, setShowForm] = useState(false);
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    const toggleForm = () => {
        setShowForm(prevShowForm => !prevShowForm);
    };

    return (
        <EditFormContext.Provider value={{ showForm, toggleForm, selectedVideoId, setSelectedVideoId }}>
            {children}
        </EditFormContext.Provider>
    );
};

export const useShowForm = () => {
    const context = useContext(EditFormContext);
    if (!context) {
        throw new Error("useShowForm debe ser usado dentro de un EditFormProvider");
    }
    return context;
};

