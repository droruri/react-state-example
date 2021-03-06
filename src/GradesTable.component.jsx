import React, {useState} from "react";
import {grades} from "./gradesStub";
import classNames from "classnames";
import {cloneDeep} from "lodash";


function GradesTable() {
    const [tempGrades, setTempGrades] = useState(grades);
    const rows = Object.entries(tempGrades.rows);

    function updateGrade(studentName, index, grade){
        const bla = cloneDeep(tempGrades);
        bla.rows[studentName][index] = Number(grade);
        setTempGrades(bla);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    {tempGrades.columns.map(col => <th key={col}>{col}</th>)}
                </tr>
            </thead>
            <tbody>
            {rows.map(([name, grades]) => {
                const avg = grades.reduce((a, b) => a + b) / grades.length;
                return <tr key={name}>
                    <td>{name}</td>
                    {grades.map((grade, index) => <td key={index}>
                        <input className={classNames({
                            'bad-score': grade < 60,
                            'mid-score': grade >= 60 && grade < 80,
                            'good-score': grade >= 80
                        })} defaultValue={grade} onChange={(ev)=>updateGrade(name, index, ev.target.value)} type="number" min={0} max={100}/>
                    </td>)}
                    <td>
                        <div className={classNames({
                            'bad-score': avg < 60,
                            'mid-score': avg >= 60 && avg < 80,
                            'good-score': avg >= 80
                        })}>{avg}</div>
                    </td>
                </tr>
            })}
            </tbody>
        </table>
    );
}

export default GradesTable;



/*
* pros: * no need to pass props to child components
* cons: * pretty big component with lots of logic
*       * non-readable template
*       *
* */
