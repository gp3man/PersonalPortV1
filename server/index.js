const port = process.env.PORT || 3000;
const app = require('./app');

const init = async()=>{
  app.listen(port, ()=> console.log(`listening on port ${port}`));
}

init()
