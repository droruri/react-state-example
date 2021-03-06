import React, {useState} from "react";
import {grades} from "./gradesStub";
import GradesHeader from "./components/GradesHeader.component";
import StudentRow from "./components/StudentRow.component";
import {cloneDeep} from "lodash";

function GradesTable() {
    const [tempGrades, setTempGrades] = useState(grades);
    const rows = Object.entries(tempGrades.rows);

    function updateGrade(studentName, index, grade){
        const bla = cloneDeep(tempGrades);
        bla.rows[studentName][index] = grade;
        setTempGrades(bla);
    }

    function print(){
        console.log(tempGrades.rows)
    }

    return (
        <React.Fragment>
            <table>
                <thead>
                    <GradesHeader cols={tempGrades.columns}/>
                </thead>
                <tbody>
                    {rows.map(([name, grades]) =>
                        <StudentRow setGrade={updateGrade} key={name} name={name} grades={grades}/>
                    )}
                </tbody>
            </table>
            <button onClick={print}>press</button>
        </React.Fragment>
    );
}

export default GradesTable;
