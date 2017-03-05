const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   completed: true
  // }, { $set:
  //       {
  //         text: "after update3"
  //       }
  //     } , {
  //       returnOriginal: false
  //     }).then((result) => {
  //       console.log(result);
  //     });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('58bb80e216a8c1cf15e339e3')
    }, {
      $set:
          {
            name: 'Ojas Velamkar'
          },
      $inc:
          {
            age: 1
          }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });
    //db.close();
});
