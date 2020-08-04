import React from 'react';
import './InfoBox.css'
import { Card, CardContent, Typography } from '@material-ui/core'

function InfoBox({ title, cases, total, active, isRed, ...props }) {
    return (
        <Card className={`infoBox ${active && isRed && "infoBox--selectedRed" || active && "infoBox--selectedGreen"}`} onClick={props.onClick}>

            <CardContent>
                {/* title */}
                <Typography color="textSecondary">
                    {title}
                </Typography>

                {/* cases */}
                <h2 className={`infoBox__cases ${!isRed && "infoBox--cases"}`}>{cases}</h2>

                {/* total no. of cases */}
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox;

