import { useNavigate } from 'react-router-dom';

import BackSvg from 'shared/assets/icons/back.svg?react';

export const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      <BackSvg />
    </button>
  );
};
