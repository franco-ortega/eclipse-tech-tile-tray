import styles from './Button.module.css';

const Button = ({ onButtonClick, text }) => {
  return (
    <button className={styles.Button} onClick={onButtonClick}>
      {text}
    </button>
  );
};

export default Button;
