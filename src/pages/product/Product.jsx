import { Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/Charts/Chart';
import { productData } from '../../dummyData';
import './Product.css';
const Product = () => {
  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/newProduct">
          <button className="product-addBtn">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart data={productData} dataKey="Sales" title="Sales Perfomance" />
        </div>
        <div className="product-top-right">
          <div className="product-info-top">
            <img
              src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="product"
              className="product-info-img"
            />
            <span className="product-name">Apple Airpods</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <span className="product-info-key">id: </span>
              <span className="product-info-value">123 </span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">sales: </span>
              <span className="product-info-value">5123 </span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">active: </span>
              <span className="product-info-value">yes </span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">in stock: </span>
              <span className="product-info-value">no </span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPods" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="product"
                className="product-upload-img"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="product-btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
