# Translator API - Ruby Gem

Translator is a language translation API that translates written text into target languages using standard language codes. Submit any string with a target language code to receive the translated text and the confirmed or auto-detected source language.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_translator'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_translator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_translator'

# Initialize the client
client = APIVerve::Translator::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  text: "I'm so excited that tomorrow is going to be sunny! Can't wait!",
  source: "en",
  target: "es"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ text: "I'm so excited that tomorrow is going to be sunny! Can't wait!", source: "en", target: "es" })
  puts response["data"]
rescue APIVerve::Translator::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Translator::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Translator::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/translator?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/translator?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/translator?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
