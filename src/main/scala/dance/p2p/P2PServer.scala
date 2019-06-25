package dance.p2p

import com.twitter.finatra.http.HttpServer
import com.twitter.finatra.http.filters.CommonFilters
import com.twitter.finatra.http.routing.HttpRouter

object P2PServerMain extends P2PServer

class P2PServer extends HttpServer {
  override def streamRequest: Boolean = true

  override def configureHttp(router: HttpRouter): Unit = {
    router
      .filter[CommonFilters]
      .add[TweetController]
      .add[GatsbyController]
  }
}
