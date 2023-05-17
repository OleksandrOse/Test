import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import { useGlobalState } from '../../utils/GlobalStateProvider';
import { BackButton } from '../BackButton/BackButton';

export const QuntityForm: React.FC = () => {
  const { data, setData } = useGlobalState();
  const navigate = useNavigate();
  const [touched, setToched] = useState(false);
  const [errors, setErrors] = useState(false);
  const { quantity } = data;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name: field, value } = event.target;

    setData(current => ({ ...current, [field]: value }));
    setErrors(current => current = false);
    setToched(current => current = false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!quantity?.trim()) {
      return;
    }

    navigate('/price');
  };

  const handleClickBack = () => {
    navigate('/');
  }

  const handleBlur = (value: string, field: string) => {
    if (!value.trim().length) {
      setToched(current => !current);
    }
  };

  const errorQuantity = touched || errors;

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <div className="form-group align-items-center row mb-5">
        <label htmlFor="quantity" className="col-3 offset-1 control-label justify-content-end">Quantity<span>required</span></label>
        <div className="col-6 align-items-center">
          <input
            type="text"
            name="quantity"
            className="form-control"
            id="quantity"
            value={quantity}
            onChange={handleChange}
            onBlur={() => handleBlur(quantity!, 'quantity')}
          />
        </div>
        <div className="help is-danger" data-cy="ErrorMessage">
          {errorQuantity && 'Quantity is required'}
        </div>
      </div>

      <div className="button-group row offset-1">
        <button type="submit" className=" row col-2 btn btn-primary">Continue</button>
        <BackButton />
      </div>
    </form>
  )
}
