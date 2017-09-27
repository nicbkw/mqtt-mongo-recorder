var config = {};

config.debug = process.env.DEBUG || false;

config.mqtt  = {};
config.mqtt.namespace = process.env.MQTT_NAMESPACE || '+/devices/+/up';
config.mqtt.hostname  = process.env.MQTT_HOSTNAME  || 'eu.thethings.network';
config.mqtt.port      = process.env.MQTT_PORT      || 1883;
config.mqtt.user      = process.env.MQTT_USER      || 'remon001';
config.mqtt.password  = process.env.MQTT_PASSWORD  || 'ttn-account-v2.NRx5V4KBouqrShNucTvvLLT-v6FsyXtR5ZyFbifeGn8';

config.mongodb = {};
config.mongodb.hostname   = process.env.MONGODB_HOSTNAME   || 'localhost';
config.mongodb.port       = process.env.MONGODB_PORT       || 27017;
config.mongodb.database   = process.env.MONGODB_DATABASE   || 'mqtt';
config.mongodb.collection = process.env.MONGODB_COLLECTION || 'message';

module.exports = config;
