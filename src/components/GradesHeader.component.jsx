import React, {useContext} from "react";
import {GradesContext} from "../GradesContext";

function GradesHeader() {
    const {grades} = useContext(GradesContext);

    return (
        <tr>
            <th></th>
            {grades.columns.map(col => <th key={col}>{col}</th>)}
        </tr>
    )
}

export default GradesHeader
