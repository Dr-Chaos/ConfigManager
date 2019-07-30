"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.load = load;
exports.save = save;
exports.exist = exist;
exports.createAndLoad = createAndLoad;

var childProcess = _interopRequireWildcard(require("child_process"));

var fs = _interopRequireWildcard(require("fs"));

var path = _interopRequireWildcard(require("path"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * create json file
 * @param {String} filePath file path
 * @returns {Boolean} boolean
 */
function create(filePath) {
  if (createDir(filePath)) {
    try {
      fs.writeFileSync(filePath, '{}');
      return true;
    } catch {
      return false;
    }
  } else {
    return false;
  }
}
/**
 * load json file
 * @param {String} filePath - file path
 * @returns {JSON} file content
 */


function load(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}
/**
 * save json file
 * @param {String} filePath - file path
 */


function save(filePath, content) {
  fs.writeFileSync(filePath, JSON.stringify(content));
}
/**
 * check if file exist
 * @param {String} filePath - file path
 * @returns {Boolean} boolean
 */


function exist(filePath) {
  return fs.existsSync(filePath);
}
/**
 * create and load json file
 * @param {String} filePath file path
 * @returns {JSON} file content
 */


function createAndLoad(filePath) {
  if (!exist(filePath)) {
    create(filePath);
  }

  return load(filePath);
}
/**
 * create file directory
 * @param {String} filePath file path
 * @returns {Boolean} boolean
 */


function createDir(filePath) {
  try {
    const fileDir = path.dirname(filePath);
    fs.mkdirSync(fileDir, {
      recursive: true
    });
    return true;
  } catch {
    return false;
  }
}