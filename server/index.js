const port = process.env.PORT || 3000;
const app = require('./app');
const chalk = require('chalk')

const init = async()=>{
  app.listen(port, ()=> console.log(chalk.bgYellowBright(`listening on port ${port}`)));
}

init()
