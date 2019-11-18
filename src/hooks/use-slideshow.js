import { useState, useEffect } from "react"

const slideDuration = 6000

function useSlideshow(images) {
  const length = images.length - 1
  const [index, setIndex] = useState(0)

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)

  useEffect(() => {
    const pictureInterval = setInterval(() => {
      setIndex(prevIndex => {
        return prevIndex === length ? 0 : prevIndex + 1
      })
    }, slideDuration)

    return () => clearInterval(pictureInterval)
  }, [])

  return {
    current: images[index],
    handleNext,
    handlePrevious,
  }
}

export default useSlideshow
