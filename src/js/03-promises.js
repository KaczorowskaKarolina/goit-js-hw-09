// import * as Notiflix from 'notiflix';
import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      // Resolve
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    } else {
      // Reject
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    }
  });
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.Success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.Failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
