/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';
import Setting from './setting.model'
/**

 * @param req
 * @param res
 */

export function getValue(req, res) {
  Setting.findOne({key: req.params.key}, function (err, data) {
    res.json({err, data});
  });
}

export function editValue(req, res) {
  Setting.findByIdAndUpdate(req.body.setting._id, req.body.setting, function (err, setting) {
    res.json({err,setting});
  })
}
