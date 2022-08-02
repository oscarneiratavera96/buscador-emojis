import styles from "./emojiPicker.module.scss";

const EmojiButton = ({ emoji, onClick }) => {
  function handleClick() {
    onClick(emoji);
  }

  return (
    <button className={styles.emojiButton} onClick={handleClick}>
      {emoji.symbol}
    </button>
  );
};

export default EmojiButton;
