const express =  require('express')
const app = express();

app.get('/', (req, res) => {
	res.send('hi');
});

app.listen(4400, () => {
	console.log('listening on 4400')
});

