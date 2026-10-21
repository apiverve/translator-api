# Translator API - PHP Package

Translator is a language translation API that translates written text into target languages using standard language codes. Submit any string with a target language code to receive the translated text and the confirmed or auto-detected source language.

## Installation

Install via Composer:

```bash
composer require apiverve/translator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Translator\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'text' => 'I\'m so excited that tomorrow is going to be sunny! Can\'t wait!',
    'source' => 'en',
    'target' => 'es'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Translator\Client;
use APIVerve\Translator\Exceptions\APIException;
use APIVerve\Translator\Exceptions\ValidationException;

try {
    $response = $client->execute(['text' => 'I\'m so excited that tomorrow is going to be sunny! Can\'t wait!', 'source' => 'en', 'target' => 'es']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "sourceLang": "en",
    "targetLang": "es",
    "translatedText": "¡Qué emoción que mañana hará sol! ¡Qué ganas!"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/translator?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/translator?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/translator?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
