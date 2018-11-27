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
  	// console.log('Parsed data', parsedData);
  	return parsedData;
	} catch (error) {
		console.log('Error occurred while fetching data');
		console.log(error);
	};
};

const filterData = (array) => {
	const data = {};
	array.forEach(obj => {
		if (obj.hasOwnProperty('data')) {
			Object.assign(data, Object.values(obj.data));
		}
	});
	return data;
}

(async function() {
	const data = await getData('../locations.json');
	const response = filterData(data);
	console.log(response);
	return response;
}())
