import React from "react";
import classNames from "classnames";

function Grade({grade}) {
    return (
        <input className={classNames({
            'bad-score': grade < 60,
            'mid-score': grade > 60 && grade < 80,
            'good-score': grade > 80
        })} defaultValue={grade} type="number" min={0} max={100}/>
    )
}

export default Grade
