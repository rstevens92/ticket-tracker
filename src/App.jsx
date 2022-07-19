import styles from './App.module.scss';
import Banner from './components/Banner';
import IdCard from './components/IdCard';

import team from './data/team';

const App = () => {

  const getteamIdCard = (team) => (
    <IdCard team={team} />
  )

  return (
    <div>
      < Banner />
      <div className={styles.content}>
        {team.map(getteamIdCard)}
      </div>
    </div>
  );
}

export default App;
