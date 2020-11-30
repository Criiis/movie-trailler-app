import mainURL from './mainFetchURL'

async function fetchData(url, callBack) {
    try {
      const call = await fetch(`${mainURL}${url}`)
      const data = await call.json()
      const result = data.results
      callBack(result);
    } catch (error) {
      console.log('something went wrong!');
      console.log(error);
    }
  }

  export default fetchData