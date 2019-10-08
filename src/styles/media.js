const breakpoints = {
  small: 768,
  medium: 1024,
  large: 1216,
}

export default n => {
  const bpArray = Object.keys(breakpoints).map(key => [key, breakpoints[key]])

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`]
    return acc
  }, [])

  return result
}
