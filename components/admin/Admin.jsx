import React, { useEffect, useState } from 'react';
import { deleteData } from '../../services/request';
import Button from '../buttons/Button';
import ButtonContainer from '../buttons/ButtonContainer';
import HomeButton from '../buttons/HomeButton';
import TrayList from '../trayList/TrayList';
import styles from './Admin.module.css';

const Admin = ({ data }) => {
  const [trays, setTrays] = useState();

  useEffect(() => {
    setTrays(data);
  }, []);

  const onDeleteDataClick = async () => {
    console.log('...deleting data...');
    await deleteData('/api/trays');
    setTrays([]);
  };

  return (
    <div className={styles.Admin}>
      <HomeButton />
      <TrayList data={trays} />
      <ButtonContainer>
        <Button onButtonClick={onDeleteDataClick} text='Delete Data' />
      </ButtonContainer>
    </div>
  );
};

export default Admin;
