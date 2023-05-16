import React, { useState } from 'react';
import { Breadcrumbs } from './components/BreadCrumbs/BreadCrumbs';
import { Form } from './components/Form/Form';
import { QuntityForm } from './components/Quantity/QuantityForm';
import { UserInfo } from './types/UserInfo';
import { useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const App: React.FC = () => {
  const { pathname } = useLocation();
  const [values, setValues] = useState<UserInfo>({
    name: '',
    email: '',
    phone: '',
    quantity: '',
  });
  const path = pathname.slice(1);
  const isContact = path === '';
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);

  return (
    <div className="App">
      <div className="container">
        <div className="card row justify-content-center">
          <div className="card-body">
            <Breadcrumbs />
            <h1 className="row col-5 offset-1 mb-3">
              {isContact ? 'Contact Info' : title}
            </h1>

            {isContact && <Form values={values} setValues={setValues}/>}
            <QuntityForm values={values} setValues={setValues}/>
          </div>
        </div>
      </div>
    </div >
  );
}
