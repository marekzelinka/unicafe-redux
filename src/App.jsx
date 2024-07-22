import { useState } from 'react'

function App() {
  let [good, setGood] = useState(0)
  let [neutral, setNeutral] = useState(0)
  let [bad, setBad] = useState(0)
  let all = good + neutral + bad

  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <Button text="good" onClick={() => setGood((good) => good + 1)} />
        <Button
          text="neutral"
          onClick={() => setNeutral((neutral) => neutral + 1)}
        />
        <Button text="bad" onClick={() => setBad((bad) => bad + 1)} />
      </div>
      <h2>Stats</h2>
      {all ? (
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      ) : (
        <div>No feedback given</div>
      )}
    </>
  )
}

export default App

function Button({ text, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  )
}

function Statistics({ good, neutral, bad, all }) {
  let average = (good - bad) / all
  let positive = good / all

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={formatDecimal(good)} />
        <StatisticLine text="neutral" value={formatDecimal(neutral)} />
        <StatisticLine text="bad" value={formatDecimal(bad)} />
        <StatisticLine text="all" value={formatDecimal(all)} />
        <StatisticLine text="average" value={formatDecimal(average)} />
        <StatisticLine text="positive" value={formatPercentage(positive)} />
      </tbody>
    </table>
  )
}

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

function formatDecimal(value) {
  return value.toLocaleString('en-US', {
    style: 'decimal',
  })
}

function formatPercentage(value) {
  return value.toLocaleString('en-US', {
    style: 'percent',
  })
}
