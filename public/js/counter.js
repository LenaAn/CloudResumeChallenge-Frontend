fetch('https://9k495avbpa.execute-api.eu-north-1.amazonaws.com/cors1')
  .then(response => response.json())
  .then(data => {
      const newElement = document.createElement('p');
      newElement.textContent = data.body;
      
      const container = document.body;
      container.appendChild(newElement);
      console.log(data.body)
  })
  .catch(error => console.error(error));