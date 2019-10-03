import { useState } from "react"

const useSlideshow = images => {
  const length = images.length - 1
  const [index, setIndex] = useState(0)

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)

  return {
    current: images[index],
    handleNext,
    handlePrevious,
  }
}

export default useSlideshow
