export interface KnownTool {
  name: string;
  aliases?: string[];
  isAI: boolean;
  categoryDe: string;
  riskHintDe?: string;
}

export const knownTools: KnownTool[] = [
  // === KI-CHATBOTS & ASSISTENTEN ===
  { name: 'ChatGPT', aliases: ['Chat GPT', 'OpenAI Chat', 'GPT-4', 'GPT-4o', 'GPT-5'], isAI: true, categoryDe: 'KI-Chatbot & Textgenerierung', riskHintDe: 'Begrenztes Risiko (Transparenzpflicht bei öffentlicher Nutzung)' },
  { name: 'Claude', aliases: ['Anthropic Claude', 'Claude AI', 'Claude 3', 'Claude 4'], isAI: true, categoryDe: 'KI-Chatbot & Textgenerierung', riskHintDe: 'Begrenztes Risiko (Transparenzpflicht bei öffentlicher Nutzung)' },
  { name: 'Google Gemini', aliases: ['Gemini', 'Gemini Pro', 'Gemini Ultra', 'Google Bard', 'Bard'], isAI: true, categoryDe: 'KI-Chatbot & Textgenerierung', riskHintDe: 'Begrenztes Risiko (Transparenzpflicht bei öffentlicher Nutzung)' },
  { name: 'Microsoft Copilot', aliases: ['Copilot', 'Bing Chat', 'Bing Copilot', 'M365 Copilot', 'Windows Copilot'], isAI: true, categoryDe: 'KI-Assistent', riskHintDe: 'Begrenztes Risiko (Transparenzpflicht bei öffentlicher Nutzung)' },
  { name: 'Perplexity', aliases: ['Perplexity AI'], isAI: true, categoryDe: 'KI-Suchmaschine', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Meta AI', aliases: ['Meta Llama', 'Llama 3'], isAI: true, categoryDe: 'KI-Chatbot', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Mistral AI', aliases: ['Mistral', 'Mixtral', 'Le Chat'], isAI: true, categoryDe: 'KI-Chatbot', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Character.AI', aliases: ['Character AI'], isAI: true, categoryDe: 'KI-Chatbot', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Amazon Q', aliases: ['AWS Q'], isAI: true, categoryDe: 'KI-Assistent (Business)', riskHintDe: 'Begrenztes Risiko' },

  // === KI-TEXTGENERIERUNG & CONTENT ===
  { name: 'Jasper AI', aliases: ['Jasper', 'Jarvis AI'], isAI: true, categoryDe: 'KI-Textgenerierung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Copy.ai', aliases: ['CopyAI'], isAI: true, categoryDe: 'KI-Textgenerierung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Writesonic', isAI: true, categoryDe: 'KI-Textgenerierung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Neuroflash', aliases: ['neuroflash'], isAI: true, categoryDe: 'KI-Textgenerierung (deutsch)', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Grammarly', isAI: true, categoryDe: 'KI-Schreibassistent', riskHintDe: 'Minimales Risiko (nur Korrektur)' },
  { name: 'LanguageTool', isAI: true, categoryDe: 'KI-Rechtschreibprüfung', riskHintDe: 'Minimales Risiko' },
  { name: 'QuillBot', aliases: ['Quillbot'], isAI: true, categoryDe: 'KI-Umschreibung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Notion AI', aliases: ['Notion KI'], isAI: true, categoryDe: 'KI-Schreibassistent', riskHintDe: 'Minimales Risiko (intern)' },

  // === KI-ÜBERSETZUNG ===
  { name: 'DeepL', aliases: ['DeepL Übersetzer', 'DeepL Translator', 'DeepL Pro'], isAI: true, categoryDe: 'KI-Übersetzung', riskHintDe: 'Minimales Risiko' },
  { name: 'Google Translate', aliases: ['Google Übersetzer'], isAI: true, categoryDe: 'KI-Übersetzung', riskHintDe: 'Minimales Risiko' },

  // === KI-BILDGENERIERUNG ===
  { name: 'DALL-E', aliases: ['DALL·E', 'DALLE', 'DALL-E 3', 'ChatGPT Bilder'], isAI: true, categoryDe: 'KI-Bildgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Midjourney', aliases: ['Mid Journey'], isAI: true, categoryDe: 'KI-Bildgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Stable Diffusion', aliases: ['Stability AI', 'SDXL'], isAI: true, categoryDe: 'KI-Bildgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Adobe Firefly', aliases: ['Firefly'], isAI: true, categoryDe: 'KI-Bildgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Canva AI', aliases: ['Canva Magic', 'Canva KI'], isAI: true, categoryDe: 'KI-Design', riskHintDe: 'Begrenztes Risiko bei KI-generierten Bildern' },

  // === KI-VIDEO & AUDIO ===
  { name: 'ElevenLabs', aliases: ['Eleven Labs'], isAI: true, categoryDe: 'KI-Stimmengenerierung', riskHintDe: 'Begrenztes Risiko (Deepfake-Kennzeichnung!)' },
  { name: 'Sora', aliases: ['OpenAI Sora'], isAI: true, categoryDe: 'KI-Videogenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Runway', aliases: ['Runway ML'], isAI: true, categoryDe: 'KI-Videogenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'HeyGen', isAI: true, categoryDe: 'KI-Avatar-Video', riskHintDe: 'Begrenztes Risiko (Deepfake-Kennzeichnung!)' },
  { name: 'Synthesia', isAI: true, categoryDe: 'KI-Avatar-Video', riskHintDe: 'Begrenztes Risiko (Deepfake-Kennzeichnung!)' },
  { name: 'Descript', isAI: true, categoryDe: 'KI-Audio/Video-Bearbeitung', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Otter.ai', aliases: ['Otter AI'], isAI: true, categoryDe: 'KI-Transkription', riskHintDe: 'Minimales Risiko' },
  { name: 'Whisper', aliases: ['OpenAI Whisper'], isAI: true, categoryDe: 'KI-Spracherkennung', riskHintDe: 'Minimales Risiko' },

  // === KI-PROGRAMMIERUNG ===
  { name: 'GitHub Copilot', aliases: ['Copilot for Code', 'GH Copilot'], isAI: true, categoryDe: 'KI-Programmierassistent', riskHintDe: 'Minimales Risiko' },
  { name: 'Cursor', aliases: ['Cursor AI', 'Cursor IDE'], isAI: true, categoryDe: 'KI-Programmierassistent', riskHintDe: 'Minimales Risiko' },
  { name: 'Claude Code', aliases: ['Anthropic Claude Code'], isAI: true, categoryDe: 'KI-Programmierassistent', riskHintDe: 'Minimales Risiko' },
  { name: 'Tabnine', isAI: true, categoryDe: 'KI-Code-Vervollständigung', riskHintDe: 'Minimales Risiko' },
  { name: 'Replit AI', aliases: ['Replit'], isAI: true, categoryDe: 'KI-Programmierung', riskHintDe: 'Minimales Risiko' },
  { name: 'Amazon CodeWhisperer', aliases: ['CodeWhisperer'], isAI: true, categoryDe: 'KI-Code-Vervollständigung', riskHintDe: 'Minimales Risiko' },

  // === KI-RECRUITING & HR (HOCHRISIKO!) ===
  { name: 'Personio', aliases: ['Personio AI', 'Personio KI'], isAI: true, categoryDe: 'HR-Software mit KI', riskHintDe: '⚠️ Potenziell Hochrisiko — wenn KI Bewerber bewertet/vorsortiert' },
  { name: 'HireVue', isAI: true, categoryDe: 'KI-Video-Interview & Bewerberbewertung', riskHintDe: '⚠️ Hochrisiko (KI bewertet Bewerber)' },
  { name: 'Pymetrics', aliases: ['pymetrics'], isAI: true, categoryDe: 'KI-Eignungstest', riskHintDe: '⚠️ Hochrisiko (KI bewertet Bewerber)' },
  { name: 'LinkedIn Recruiter', aliases: ['LinkedIn AI', 'LinkedIn Recruiter AI'], isAI: true, categoryDe: 'KI-Recruiting', riskHintDe: '⚠️ Potenziell Hochrisiko — wenn KI Kandidaten vorselektiert' },
  { name: 'Workday AI', aliases: ['Workday'], isAI: true, categoryDe: 'HR-Software mit KI', riskHintDe: '⚠️ Potenziell Hochrisiko bei KI-basierter Personalentscheidung' },
  { name: 'SAP SuccessFactors', aliases: ['SuccessFactors', 'SAP SF AI'], isAI: true, categoryDe: 'HR-Software mit KI', riskHintDe: '⚠️ Potenziell Hochrisiko bei KI-Recruiting-Funktionen' },
  { name: 'Softgarden', isAI: true, categoryDe: 'Bewerbermanagement mit KI', riskHintDe: '⚠️ Potenziell Hochrisiko bei KI-basiertem CV-Screening' },
  { name: 'Recruitee', isAI: true, categoryDe: 'Bewerbermanagement mit KI', riskHintDe: '⚠️ Potenziell Hochrisiko bei KI-Funktionen' },

  // === KI-KUNDENSERVICE ===
  { name: 'Intercom AI', aliases: ['Intercom', 'Intercom Fin'], isAI: true, categoryDe: 'KI-Chatbot für Kundenservice', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'Zendesk AI', aliases: ['Zendesk'], isAI: true, categoryDe: 'KI-Kundenservice', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Drift', isAI: true, categoryDe: 'KI-Chatbot (Marketing)', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'Tidio', isAI: true, categoryDe: 'KI-Chatbot', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'Freshdesk AI', aliases: ['Freshworks AI'], isAI: true, categoryDe: 'KI-Kundenservice', riskHintDe: 'Begrenztes Risiko' },

  // === KI-MARKETING & SEO ===
  { name: 'HubSpot AI', aliases: ['HubSpot KI', 'HubSpot'], isAI: true, categoryDe: 'KI-Marketing', riskHintDe: 'Minimales bis begrenztes Risiko' },
  { name: 'Semrush AI', aliases: ['Semrush'], isAI: true, categoryDe: 'KI-SEO-Tool', riskHintDe: 'Minimales Risiko' },
  { name: 'SurferSEO', aliases: ['Surfer SEO', 'Surfer'], isAI: true, categoryDe: 'KI-SEO-Tool', riskHintDe: 'Minimales Risiko' },
  { name: 'Mailchimp AI', aliases: ['Mailchimp'], isAI: true, categoryDe: 'E-Mail-Marketing mit KI', riskHintDe: 'Minimales Risiko' },
  { name: 'Salesforce Einstein', aliases: ['Einstein AI', 'Salesforce AI'], isAI: true, categoryDe: 'KI-CRM', riskHintDe: 'Minimales Risiko (⚠️ Hochrisiko bei KI-Kredit-Scoring!)' },

  // === KI-BUCHHALTUNG & FINANZEN ===
  { name: 'DATEV KI', aliases: ['DATEV'], isAI: true, categoryDe: 'Buchhaltung mit KI-Funktionen', riskHintDe: 'Minimales Risiko (nur Buchhaltung, kein Kredit-Scoring)' },
  { name: 'Lexoffice', aliases: ['Lexoffice KI', 'lexoffice'], isAI: true, categoryDe: 'Buchhaltung mit KI-Funktionen', riskHintDe: 'Minimales Risiko' },
  { name: 'sevdesk', aliases: ['sevDesk', 'sevdesk KI'], isAI: true, categoryDe: 'Buchhaltung mit KI-Funktionen', riskHintDe: 'Minimales Risiko' },

  // === KI-KREDIT-SCORING (HOCHRISIKO!) ===
  { name: 'SCHUFA Score', aliases: ['SCHUFA', 'SCHUFA KI'], isAI: true, categoryDe: 'KI-Kredit-Scoring', riskHintDe: '⚠️ Hochrisiko (Kredit-Scoring)' },
  { name: 'Boniversum', aliases: ['Creditreform'], isAI: true, categoryDe: 'KI-Bonitätsprüfung', riskHintDe: '⚠️ Hochrisiko (Kredit-Scoring)' },

  // === KI-ÜBERWACHUNG & SICHERHEIT ===
  { name: 'KI-Videoüberwachung', aliases: ['KI Kamera', 'KI CCTV', 'Smart Kamera'], isAI: true, categoryDe: 'KI-Videoüberwachung', riskHintDe: '⚠️ Potenziell Hochrisiko (Biometrie-Kategorie)' },

  // === SPRACHASSISTENTEN ===
  { name: 'Alexa', aliases: ['Amazon Alexa', 'Echo'], isAI: true, categoryDe: 'Sprachassistent', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Siri', aliases: ['Apple Siri', 'Apple Intelligence'], isAI: true, categoryDe: 'Sprachassistent', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Google Assistant', isAI: true, categoryDe: 'Sprachassistent', riskHintDe: 'Begrenztes Risiko' },

  // === KI-DATENANALYSE ===
  { name: 'Tableau AI', aliases: ['Tableau'], isAI: true, categoryDe: 'KI-Datenanalyse', riskHintDe: 'Minimales Risiko' },
  { name: 'Power BI AI', aliases: ['Power BI', 'Microsoft Power BI'], isAI: true, categoryDe: 'KI-Datenanalyse', riskHintDe: 'Minimales Risiko' },
  { name: 'Google Analytics AI', aliases: ['GA4 AI'], isAI: true, categoryDe: 'KI-Webanalyse', riskHintDe: 'Minimales Risiko' },

  // ==========================================
  // === KEINE KI (fällt NICHT unter AI Act) ===
  // ==========================================
  { name: 'Excel', aliases: ['Microsoft Excel', 'Google Sheets', 'LibreOffice Calc', 'Tabellenkalkulation'], isAI: false, categoryDe: 'Tabellenkalkulation', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Word', aliases: ['Microsoft Word', 'Google Docs', 'LibreOffice Writer'], isAI: false, categoryDe: 'Textverarbeitung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'PowerPoint', aliases: ['Microsoft PowerPoint', 'Google Slides'], isAI: false, categoryDe: 'Präsentation', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Outlook', aliases: ['Microsoft Outlook', 'Thunderbird'], isAI: false, categoryDe: 'E-Mail', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Slack', isAI: false, categoryDe: 'Messenger', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Slack AI-Funktionen = KI!)' },
  { name: 'Microsoft Teams', aliases: ['Teams'], isAI: false, categoryDe: 'Videokonferenz', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Copilot in Teams = KI!)' },
  { name: 'Zoom', isAI: false, categoryDe: 'Videokonferenz', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Zoom AI Companion = KI!)' },
  { name: 'Zapier', aliases: ['Zapier Automation'], isAI: false, categoryDe: 'Automatisierung (regelbasiert)', riskHintDe: 'Keine KI — einfache Wenn-Dann-Regeln' },
  { name: 'IFTTT', isAI: false, categoryDe: 'Automatisierung (regelbasiert)', riskHintDe: 'Keine KI — einfache Wenn-Dann-Regeln' },
  { name: 'Make', aliases: ['Make.com', 'Integromat'], isAI: false, categoryDe: 'Automatisierung (regelbasiert)', riskHintDe: 'Keine KI — einfache Wenn-Dann-Regeln' },
  { name: 'WordPress', aliases: ['WP', 'Wordpress'], isAI: false, categoryDe: 'Content Management', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Shopify', isAI: false, categoryDe: 'Online-Shop', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Shopify Magic = KI!)' },
  { name: 'WooCommerce', isAI: false, categoryDe: 'Online-Shop', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'SAP', aliases: ['SAP ERP', 'SAP S/4HANA'], isAI: false, categoryDe: 'ERP-System', riskHintDe: 'Keine KI — klassisches ERP (aber SAP AI-Module = KI!)' },
  { name: 'Trello', isAI: false, categoryDe: 'Projektmanagement', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Asana', isAI: false, categoryDe: 'Projektmanagement', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Jira', aliases: ['Atlassian Jira'], isAI: false, categoryDe: 'Projektmanagement', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Dropbox', isAI: false, categoryDe: 'Cloud-Speicher', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Google Drive', isAI: false, categoryDe: 'Cloud-Speicher', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Taschenrechner', aliases: ['Calculator'], isAI: false, categoryDe: 'Rechner', riskHintDe: 'Keine KI' },
  { name: 'Buchhaltungssoftware', aliases: ['Buchhaltung'], isAI: false, categoryDe: 'Buchhaltung (ohne KI)', riskHintDe: 'Keine KI — einfache Buchhaltung ohne KI-Funktionen' },
];

export function searchTools(query: string): KnownTool[] {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase().trim();

  return knownTools
    .filter((tool) => {
      if (tool.name.toLowerCase().includes(q)) return true;
      if (tool.aliases?.some((a) => a.toLowerCase().includes(q))) return true;
      if (tool.categoryDe.toLowerCase().includes(q)) return true;
      return false;
    })
    .slice(0, 8); // Max 8 results
}
