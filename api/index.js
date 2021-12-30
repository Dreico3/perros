//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app');
const { db } = require('./src/models/Dog');
const {Temperamento}=require('./src/models/Dog')
// Syncing all the models at once.
db.sync({ alter: true }).then(() => {
  server.listen(3001, async() => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    /* const tempe = await Temperamento.create({
      nombre: 'facil de adiestrar'
    })
    const tempe1 = await Temperamento.create({
      nombre: 'dificil de adiestrar'
    })
    const tempe2 = await Temperamento.create({
      nombre: 'amigable'
    })
    const tempe3 = await Temperamento.create({
      nombre: 'jugueton'
    })
    const tempe4 = await Temperamento.create({
      nombre: 'dominante'
    })
    const tempe5 = await Temperamento.create({
      nombre: 'tanquilo'
    })

    Promise.all([tempe,tempe1,tempe2,tempe3,tempe4,tempe5])
      .then(res => {
        console.log("temperamentos precargados");
      }); */
  });
});
