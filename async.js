async.series([ 
    open, 
    dropDatabase, 
    requireModels, 
    createHeroes 
],function(err){ 
    console.log(arguments); 
    console.log('ok');
    mongoose.disconnect(callback);  });