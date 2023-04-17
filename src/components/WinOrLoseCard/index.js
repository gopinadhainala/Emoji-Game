import './index.css'

const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const showResult = isWon ? 'You Won' : 'You Lose'
  const imageUrl = isWon ? winImage : loseImage
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-container">
      <div className="win-or-lose-card">
        <h1 className="result">{showResult}</h1>
        <p className="best-score">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="win-or-lose-image-card">
        <img src={imageUrl} className="win-lose-image" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
