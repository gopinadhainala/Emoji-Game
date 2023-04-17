import './index.css'

const EmojiCard = props => {
  const {eachEmojiItem, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmojiItem
  const clickedEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-list-item emoji-container">
      <button className="emoji-button" type="button" onClick={clickedEmoji}>
        <img src={emojiUrl} className="emoji-image" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
