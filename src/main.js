import * as fs from 'fs';
import * as path from 'path';

/**
 * create and load json file
 * @param {String} filePath file path
 * @returns {JSON} file content
 */
export function createAndLoad(filePath) {
  if (!exist(filePath)) {
    create(filePath);
  }
  return load(filePath);
}

/**
 * create json file
 * @param {String} filePath file path
 * @returns {Boolean} boolean
 */
export function create(filePath) {
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
export function load(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

/**
 * save json file
 * @param {String} filePath - file path
 */
export function save(filePath, content) {
  fs.writeFileSync(filePath, JSON.stringify(content));
}

/**
 * check if file exist
 * @param {String} filePath - file path
 * @returns {Boolean} boolean
 */
export function exist(filePath) {
  return fs.existsSync(filePath);
}

/**
 * create file directory
 * @param {String} filePath file path
 * @returns {Boolean} boolean
 */
function createDir(filePath) {
  try {
    const fileDir = path.dirname(filePath);
    fs.mkdirSync(fileDir, { recursive: true });
    return true;
  } catch {
    return false;
  }
}
