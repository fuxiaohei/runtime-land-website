---
sidebar_position: 4
sidebar_label: "Deploy Project"
---

# Deploy Project

After local buiding and test serving, you can deploy your project to the cloud. But `land-cli` need an access-token to deploy your project. You can create one from [here](https://dash.runtime.land/settings#access-tokens).

Then run `land-cli` with the access-token:

```bash
land-cli deploy --token <your-access-token>
# output
View at:
    https://rust-basic-example-ayp1zufcb44g.runtime.lol
```

It deploys your project to the cloud and returns a URL. You can visit it to test your project.

But the deployment is set as **Preview** mode. It means that the deployment needs a URL with random suffix from your project name. You can set it to **Production** mode by running the following command:

```bash
land-cli deploy --token <your-access-token> --production

#output
View at:
    https://rust-basic-example.runtime.lol
```

## Production vs Preview

Preview deployment is used for testing your project. If tests are passed, you can deploy it to production. Production deployment is used for production usage. It has a stable URL and can be used for a long time.
