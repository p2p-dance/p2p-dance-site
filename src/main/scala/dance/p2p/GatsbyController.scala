package dance.p2p

import com.google.inject.Inject
import com.twitter.finagle.http.Request
import com.twitter.finatra.http.Controller
import com.twitter.finatra.utils.FileResolver
import org.apache.commons.io.FilenameUtils.getExtension

class GatsbyController @Inject()(
  fileResolver: FileResolver
) extends Controller {

  get("/gatsby/:*") { request: Request =>
    val path = request.params("*")
    val indexedPath = if (path.isEmpty) "index.html" else path
    val slashedPath = "/" + indexedPath
    if (fileResolver.exists(slashedPath) && getExtension(slashedPath).nonEmpty) {
      response.ok.file(slashedPath)
    } else {
      response.notFound
    }
  }

}
