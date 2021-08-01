import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { productRows } from '../../dummyData';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './ProductList.css';
import { useState } from 'react';

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productList-user">
            <img
              className="productList-img"
              src={params.row.img}
              alt="avatar"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="productList-edit">Edit</button>
            </Link>
            <DeleteOutline
              className="productList-delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
