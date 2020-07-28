const YouTube = require("youtube-node")
const { key } = require("./youtube-key.json")

const youTube = new YouTube()
youTube.setKey(key)

/**
 * Returns a random number between min and max
 * @param {number} min - Lower range
 * @param {number} max - Upper ranger
 */
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Searchs for 10 videos of the request subject and returns a random one
 * @param {string} queryText - Text to be added to the youtube search query
 */
async function searchVideo(queryText) {
  return new Promise((resolve, reject) => {
    youTube.search(`exercício em casa para ${queryText}`, 10, (error, result) => {
      if (error) {
        return reject([])
      }
      const videoId = result.items[getRandomInt(0, result.items.length)].id.videoId
      resolve(`https://youtu.be/${videoId}`)
    })
  })
}

module.exports = {
  searchVideo
}
