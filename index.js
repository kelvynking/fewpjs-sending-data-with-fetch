function submitData(name, email) {

    const url = "http://localhost:3000/users"

    let details = {
        name,
        email
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(details)
    }

    return fetch(url, configObj)
    .then(resp => resp.json())
    .then(data => {
        document.body.innerHTML = data["id"]
    })
    .catch(error => {
        document.body.innerHTML = error.message
    })
}

// function submitData( name, email ) {
//     return fetch( 'http://localhost:3000/users', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         },
//         body: JSON.stringify( {
//           name,
//           email
//         } )
//       } )
//       .then( function ( response ) {
//         return response.json()
//       } )
//       .then( function ( object ) {
//         document.body.innerHTML = object[ "id" ]
//       } )
//       .catch( function ( error ) {
//         document.body.innerHTML = error.message
//       } )
//   }

