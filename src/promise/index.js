const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve('Se resolvio promesa');
    } else {
      reject('Falló la promesa');
    }
  });
};
somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.error(error));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject)=>{
    if(true){
      setTimeout(()=>{
        resolve('Resolvio promesa 2 despues de 2 segundos')
      }, 2000)
    }else{
      const error = new Error('Whoops!');
      reject(error);
    }
  });
}
somethingWillHappen2()
  .then(response => console.log(response))
  .catch(error => console.error(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response =>{
    console.log('Array o results', response);
  })
  .catch(err =>{
    console.log(err);
  })