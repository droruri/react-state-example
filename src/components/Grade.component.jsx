import React from "react";
import classNames from "classnames";
import {useMemo} from "react";

function Grade({grade}) {
    return useMemo(()=> {
        return (
            <input className={classNames({
                'bad-score': grade < 60,
                'mid-score': grade >= 60 && grade < 80,
                'good-score': grade >= 80
            })} value={grade} type="number" min={0} max={100}/>
        )
    }, [grade])
}

export default Grade
