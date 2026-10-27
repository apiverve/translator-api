Pod::Spec.new do |s|
  s.name             = 'APIVerveTranslator'
  s.version          = '1.2.3'
  s.summary          = 'Translator is a language translation API that translates written text into target languages using standard language codes.'
  s.description      = <<-'DESC'
Translator is a language translation API that translates written text into target languages using standard language codes. Submit any string with a target language code to receive the translated text and the confirmed or auto-detected source language.

This iOS/macOS SDK provides a convenient way to access the Translator from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/translator?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/translator-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveTranslator/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
