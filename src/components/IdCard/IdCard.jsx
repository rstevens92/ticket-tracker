import React from 'react';
import Tracker from '../Tracker';
import styles from './IdCard.module.scss';

const IdCard = (props) => {
    const {
        name,
        role,
    } = props.team;

return (
    <div className={styles.IdCard}>
        <h2>{name}</h2>
        <h2>{role}</h2>
        <div>
          <Tracker /> 
        </div>
    </div>
  )
}

export default IdCard;