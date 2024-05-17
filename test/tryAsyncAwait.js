async function featchData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(`Error : ${error}`);
  }
}

featchData("https://www.usemodernfullstack.dev/api/v1/users");
