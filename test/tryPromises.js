function featchData(url){
    fetch(url)
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => {
            console.log(`Error ${error}`);
        });
}
featchData("https://www.usemodernfullstack.dev/api/v1/users");