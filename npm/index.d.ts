declare module '@apiverve/translator' {
  export interface translatorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface translatorResponse {
    status: string;
    error: string | null;
    data: TranslatorData;
    code?: number;
  }


  interface TranslatorData {
      sourceLang:     string;
      targetLang:     string;
      translatedText: string;
  }

  export default class translatorWrapper {
    constructor(options: translatorOptions);

    execute(callback: (error: any, data: translatorResponse | null) => void): Promise<translatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: translatorResponse | null) => void): Promise<translatorResponse>;
    execute(query?: Record<string, any>): Promise<translatorResponse>;
  }
}
