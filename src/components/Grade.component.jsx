import React from "react";
import classNames from "classnames";
import {useMemo} from "react";

function Grade({studentName, grade, setGrade, index}) {

    function bla(_newGrade){
        const grade = Number(_newGrade);
        setGrade(studentName, index, grade)
    }

    return useMemo(()=> {
        console.log("render grade "+ grade);
        return (
            <input className={classNames({
                'bad-score': grade < 60,
                'mid-score': grade >= 60 && grade < 80,
                'good-score': grade >= 80
            })} value={grade} type="number" onChange={(event)=>bla(event.target.value)} min={0} max={100}/>
        )
    }, [grade])
}

export default Grade
