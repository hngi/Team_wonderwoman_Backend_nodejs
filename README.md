# Team_wonderwoman_Backend_nodejs

Current version accepts a post request expecting json in the body containing a url field like {"url":"www.something.com"}
responds with json in the format {"url":"www.google.com","alive":true,"min_time":"32.000","max_time":"68.000","avg_time":"46.000"}

### Example using curl

    curl --header "Content-Type: application/json" -d "{\"host\":\"www.google.com\"}" http://localhost:3000
