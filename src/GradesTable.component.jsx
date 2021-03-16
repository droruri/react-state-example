import React from "react";
import GradesHeader from "./components/GradesHeader.component";
import StudentRow from "./components/StudentRow.component";
import {useContext} from "react";
import {GradesContext} from "./GradesContext";

function GradesTable() {
    const {grades} = useContext(GradesContext);
    if(grades === null) return null;

    const rows = Object.entries(grades.rows);

    return (
        <table>
            <thead>
                <GradesHeader/>
            </thead>
            <tbody>
            {rows.map(([name, grades]) =>
                <StudentRow key={name} name={name} grades={grades}/>
            )}
            </tbody>
        </table>
    );
}

export default GradesTable;

/*
* pros:
* 1. easier to test each component separately, components are reusable
* 2. no need to use props, just use the useContext hook
* 3. single source of truth, easier to follow when data is updated
* cons:
* 1. less intuitive from angular js,
*    because here we have to update the whole object in order to start the render process
* 2.
* */
