// https://dev.to/connoro7/error-handling-with-fetch-1caj
// https://gist.github.com/odewahn/5a5eeb23279eed6a80d7798fdb47fe91

// I really liked @tjvantoll article Handling Failed HTTP Responses With fetch(). The one thing I found annoying with it, though, is that response.statusText always returns the generic error message associated with the error code. Most APIs, however, will generally return some kind of useful, more human friendly message in the body.

// Here's a modification that will capture this message. The key is that rather than throwing an error, you just throw the response and then process it in the catch block to extract the message in the body:

// https://masteringjs.io/tutorials/axios/catch

fetch('/api/foo')
  .then((response) => {
    if (!response.ok) {
      throw response
    }
    return response.json() //we only get here if there is no error
  })
  .then((json) => {
    this.props.dispatch(doSomethingWithResult(json))
  })
  .catch((err) => {
    err.text().then((errorMessage) => {
      this.props.dispatch(displayTheError(errorMessage))
    })
  })

fetch('https://jsonplaceholder.typicode.com/todo/1')
  .then((res) => res.json())
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.error)
    }
    return res
  })
  .catch((err) => console.log(err))

// ---

function handleErrors(res) {
  if (!res.ok) throw new Error(res.error)
  return res
}

fetch('https://jsonplaceholder.typicode.com/todo/1')
  .then((res) => res.json())
  .then(handleErrors)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))

// Axios

const err = await axios.get('https://httpbin.org/status/404').catch((err) => err)

err instanceof Error // true
err.message // 'Request failed with status code 404'

//---

const err = await axios.get('https://httpbin.org/status/200').
  // Will throw a TypeError because the property doesn't exist.
  then(res => res.doesNotExist.throwAnError).
  catch(err => err);

err instanceof TypeError; // true

// ---

let error;
try {
  await axios.get('https://httpbin.org/status/404').catch(err => {
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found`);
    }
    throw err;
  });
} catch (err) {
  error = err;
}

error.message; // "https://httpbin.org/status/404 not found"

// ---

// https://masteringjs.io/tutorials/axios/interceptors#error-handling

// Error Handling
// Response interceptors also let you handle errors. This is important because Axios' default error message is "Request failed with status code 404", which usually isn't what you want to show to your end user.

// The axios.interceptors.response.use() function takes 2 function parameters: successHandler and errorHandler. Axios calls successHandler if the request succeeded, or errorHandler if the request failed. You can write your own errorHandler to transform errors as shown below.

// Just make sure to rethrow an error in your errorHandler, otherwise Axios will treat it as a successful request!

let res = await axios({
  method: 'GET',
  url: 'https://httpbin.org/get',
  headers:{
    Accept: 'application/json',
  }
});

axios.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found`);
    }
    throw err;
  }
);

// Automatically sets the authorization header because
// of the request interceptor
const err = await axios.get('https://httpbin.org/status/404').
  then(() => null, err => err);

err.message; // "https://httpbin.org/status/404 not found"

// Axios throws an error when a request fails

// One of the most annoying issues with fetch() is that it does not throw an error when the server responds with an HTTP error status, like 404 or 500.

fetch('https://httpbin.org/post').catch(err => {
  /* No error even though the server responded with 405 */
});

axios.get('https://httpbin.org/post').catch(err => {
  err.response.status; // 405 "METHOD NOT ALLOWED"
});
