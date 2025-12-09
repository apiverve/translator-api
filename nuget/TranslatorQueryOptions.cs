using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.Translator
{
    /// <summary>
    /// Query options for the Translator API
    /// </summary>
    public class TranslatorQueryOptions
    {
        /// <summary>
        /// The text to translate
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }

        /// <summary>
        /// The language code to translate the text to (e.g., fr)
        /// </summary>
        [JsonProperty("target")]
        public string Target { get; set; }

        /// <summary>
        /// The language code of the text to translate (e.g., en). If left blank, language will be auto-detected
        /// </summary>
        [JsonProperty("source")]
        public string Source { get; set; }
    }
}
