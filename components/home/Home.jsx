import NewGameButton from '../buttons/NewGameButton';
import TrayList from '../trayList/TrayList';
import styles from './Home.module.css';

const Home = ({ data }) => {
  return (
    <div className={styles.Home}>
      <NewGameButton length={data.length} />
      <TrayList data={data} />
    </div>
  );
};

export default Home;
