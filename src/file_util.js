const path = require('path');

module.exports = {
  imagePath(fp) {
    return path.join(process.cwd(), 'img', fp);
  }
}
