const getData = async (url) => {
	const params = {
		method: 'GET',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	};
	try {
		const data = await fetch(url, { ...params });
		const parsedData = await data.json();
  	console.log('Parsed data', parsedData);
  	return parsedData;
	} catch (error) {
		console.log('Error occurred while fetching data');
		console.log(error);
	};
};

(function() {
	return getData('../locations.json');
}())
