---
outline: deep
---

# API Access

In this page you can manage API Access for your project.

This section allows you to issue API tokens that can be used to authenticate API requests to your application. When making requests using API tokens, the token should be included in the `Authorization` header as a `Bearer <token>`. You can set permissions for access tokens.

These tokens typically have a very long expiration time (years), but can be manually revoked at anytime.

![API Tokens](/screenshots/api_tokens.png)

#### Enabling Public API Access

You can enable public access for your project's endpoints. Public access is only available for the get requests(read). You're still going to need an access token for the create, update and delete operations.

![Public API Access](/screenshots/public_access.png)