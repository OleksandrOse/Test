import classNames from 'classnames';
import React from 'react';
import { ButtonTypes } from '../../types/ButtonTypes';

// import './Button.scss';

type Props = {
  type: ButtonTypes | undefined;
  title: string;
  handleClick?: () => void | void;
  isDisabled?: boolean
}

export const Button: React.FC<Props> = ({
  type,
  title,
  handleClick,
  isDisabled,
}) => {
  return (
    <div className="row">
      <button
        type={type}
        className={classNames(
          "btn btn-primary col-5 col-lg-2",
          { 'btn-disabled': isDisabled },
        )}
        data-cy="backButton"
        onClick={handleClick}
        disabled={isDisabled}
      >
        {title}
      </button>
    </div>
  );
};