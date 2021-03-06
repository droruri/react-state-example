import React, {useMemo} from "react";
import classNames from "classnames";

function Avg({grades}) {
    return useMemo(()=> {
        const avg = grades.reduce((a, b) => a + b) / grades.length;
        console.log('render avg ' + grades.join(','))

        return (
            <div className={classNames({
                'bad-score': avg < 60,
                'mid-score': avg > 60 && avg < 80,
                'good-score': avg > 80
            })}>{avg}</div>
        )
    }, [grades])
}

export default Avg;
