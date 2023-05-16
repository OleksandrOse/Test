import React from 'react';

import './BreadCrumbs.scss';

export const Breadcrumbs: React.FC = () => {
  return (
    <nav className="custom-divider row col-9 offset-1 mb-3" aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#" role="button" className="breadcrumb-link">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#" role="button" className="breadcrumb-link">Contact Info</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#" role="button" className="breadcrumb-link">Quantity</a>
        </li><li className="breadcrumb-item">
          <a href="#" role="button" className="breadcrumb-link">Price</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#" role="button" className="breadcrumb-link">Done</a>
        </li>
      </ol>
    </nav>
  )
}