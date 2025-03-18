import { useState, useEffect } from "react";
import axios from "axios";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";

function TablazatAgazat({ selectedAgazat }) {
    const [data, setData] = useState(null); // Initially null to show default message
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!selectedAgazat) {
            setData(null); // Reset data if no agazat is selected
            return;
        }

        setLoading(true); // Start loading state

        axios
            .get(`http://localhost:3001/felvettek/${selectedAgazat}`)
            .then((response) => {
                setData(response.data.length > 0 ? response.data : []); // Set data or empty array if no results
            })
            .catch((error) => console.error("Hiba:", error))
            .finally(() => setLoading(false)); // End loading state
    }, [selectedAgazat]); // Re-run effect when selectedAgazat changes

    return (
        <div>
            <h2 className="text-center my-4">Ágazat felvettek</h2>

            {/* Conditional rendering based on state */}
            {data === null ? (
                <p className="text-center text-muted">Válassz egy ágazatot a felvettek megtekintéséhez.</p>
            ) : loading ? (
                <p className="text-center">Adatok betöltése...</p>
            ) : data.length === 0 ? (
                <p className="text-center text-warning">Nincs felvett tanuló erre az ágazatra.</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Tanuló neve</th>
                            <th className="text-center">Összpontszám</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}> {/* Use index as key if no unique ID is available */}
                                <td>{row.nev}</td>
                                <td className="text-center">{row.osszpont}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default TablazatAgazat;