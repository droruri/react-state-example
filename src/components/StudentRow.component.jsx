import React from "react";
import Grade from "./Grade.component";
import Avg from "./Avg.component";

function StudentRow({name, grades, setGrade}) {
    return (
        <tr>
            <td key={name}>{name}</td>
            {grades.map((grade, index) => <td key={index}>
                <Grade studentName={name} index={index} grade={grade} setGrade={setGrade}/>
            </td>)}
            <td key="avg"><Avg grades={grades}/></td>
        </tr>
    )
}

export default StudentRow
