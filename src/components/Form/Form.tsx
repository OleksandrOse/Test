import React, { useState } from 'react';
import { useGlobalState } from '../../utils/GlobalStateProvider';

import { validateFields } from '../../utils/validateFields';
import { useNavigate } from "react-router-dom";
import { Button } from '../Button/Button';
import { ButtonTypes } from '../../types/ButtonTypes';

export const Form: React.FC = () => {
  const { data, setData } = useGlobalState();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const [touched, setToched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const { name, email, phone } = data;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name: field, value } = event.target;

    setData(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: false }));
    setToched(current => ({ ...current, [field]: false }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setErrors({
      name: !name,
      email: !email,
      phone: !phone,
    });

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return;
    }

    navigate('/quantity');
  };

  const handleBlur = (value: string, field: string) => {
    if (!value?.trim().length) {
      setToched(current => ({
        ...current,
        [field]: true,
      }));
    }

    if (email || phone || name) {
      setIsValid(current => ({
        ...current,
        [field]: validateFields(value, field),
      }));
    }
  };

  const errorName = touched.name || errors.name;
  const errorEmail = touched.email || errors.email;
  const errorPhone = touched.phone || errors.phone;

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <div
        className="form-group row align-items-center"
      >
        <label
          htmlFor="name"
          className="row col-3 control-label justify-content-end"
        >
          Name
        </label>
        <div className="col-6">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            value={data.name}
            onChange={handleChange}
            onBlur={() => handleBlur(name!, 'name')}
          />
        </div>
        <p className="help is-danger" data-cy="ErrorMessage">
          {errorName && 'Name is required'}
          {isValid.name && !errorName && 'Email is not valid'}
        </p>
      </div>

      <div className="form-group align-items-center row">
        <label
          htmlFor="email"
          className="col-3 offset-1 control-label justify-content-end"
        >
          Email
          <span>
            required
          </span>
        </label>
        <div className="col-6 align-items-center">
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleChange}
            onBlur={() => handleBlur(email!, 'email')}
          />
        </div>
        <p className="help is-danger" data-cy="ErrorMessage">
          {errorEmail && 'Email is required'}
          {isValid.email && !errorEmail && 'Email is not valid'}
        </p>
      </div>

      <div className="form-group row align-items-center">
        <label htmlFor="phone" className="col-3 control-label">Phone</label>
        <div className="col-6">
          <input
            type="tel"
            name="phone"
            className="form-control"
            id="phone"
            value={phone}
            onChange={handleChange}
            onBlur={() => handleBlur(phone!, 'phone')}
          />
        </div>
        <p className="is-danger" data-cy="ErrorMessage">
          {errorPhone && 'Phone is required'}
          {isValid.phone && !errorPhone && 'Phone is not valid'}
        </p>
      </div>

      <Button type={ButtonTypes.Submit} title="Continue" />
    </form>
  )
}
