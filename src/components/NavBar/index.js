import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameOnProgress} = props
  return (
    <nav className="navbar-container">
      <div className="navbar-game-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-game-logo"
        />
        <h1 className="navbar-game-title">Emoji Game</h1>
      </div>
      {isGameOnProgress && (
        <div className="nav-score-container">
          <p className="score-titles">Score: {currentScore}</p>
          <p className="score-titles">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
