import Cookies  from 'universal-cookie'

const cookies = new Cookies();
const nameCookie = "STOREBACK_JWT"
export const cookieGet = function () {
    const _c = String(document.cookie).split(';')
    const neq = nameCookie+'='
    for (let i = 0; i < _c.length; i++) {
      let c = _c[i]
      while (c.charAt(0) === ' ') {
        c = _c[i].substring(1, c.length)
      }
  
      if (c.indexOf(neq) === 0) {
        return unescape(c.substring(neq.length, c.length))
      }
    }
    return ''
  }

  export function cookieSet (token) {

    let d = new Date();
    let minutes = 120;
    d.setTime(d.getTime() + (minutes*60*1000)); 
    cookies.set(nameCookie, token, {path: "/", expires: d});
    // 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NzgzMzg5Nn0.1qynepZGqX-kJkQ65OvBAgrcCkfBuvzpbMVVTlmsRbGxPkkfZye3e9kNOxrzUAZNZ45rZxrurYJzQku3IyCY2A'
    return ''
  }


  export const cookieDelet = function () {
    new Cookies().remove('STOREBACK_JWT', { path: '/', domain: 'http://localhost:8089' })
    new Cookies().remove('STOREBACK_JWT', { path: '/' }) 
    localStorage.removeItem(nameCookie); // 'token'
    return ''
  }

  export function getIdUrl (value) {
    // /usersform/4/edit 
    //window.location.pathname
    var id = 0;//this.props.match.params.id;  
    let pathurl = value; 
    pathurl = pathurl.replace("/",";");
    pathurl = pathurl.replace("/",";");
    pathurl = pathurl.replace("/",";"); 
    let lines = pathurl.split(';'); 
    if(lines.length >= 1){
        id = parseInt(lines[2]); // Number 
    }
    return id
  }