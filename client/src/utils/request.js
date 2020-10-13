import axios from "axios";
import { setSession } from '../utils/helpers';

export const request = (url) => {
  return axios.request({
    method: "GET",
    url,
  });
}

export const requestPost = async (uriFetch, body) =>{
  // const url = 'http://localhost:3000/api/user/login/'
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmODQ4OTYyNDFmMzQ1Mzc4MmNmZmMyYiIsInVzZXIiOiJtb3J0ZWdhIiwiZW1haWwiOiJob2xhQG1vcnRlZ2EuY2wiLCJpYXQiOjE2MDI1NDU4MjEsImV4cCI6MTYwNTEzNzgyMX0.Htu7SEETeQ7bPMdGwbomO4GcXchFnsZ5GAR1XYMAj6M'
  try {
    let returnData:{};

    const response = await axios({
      method: 'post',
      url: uriFetch,
      headers: {
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+token
      }, 
      data: JSON.stringify(body),
    })
    .then( res => {
      
      console.log('--response.data: ', res.data);

      // return res.data
      returnData = { data: res.data };

    })
    .catch(function (error) {
      
      if (error.response) {
        console.log('error.response.data:', error.response.data.message);
        returnData = { data: error.response.data};
       
      }
      console.log('error.config: ', error.config);

  });

    if(returnData.data.token) setSession(returnData.data.token)

    return { ...returnData };

    } catch (err) {
      console.log('-err- catch: ', err);
      // throw new Error('Unable to establish a login session.'); // here I'd like to send the error to the user instead
    }


    
    
}
