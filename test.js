import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://Proshop:1s0hppvMTyxQDfCu@proshop.hlejkft.mongodb.net/?retryWrites=true&w=majority&appName=ProShop'
  )
  .then(() => {
    console.log('Connected');
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });