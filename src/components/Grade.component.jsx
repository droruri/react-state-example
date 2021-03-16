import React, {useContext, useState, useEffect} from "react";
import classNames from "classnames";
import {GradesContext} from "../GradesContext";

const Grade = (({grade, name, index}) => {
    const [_grade, _setGrade] = useState(grade)
    const context = useContext(GradesContext);

    function onValChange(val) {
        const grade = Number(val.target.value);
        _setGrade(grade)
        context.updateGrade(name, index, grade)
    }

    useEffect(()=>{
        console.log(_grade);
    },[_grade])



    return (
        <input className={classNames({
            'bad-score': _grade < 60,
            'mid-score': _grade >= 60 && _grade < 80,
            'good-score': _grade >= 80
        })} value={_grade}
               onChange={onValChange}
               type="number" min={0} max={100}/>
    )
})

export default React.memo(Grade,(prev, current)=>{

    const equalityConditions = [
        prev.grade === current.grade
    ]

    return equalityConditions.every(cond => cond === true);

});
