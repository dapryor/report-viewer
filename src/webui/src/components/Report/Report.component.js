import React, { useEffect } from 'react';
import {
    useRouteMatch,
    useParams
    
  } from "react-router-dom";


import {DiffViewList} from '../DiffViewList/DiffViewList.component'
import "../Report/Report.styles.css"

export const Report = ({buttonChoice}) => {
    let match = useRouteMatch();
    let {reportName} = useParams()
    const [reportData, setReportData] = React.useState({
        reportName: "",
        results: []
    })
    console.log(match)
    console.log(match.url)
    console.log(reportName)
    useEffect(() => {
        fetch(`/compliance-reports/${reportName}.json`)
        .then((res) => res.json())
        .then((data) => {
            setReportData(data)
            
        })
    }, [reportName])

    return (
        <div className="report-root">
            <h1>{reportData.reportName}</h1><p>{reportData.reportName}</p>
            <h3>Run Time: </h3><p>2020-08-03 12:00:00</p>
            <p>Report Data: {JSON.stringify(reportData)}</p>
            <DiffViewList reportData={reportData} buttonChoice={buttonChoice} />  
        </div>
    )
}
