/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';
import fs from 'fs';
import path from 'path';
import config from './../../config/environment';

var ROOT_RESOURCE = path.normalize(config.root + '/server/resources');
var CONSTANT_FILE = path.normalize(ROOT_RESOURCE + '/sorentino.json');
var PRODUCT_FILE = path.normalize(ROOT_RESOURCE + '/product.json');
var COLLECTION_FILE = path.normalize(ROOT_RESOURCE + '/collection.json');

var constant = JSON.parse(fs.readFileSync(CONSTANT_FILE, 'utf8'));
var product = JSON.parse(fs.readFileSync(PRODUCT_FILE, 'utf8'));
var collection = JSON.parse(fs.readFileSync(COLLECTION_FILE, 'utf8'));

export function getConstant(req, res) {
  res.json(constant);
}

export function getCollection(req, res) {
  res.json(collection);
}

export function getAllProduct(req, res) {
  res.json(product);
}

export function getProduct(req, res) {
  let data = {};
  for (let i=0; i<product.products.length; i++) {
    let prod = product.products[i];
    if (req.params.id == prod.id) {
      data = prod;
      break;
    }
  }

  res.json(data);
}
