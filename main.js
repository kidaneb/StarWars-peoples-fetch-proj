const mainContainer = document.getElementById('main-container');
const container = document.getElementById('container');
const container_ = document.querySelector('.container_');
const loading = document.getElementById('loading');


fetch('https://swapi.dev/api/people')
.then((response) => {
    if (response.ok) {
        response
            .json()
            .then((data) => {
                data.results.forEach(person =>{
                    loading.style.display = 'none';
                    const container = document.createElement('div');
                    container.className ='container';
                    container.innerHTML = 
                                                `
                                                
                                                <div class="people">
                                                    <div>
                                                        <p>Name:${person.name}</p>
                                                        <p>Height:${person.height}</p>
                                                        <p>Mass:${person.mass}</p>
                                                    </div>
                                                    <div>
                                                        <p>Hair_color:${person.hair_color}</p>
                                                        <p>Skin_color:${person.skin_color}</p>
                                                    </div>  
            
                                                </div>
                                                                        
                                                `
                                    mainContainer.insertBefore(container, mainContainer.firstChild);
                })
            })
    }
    else{
        console.log('Error fetching data from the API')
    }
})
.catch((error) => {
    loading.innerHTML = 'ERROR JUST HAPPENDED';
    loading.style.color = 'red';
    

} )




    
// ANOTHER HTML INSERTING WAY
// fetch('https://swapi.dev/api/people')
// .then(response => response.json())
// .then(data => {    
//     data.results.forEach(person =>{
//     mainContainer.innerHTML += `
//     <div class="container" id="container">
//       <div class="people">
//         <div>
//           <p>Name: ${person.name}</p>
//           <p>Height: ${person.height}</p>
//           <p>Mass: ${person.mass}</p>
//         </div>
//         <div>
//           <p>Hair_color: ${person.hair_color}</p>
//           <p>Skin_color: ${person.skin_color}</p>
//         </div>
//       </div>
//     </div>
//   `;
// });
// });

// ALTERNATIVE HTML INSERTING APPROACH


// fetch('https://swapi.dev/api/people')
// .then(response => response.json())
// .then(data => {
    
//     data.results.forEach(person =>{
//     container_.insertAdjacentHTML("afterend", `
//     <div class="container" id="container">
//       <div class="people">
//         <div>
//           <p>Name: ${person.name}</p>
//           <p>Height: ${person.height}</p>
//           <p>Mass: ${person.mass}</p>
//         </div>
//         <div>
//           <p>Hair_color: ${person.hair_color}</p>
//           <p>Skin_color: ${person.skin_color}</p>
//         </div>
//       </div>
//     </div>
//   `);
// });
// });



