import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://foodiefetch.p.rapidapi.com/swiggy',
  params: {
    query: 'grandamas cafe pune'
  },
  headers: {
    'X-RapidAPI-Key': 'X-RapidAPI-Key',
    'X-RapidAPI-Host': 'foodiefetch.p.rapidapi.com'
  }
};


try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

