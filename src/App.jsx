function App({ store }) {
  const { good, ok, bad } = store.getState()
  const all = good + ok + bad

  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <Button text="good" onClick={() => store.dispatch({ type: 'GOOD' })} />
        <Button text="ok" onClick={() => store.dispatch({ type: 'OK' })} />
        <Button text="bad" onClick={() => store.dispatch({ type: 'BAD' })} />
        <Button
          text="reset stats"
          onClick={() => store.dispatch({ type: 'ZERO' })}
        />
      </div>
      <h2>Stats</h2>
      {all ? (
        <Statistics good={good} ok={ok} bad={bad} all={all} />
      ) : (
        <em>No feedback given</em>
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

function Statistics({ good, ok, bad, all }) {
  const average = (good - bad) / all
  const positive = good / all

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={formatDecimal(good)} />
        <StatisticLine text="ok" value={formatDecimal(ok)} />
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
