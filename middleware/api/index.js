require('dotenv').config()
const httpProxy = require('http-proxy')
const proxy = httpProxy.createProxyServer()
const API_ENDPOINT_URL = process.env.PHPSA_BACKEND_URL || 'https://server.phpsouthafrica.org/api/'
const API_KEY = process.env.PHPSA_BACKEND_API_KEY

export default function (req, res, next) {
  proxy.web(req, res, {
    changeOrigin: true,
    target: API_ENDPOINT_URL,
    headers: {
      'x-api-key': API_KEY
    }
  })
}
