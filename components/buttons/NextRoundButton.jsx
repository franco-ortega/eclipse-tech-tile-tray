import { useRouter } from 'next/router';
import Button from './Button';
import styles from './ButtonContainer.module.css';

const NextRoundButton = () => {
  const router = useRouter();

  const onNewRoundClick = () => {
    router.push('/new-round');
  };

  const text = 'Next Round';

  return (
    <div className={styles.ButtonContainer}>
      <Button onButtonClick={onNewRoundClick} text={text} />
    </div>
  );
};

export default NextRoundButton;
