import React from "react";
import classNames from "classnames";

function Avg({grades}) {
    const avg = grades.reduce((a, b) => a + b) / grades.length;
    return (
        <div className={classNames({
            'bad-score': avg < 60,
            'mid-score': avg > 60 && avg < 80,
            'good-score': avg > 80
        })}>{avg}</div>
    )
}

export default Avg;
