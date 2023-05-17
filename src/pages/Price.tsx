import React from 'react';
import { Breadcrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import { useLocation } from 'react-router-dom';
import { BackButton } from '../components/BackButton/BackButton';
import { useGlobalState } from '../utils/GlobalStateProvider';

export const Price: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const isContact = path === '';
  const title = path.slice(0, 1).toUpperCase() + path.slice(1);
  const { data } = useGlobalState();
  const { quantity } = data;
  
  const price = () => {
    switch(true) {
      case 1 <= +quantity! && +quantity! <= 10:
        return '10$';
      case 11 <= +quantity! && +quantity! <= 100:
        return '100$';
      case 101 <= +quantity! && +quantity! <= 1000:
        return '1000$';
      default:
        return '0$';
    }
  };

  return (
      <div className="container">
        <div className="card row justify-content-center">
          <div className="card-body">
            <Breadcrumbs />
            <h1 className="row col-5 offset-1 mb-3">
              {isContact ? 'Contact Info' : title}
            </h1>

            <div>
          
            </div>

            <BackButton/>
          </div>
        </div>
      </div>
  );
}