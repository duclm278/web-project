const { google } = require('googleapis');
const path = require('path');
const { authenticate } = require('@google-cloud/local-auth');

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
});

const getCourseDetails = async (playlistID) => {
    const auth = await authenticate({
        keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
        scopes: ['https://www.googleapis.com/auth/youtube']
    });

    google.options(auth);

    const playlistInfo = await youtube.playlists.list({
        part: 'snippet',
        id: playlistID,
    });

    const res = await youtube.playlistItems.list({
        part: 'snippet,contentDetails',
        playlistId: playlistID,
        maxResults: 50,
    });

    let videos = [];

    for (let video of res.data.items) {
        const id = video.snippet.resourceId.videoId;
        const vid = await getVideoDetails(id);
        videos.push({
            name: vid.snippet.title,
            videoUrl: `https://www.youtube.com/watch?v=${id}`,
            description: vid.snippet.description,
            lengthSeconds: ISO8601toSeconds(vid.contentDetails.duration),
        });
    }

    let course = {
        name: playlistInfo.data.items[0].snippet.title,
        description: playlistInfo.data.items[0].snippet.description,
        lessons: videos,
    }

    return course;
}


const getVideoDetails = async (videoId) => {
    const res = await youtube.videos.list({
        part: 'snippet,contentDetails,statistics',
        id: videoId,
    });

    return res.data.items[0];
}

const ISO8601toSeconds = (duration) => {
    const pattern = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    const match = duration.match(pattern);

    if (!match) {
        throw new Error("Invalid ISO 8601 duration format");
    }

    const hours = match[1] ? parseInt(match[1], 10) : 0;
    const minutes = match[2] ? parseInt(match[2], 10) : 0;
    const seconds = match[3] ? parseInt(match[3], 10) : 0;

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    return totalSeconds;
}

module.exports = getCourseDetails;
