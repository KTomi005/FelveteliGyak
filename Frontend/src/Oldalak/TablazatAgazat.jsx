import { useState, useEffect } from "react";
import axios from "axios";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";

function TablazatAgazat() {
    const [data, setData] = useState([]);  // Az adatok tárolása
    const [loading, setLoading] = useState(true); // Betöltés állapot

    useEffect(() => {
        axios.get('http://localhost:3001/elozetes-rangsor')  // Az API endpoint, amely a rangsort adja vissza
            .then(response => {
                setData(response.data);  // Beállítjuk az adatokat
                setLoading(false);  // Betöltés vége
            })
            .catch(error => {
                console.error("Hiba történt az adatok lekérésekor:", error);
                setLoading(false);
            });
    }, []);

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
                            <tr key={index}>
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