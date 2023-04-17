/*
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {isGameOnProgress: true, clickedEmojiList: [], topScore: 0}

  /// Reset Game
  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameOnProgress: true})
  }

  /// Game is in progress
  finishGameAndSetScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameOnProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)
    const emojiListLength = clickedEmojiList.length

    if (isEmojiPresent) {
      this.finishGameAndSetScore(emojiListLength)
    } else {
      if (emojisList.length - 1 === emojiListLength) {
        this.finishGameAndSetScore(emojiListLength)
      }
      this.setState(previousEmojisList => ({
        clickedEmojiList: [...previousEmojisList.clickedEmojiList, id],
      }))
    }
  }

  getShuffledEmojiList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojiList = this.getShuffledEmojiList()
    return (
      <ul className="emojis-unordered-list">
        {shuffledEmojiList.map(eachEmojiObject => (
          <EmojiCard
            key={eachEmojiObject.id}
            eachEmojiItem={eachEmojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  /// Game Ended
  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = emojisList.length === clickedEmojiList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojiList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  render() {
    const {isGameOnProgress, topScore, clickedEmojiList} = this.state
    const clickedEmojiLength = clickedEmojiList.length
    return (
      <div className="emoji-background-container">
        <NavBar
          currentScore={clickedEmojiLength}
          topScore={topScore}
          isGameOnProgress={isGameOnProgress}
        />
        <div className="emoji-center-container">
          {isGameOnProgress ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
