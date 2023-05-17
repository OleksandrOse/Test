import React from 'react';

import './BreadCrumbs.scss';
import { BreadCrumbItem } from '../BreadCrumbItem/BreadCrumbItem';

export const Breadcrumbs: React.FC = () => {
  return (
    <div className="row d-flex justify-content">
      <nav
        className="breadcrumb col-12 col-lg-7"
        aria-label="breadcrumb"
      >
        <ul className="breadcrumb-list">
          <li className="breadcrumb-item icon">
            <a href="/" className="breadcrumb-home">
            </a>
          </li>

          <BreadCrumbItem to="/" title="Contact Info" />

          <BreadCrumbItem to="/quantity" title="Quantity" />

          <BreadCrumbItem to="/price" title="Price" />

          <BreadCrumbItem to="/done" title="Done" />
        </ul>
      </nav>
    </div>
  )
}
