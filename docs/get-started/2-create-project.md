---
sidebar_position: 2
sidebar_label: "Create Project"
---

# Create Project

A project contains all the code and *manifest* that lists some data about how to run this project. This documentation describes how to create a project.

## Creating a project from template

If you've installed `land-cli`, you can generate a project from *rust-basic* template.

```bash
land-cli init <your-project-name>
```

## The project metedata

`Metadata` describes the project's metadata, such as the project's name, description, and the building target of the project.

The `metadata` file is located at the root of the project, and it's named `meta.toml`.

```toml title=meta.toml
manifest = "v1"
# The project's name
name = "<your-project-name>"
# The project's deployment name, it's auto-generated with random string.
# If this project is production deployed, it will generate domain <your-project-name>-lavender-559.runtime.lol to access.
project = "<your-project-name>-lavender-559"
# The project's description
description = "example rust project"
authors = []
language = "rust"
```

## Write a Wasm function

In *rust-basic* template, it provides basic runnable code for you to start with rust.

```rust title=src/lib.rs
use land_sdk::http::{Body, Request, Response};
use land_sdk::http_main;

#[http_main]
pub fn handle_request(req: Request) -> Response {
    let url = req.uri().clone();
    let method = req.method().to_string().to_uppercase();
    http::Response::builder()
        .status(200)
        .header("X-Request-Url", url.to_string())
        .header("X-Request-Method", method)
        .body(Body::from("Hello Runtime.land!!"))
        .unwrap()
}
```

More API in `land_sdk` can be found in [languages-guide](/docs/category/languages-guide) for different languages.
