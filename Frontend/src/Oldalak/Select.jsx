import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Select() {
    const [agazatok, setAgazatok] = useState([]);
    const [selectedAgazat, setSelectedAgazat] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/agazatok")
            .then(response => {
                const uniqueAgazatok = [...new Set(response.data.map(item => item.Ágazat))];
                setAgazatok(uniqueAgazatok);
            })
            .catch(error => console.error("Hiba az adatok lekérésekor:", error));
    }, []);

    const handleChange = (event) => {
        setSelectedAgazat(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedAgazat) {
            navigate(`/felvettek/${selectedAgazat}`);
        }
    };

    return (
        <div>
            <label>Válassza ki, melyik ágazat adatait szeretné látni:</label>
            <select value={selectedAgazat} onChange={handleChange}>
                <option value="">Válasszon...</option>
                {agazatok.map((agazat, index) => (
                    <option key={index} value={agazat}>{agazat}</option>
                ))}
            </select>
            <button onClick={handleSubmit}>Adatok</button>
        </div>
    );
}

export default Select;
