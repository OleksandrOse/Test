import React from 'react';
import { Breadcrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import { Form } from '../components/Form/Form';
import { useLocation } from 'react-router-dom';
import { QuntityForm } from '../components/Quantity/QuantityForm';

export const Quantity: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const isContact = path === '';
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);

  return (
    <div className="container">
      <div className="card row justify-content-center">
        <div className="card-body">
          <Breadcrumbs />
          <h1 className="row col-5 offset-1 mb-3">
            {isContact ? 'Contact Info' : title}
          </h1>

          <QuntityForm />
        </div>
      </div>
    </div>
  );
}
