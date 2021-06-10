const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=1a0c791ca8ab3ae094fc8630384545a0&query=" + latitude + "," + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error) {
            callback("Unable to find location. Try another search.", undefined)
        } else {
            callback(undefined, "It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. Humidity is "+body.current.humidity+". Wind speed is "+body.current.wind_speed+ " "+ body.current.wind_dir)
        }
    })
}
module.exports = forecast