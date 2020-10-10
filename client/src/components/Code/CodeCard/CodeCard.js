import React from 'react';
import classes from './codecard.module.css';

const CodeCard = (props) => {
    return (
        <div className={classes.Card}>
            <div className={classes.Problem}>
                {props.problem}
            </div>
            <div className={classes.sampleOne}>                
                <div className={classes.sample}>
                    Input 1: {props.sampleInp[0]}
                </div>
                <div className={classes.sample}>
                    Output 1: {props.sampleOup[0]}
                </div>
            </div>
            <div className={classes.sampleTwo}>
                <div className={classes.sample}>
                    Input 2: {props.sampleInp[1]}
                </div>
                <div className={classes.sample}>
                    Output 2: {props.sampleOup[1]}
                </div>
            </div>
        </div>
    );
};

export default CodeCard;