// import Notiflix from 'notiflix';

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//     if (shouldResolve) {
//       // Resolve
//       setTimeout(() => {
//         resolve({ position, delay });
//       }, delay);
//     } else {
//       // Reject
//       setTimeout(() => {
//         reject({ position, delay });
//       }, delay);
//     }
//   });

// }
// for(let i = 1; i <= 5; i++) { const delay = Math.floor(Math.random() * 3000) + 1000;
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// }

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

for(let i = 1; i <= 5; i++) { const delay = Math.floor(Math.random() * 3000) + 1000; createPromise(i, delay) .then(({ position, delay }) => { Notiflix.Notify.success('✅ Fulfilled promise ${position} in ${delay}ms'); }) .catch(({ position, delay }) => { Notiflix.Notify.failure('❌ Rejected promise ${position} in ${delay}ms'); }); }