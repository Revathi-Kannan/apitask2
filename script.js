fetch('https://rps101.pythonanywhere.com/api/v1/objects/all')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('api-data');
                data.forEach(item => {
                    // Create a div for each item
                    const div = document.createElement('div');
                    div.classList.add('item');
                    div.textContent = item;
                    // Append the div to the container
                    container.appendChild(div);
                });
            })
            .catch(error => {
                console.error('Error fetching the API:', error);
            });