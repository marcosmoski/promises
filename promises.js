
function fetchData() {
  return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
          const data = [1, 2, 3, 4, 5];
          resolve(data);
      }, 1000);
  });
}

// Using the promise
fetchData()
  .then(data => {
      console.log('Data fetched successfully:', data);
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });