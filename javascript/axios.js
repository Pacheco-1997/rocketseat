axios.get('https://api.github.com/users/Pacheco-1997')
    .then(function(response){
        return console.log(response)
    })
    .catch(function(error){
        return console.log(error)
    })