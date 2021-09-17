import React from 'react'

const Part = () => {
  return(
    <>
    
    </>
  )
}

const Content = () => {
  return(
    <div>
      <Part />
      <Part />
      <Part />
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const first = part1 + exercises1
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const second = part2 + exercises2
  const part3 = 'State of a component'
  const exercises3 = 14
  const third = part3 + exercises3

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {first}
      </p>
      <p>
        {second}
      </p>
      <p>
        {third}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      <Content />
    </div>
  )
}

export default App