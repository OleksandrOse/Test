import { FC } from 'react';
import './BackButton.scss';

export const BackButton: FC = () => {
  return (
    <button
      type="button"
      className="row col-2 offset-1 btn btn-light btn-back"
      data-cy="backButton"
      onClick={() => {
        // eslint-disable-next-line
        history.back();
      }}
    >
      {'< Back'}
    </button>
  );
};