function GetData(){
    return fetch("https://coronavirus-19-api.herokuapp.com/countries"+"/brazil")
        .then((response) => response.json());
}

const data = GetData();
console.log(data.cases);