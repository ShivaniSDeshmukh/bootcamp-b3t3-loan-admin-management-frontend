var apiEndpoints = require('../lib/url-endpoints')
export async function tryLogin(data){
    const response = await fetch(apiEndpoints.LOGIN_API_URL, {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            "username" : data.username,
            "password" : data.password
        })
    })
    return await response.json();
}

export async function DisplayCardAPI(){
    const response = await fetch(apiEndpoints.DISPLAY_CARD_API, {
        method : 'GET',
      //  headers : {'Content-Type' : 'application/json'},
    
    })
    return await (response.json());
}

export async function DeleteCardAPI(id){
    const response = await fetch(apiEndpoints.DELETE_CARD_API + "/"+id, {
        method : 'GET',
        headers : {'Content-Type' : 'application/json'},
      })
    return await (response.json());
}

// export async function EditCard(data){
//     const data1 = JSON.stringify({
//         "loan_id" : data.loan_id,
//         "loan_type" : data.loan_type,
//         "duration_by_years" : data.duration_by_years 
//     });
//     console.log(data);
//     const response = await fetch(apiEndpoints.Edit_API_URL, {
//         method : 'POST',
//         headers : {'Content-Type' : 'application/json'},
//         body :data1
//     })
//     const d = await response.text();
//     console.log(d);
//     return (d);

// }

