const testAdapter = require('fortune/test/adapter');
const adapter = require('../lib');
const fakeRedis = require('fakeredis');

testAdapter(adapter, {
	createClientFactory: () => fakeRedis.createClient()
});
