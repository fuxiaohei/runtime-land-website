---
sidebar_position: 1
sidebar_label: "Rust"
---

# Building a Rust Project

Runtime.land is built on Rust and WebAssembly. So rust is first-class citizen in Runtime.land. This documentation describes how to build a rust project and deploy it to Runtime.land.

## Prerequisites

Before you begin, you'll need to install the `wasm32-wasi` target for Rust. You can do this using the `rustup` tool:

```bash
rustup target add wasm32-wasi
```

## HTTP Trigger

In Runtime.land, you can use `http_main` attribute to mark a function as a HTTP trigger. The function will be called when a HTTP request is received and respond with a HTTP response.

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

- The key point is the `http_main` macro. It marks the function as a HTTP trigger. The function must have a `Request` parameter and return a `Response`.
- The function `handle_request` is the entrypoint of the project. It will be executed when a HTTP request is received.
- `Request` and `Response` are defined in `land_sdk::http`. You can use it to access the request and response data. They are type alias of `http::Request` and `http::Response` from [http crate](https://crates.io/crates/http).
- `Body` is defined in `land_sdk::http`. It provides rich API to access the body. You can learn more about it in [land-sdk crate](https://docs.rs/crate/land-sdk/).

## Fetch Remote Http Resource

It's allowed to fetch remote http resource in Runtime.land. You can use `land-sdk::http::fetch` method to do this.

```rust title=src/lib.rs
use land_sdk::http::{fetch, Body, Request, RequestOptions, Response};
use land_sdk::http_main;

#[http_main]
pub fn handle_request(_req: Request) -> Response {
    let fetch_request = http::Request::builder()
        .method("GET")
        .uri("https://www.rust-lang.org/")
        .body(Body::from(""))
        .unwrap();
    let fetch_response = fetch(fetch_request, RequestOptions::default()).unwrap();
    http::Response::builder()
        .status(fetch_response.status())
        .body(fetch_response.into_body())
        .unwrap()
}
```

:::tip
The `http::Request::builder()` method is provided by the Rust `http` crate. The http crate is already added to template project. If you create a project without using this template, you’ll need to add the http crate yourself via `cargo add http`.
:::

- The `fetch` method is defined in `land_sdk::http`. It takes a `http::Request` and `RequestOptions` as parameters. It returns a `Result<http::Response, RequestError>`. The `Result` is `anyhow::Result` and `RequestError` is defined in `land_sdk::http`.
- The `RequestOptions` is defined in `land_sdk::http`. It provides some options to control the request. You can learn more about it in [land-sdk crate](https://docs.rs/crate/land-sdk/).
