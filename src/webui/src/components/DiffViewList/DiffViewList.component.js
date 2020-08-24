import React from 'react';
import { DiffView } from '../DiffView/DiffView.component'
import Collapsible from 'react-collapsible';

import "./DiffViewList.styles.css"

export const DiffViewList = ({reportData, buttonChoice}) => {
    

    let reportResults = reportData.results.map((result) => {
        const triggerClassName=result.result==='fail'?"fail": "Collapsible__trigger"
        return (
            <Collapsible 
            trigger={result.instanceName} 
            key={result.instanceName}
            lazyRender={true}
            triggerOpenedClassName={triggerClassName}
            triggerClassName={triggerClassName}
            >
                <DiffView
                oldText={result.old}
                newText={result.new}
                buttonChoice={buttonChoice}
                />
            </Collapsible>
            
        )
    })

    return (
        <div>
            
            {reportResults}
        </div>
    )
}