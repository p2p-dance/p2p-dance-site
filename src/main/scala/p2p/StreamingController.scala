package p2p

import com.twitter.concurrent.AsyncStream
import com.twitter.finatra.http.Controller

class StreamingController extends Controller {

  post("/graphql") { tweets: AsyncStream[Tweet] =>
    tweets map { tweet =>
      "Created tweet " + tweet
    }
  }

}