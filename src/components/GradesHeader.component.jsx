import React from "react";

function GradesHeader({cols}) {
    return (
        <tr>
            <th></th>
            {cols.map(col => <th key={col}>{col}</th>)}
        </tr>
    )
}

export default GradesHeader
