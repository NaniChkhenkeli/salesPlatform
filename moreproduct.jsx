import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { PRODUCTS1 } from './products';

const MoreProduct = (props) => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  const uniqueBrands = ['All', ...new Set(PRODUCTS1.map(product => product.brand))];

  const filteredProducts = selectedBrand === 'All' 
    ? PRODUCTS1 
    : PRODUCTS1.filter(product => product.brand === selectedBrand);

  const sortedProducts = filteredProducts.sort((a, b) => 
    sortOrder === 'asc' ? a.price - b.price : b.price - a.price
  );

  return (
    <section className="more-featured-products py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="display-4">More Products</h1>
            <p className="lead">You might also like these</p>
          </div>

          <div className="col-12 mb-4 d-flex justify-content-between align-items-center">
            <div className="filter">
              <label htmlFor="brandFilter" className="form-label">Filter by Brand:</label>
              <select id="brandFilter" className="form-select" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
                {uniqueBrands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div className="sort">
              <label htmlFor="priceSort" className="form-label">Sort by Price:</label>
              <select id="priceSort" className="form-select" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {sortedProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                <Link to='/view2' className="card text-decoration-none h-100 shadow-sm">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <p className="card-text mb-2">{product.brand}</p>
                    <h5 className="card-title">{product.name}</h5>
                    <ReactStars
                      count={5}
                      edit={false}
                      value={4}
                      size={24}
                      activeColor="#EA9D5A"
                    />
                    <p className="card-text price"><span className="red">${product.price}</span>&nbsp; <strike>$200</strike></p>
                  </div>
                  <div className="card-footer bg-transparent border-0 d-flex justify-content-center">
                    <Link to='/view2' className='btn btn-outline-primary'>View</Link>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreProduct;
