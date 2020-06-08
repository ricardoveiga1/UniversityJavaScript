//assume fetchDataOverApi returns data from external api and function is called from another file
const fetchDataOverApi = require('./fetchData.js');

//non async example
test('the user data for user 1', () => {
  const data = fetchDataOverApi();
  expect(data).toBe('John');
});

// async example
test('the user data for user 1', async() => {  //força esperar o retorno de uma funcao
    const data = await fetchDataOverApi(); // tem a palavra reservada await
    expect(data).toBe('John');
  });