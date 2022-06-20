const init = window.location.protocol + '//' + window.location.host;
const RUTA = {
    "base" : init + '/',
    'img'  : init + '/img/'
}

const ruta = path => {
    return RUTA.base + path;
}