import React from 'react';
import ReactDiffViewer from 'react-diff-viewer'


export const DiffView = (props) => {
    const {oldText, newText, buttonChoice} = props
    return (
    <ReactDiffViewer oldValue={oldText} newValue={newText} splitView={buttonChoice === 'split'} />
    )
}