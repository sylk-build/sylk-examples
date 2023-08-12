const stub = require('./clients/typescript');

const iot = new stub.IotServiceV1({
    host: 'localhost',
    port: 9000
});

const totalEvents = 5 * 60 * 5;
const eventIntervalMs = 5 * 60 * 1000 / totalEvents; // 1 minute divided by total events
const sharedFrequency = 0.0432; // Set the shared frequency for all waveforms to 432 Hz

function getSineWaveValue(time, amplitude, phase) {
    return amplitude * Math.sin(2 * Math.PI * sharedFrequency * time + phase);
}

function getCosineWaveValue(time, amplitude, phase) {
    return amplitude * Math.cos(2 * Math.PI * sharedFrequency * time + phase);
}

function getTriangleWaveValue(time, amplitude, phase) {
    return (2 * amplitude / Math.PI) * Math.asin(Math.sin(2 * Math.PI * sharedFrequency * time + phase));
}

function getSquareWaveValue(time, amplitude) {
    const period = 1 / sharedFrequency;
    const t = time % period;
    return t < period / 2 ? amplitude : -amplitude;
}

function getSawtoothWaveValue(time, amplitude) {
    const period = 1 / sharedFrequency;
    const t = time % period;
    return (2 * amplitude / period) * t - amplitude;
}

function publishEvent(topic, value) {
    const timestamp = new Date();
    
    const data = {
        sensorId: 'sensor-1',
        value: value,
        timestamp: timestamp
    };

    iot.Publish({
        topic: topic,
        data: data
    }).then(() => {
        console.log(topic+' Published event:', data);
    }).catch(error => {
        console.error('Error publishing event:', error);
    });
}

console.log('Publishing', totalEvents, 'events within 1 minute...');

const waveformConfigs = [
    { waveform: getSineWaveValue, amplitude: 50, phase: 0, topic: 'sine' },
    { waveform: getCosineWaveValue, amplitude: 30, phase: Math.PI / 2, topic: 'cosine' },
    { waveform: getTriangleWaveValue, amplitude: 70, phase: Math.PI, topic: 'triangle' },
    { waveform: getSquareWaveValue, amplitude: 80, phase: 0, topic: 'square' },
    { waveform: getSawtoothWaveValue, amplitude: 60, phase: 0, topic: 'sawtooth' }
];

for (let i = 0; i < totalEvents; i++) {
    const timestamp = new Date().getTime() / 1000 + i * eventIntervalMs / 1000;

    waveformConfigs.forEach(config => {
        const { waveform, amplitude, phase, topic } = config;
        const value = waveform(timestamp, amplitude, phase);
        setTimeout(() => publishEvent(topic, value), i * eventIntervalMs);
    });
}