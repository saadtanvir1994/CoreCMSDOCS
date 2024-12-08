---
outline: deep
---

# Managing Project

After logging in to the application, you will be redirected to the main dashboard page of the application. This page displays all the collections defined for your project. The list will be empty if you are logging in for the first time.

You can create collections and content. At the top right side, you can see the settings icon.

![Project Dashboard](/screenshots/dashboard.png)

## Project Settings

### Project

In this page you can change the name and description of the project. You can also change the default storage option for your media.

![Project Settings](/screenshots/settings.png)

---

### Localization

You can manage content locales for your project. Project must have at least one locale. In order to change the default locale you need to add a new one and set it as the default locale. Then you can delete the old locale.

![Project Locales](/screenshots/locales.png)

---

### Users & Roles

In this section you can manage user access to your your project. There are two roles you can use. Admin roles can manage project collections and content. Editors can only manage content. Super admin accounts have the admin role for all your projects.

![User Roles](/screenshots/user_roles.png)

When you're assigning a user to a project you can create a new user.

![Create User](/screenshots/create_user.png)

---

### API Access

In this page you can manage API Access for your project.

This section allows you to issue API tokens that can be used to authenticate API requests to your application. When making requests using API tokens, the token should be included in the `Authorization` header as a `Bearer <token>`. You can set permissions for access tokens.

These tokens typically have a very long expiration time (years), but can be manually revoked at anytime.

![API Tokens](/screenshots/api_tokens.png)

#### Enabling Public API Access

You can enable public access for your project's endpoints. Public access is only available for the get requests(read). You're still going to need an access token for the create, update and delete operations.

![Public API Access](/screenshots/public_access.png)

---

### Webhooks

Webhooks provide a method to notify other applications that an event occurred. 

Using webhooks, you can send information about events to third-party applications when new content is created or updated.

The way a webhook works is by delivering information to a receiving application through **POST** requests.

There are 7 different events you can opt for:

- Content Created
- Content Updated
- Content Published
- Content Unpublished
- Content Trashed
- Content Deleted
- Content Restored

![Webhooks](/screenshots/webhooks.png)

#### Creating Webhooks

You can create multiple webhooks for your project.

1. Navigate to Webhooks in the sidebar
2. Press "Create a New Webhook" in the upper right corner of the window
3. Fill out the configuration for your webhook
4. Click "Create Webhook"

![Creating Webhook](/screenshots/create_webhook.png)

#### Configuration

- **Name** of your webhook (required)
- **Description** for you webhook (optional)
- **URL** to receive your webhook (required)
- **Secret** to sign your requests. Details below. (optional)
- **Collections** You can choose multiple collections to watch for an event. (required)
- **Events** You can choose multiple events. (required)
- **Source** for your webhook. You can either choose User or API. (required)
- **Include Payload** Choose to include or not the content data in your request.
- **Active** You can enable or disable your webhooks. This may be useful when you don't want to delete the webhook.

#### Securing Webhooks

When setting up, it's common to generate, store, and share a secret between your app and the app that wants to receive webhooks. You can generate a secure secret key by pressing the "Generate" button or you can manually create your secret key.

![Webhook Secret](/screenshots/webhook_secret.png)

CoreCMSAPI will create a signature for your request using HMAC method.

#### Using HMAC signature to validate webhooks

When you create a webhook with a secret key to sign your request, Elmapi sends the request with a "signature" header. You can validate this signature to ensure the request is coming from your application.

To verify the signature the steps required are:

* Get the raw body of the request;
* Extract the signature header value;
* Calculate the HMAC of the raw body using the SHA-256 hash function and the secret;
* Compare the calculated HMAC with the one sent in the signature header

Here is an example code for PHP:

```php
<?php
define('SECRET_KEY', 'webhook_secret_key');

function verify_webhook($data, $hmac_signature){
    # Calculate HMAC
    $calculated_hmac = hash_hmac('sha256', $data, SECRET_KEY);
    return hash_equals($hmac_signature, $calculated_hmac);
}
# Extract the signature header
$headers = getallheaders();
$hmac_signature = $headers['Signature'];

# Get the raw body
$data = file_get_contents('php://input');

# Compare HMACs
$verified = verify_webhook($data, $hmac_signature);

error_log('Webhook verified: '.var_export($verified, true)); 
if ($verified) {
    # Do something with the webhook
    http_response_code(200);
} else {
    http_response_code(401);
}
```

#### Using Queues

Elmapi uses Laravel's queue system to process webhooks. By default when an event happens, the webhook will be triggered immediately. That's because the default configuration for queue connection has been set to "sync". You can change this setting in your `.env` file. Avaible queue connections are: sync, database, beanstalkd, sqs, redis.

```
QUEUE_CONNECTION=sync
```

You can find more information about queues in the [Laravel documentation](https://laravel.com/docs/11.x/queues).

## Collections

Collections are where you can create your schema for your content. Inside the collections module you can create new collections and add fields. All changes to your collections are immediately avaible in content managing view.

![Collections](/screenshots/collections.png)

### Creating Collections

To create a new collection simply use the **Add New** button on the collection list. Name your collection and the slug will be created. You can change the slug if you want to.

You can create as many collections as you want.

![Create Collection](/screenshots/create_collection.png)

### Adding Fields

You can add fields to your collection. Learn more about **field types** in the next section.

![Adding Field](/screenshots/adding_field.png)

## Blocks

A block is a collection field that allow you to group your fields in a single place. It can then be used as a field in multiple collections. Thus reducing redundancy, and maintaining consistency across collections.

![Blocks](/screenshots/blocks.png)

You can add fields in blocks just like you would in collection. You can even add nested blocks in a block schema.

## Fields

CoreCMSAPI allows 16 different field types to create your schema.

![Fields](/screenshots/fields.png)

### Field Parameters

Every field type has some default and additional settings according to its type.

- **Label**: Display name of the field
- **Field Name**: Database name of the field
- **Description (optional)**: Displays a hint for the field when creating or editing content
- **Placeholder (optional)**: Placeholder text for input fields

![Field Parameters](/screenshots/field_parameters.png)

### Validations

When creating content, validation options can help users to keep the content data consistent and clean.

- **Required**: Prevents saving content if this field is empty
- **Unique**: Prevents saving content if there is a record with the same content.
- **Character count**: Specifies a minimum and/or maximum allowed number of characters

::: info
You can write a custom error message for validations. 
:::

![Field Validations](/screenshots/field_validations.png)

### Other Options

You can also set other options for a field to control its behavior.

- **Repeatable Field**: Allows multiple entries for the field. It's available for _text_, _longtext_, _email_, _number_, _color_, _date_, _time_, and _block_ field types.
- **Hide in content list**: Field will be invisible in the content list table
- **Hidden in API**: Field will be invisible in API.

![Field Options](/screenshots/field_options.png)