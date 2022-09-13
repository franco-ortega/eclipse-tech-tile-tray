import React from 'react';
import Button from '../buttons/Button';
import ButtonContainer from '../buttons/ButtonContainer';
import HomeButton from '../buttons/HomeButton';
import TrayList from '../trayList/TrayList';
import styles from './Admin.module.css';

const Admin = ({ data }) => {
  const onDeleteDataClick = async () => {
    console.log('...deleting data...');
    await deleteData('/api/trays');
  };

  return (
    <div className={styles.Admin}>
      <HomeButton />
      <TrayList data={data} />
      <ButtonContainer>
        <Button onButtonClick={onDeleteDataClick} text='Delete Data' />
      </ButtonContainer>
    </div>
  );
};

export default Admin;
