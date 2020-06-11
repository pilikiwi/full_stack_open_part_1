import React from 'react'
import ReactDOM from 'react-dom'

const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = (course) =>{
  return(
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

const Part = (parts) =>{
  return(
    <div>
      <p>{parts.part} {parts.number}</p>
    </div>
  )
}

const Content =() =>{
  return(
    <div>
      <Part part={part1} number={exercises1}/>
      <Part part={part2} number={exercises2}/>
      <Part part={part3} number={exercises3}/>
    </div>
  )
}

const Total =(sum) =>{
  return(
    <div>
      <p>Number of exercises: {sum.numbers}</p>
    </div>
  )
}

const App = () =>{
  const course = 'Half Stack application development'


  return(
    <div>
      <Header course={course}/>
      <Content />
      <Total numbers={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))