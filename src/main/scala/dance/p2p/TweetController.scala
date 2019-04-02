package dance.p2p

import com.twitter.finatra.http.Controller

class TweetController extends Controller {

  post("/tweet") { tweet: Tweet =>
     "Created tweet " + tweet
  }

}
