import React from "react";
import {grades} from "./gradesStub";
import {useState} from "react";
import GradesHeader from "./components/GradesHeader.component";
import StudentRow from "./components/StudentRow.component";

function GradesTable() {
    const [tempGrades, /*setTempGrades*/] = useState(grades);
    const rows = Object.entries(tempGrades.rows);

    return (
        <table>
            <thead>
                <GradesHeader cols={tempGrades.columns}/>
            </thead>
            <tbody>
            {rows.map(([name, grades]) =>
                <StudentRow name={name} grades={grades}/>
            )}
            </tbody>
        </table>
    );
}

export default GradesTable;
