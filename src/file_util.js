const path = require('path');

module.exports = {
  imagePath(fp) {
    return path.join(process.cwd(), 'public', 'img', fp);
  }
}
