import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TablazatAgazat from "./TablazatAgazat";

function Select() {
    const { azonosito } = useParams(); // Az URL-ből kivesszük az ágazat azonosítóját
    const [agazatDetails, setAgazatDetails] = useState(null); // Az ágazathoz tartozó részletek

    // Az ágazathoz tartozó diákok adatainak lekérése
    useEffect(() => {
        if (!azonosito) return; // Ha nincs ágazat az URL-ben, nem csinálunk semmit

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/felvettek/${azonosito}`);
                setAgazatDetails(response.data); // A választott ágazathoz tartozó adatok beállítása
            } catch (error) {
                console.error("Hiba történt az ágazat részleteinek lekérésekor:", error);
                setAgazatDetails(null); // Hibakezelés
            }
        };

        fetchData();
    }, [azonosito]); // Ha az ágazat azonosítója változik, újra lefut

    return (
        <div>
            {/* Az ágazathoz tartozó diákok részleteinek megjelenítése */}
            {agazatDetails ? (
                <TablazatAgazat data={agazatDetails} /> // Az ágazathoz tartozó felvettek megjelenítése
            ) : (
                <p>Az adatok betöltése folyamatban...</p>
            )}
        </div>
    );
}

export default Select;
