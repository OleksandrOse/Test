import React from 'react';
import { Breadcrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import { Form } from '../components/Form/Form';
import { useLocation } from 'react-router-dom';

export const ContactInfo: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const isContact = path === '';
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);

  return (
      <div className="container">
        <div className="card row justify-content-center">
          <div className="card-body">
            <Breadcrumbs />
            <h1 className="row col-xs-5">
              {isContact ? 'Contact Info' : title}
            </h1>

            <Form/>
          </div>
        </div>
      </div>
  );
}
