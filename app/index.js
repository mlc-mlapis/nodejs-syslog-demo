// const log = require('ssi-logger');
const pino = require('pino');
const loggerTransport = pino.transport({
	target: 'pino-syslog',
	level: 'info'
	/*
	options: {
		enablePipelining: false, // optional (default: true)
		destination: 1 // optional (default: stdout)
	}
	*/
});
const logger = pino(loggerTransport);
const express = require('express');
const app = express();
const port = 3001;

logger.info('Hello world!');
const child = logger.child({ a: 'property' });
child.info('Hello child!');

/*
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

	log.emerg('EMERG: Hello the World:', i);
	log.alert('ALERT: Hello the World:', i);
	log.crit('CRIT: Hello the World:', i);
	log.error('ERROR: Hello the World:', i);
	log.warn('WARN: Hello the World:', i);
	log.notice('NOTICE: Hello the World:', i);
	log.info('INFO: Hello the World:', i);
	log.debug('DEBUG: Hello the World:', i);

	log.close();
}
*/

let i = 0;
const emitLog = () => {
	i = i + 1;
	console.log(i + '... The application runtime is being initialized .... We need a long log line to see if multi-line wrapping is correctly shown using mono font. We need a long log line to see if multi-line wrapping is correctly shown using mono font. We need a long log line to see if multi-line wrapping is correctly shown using mono font. We need a long log line to see if multi-line wrapping is correctly shown using mono font.');
}

app.get('/', (req, res) => {
	res.send(`... Hello!`);
});

app.listen(port, () => {
	console.log(`... listening on port ${port}`);
	console.log('... application started');
	setInterval(emitLog, 2000);
});
