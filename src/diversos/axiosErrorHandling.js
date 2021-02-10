a

xios.post('http://10.0.1.14:8001/api/logout',request_data, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token
          },      
      })      
      .then((response) => {
        console.log('response',response.data)

      })
      .catch((error) => {
        alert('error',error.response)
        dispatch(userUpdateProfileFail())

      })

  // console.log('----cheers---------',data)
dispatch(userUpdateProfileSuccess(data))