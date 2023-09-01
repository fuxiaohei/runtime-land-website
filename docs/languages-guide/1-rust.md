---
sidebar_position: 1
sidebar_label: "Rust"
---

# Building a Rust Project

Runtime.land is built on Rust and WebAssembly. Rust is first to be supported. You can use Rust to build your functions and deploy them to Runtime.land.

## Prerequisites

Before you begin, you'll need to install the `wasm32-wasi` target for Rust. You can do this using the `rustup` tool:

```bash
rustup target add wasm32-wasi
```

## Create Project

Use `land-cli` to create project:

```bash
land-cli init hello-rust
```

In `Cargo.toml`, it shows:

```toml title=Cargo.toml
[package]
name = "hello-rust"
version = "0.1.0"
edition = "2021"

[dependencies]
anyhow = "1.0.75"
http = "0.2.9"
land-sdk = "0.1.0"
wit-bindgen = "0.11.0"

[lib]
crate-type = ["cdylib"]
```

## HTTP Trigger

In Runtime.land, you can use `http_main` attribute to mark a function as a HTTP trigger. The function will be called when a HTTP request is received and respond with a HTTP response.

```rust title=src/lib.rs
use land_sdk::http::{Body, Error, Request, Response};
use land_sdk::http_main;

#[http_main]
pub fn handle_request(req: Request) -> Result<Response, Error> {
    let url = req.uri().clone();
    let method = req.method().to_string().to_uppercase();
    Ok(http::Response::builder()
        .status(200)
        .header("X-Request-Url", url.to_string())
        .header("X-Request-Method", method)
        .body(Body::from("Hello Runtime.land!!"))?)
}
```

- The key point is the `http_main` macro. It marks the function as a HTTP trigger. The function must have a `Request` parameter and return a `Response`.
- The function `handle_request` is the entrypoint of the project. It will be executed when a HTTP request is received.
- `Request` and `Response` are defined in `land_sdk::http`. You can use it to access the request and response data. They are type alias of `http::Request` and `http::Response` from [http crate](https://crates.io/crates/http).
- `Body` is defined in `land_sdk::http`. It provides rich API to access the body. You can learn more about it in [land-sdk crate](https://docs.rs/crate/land-sdk/).

## Fetch Remote Http Resource

It's allowed to fetch remote http resource in Runtime.land. You can use `land-sdk::http::fetch` method to do this.

```rust title=src/lib.rs
use land_sdk::http::{fetch, Body, Error, Request, RequestOptions, Response};
use land_sdk::http_main;

#[http_main]
pub fn handle_request(_req: Request) -> Result<Response, Error> {
    let fetch_request = http::Request::builder()
        .method("GET")
        .uri("https://www.rust-lang.org/")
        .body(Body::empty())?;
    let fetch_response = fetch(fetch_request, RequestOptions::default())?;
    Ok(http::Response::builder()
        .status(fetch_response.status())
        .body(fetch_response.into_body())?)
}
```

:::tip
The `http::Request::builder()` method is provided by the Rust `http` crate. The http crate is already added to template project. If you create a project without using this template, you’ll need to add the http crate yourself via `cargo add http`.
:::

- The `fetch` method is defined in `land_sdk::http`. It takes a `http::Request` and `RequestOptions` as parameters. It returns a `Result<http::Response, RequestError>`. The `Result` is `anyhow::Result` and `RequestError` is defined in `land_sdk::http`.
- The `RequestOptions` is defined in `land_sdk::http`. It provides some options to control the request. You can learn more about it in [fetch in land-sdk crate](https://docs.rs/land-sdk/latest/land_sdk/http/fn.fetch.html).
