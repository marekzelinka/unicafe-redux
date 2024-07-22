import { useState } from 'react'

function App() {
  let [good, setGood] = useState(0)
  let [neutral, setNeutral] = useState(0)
  let [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <button type="button" onClick={() => setGood((good) => good + 1)}>
          good
        </button>
        <button
          type="button"
          onClick={() => setNeutral((neutral) => neutral + 1)}
        >
          neutral
        </button>
        <button type="button" onClick={() => setBad((bad) => bad + 1)}>
          bad
        </button>
      </div>
      <h2>Stats</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App

function Statistics({ good, neutral, bad }) {
  let all = good + neutral + bad
  let average = (good - bad) / all
  let positive = good / all

  return (
    <dl>
      <dt>good</dt>
      <dd>{formatDecimal(good)}</dd>
      <dt>neutral</dt>
      <dd>{formatDecimal(neutral)}</dd>
      <dt>bad</dt>
      <dd>{formatDecimal(bad)}</dd>
      <dt>all</dt>
      <dd>{formatDecimal(all)}</dd>
      <dt>average</dt>
      <dd>{formatDecimal(average)}</dd>
      <dt>positive</dt>
      <dd>{formatPercentage(positive)}</dd>
    </dl>
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
