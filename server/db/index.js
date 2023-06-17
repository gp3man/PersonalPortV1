const db = require('./database')
const User = require('./models/user')
const chalk = require('chalk')

//associations if any

const syncAndSeed = async ()=>{
  await db.sync()
{force:true}

//   await User.create({
//     username: 'GregPounds',
//     password: '12345',
//     firstName: 'Greg',
//     lastName: 'Pounds',
//     email: 'greg.pounds3@whoa.com',
//   });
//   await User.create({
//     username: 'GregoryNo',
//     password: '12345',
//     firstName: 'Gregory',
//     lastName: 'Nomoney',
//     email: 'gregory.pounds1@ghotmail.com',
//   });
//   await User.create({
//     username: 'GeeMoney',
//     password: '12345',
//     firstName: 'Gee',
//     lastName: 'Money',
//     email: 'gee.pounds@gmail.com',
//   });
// await User.create({
//       username: 'Dex',
//       password: 'Password',
//       firstName: 'Dexter',
//       lastName: 'Lab',
//       email: 'dextie@gmail.com',
//       imageUrl: 'https://i.stack.imgur.com/YRntr.jpg',
//     });
//   await User.create({
//         username: 'Bob',
//         password: 'Password',
//         firstName: 'Sponge',
//         lastName: 'Bob',
//         email: 'sponge@gmail.com',
//         imageUrl: 'https://pngimg.com/uploads/spongebob/spongebob_PNG58.png',
//       });
    // await User.create({
    //       username: 'BOJACK',
    //       password: 'Password',
    //       firstName: 'Bojackman',
    //       lastName: 'Bob',
    //       email: 'bo@gmail.com',
    //       // imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.gYzID2XIuArwA_GZq9IyagHaFB&pid=Api&P=0',
    //     });
  console.log(chalk.bgGreenBright('Seeding Successful!'))
};

module.exports={
  db,
  syncAndSeed,
  models:{
    User,
  }
}
