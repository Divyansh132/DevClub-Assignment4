const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  let query1=req.url.split("q=")[1];
  console.log(query1);
  let query=query1;
  let answer="CIGAR";
  let ans="";
  for(var i=0;i<5;i++)
  {
    let flag=0;
    for(var j=0;j<5;j++)
    {
      if(query[j]==answer[i] && i==j)
      {
        flag=1;
        break;
      }
      if(query[j]==answer[i])
      {
        flag=2;
        break;
      }
      
    }
  if(flag==0)
  {
    ans+="r";
  }
  else if(flag==1)
  {
    ans+="g";
  }
  else
  {
    ans+="y";
  }
     
  }
  console.log(ans);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(ans);
});

server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/?q=CRANE`);
});
