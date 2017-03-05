const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').deleteMany({text: 'Finished Course'}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Todos').deleteOne({text: 'Finished Course'}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({name: 'Ojas'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('58b957c1d000e3d2c4f99452')
  }).then((result) => {
    console.log(result);
  });
  
    //db.close();
});
