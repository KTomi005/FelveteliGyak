import { useState, useEffect } from "react";
import axios from "axios";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";

function TablazatAgazat() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/elozetes-rangsor')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Hiba történt az adatok lekérésekor:", error);
                setLoading(false);
            });
    }, []);

    // Véletlenszerű szín generálása (világos pasztell színek)
    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 106) + 150; // 150-255 között, hogy világos legyen
        const g = Math.floor(Math.random() * 106) + 150;
        const b = Math.floor(Math.random() * 106) + 150;
        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Tanuló neve</th>
                        <th>Ágazat</th>
                        <th>Összes pontszám</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((diak, index) => (
                        <tr key={index} style={{ backgroundColor: getRandomColor() }}>
                            <td>{diak['Tanuló neve']}</td>
                            <td>{diak['Ágazat']}</td>
                            <td>{diak['osszpont']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablazatAgazat;