var videos = document.getElementById("videos");
async function searchVideo() {
  var input = document.getElementById("input").value;
  var res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${input}&type=video&key=AIzaSyClR7ubt6Ia1o0mU6sM3nvjCG_ZRCGzyEQ&maxResults=20&part=snippet&chart=mostPopular`
  );
  var data = await res.json();
  //console.log(data.items);
  console.log(data)
  appendVideo(data.items);
}

function appendVideo(video_data) {
  videos.innerHTML = null;

  video_data.forEach(
    ({ id: { videoId }, snippet: { title, channelTitle } }) => {
      var div = document.createElement("div");

      div.innerHTML = `<iframe width="220" height="170" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

      var mytitle = document.createElement("p");
      mytitle.innerText = title;
      

      var channelTitle1 = document.createElement("p")
      channelTitle1.innerText=channelTitle
      div.append(mytitle, channelTitle1);
      videos.append(div);
    }
  );
}




// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&id=id&maxResults=20&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json







































//            AIzaSyClR7ubt6Ia1o0mU6sM3nvjCG_ZRCGzyEQ
//api key ==  AIzaSyBed-WsTQso0kewMQoiE_BmzH6ltqBc9HU

//   GET https://youtube.googleapis.com/youtube/v3/search?q=csk&type=video&key=[YOUR_API_KEY]