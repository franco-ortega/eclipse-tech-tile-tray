import { putData } from '../services/request';

export const incrementRound = async (data, stateSetter) => {
  const roundUpdate = {
    update: { round: data.round + 1 }
  };

  await putData(`/api/trays/${data._id}`, roundUpdate).then((res) => {
    stateSetter(res);
  });
};
