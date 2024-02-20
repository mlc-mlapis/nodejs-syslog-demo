const log = require('ssi-logger');
const express = require('express');
const app = express();
const port = 3000;

log.open({
	console: {enable: false},
	syslog: {enable: true, facility: 'LOG_LOCAL1'}
});
log.info('Hello the World');
log.close();

let i = 0;

const emitLog = () => {
	i = i + 1;
	log.open({
		console: {enable: false},
		syslog: {enable: true, facility: 'LOG_LOCAL1'}
	});
	// log.info('Hello the World:', i);
	log.EMERG('EMERG: Hello the World:', i);
	log.ALERT('ALERT: Hello the World:', i);
	log.CRIT('CRIT: Hello the World:', i);
	log.ERROR('ERROR: Hello the World:', i);
	log.WARN('WARN: Hello the World:', i);
	log.NOTICE('NOTICE: Hello the World:', i);
	log.INFO('INFO: Hello the World:', i);
	log.DEBUG('DEBUG: Hello the World:', i);
	log.close();
}

app.get('/', (req, res) => {
	res.send(`... Hello!`);
});

app.listen(port, () => {
	console.log(`... listening on port ${port}`);
	console.log('... application started');
	setInterval(emitLog, 2000);
});
