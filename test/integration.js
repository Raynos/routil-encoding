var encoding = require("..")
    , test = require("tap").test
    , testServer = require("test-server")

testServer(handleRequest, startTests)

function handleRequest(req, res) {
    encoding(req, {
        gzip: gzipped
        , default: normal
    })(req, res)
}

function gzipped(r, res) { res.end("gzip") }

function normal(r, res) { res.end("normal") }

function startTests(request, done) {
    test("gzip", function (t)  {
        request({
            uri: "/"
            , headers: {
                "accept-encoding": "gzip"
            }
        }, function (err, res, body) {
            t.equal(body, "gzip", "body is incorrect")

            t.end()
        })
    })

    test("normal", function (t) {
        request("/", function (err, res, body) {
            t.equal(body, "normal", "body is incorrect")

            t.end()
        })
    })

    .on("end", done)
}