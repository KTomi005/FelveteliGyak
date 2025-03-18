import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TablazatAgazat from "./TablazatAgazat";

function Select() {
    const [agazatok, setAgazatok] = useState([]);
    const [selectedAgazat, setSelectedAgazat] = useState("");
    const [agazatDetails, setAgazatDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/agazatok")
            .then(response => {
                const uniqueAgazatok = [...new Set(response.data.map(item => item.Ágazat))];
                setAgazatok(uniqueAgazatok);
            })
            .catch(error => console.error("Hiba az adatok lekérésekor:", error));
    }, []);

    const handleSelect = async (event) => {
        const akod = event.target.value;
        setSelectedAgazat(akod);
        
        if (!akod) {
            setAgazatDetails(null);
            return;
        }
        
        if (!akod) {
            setAgazatDetails(null);  // Fixed: was setSelectedAgazat
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3001/felvettek/:agazat`); // Changed to /felvettek
            setAgazatDetails(response.data);
        } catch (error) {
            console.error("Hiba történt a szoba adatainak lekérésekor:", error);
            setAgazatDetails(null);
        }
    };

    return (
        <div>
           
           
                <div>
    
                    
                </div>
         
        </div>
    );
}

export default Select;