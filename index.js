var http = require('http');
var url = require('url');
var qs = require('querystring');
var db = require("./db");
var port = 8000


http.createServer(function (req, res) {
    // get url yang masuk dan parsing url tersebut dengan module url
      var q = url.parse(req.url, true);
    // mendapatkan id dari url yang dikirim
      var id = q.query.id;
    // memastikan bahwa response semuanya dalam format json
      res.setHeader('Content-Type', 'application/json');


      // FUNGSI UNTUK MENAMPILKAN MEMBER
      if(q.pathname == "/member" && req.method === "GET"){
        console.log(id)

        if(id === undefined){
          // mengambil semua data dari tabel member
          let sql = "SELECT name FROM member ORDER BY id ASC";
          db.query(sql,(err, result) => {
            if (err) throw err;
            res.end(JSON.stringify(result));
          });

        } else if(id > 0){
          // mengambil data member berdasarkan id
          let sql = "SELECT id, name FROM member where id = "+ id;
          db.query(sql,(err, result) => {
            if (err) throw err;
            var product = result[0];
            res.end(JSON.stringify(product));
          });
        }
      }




    }
  )

  .listen(port);
  console.log('server is running on http://localhost:'+ port);
