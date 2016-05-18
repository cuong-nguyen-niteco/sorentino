/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';
import Product from './product.model'
/**

 * @param req
 * @param res
 */

export function getProducts(req, res) {
  Product.find(function (err, data) {
    res.json({err, data});
  });
}

export function addProduct(req, res) {
  var product = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    collections: req.body.collections,
    colors: req.body.colors,
    spec: req.body.spec,
    priority: req.body.priority
  };
  Product.create(product, function(err,data) {
    return res.json({err,data});
  })
}

export function editProduct(req, res) {
  Product.findByIdAndUpdate(req.body.product._id, req.body.product, function (err, product) {
    res.json({err,product});
  })
}

export function findProductById(req, res) {
  Product.findById(req.params.id, function (err, product){
    return res.json({err, product});
  });
}

export function deleteProduct(req, res) {
  Product.findByIdAndRemove(req.body.product._id, function (err, product) {
      res.json({err,product});
  })
}
