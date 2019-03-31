node_module(
    name = "gatsby",
    sources = rglobs(
        "gatsby-*.js",
        "package-lock.json",
        "package.json",
        "src/*",
        "yarn.lock",
    ),
    build_script = "build",
    output_dir = "public",
    package_manager = "yarn",
)

node_test(
    name = "test",
    script_name = "test",
    dependencies = [":gatsby"],
)
