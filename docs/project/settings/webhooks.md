---
outline: deep
---

# Webhooks

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

CoreCMSAPI uses Laravel's queue system to process webhooks. By default when an event happens, the webhook will be triggered immediately. That's because the default configuration for queue connection has been set to "sync". You can change this setting in your `.env` file. Avaible queue connections are: sync, database, beanstalkd, sqs, redis.

```
QUEUE_CONNECTION=sync
```

You can find more information about queues in the [Laravel documentation](https://laravel.com/docs/11.x/queues).