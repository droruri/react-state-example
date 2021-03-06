import './App.css';
import React from "react";

const grades = {
    columns: [
        "Math",
        "Physics",
        "Sports"
    ],
    rows: {
        "adam": [
            58, 71, 99
        ],
        "daniel": [
            88, 89, 59
        ],
        "mark": [
            83, 91, 77
        ],
    }
}


function App() {
    return (
        <table>
            <thead>
            <tr>
                <th></th>
                {grades.columns.map(col => <th key={col}>{col}</th>)}
            </tr>
            </thead>
            <tbody>
            {Object.entries(grades.rows).map(([name, grades]) => {
                return (
                    <tr key={name}>
                        <td>{name}</td>
                        {grades.map((grade, index) => <td key={index}>
                            <input defaultValue={grade} type="text"/>
                        </td>)}
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}

export default App;
