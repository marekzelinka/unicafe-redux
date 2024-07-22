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
      <dl>
        <dt>good</dt>
        <dd>{good}</dd>
        <dt>neutral</dt>
        <dd>{neutral}</dd>
        <dt>bad</dt>
        <dd>{bad}</dd>
      </dl>
    </>
  )
}

export default App
