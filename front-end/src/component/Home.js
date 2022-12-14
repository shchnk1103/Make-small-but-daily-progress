import React from "react";
import {Navbar} from "./Navbar";

export const Home = () => {
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [loopNum, setLoopNum] = React.useState(0)
  const [text, setText] = React.useState("")
  const [delta, setDelta] = React.useState(300 - Math.random() * 100)
  const toRotate = ["Batman is my hero!", "DoubleShy0N"]
  const period = 2000

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }
  }

  React.useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => clearInterval(ticker)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return (
    <div className="container-fluid text-center home-page" id="home">
      <Navbar/>
      <div className="row">
        <p>{text}</p>
      </div>
    </div>
  )
}
