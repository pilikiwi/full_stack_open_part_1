import React from 'react'
import ReactDOM from 'react-dom'

const Header = (course) =>{
  return(
    <div>
      <h1>{course.course}</h1>
    </div>
  )
}

const Content =(content) =>{
  return(
    <div>
      <p>{content.part} {content.number}</p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header course={course}/>
      <Content part={part1} number={exercises1}/>
      <Content part={part2} number={exercises2}/>
      <Content part={part3} number={exercises3}/>
      <Total numbers={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))