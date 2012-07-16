# routil-encoding [![build status][1]][2]

handle multiple encodings

## Example

    var http = require("http")
        , encoding = require("routil-encoding")
        , data = someData

    http.createServer(function (req, res) {
        encoding(req, {
            "gzip": returnGzipped
            , default: returnNormal
        })(req, res)
    }).listen(8080)

    function returnGzipped(req, res) {
        // some gzip function
        gzip(data, function (gzipped) {
            res.end(gzipped)
        })
    }

    function returnNormal(req, res) {
        res.end(data)
    }

## Installation

`npm install routil-encoding`

## Tests

`make test`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Raynos/routil-encoding.png
  [2]: http://travis-ci.org/Raynos/routil-encoding