import { useNavigate } from "react-router-dom"


export default function Menu() {
  const navigate = useNavigate()

  const startGame = () => {
    navigate("/game")
  }

  return (
    <div>
      <button onClick={() => startGame()}>Start</button>
    </div>
  )
}
