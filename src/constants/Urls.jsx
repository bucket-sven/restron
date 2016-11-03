module.exports = {
  HOST: 'localhost',
  REGIST_URL: '/api/v1/users/sign_up',
  LOGIN_URL: '/api/v1/users/sign_in',
  SEARCH_MUSIC_URL: '/api/search/get',
  NET_EASE_BASE_URL: 'http://music.163.com',
  //NET_EASE_BASE_URL: 'http://localhost:3000',
  NET_EASE_HEADER: {
    'Cookie': 'appver=1.5.0.75771;',
    'referer': 'http://music.163.com/',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
