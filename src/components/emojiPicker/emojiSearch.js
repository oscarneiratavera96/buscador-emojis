import { useState } from "react";
import styles from "./emojiPicker.module.scss";

const EmojiSearch = ({ onSearch }) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
    onSearch(e);
  }

  return (
    <input
      className={styles.search}
      onChange={handleChange}
      value={value}
      type="text"
    />
  );
};

export default EmojiSearch;
