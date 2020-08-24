import React from 'react'
import { hot } from 'react-hot-loader'
import NsoWrapper from './NsoWrapper'
import { Report } from './Report/Report.component'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom"

const App = () => {
  const [buttonChoice, setButtonChoice] = React.useState('split')
  const handleChoice = (event, newButtonChoice) => {
    console.log(newButtonChoice)
    if (!(newButtonChoice===null)) {
      setButtonChoice(newButtonChoice)
    }
  }

  const buttons = [
      {
      id:1,
      value: "split"
      },
      {
      id: 2,
      value: "unified"
      }
  ]

    return (

      <Router basename='/custom/tme-demo-ui'>
      <NsoWrapper>
        <div className="main-content">
        <Route path="/:reportName">
          <Report buttonChoice={buttonChoice} />
        </Route>
        </div>
      </NsoWrapper>
        </Router>
    )
}


export default App
