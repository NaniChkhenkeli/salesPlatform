import React, { useState } from 'react';
import { PRODUCTS, PRODUCTS1 } from './products';
import Prod from './prod';

const ShopItems = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');

  const allProducts = [...PRODUCTS, ...PRODUCTS1];

  const uniqueBrands = ['All', ...new Set(allProducts.map(product => product.brand))];

  const filteredProducts = selectedBrand === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.brand === selectedBrand);

  const sortedProducts = filteredProducts.sort((a, b) => 
    sortOrder === 'asc' ? a.price - b.price : b.price - a.price
  );

  return (
    <>
      <div className="filter-sort-container mb-4">
        <div className="filter">
          <label htmlFor="brandFilter">Filter by Brand:</label>
          <select id="brandFilter" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            {uniqueBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div className="sort">
          <label htmlFor="priceSort">Sort by Price:</label>
          <select id="priceSort" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {sortedProducts.map(product => (
          <Prod key={product.id} data={product} />
        ))}
      </div>
    </>
  );
}

export default ShopItems;
