const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('.height').value);
  const weight = parseInt(document.querySelector('.weight').value);
  const result = document.querySelector('.result');

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = 'Enter a valid height';
  } else if( weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = 'Enter a valid weight';
  } else{
    const BMI = ( weight / ( (height*height) / 10000 )).toFixed(2);
    if(BMI < 18.6){
      result.innerHTML = `Your BMI is ${BMI} and You are Underweight`;
    } else if(BMI < 24.9){
      result.innerHTML = `Your BMI is ${BMI} and Your weight is Normal`;
    } else{
      result.innerHTML = `Your BMI is ${BMI} and You are Overweight`;
    }
    height = '';
    weight = '';
  }
})