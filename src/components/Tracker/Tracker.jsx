import React, { useState } from 'react';
import styles from './Tracker.module.scss';

const Tracker = () => {
    const [count, setCount] = useState(0);
  return (
    <div className={styles.tracker}>          
        <h3>Tickets Completed</h3>
        <h3>{count}</h3>
        <button className={styles.button} onClick={() => setCount(count-1)}>-</button>
        <button className={styles.button} onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}

export default Tracker