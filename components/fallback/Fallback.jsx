import HomeButton from '../buttons/HomeButton';
import TrayList from '../trayList/TrayList';
import styles from './Fallback.module.css';

const Fallback = ({ data }) => {
  return (
    <div className={styles.Fallback}>
      <p>
        Oops. Looks like you may have gotten lost. Don't worry. You can still
        find your way back to your game or go home.
      </p>
      <div>
        <HomeButton />
        <TrayList data={data} />
      </div>
    </div>
  );
};

export default Fallback;
