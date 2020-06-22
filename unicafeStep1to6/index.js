import React, { useState }from 'react';
import ReactDOM from 'react-dom';

const Statistic =({text, value}) => {
return(
  <tr>
  <td>{text}</td>
  <td>{value}</td>
  </tr>
  )
}

const Statistics = (props) =>{
  if (props.all === 0){
    return(
    <div>no feedback given</div>
    )
  }
  
  return(
    <table>
    <tbody>
    <Statistic text="good" value ={props.good}/>
    <Statistic text="neutral" value={props.neutral} />
    <Statistic text="bad" value={props.bad} />
    <Statistic text="all" value={props.all}/>
    <Statistic text="average" value={props.average}/>
    <Statistic text="positive" value={props.positive}/>
    </tbody>
    </table>
  )
}

const Button =({ handleclick, text })=>{
  return(
    <button onClick={handleclick}>{text}</button>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const average = (good*1.00 + neutral*0 + bad*-1.00)/all
  const positive = (good/all)*100.00 + "%"

  return(
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleclick={()=> setGood(good+1)} text={'good'}/>
        <Button handleclick={()=> setNeutral(neutral+1)} text={'neutral'}/>
        <Button handleclick={()=> setBad(bad+1)} text={'bad'}/>
        </div>  
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} 
      average={average} positive={positive}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))