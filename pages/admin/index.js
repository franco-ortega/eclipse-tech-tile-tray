import ButtonContainer from '../../components/buttons/ButtonContainer';
import Button from '../../components/buttons/Button';
import { deleteData } from '../../services/request';

export default function Admin() {
  const onDeleteDataClick = async () => {
    console.log('...deleting data...');
    await deleteData('/api/trays');
  };

  return (
    <main>
      <ButtonContainer>
        <Button onButtonClick={onDeleteDataClick} text='Delete Data' />
      </ButtonContainer>
    </main>
  );
}
