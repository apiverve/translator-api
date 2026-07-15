declare module '@apiverve/translator' {
  export interface translatorOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface translatorResponse {
    status: string;
    error: string | null;
    data: TranslatorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TranslatorData {
      sourceLang:     null | string;
      targetLang:     null | string;
      translatedText: null | string;
  }

  export default class translatorWrapper {
    constructor(options: translatorOptions);

    execute(callback: (error: any, data: translatorResponse | null) => void): Promise<translatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: translatorResponse | null) => void): Promise<translatorResponse>;
    execute(query?: Record<string, any>): Promise<translatorResponse>;
  }
}
