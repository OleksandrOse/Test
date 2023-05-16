import React, { useState, Dispatch, SetStateAction } from 'react';
import { UserInfo } from '../../types/UserInfo';
import { useNavigate } from "react-router-dom";

type Props = {
  values: UserInfo;
  setValues: Dispatch<SetStateAction<UserInfo>>
};

export const QuntityForm: React.FC<Props> = ({ values, setValues }) => {
  const navigate = useNavigate();
  const [touched, setToched] = useState(false);

  const [errors, setErrors] = useState(false);

  const { quantity } = values;
  console.log(values);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name: field, value } = event.target;

    setValues(current => ({ ...current, [field]: value }));
    setErrors(current => current = false);
    setToched(current => current = false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!quantity.trim()) {
      return;
    }

    navigate('/price');
  };

  const handleBlur = (value: string, field: string) => {
    if (!value.trim().length) {
      setToched(current => !current);
    }
  };

  const errorQuantity = touched || errors;

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <div className="form-group align-items-center row mb-5">
        <label htmlFor="email" className="col-3 offset-1 control-label justify-content-end">Quantity<span>required</span></label>
        <div className="col-6 align-items-center">
          <input
            type="text"
            name="quantity"
            className="form-control"
            id="quantity"
            value={quantity}
            onChange={handleChange}
            onBlur={() => handleBlur(quantity, 'quantity')}
          />
        </div>
        <div className="help is-danger" data-cy="ErrorMessage">
          {errorQuantity && 'Quantity is required'}
        </div>
      </div>

      <div className="button-group row offset-1">
        <button type="submit" className=" row col-2 btn btn-primary">Continue</button>
        <button
          type="button"
          className="row col-2 offset-1 btn btn-light"
        >
          Back
        </button>
      </div>
    </form>
  )
}
