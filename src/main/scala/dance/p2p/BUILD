scala_library(
    name = 'p2p',
    dependencies=[
        '3rdparty/jvm/com/twitter:finagle-http',
        '3rdparty/jvm/com/twitter:finatra-http',
        '3rdparty/jvm/com/twitter:finatra-utils',
        '3rdparty/jvm/com/twitter:finatra-jackson',
        '3rdparty/jvm/org/sangria-graphql',
    ],
)

jvm_binary(
    name = 'bin',
    basename = 'p2p-webserver',
    main = 'dance.p2p.P2PServerMain',
    dependencies = [
        ':p2p',
        '3rdparty/jvm/com/sun:activation',
        '3rdparty/jvm/org/slf4j:slf4j-jdk14',
        'src/main/js/gatsby'
    ],
)

jvm_app(
    name = 'app',
    basename = 'p2p-webserver',
    binary = ':bin',
    bundles = [
        bundle(fileset = globs("")),
    ],
)
