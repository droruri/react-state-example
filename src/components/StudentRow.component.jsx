import React from "react";
import Grade from "./Grade.component";
import Avg from "./Avg.component";

function StudentRow({name, grades}) {
    return (
        <tr key={name}>
            <td>{name}</td>
            {grades.map((grade, index) => (
                <td key={index}>
                    <Grade name={name} index={index} grade={grade}/>
                </td>
            ))}
            <td><Avg grades={grades}/></td>
        </tr>
    )
}

export default StudentRow
