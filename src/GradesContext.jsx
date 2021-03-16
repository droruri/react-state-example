import * as React from "react";
import {useState} from "react";
import {grades} from "./gradesStub";
import {cloneDeep} from "lodash";
import GradesTable from "./GradesTable.component";

export const GradesContext = React.createContext(grades);

export const GradesWrapper = () => {
    const [_grades, setGrades] = useState(grades);

    function updateGrade(studentName, index, grade){
        const grades = cloneDeep(_grades);
        grades.rows[studentName][index] = Number(grade);
        setGrades(grades);
    }

    return (
        <GradesContext.Provider value={{grades:_grades, updateGrade: updateGrade}}>
            <GradesTable/>
        </GradesContext.Provider>
    )
}
