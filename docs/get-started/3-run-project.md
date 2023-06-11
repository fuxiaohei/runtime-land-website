---
sidebar_position: 3
sidebar_label: "Run Project"
---

# Run Project

After coding your project, you can run it locally to test it out. This is a great way to test your project before deploying it to production.

Before running your project, you need to build it. To build your project, run the following command:

```bash
cd <your-project-name>
land-cli build
```

It uses proper toolchains to build your project. After building, you can run your project by running the following command:

```bash
land-cli serve
```

It will start a local server at `http://localhost:18080`. You can visit it to test your project.
