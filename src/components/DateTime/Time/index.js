function Time({ time, style }) {
  const clock = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
  return <span style={style}>{clock}</span>
}

export default Time
