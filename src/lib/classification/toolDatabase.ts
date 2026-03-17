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

  // === KI-PRÄSENTATIONEN ===
  { name: 'Gamma', aliases: ['Gamma AI', 'Gamma App'], isAI: true, categoryDe: 'KI-Präsentationserstellung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Beautiful.ai', aliases: ['Beautiful AI', 'BeautifulAI'], isAI: true, categoryDe: 'KI-Präsentationserstellung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Tome', aliases: ['Tome AI'], isAI: true, categoryDe: 'KI-Präsentationserstellung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'SlidesAI', aliases: ['Slides AI'], isAI: true, categoryDe: 'KI-Präsentationserstellung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Decktopus AI', aliases: ['Decktopus'], isAI: true, categoryDe: 'KI-Präsentationserstellung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Pitch', aliases: ['Pitch.com'], isAI: true, categoryDe: 'KI-Präsentationserstellung', riskHintDe: 'Minimales Risiko' },

  // === KI-TERMINPLANUNG & KALENDER ===
  { name: 'Reclaim AI', aliases: ['Reclaim', 'ReclaimAI'], isAI: true, categoryDe: 'KI-Terminplanung', riskHintDe: 'Minimales Risiko' },
  { name: 'Clockwise', aliases: ['Clockwise AI'], isAI: true, categoryDe: 'KI-Kalenderoptimierung', riskHintDe: 'Minimales Risiko' },
  { name: 'Motion', aliases: ['Motion AI', 'Usemotion'], isAI: true, categoryDe: 'KI-Aufgaben & Terminplanung', riskHintDe: 'Minimales Risiko' },
  { name: 'Calendly AI', aliases: ['Calendly'], isAI: true, categoryDe: 'KI-Terminplanung', riskHintDe: 'Minimales Risiko' },

  // === KI-NOTIZEN & MEETING-TRANSKRIPTION ===
  { name: 'Fireflies.ai', aliases: ['Fireflies AI', 'Fireflies'], isAI: true, categoryDe: 'KI-Meeting-Transkription', riskHintDe: 'Minimales Risiko (Datenschutz beachten!)' },
  { name: 'tl;dv', aliases: ['tldv', 'TLDV'], isAI: true, categoryDe: 'KI-Meeting-Transkription', riskHintDe: 'Minimales Risiko (Datenschutz beachten!)' },
  { name: 'Fathom', aliases: ['Fathom AI', 'Fathom Notetaker'], isAI: true, categoryDe: 'KI-Meeting-Transkription', riskHintDe: 'Minimales Risiko (Datenschutz beachten!)' },
  { name: 'Krisp', aliases: ['Krisp AI'], isAI: true, categoryDe: 'KI-Geräuschunterdrückung & Transkription', riskHintDe: 'Minimales Risiko' },
  { name: 'Airgram', aliases: ['Airgram AI'], isAI: true, categoryDe: 'KI-Meeting-Notizen', riskHintDe: 'Minimales Risiko' },

  // === KI-E-MAIL-TOOLS ===
  { name: 'Superhuman AI', aliases: ['Superhuman'], isAI: true, categoryDe: 'KI-E-Mail-Assistent', riskHintDe: 'Minimales Risiko' },
  { name: 'Spark AI', aliases: ['Spark Mail AI', 'Spark'], isAI: true, categoryDe: 'KI-E-Mail-Assistent', riskHintDe: 'Minimales Risiko' },
  { name: 'SaneBox', aliases: ['Sanebox'], isAI: true, categoryDe: 'KI-E-Mail-Sortierung', riskHintDe: 'Minimales Risiko' },
  { name: 'Lavender AI', aliases: ['Lavender'], isAI: true, categoryDe: 'KI-E-Mail-Schreibassistent', riskHintDe: 'Minimales Risiko' },
  { name: 'Shortwave', aliases: ['Shortwave AI'], isAI: true, categoryDe: 'KI-E-Mail-Assistent', riskHintDe: 'Minimales Risiko' },

  // === KI-SOCIAL MEDIA ===
  { name: 'Hootsuite AI', aliases: ['Hootsuite', 'Hootsuite OwlyWriter'], isAI: true, categoryDe: 'KI-Social-Media-Management', riskHintDe: 'Minimales Risiko' },
  { name: 'Buffer AI', aliases: ['Buffer'], isAI: true, categoryDe: 'KI-Social-Media-Management', riskHintDe: 'Minimales Risiko' },
  { name: 'Later AI', aliases: ['Later'], isAI: true, categoryDe: 'KI-Social-Media-Planung', riskHintDe: 'Minimales Risiko' },
  { name: 'Publer', aliases: ['Publer AI'], isAI: true, categoryDe: 'KI-Social-Media-Management', riskHintDe: 'Minimales Risiko' },
  { name: 'Predis.ai', aliases: ['Predis AI'], isAI: true, categoryDe: 'KI-Social-Media-Content', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Lately AI', aliases: ['Lately'], isAI: true, categoryDe: 'KI-Social-Media-Content', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Sprout Social AI', aliases: ['Sprout Social'], isAI: true, categoryDe: 'KI-Social-Media-Analyse', riskHintDe: 'Minimales Risiko' },

  // === KI-WEBSITE-BUILDER ===
  { name: 'Wix ADI', aliases: ['Wix AI', 'Wix KI'], isAI: true, categoryDe: 'KI-Website-Builder', riskHintDe: 'Minimales Risiko' },
  { name: 'Framer AI', aliases: ['Framer'], isAI: true, categoryDe: 'KI-Website-Builder', riskHintDe: 'Minimales Risiko' },
  { name: '10Web AI', aliases: ['10Web', 'TenWeb AI'], isAI: true, categoryDe: 'KI-Website-Builder', riskHintDe: 'Minimales Risiko' },
  { name: 'Hostinger AI', aliases: ['Hostinger Website Builder AI'], isAI: true, categoryDe: 'KI-Website-Builder', riskHintDe: 'Minimales Risiko' },
  { name: 'Durable AI', aliases: ['Durable'], isAI: true, categoryDe: 'KI-Website-Builder', riskHintDe: 'Minimales Risiko' },
  { name: 'Jimdo Dolphin', aliases: ['Jimdo AI', 'Jimdo KI'], isAI: true, categoryDe: 'KI-Website-Builder', riskHintDe: 'Minimales Risiko' },
  { name: 'Zyro AI', aliases: ['Zyro'], isAI: true, categoryDe: 'KI-Website-Builder', riskHintDe: 'Minimales Risiko' },

  // === KI-KUNDENFEEDBACK & UMFRAGEN ===
  { name: 'Typeform AI', aliases: ['Typeform'], isAI: true, categoryDe: 'KI-Umfragetool', riskHintDe: 'Minimales Risiko' },
  { name: 'SurveyMonkey AI', aliases: ['SurveyMonkey'], isAI: true, categoryDe: 'KI-Umfragetool', riskHintDe: 'Minimales Risiko' },
  { name: 'Hotjar AI', aliases: ['Hotjar'], isAI: true, categoryDe: 'KI-Nutzeranalyse', riskHintDe: 'Minimales Risiko' },
  { name: 'Qualtrics AI', aliases: ['Qualtrics'], isAI: true, categoryDe: 'KI-Kundenfeedback', riskHintDe: 'Minimales Risiko' },
  { name: 'Medallia AI', aliases: ['Medallia'], isAI: true, categoryDe: 'KI-Kundenfeedback', riskHintDe: 'Minimales Risiko' },

  // === KI-VERTRIEB & SALES ===
  { name: 'Gong', aliases: ['Gong.io', 'Gong AI'], isAI: true, categoryDe: 'KI-Vertriebsanalyse', riskHintDe: 'Minimales Risiko (Datenschutz beachten!)' },
  { name: 'Chorus', aliases: ['Chorus.ai', 'Chorus AI', 'ZoomInfo Chorus'], isAI: true, categoryDe: 'KI-Vertriebsanalyse', riskHintDe: 'Minimales Risiko (Datenschutz beachten!)' },
  { name: 'Clari', aliases: ['Clari AI'], isAI: true, categoryDe: 'KI-Umsatzprognose', riskHintDe: 'Minimales Risiko' },
  { name: 'Apollo AI', aliases: ['Apollo.io'], isAI: true, categoryDe: 'KI-Vertriebsautomatisierung', riskHintDe: 'Minimales Risiko' },
  { name: 'Outreach AI', aliases: ['Outreach'], isAI: true, categoryDe: 'KI-Vertriebsautomatisierung', riskHintDe: 'Minimales Risiko' },
  { name: 'Salesloft AI', aliases: ['Salesloft'], isAI: true, categoryDe: 'KI-Vertriebsautomatisierung', riskHintDe: 'Minimales Risiko' },
  { name: 'Seamless.AI', aliases: ['Seamless AI'], isAI: true, categoryDe: 'KI-Leadgenerierung', riskHintDe: 'Minimales Risiko' },
  { name: 'Cognism', aliases: ['Cognism AI'], isAI: true, categoryDe: 'KI-Leadgenerierung', riskHintDe: 'Minimales Risiko (DSGVO beachten!)' },

  // === KI-RECHTSTOOLS (LEGAL) ===
  { name: 'Harvey AI', aliases: ['Harvey'], isAI: true, categoryDe: 'KI-Rechtsassistent', riskHintDe: 'Begrenztes Risiko (KI-generierte Rechtstexte kennzeichnen)' },
  { name: 'Luminance', aliases: ['Luminance AI'], isAI: true, categoryDe: 'KI-Vertragsanalyse', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Kira Systems', aliases: ['Kira'], isAI: true, categoryDe: 'KI-Vertragsanalyse', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Casetext', aliases: ['Casetext AI', 'CoCounsel'], isAI: true, categoryDe: 'KI-Rechtsrecherche', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Lawgeex', aliases: ['Lawgeex AI'], isAI: true, categoryDe: 'KI-Vertragsprüfung', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Legalforce', aliases: ['Legal Force AI'], isAI: true, categoryDe: 'KI-Rechtsassistent', riskHintDe: 'Begrenztes Risiko' },

  // === KI-MEDIZIN & GESUNDHEIT (HOCHRISIKO!) ===
  { name: 'Ada Health', aliases: ['Ada', 'Ada App'], isAI: true, categoryDe: 'KI-Gesundheits-Symptomchecker', riskHintDe: '⚠️ Hochrisiko (Medizinprodukt / Gesundheits-KI)' },
  { name: 'Babylon Health', aliases: ['Babylon'], isAI: true, categoryDe: 'KI-Telemedizin', riskHintDe: '⚠️ Hochrisiko (Medizinprodukt / Gesundheits-KI)' },
  { name: 'Doctolib AI', aliases: ['Doctolib'], isAI: true, categoryDe: 'KI-Arztterminvergabe', riskHintDe: 'Minimales Risiko (aber KI-Diagnosetools = Hochrisiko!)' },
  { name: 'PathAI', aliases: ['Path AI'], isAI: true, categoryDe: 'KI-Pathologie', riskHintDe: '⚠️ Hochrisiko (Medizinprodukt)' },
  { name: 'Zebra Medical', aliases: ['Zebra Medical Vision'], isAI: true, categoryDe: 'KI-Radiologie', riskHintDe: '⚠️ Hochrisiko (Medizinprodukt)' },
  { name: 'IDx-DR', aliases: ['IDx DR'], isAI: true, categoryDe: 'KI-Augenheilkunde', riskHintDe: '⚠️ Hochrisiko (Medizinprodukt)' },
  { name: 'Merative', aliases: ['IBM Watson Health', 'Watson Health'], isAI: true, categoryDe: 'KI-Gesundheitsdatenanalyse', riskHintDe: '⚠️ Hochrisiko (Medizinprodukt)' },
  { name: 'Infermedica', aliases: ['Infermedica AI'], isAI: true, categoryDe: 'KI-Symptomchecker', riskHintDe: '⚠️ Hochrisiko (Medizinprodukt / Gesundheits-KI)' },

  // === KI-BILDUNG ===
  { name: 'Duolingo AI', aliases: ['Duolingo', 'Duolingo Max'], isAI: true, categoryDe: 'KI-Sprachlern-App', riskHintDe: 'Minimales Risiko' },
  { name: 'Khan Academy AI', aliases: ['Khanmigo', 'Khan Academy'], isAI: true, categoryDe: 'KI-Lernplattform', riskHintDe: 'Minimales Risiko' },
  { name: 'Quizlet AI', aliases: ['Quizlet', 'Q-Chat'], isAI: true, categoryDe: 'KI-Lernkarten', riskHintDe: 'Minimales Risiko' },
  { name: 'Photomath', aliases: ['Photomath AI'], isAI: true, categoryDe: 'KI-Mathe-Lernhilfe', riskHintDe: 'Minimales Risiko' },
  { name: 'Gradescope', aliases: ['Gradescope AI'], isAI: true, categoryDe: 'KI-Bewertungstool (Bildung)', riskHintDe: '⚠️ Potenziell Hochrisiko (KI-basierte Notengebung)' },
  { name: 'Century Tech', aliases: ['Century AI'], isAI: true, categoryDe: 'KI-Lernplattform', riskHintDe: 'Minimales Risiko' },
  { name: 'Brainly', aliases: ['Brainly AI'], isAI: true, categoryDe: 'KI-Lernplattform', riskHintDe: 'Minimales Risiko' },
  { name: 'Turnitin AI', aliases: ['Turnitin'], isAI: true, categoryDe: 'KI-Plagiatserkennung', riskHintDe: 'Minimales Risiko' },

  // === KI-FOTOBEARBEITUNG ===
  { name: 'Luminar AI', aliases: ['Luminar Neo AI', 'Luminar'], isAI: true, categoryDe: 'KI-Fotobearbeitung', riskHintDe: 'Minimales Risiko' },
  { name: 'Topaz AI', aliases: ['Topaz Photo AI', 'Topaz Labs'], isAI: true, categoryDe: 'KI-Bildverbesserung', riskHintDe: 'Minimales Risiko' },
  { name: 'Remove.bg', aliases: ['RemoveBG'], isAI: true, categoryDe: 'KI-Hintergrundentfernung', riskHintDe: 'Minimales Risiko' },
  { name: 'PhotoRoom', aliases: ['Photo Room', 'PhotoRoom AI'], isAI: true, categoryDe: 'KI-Produktfoto-Bearbeitung', riskHintDe: 'Minimales Risiko' },
  { name: 'Cleanup.pictures', aliases: ['CleanUp Pictures'], isAI: true, categoryDe: 'KI-Bildbereinigung', riskHintDe: 'Minimales Risiko' },
  { name: 'Pixlr AI', aliases: ['Pixlr'], isAI: true, categoryDe: 'KI-Fotobearbeitung', riskHintDe: 'Minimales Risiko' },
  { name: 'Lensa AI', aliases: ['Lensa'], isAI: true, categoryDe: 'KI-Portrait-Bearbeitung', riskHintDe: 'Begrenztes Risiko (Deepfake-Potenzial)' },
  { name: 'Remini', aliases: ['Remini AI'], isAI: true, categoryDe: 'KI-Bildverbesserung', riskHintDe: 'Minimales Risiko' },

  // === KI-MUSIK ===
  { name: 'Suno', aliases: ['Suno AI'], isAI: true, categoryDe: 'KI-Musikgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Udio', aliases: ['Udio AI'], isAI: true, categoryDe: 'KI-Musikgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'AIVA', aliases: ['AIVA AI'], isAI: true, categoryDe: 'KI-Musikkomposition', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Soundraw', aliases: ['Soundraw AI'], isAI: true, categoryDe: 'KI-Musikgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Mubert', aliases: ['Mubert AI'], isAI: true, categoryDe: 'KI-Musikgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Boomy', aliases: ['Boomy AI'], isAI: true, categoryDe: 'KI-Musikgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Amper Music', aliases: ['Amper'], isAI: true, categoryDe: 'KI-Musikgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },

  // === KI-BUCHHALTUNG (DEUTSCHER MARKT) ===
  { name: 'Candis', aliases: ['Candis AI'], isAI: true, categoryDe: 'KI-Rechnungsverarbeitung', riskHintDe: 'Minimales Risiko' },
  { name: 'GetMyInvoices', aliases: ['Get My Invoices'], isAI: true, categoryDe: 'KI-Belegerfassung', riskHintDe: 'Minimales Risiko' },
  { name: 'FastBill', aliases: ['Fastbill AI'], isAI: true, categoryDe: 'KI-Rechnungsstellung', riskHintDe: 'Minimales Risiko' },
  { name: 'Spendesk AI', aliases: ['Spendesk'], isAI: true, categoryDe: 'KI-Ausgabenmanagement', riskHintDe: 'Minimales Risiko' },
  { name: 'Moss', aliases: ['Moss AI', 'Moss.co'], isAI: true, categoryDe: 'KI-Ausgabenmanagement', riskHintDe: 'Minimales Risiko' },
  { name: 'Finway', aliases: ['Finway AI'], isAI: true, categoryDe: 'KI-Rechnungsfreigabe', riskHintDe: 'Minimales Risiko' },

  // === KI-PROJEKTMANAGEMENT ===
  { name: 'Monday AI', aliases: ['Monday.com AI', 'monday AI'], isAI: true, categoryDe: 'KI-Projektmanagement', riskHintDe: 'Minimales Risiko' },
  { name: 'ClickUp AI', aliases: ['ClickUp'], isAI: true, categoryDe: 'KI-Projektmanagement', riskHintDe: 'Minimales Risiko' },
  { name: 'Linear AI', aliases: ['Linear'], isAI: true, categoryDe: 'KI-Projektmanagement', riskHintDe: 'Minimales Risiko' },
  { name: 'Wrike AI', aliases: ['Wrike'], isAI: true, categoryDe: 'KI-Projektmanagement', riskHintDe: 'Minimales Risiko' },
  { name: 'Basecamp AI', aliases: ['Basecamp'], isAI: true, categoryDe: 'KI-Projektmanagement', riskHintDe: 'Minimales Risiko' },
  { name: 'Smartsheet AI', aliases: ['Smartsheet'], isAI: true, categoryDe: 'KI-Projektmanagement', riskHintDe: 'Minimales Risiko' },

  // === KI-DOKUMENTENTOOLS ===
  { name: 'Adobe Acrobat AI', aliases: ['Acrobat AI', 'Adobe AI Assistant'], isAI: true, categoryDe: 'KI-Dokumentenassistent', riskHintDe: 'Minimales Risiko' },
  { name: 'DocuSign AI', aliases: ['Docusign AI'], isAI: true, categoryDe: 'KI-Vertragsanalyse', riskHintDe: 'Minimales Risiko' },
  { name: 'PandaDoc AI', aliases: ['PandaDoc'], isAI: true, categoryDe: 'KI-Dokumentenerstellung', riskHintDe: 'Minimales Risiko' },
  { name: 'Coda AI', aliases: ['Coda'], isAI: true, categoryDe: 'KI-Dokumentenassistent', riskHintDe: 'Minimales Risiko' },

  // === KI-SUCHE ===
  { name: 'You.com', aliases: ['YouChat', 'You AI'], isAI: true, categoryDe: 'KI-Suchmaschine', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Kagi', aliases: ['Kagi AI', 'Kagi Search'], isAI: true, categoryDe: 'KI-Suchmaschine', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Arc Search', aliases: ['Arc Browser AI'], isAI: true, categoryDe: 'KI-Suchmaschine', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Brave Search AI', aliases: ['Brave Leo', 'Brave AI'], isAI: true, categoryDe: 'KI-Suchmaschine', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Andi Search', aliases: ['Andi AI'], isAI: true, categoryDe: 'KI-Suchmaschine', riskHintDe: 'Begrenztes Risiko' },

  // === KI-CHATBOT-BUILDER ===
  { name: 'Botpress', aliases: ['Botpress AI'], isAI: true, categoryDe: 'KI-Chatbot-Plattform', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'Voiceflow', aliases: ['Voiceflow AI'], isAI: true, categoryDe: 'KI-Chatbot-Plattform', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'Landbot', aliases: ['Landbot AI'], isAI: true, categoryDe: 'KI-Chatbot-Plattform', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'ManyChat', aliases: ['ManyChat AI'], isAI: true, categoryDe: 'KI-Chatbot-Plattform', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'Chatfuel', aliases: ['Chatfuel AI'], isAI: true, categoryDe: 'KI-Chatbot-Plattform', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'Dialogflow', aliases: ['Google Dialogflow'], isAI: true, categoryDe: 'KI-Chatbot-Plattform', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'Rasa', aliases: ['Rasa AI'], isAI: true, categoryDe: 'KI-Chatbot-Framework', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },

  // === KI-CYBERSECURITY ===
  { name: 'Darktrace', aliases: ['Darktrace AI'], isAI: true, categoryDe: 'KI-Cybersecurity', riskHintDe: 'Minimales Risiko' },
  { name: 'CrowdStrike AI', aliases: ['CrowdStrike Charlotte', 'CrowdStrike Falcon AI'], isAI: true, categoryDe: 'KI-Cybersecurity', riskHintDe: 'Minimales Risiko' },
  { name: 'SentinelOne AI', aliases: ['SentinelOne Purple AI'], isAI: true, categoryDe: 'KI-Endpoint-Schutz', riskHintDe: 'Minimales Risiko' },
  { name: 'Vectra AI', aliases: ['Vectra'], isAI: true, categoryDe: 'KI-Netzwerksicherheit', riskHintDe: 'Minimales Risiko' },
  { name: 'Cylance', aliases: ['Cylance AI', 'BlackBerry Cylance'], isAI: true, categoryDe: 'KI-Endpoint-Schutz', riskHintDe: 'Minimales Risiko' },
  { name: 'Tessian', aliases: ['Tessian AI'], isAI: true, categoryDe: 'KI-E-Mail-Sicherheit', riskHintDe: 'Minimales Risiko' },
  { name: 'Abnormal Security', aliases: ['Abnormal AI'], isAI: true, categoryDe: 'KI-E-Mail-Sicherheit', riskHintDe: 'Minimales Risiko' },

  // === KI-LOGISTIK & SUPPLY CHAIN ===
  { name: 'FourKites AI', aliases: ['FourKites'], isAI: true, categoryDe: 'KI-Lieferketten-Transparenz', riskHintDe: 'Minimales Risiko' },
  { name: 'project44 AI', aliases: ['project44'], isAI: true, categoryDe: 'KI-Lieferketten-Transparenz', riskHintDe: 'Minimales Risiko' },
  { name: 'Blue Yonder', aliases: ['Blue Yonder AI', 'JDA AI'], isAI: true, categoryDe: 'KI-Supply-Chain-Planung', riskHintDe: 'Minimales Risiko' },
  { name: 'o9 Solutions', aliases: ['o9 AI'], isAI: true, categoryDe: 'KI-Supply-Chain-Planung', riskHintDe: 'Minimales Risiko' },
  { name: 'Coupa AI', aliases: ['Coupa'], isAI: true, categoryDe: 'KI-Beschaffung', riskHintDe: 'Minimales Risiko' },
  { name: 'Locus AI', aliases: ['Locus'], isAI: true, categoryDe: 'KI-Routenoptimierung', riskHintDe: 'Minimales Risiko' },

  // === KI-WEITERE TOOLS ===
  { name: 'Zapier AI', aliases: ['Zapier Central'], isAI: true, categoryDe: 'KI-Automatisierung', riskHintDe: 'Minimales Risiko' },
  { name: 'ChatPDF', aliases: ['Chat PDF'], isAI: true, categoryDe: 'KI-Dokumentenanalyse', riskHintDe: 'Minimales Risiko' },
  { name: 'Rows AI', aliases: ['Rows'], isAI: true, categoryDe: 'KI-Tabellenkalkulation', riskHintDe: 'Minimales Risiko' },
  { name: 'Wordtune', aliases: ['Wordtune AI'], isAI: true, categoryDe: 'KI-Schreibassistent', riskHintDe: 'Minimales Risiko' },
  { name: 'Lex AI', aliases: ['Lex'], isAI: true, categoryDe: 'KI-Schreibassistent', riskHintDe: 'Minimales Risiko' },
  { name: 'AI21 Labs', aliases: ['AI21', 'Jurassic'], isAI: true, categoryDe: 'KI-Sprachmodell', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Cohere', aliases: ['Cohere AI'], isAI: true, categoryDe: 'KI-Sprachmodell', riskHintDe: 'Begrenztes Risiko' },
  { name: 'Hugging Face', aliases: ['HuggingFace'], isAI: true, categoryDe: 'KI-Modell-Plattform', riskHintDe: 'Abhängig vom eingesetzten Modell' },
  { name: 'OpenAI API', aliases: ['GPT API', 'OpenAI'], isAI: true, categoryDe: 'KI-API-Plattform', riskHintDe: 'Abhängig vom Einsatzzweck' },
  { name: 'Google Vertex AI', aliases: ['Vertex AI'], isAI: true, categoryDe: 'KI-Plattform', riskHintDe: 'Abhängig vom Einsatzzweck' },
  { name: 'Azure OpenAI', aliases: ['Azure AI'], isAI: true, categoryDe: 'KI-Plattform', riskHintDe: 'Abhängig vom Einsatzzweck' },
  { name: 'Amazon Bedrock', aliases: ['AWS Bedrock'], isAI: true, categoryDe: 'KI-Plattform', riskHintDe: 'Abhängig vom Einsatzzweck' },
  { name: 'Stability AI API', aliases: ['Stable Diffusion API'], isAI: true, categoryDe: 'KI-Bildgenerier-API', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Deepgram', aliases: ['Deepgram AI'], isAI: true, categoryDe: 'KI-Spracherkennung', riskHintDe: 'Minimales Risiko' },
  { name: 'AssemblyAI', aliases: ['Assembly AI'], isAI: true, categoryDe: 'KI-Spracherkennung', riskHintDe: 'Minimales Risiko' },
  { name: 'Pika', aliases: ['Pika AI', 'Pika Labs'], isAI: true, categoryDe: 'KI-Videogenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Luma AI', aliases: ['Dream Machine'], isAI: true, categoryDe: 'KI-Videogenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Opus Clip', aliases: ['OpusClip AI'], isAI: true, categoryDe: 'KI-Video-Clipping', riskHintDe: 'Minimales Risiko' },
  { name: 'Pictory', aliases: ['Pictory AI'], isAI: true, categoryDe: 'KI-Videoerstellung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Invideo AI', aliases: ['InVideo'], isAI: true, categoryDe: 'KI-Videoerstellung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Loom AI', aliases: ['Loom'], isAI: true, categoryDe: 'KI-Videoaufnahme & Zusammenfassung', riskHintDe: 'Minimales Risiko' },
  { name: 'D-ID', aliases: ['D-ID AI'], isAI: true, categoryDe: 'KI-Avatar-Generierung', riskHintDe: 'Begrenztes Risiko (Deepfake-Kennzeichnung!)' },
  { name: 'Colossyan', aliases: ['Colossyan AI'], isAI: true, categoryDe: 'KI-Avatar-Video', riskHintDe: 'Begrenztes Risiko (Deepfake-Kennzeichnung!)' },
  { name: 'Murf AI', aliases: ['Murf'], isAI: true, categoryDe: 'KI-Stimmengenerierung', riskHintDe: 'Begrenztes Risiko (Deepfake-Kennzeichnung!)' },
  { name: 'Play.ht', aliases: ['PlayHT', 'Play.ht AI'], isAI: true, categoryDe: 'KI-Stimmengenerierung', riskHintDe: 'Begrenztes Risiko (Deepfake-Kennzeichnung!)' },
  { name: 'Resemble AI', aliases: ['Resemble'], isAI: true, categoryDe: 'KI-Stimmenklonung', riskHintDe: 'Begrenztes Risiko (Deepfake-Kennzeichnung!)' },
  { name: 'DALL-E API', aliases: ['DALL-E Image API'], isAI: true, categoryDe: 'KI-Bildgenerier-API', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Leonardo AI', aliases: ['Leonardo.AI'], isAI: true, categoryDe: 'KI-Bildgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Ideogram', aliases: ['Ideogram AI'], isAI: true, categoryDe: 'KI-Bildgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Flux AI', aliases: ['Black Forest Labs', 'FLUX'], isAI: true, categoryDe: 'KI-Bildgenerierung', riskHintDe: 'Begrenztes Risiko (Kennzeichnungspflicht)' },
  { name: 'Clipdrop', aliases: ['Clipdrop AI'], isAI: true, categoryDe: 'KI-Bildbearbeitung', riskHintDe: 'Minimales Risiko' },
  { name: 'Khroma', aliases: ['Khroma AI'], isAI: true, categoryDe: 'KI-Farbpaletten-Generator', riskHintDe: 'Minimales Risiko' },
  { name: 'Looka', aliases: ['Looka AI'], isAI: true, categoryDe: 'KI-Logo-Generator', riskHintDe: 'Minimales Risiko' },
  { name: 'Designs.ai', aliases: ['Designs AI'], isAI: true, categoryDe: 'KI-Design-Suite', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Uizard', aliases: ['Uizard AI'], isAI: true, categoryDe: 'KI-UI-Design', riskHintDe: 'Minimales Risiko' },
  { name: 'Galileo AI', aliases: ['Galileo'], isAI: true, categoryDe: 'KI-UI-Design', riskHintDe: 'Minimales Risiko' },
  { name: 'Relume AI', aliases: ['Relume'], isAI: true, categoryDe: 'KI-Webdesign', riskHintDe: 'Minimales Risiko' },
  { name: 'Mixo AI', aliases: ['Mixo'], isAI: true, categoryDe: 'KI-Landing-Page-Builder', riskHintDe: 'Minimales Risiko' },
  { name: 'Ahrefs AI', aliases: ['Ahrefs'], isAI: true, categoryDe: 'KI-SEO-Tool', riskHintDe: 'Minimales Risiko' },
  { name: 'Clearscope', aliases: ['Clearscope AI'], isAI: true, categoryDe: 'KI-SEO-Content-Optimierung', riskHintDe: 'Minimales Risiko' },
  { name: 'MarketMuse', aliases: ['MarketMuse AI'], isAI: true, categoryDe: 'KI-Content-Strategie', riskHintDe: 'Minimales Risiko' },
  { name: 'Frase', aliases: ['Frase AI', 'Frase.io'], isAI: true, categoryDe: 'KI-SEO-Content', riskHintDe: 'Minimales Risiko' },
  { name: 'Originality.ai', aliases: ['Originality AI'], isAI: true, categoryDe: 'KI-Inhaltserkennung', riskHintDe: 'Minimales Risiko' },
  { name: 'ZeroGPT', aliases: ['GPTZero', 'GPT Zero'], isAI: true, categoryDe: 'KI-Inhaltserkennung', riskHintDe: 'Minimales Risiko' },
  { name: 'Undetectable AI', aliases: ['Undetectable.ai'], isAI: true, categoryDe: 'KI-Text-Umschreibung', riskHintDe: 'Begrenztes Risiko (Verschleierung von KI-Inhalten)' },
  { name: 'Rytr', aliases: ['Rytr AI'], isAI: true, categoryDe: 'KI-Textgenerierung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Anyword', aliases: ['Anyword AI'], isAI: true, categoryDe: 'KI-Marketing-Textgenerierung', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Writer', aliases: ['Writer.com', 'Writer AI'], isAI: true, categoryDe: 'KI-Schreibplattform (Enterprise)', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Textio', aliases: ['Textio AI'], isAI: true, categoryDe: 'KI-Stellenanzeigen-Optimierung', riskHintDe: '⚠️ Potenziell Hochrisiko (HR-Kontext)' },
  { name: 'Phrasee', aliases: ['Phrasee AI'], isAI: true, categoryDe: 'KI-Marketing-Texte', riskHintDe: 'Begrenztes Risiko bei Veröffentlichung' },
  { name: 'Cody AI', aliases: ['Sourcegraph Cody'], isAI: true, categoryDe: 'KI-Programmierassistent', riskHintDe: 'Minimales Risiko' },
  { name: 'Windsurf', aliases: ['Windsurf AI', 'Codeium'], isAI: true, categoryDe: 'KI-Programmierassistent', riskHintDe: 'Minimales Risiko' },
  { name: 'v0', aliases: ['v0.dev', 'Vercel v0'], isAI: true, categoryDe: 'KI-UI-Code-Generierung', riskHintDe: 'Minimales Risiko' },
  { name: 'Bolt', aliases: ['Bolt.new', 'StackBlitz Bolt'], isAI: true, categoryDe: 'KI-Web-App-Generierung', riskHintDe: 'Minimales Risiko' },
  { name: 'Lovable', aliases: ['Lovable.dev', 'GPT Engineer'], isAI: true, categoryDe: 'KI-Web-App-Generierung', riskHintDe: 'Minimales Risiko' },
  { name: 'Devin', aliases: ['Devin AI', 'Cognition AI'], isAI: true, categoryDe: 'KI-Software-Agent', riskHintDe: 'Minimales Risiko' },
  { name: 'Pieces', aliases: ['Pieces for Developers'], isAI: true, categoryDe: 'KI-Code-Assistent', riskHintDe: 'Minimales Risiko' },
  { name: 'Snyk AI', aliases: ['Snyk DeepCode'], isAI: true, categoryDe: 'KI-Code-Sicherheit', riskHintDe: 'Minimales Risiko' },
  { name: 'Shopify Magic', aliases: ['Shopify AI', 'Sidekick'], isAI: true, categoryDe: 'KI-E-Commerce-Assistent', riskHintDe: 'Minimales Risiko' },
  { name: 'Tidio AI Chatbot', aliases: ['Lyro AI'], isAI: true, categoryDe: 'KI-Kundenservice-Chatbot', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'Crisp AI', aliases: ['Crisp Bot'], isAI: true, categoryDe: 'KI-Kundenservice-Chatbot', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'Ada AI', aliases: ['Ada Support', 'Ada CX'], isAI: true, categoryDe: 'KI-Kundenservice-Chatbot', riskHintDe: 'Begrenztes Risiko (Chatbot-Kennzeichnung)' },
  { name: 'DeepL Write', aliases: ['DeepL Schreibassistent'], isAI: true, categoryDe: 'KI-Schreibassistent', riskHintDe: 'Minimales Risiko' },

  // === KI-BIOMETRISCHE SYSTEME (HOCHRISIKO / VERBOTEN!) ===
  { name: 'Clearview AI', aliases: ['Clearview'], isAI: true, categoryDe: 'KI-Gesichtserkennung', riskHintDe: '⚠️ Verboten / Hochrisiko (biometrische Massenüberwachung)' },
  { name: 'Face++', aliases: ['FacePlusPlus', 'Megvii'], isAI: true, categoryDe: 'KI-Gesichtserkennung', riskHintDe: '⚠️ Hochrisiko (biometrische Identifizierung)' },
  { name: 'Amazon Rekognition', aliases: ['AWS Rekognition'], isAI: true, categoryDe: 'KI-Bilderkennung', riskHintDe: '⚠️ Potenziell Hochrisiko (biometrische Funktionen)' },

  // === KI-AUTONOM FAHRENDE SYSTEME ===
  { name: 'Tesla Autopilot', aliases: ['Tesla FSD', 'Tesla Full Self-Driving'], isAI: true, categoryDe: 'KI-Autonomes Fahren', riskHintDe: '⚠️ Hochrisiko (Sicherheitskomponente Fahrzeug)' },
  { name: 'Waymo', aliases: ['Waymo AI'], isAI: true, categoryDe: 'KI-Autonomes Fahren', riskHintDe: '⚠️ Hochrisiko (Sicherheitskomponente Fahrzeug)' },

  // ==========================================
  // === WEITERE NICHT-KI-TOOLS ===
  // ==========================================

  // === DEUTSCHE BUSINESS-SOFTWARE (OHNE KI) ===
  { name: 'WISO', aliases: ['WISO Steuer', 'WISO MeinBüro', 'WISO Buchhaltung'], isAI: false, categoryDe: 'Steuersoftware', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Sage', aliases: ['Sage 50', 'Sage Business Cloud'], isAI: false, categoryDe: 'Buchhaltung & ERP', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Haufe', aliases: ['Haufe Lexware', 'Haufe X360'], isAI: false, categoryDe: 'Business-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Stotax', aliases: ['Stotax First'], isAI: false, categoryDe: 'Steuersoftware', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Agenda', aliases: ['Agenda Software'], isAI: false, categoryDe: 'Steuerberater-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Addison', aliases: ['Addison OneClick'], isAI: false, categoryDe: 'Steuerberater-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'SBS Rewe', aliases: ['SBS Software'], isAI: false, categoryDe: 'Buchhaltungssoftware', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'StarMoney', aliases: ['Star Money', 'StarMoney Business'], isAI: false, categoryDe: 'Banking-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === CRM (OHNE KI) ===
  { name: 'Pipedrive', aliases: ['Pipedrive CRM'], isAI: false, categoryDe: 'CRM-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Pipedrive AI = KI!)' },
  { name: 'HubSpot CRM Free', aliases: ['HubSpot CRM Basic'], isAI: false, categoryDe: 'CRM-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber HubSpot AI-Features = KI!)' },
  { name: 'Zoho CRM', aliases: ['Zoho'], isAI: false, categoryDe: 'CRM-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Zoho AI = KI!)' },
  { name: 'SugarCRM', aliases: ['Sugar CRM'], isAI: false, categoryDe: 'CRM-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'CentralStation CRM', aliases: ['CentralStation'], isAI: false, categoryDe: 'CRM-Software (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === ZAHLUNGSSYSTEME ===
  { name: 'PayPal', aliases: ['PayPal Business'], isAI: false, categoryDe: 'Zahlungsdienstleister', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Stripe', aliases: ['Stripe Payments'], isAI: false, categoryDe: 'Zahlungsdienstleister', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Stripe Radar = KI!)' },
  { name: 'Klarna', aliases: ['Klarna Checkout', 'Klarna Business'], isAI: false, categoryDe: 'Zahlungsdienstleister', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Klarna AI = KI!)' },
  { name: 'Mollie', aliases: ['Mollie Payments'], isAI: false, categoryDe: 'Zahlungsdienstleister', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'SumUp', aliases: ['SumUp Kartenzahlung'], isAI: false, categoryDe: 'Zahlungsterminal', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'GoCardless', aliases: ['GoCardless SEPA'], isAI: false, categoryDe: 'Lastschrift-Zahlungen', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Unzer', aliases: ['Unzer Payments', 'Heidelpay'], isAI: false, categoryDe: 'Zahlungsdienstleister', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === HOSTING & INFRASTRUKTUR ===
  { name: 'AWS', aliases: ['Amazon Web Services', 'Amazon AWS'], isAI: false, categoryDe: 'Cloud-Hosting', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber AWS AI-Services = KI!)' },
  { name: 'Microsoft Azure', aliases: ['Azure'], isAI: false, categoryDe: 'Cloud-Hosting', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Azure AI-Services = KI!)' },
  { name: 'Google Cloud', aliases: ['GCP', 'Google Cloud Platform'], isAI: false, categoryDe: 'Cloud-Hosting', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Google Cloud AI = KI!)' },
  { name: 'Hetzner', aliases: ['Hetzner Cloud', 'Hetzner Online'], isAI: false, categoryDe: 'Cloud-Hosting (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'IONOS', aliases: ['1&1 IONOS', '1und1'], isAI: false, categoryDe: 'Hosting (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Strato', aliases: ['Strato Hosting'], isAI: false, categoryDe: 'Hosting (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'All-Inkl', aliases: ['All-Inkl.com', 'all-inkl'], isAI: false, categoryDe: 'Hosting (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'DigitalOcean', aliases: ['Digital Ocean'], isAI: false, categoryDe: 'Cloud-Hosting', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Vercel', aliases: ['Vercel Hosting'], isAI: false, categoryDe: 'Web-Hosting', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Netlify', aliases: ['Netlify Hosting'], isAI: false, categoryDe: 'Web-Hosting', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === KOMMUNIKATION (OHNE KI) ===
  { name: 'Signal', aliases: ['Signal Messenger'], isAI: false, categoryDe: 'Messenger', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'WhatsApp Business', aliases: ['WhatsApp', 'WA Business'], isAI: false, categoryDe: 'Messenger', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Meta AI in WhatsApp = KI!)' },
  { name: 'Telegram', aliases: ['Telegram Business'], isAI: false, categoryDe: 'Messenger', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Threema', aliases: ['Threema Work'], isAI: false, categoryDe: 'Messenger (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Discord', isAI: false, categoryDe: 'Kommunikationsplattform', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Mattermost', isAI: false, categoryDe: 'Messenger (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Rocket.Chat', aliases: ['RocketChat'], isAI: false, categoryDe: 'Messenger (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Google Meet', aliases: ['Google Hangouts'], isAI: false, categoryDe: 'Videokonferenz', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Webex', aliases: ['Cisco Webex'], isAI: false, categoryDe: 'Videokonferenz', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'GoTo Meeting', aliases: ['GoToMeeting', 'GoTo'], isAI: false, categoryDe: 'Videokonferenz', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'BigBlueButton', aliases: ['BBB'], isAI: false, categoryDe: 'Videokonferenz (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === ERP-SYSTEME ===
  { name: 'Microsoft Dynamics', aliases: ['Dynamics 365', 'MS Dynamics'], isAI: false, categoryDe: 'ERP-System', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Copilot in Dynamics = KI!)' },
  { name: 'Sage ERP', aliases: ['Sage 100', 'Sage X3'], isAI: false, categoryDe: 'ERP-System', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Oracle ERP', aliases: ['Oracle Cloud ERP'], isAI: false, categoryDe: 'ERP-System', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Odoo', aliases: ['Odoo ERP'], isAI: false, categoryDe: 'ERP-System (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'ERPNext', aliases: ['ERP Next'], isAI: false, categoryDe: 'ERP-System (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Scopevisio', aliases: ['Scopevisio ERP'], isAI: false, categoryDe: 'ERP-System (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Weclapp', aliases: ['weclapp ERP'], isAI: false, categoryDe: 'ERP-System (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'myfactory', aliases: ['myfactory ERP'], isAI: false, categoryDe: 'ERP-System (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === DESIGN-TOOLS (OHNE KI) ===
  { name: 'Figma', aliases: ['Figma Design'], isAI: false, categoryDe: 'UI/UX-Design', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Figma AI = KI!)' },
  { name: 'Adobe InDesign', aliases: ['InDesign'], isAI: false, categoryDe: 'Layout & Druckdesign', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Adobe Photoshop', aliases: ['Photoshop'], isAI: false, categoryDe: 'Bildbearbeitung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Generative Fill = KI!)' },
  { name: 'Adobe Illustrator', aliases: ['Illustrator'], isAI: false, categoryDe: 'Vektorgrafik', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Adobe Premiere Pro', aliases: ['Premiere Pro'], isAI: false, categoryDe: 'Videobearbeitung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Adobe After Effects', aliases: ['After Effects'], isAI: false, categoryDe: 'Motion Graphics', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Sketch', aliases: ['Sketch App'], isAI: false, categoryDe: 'UI-Design', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Affinity Designer', aliases: ['Affinity Photo', 'Affinity Publisher'], isAI: false, categoryDe: 'Grafikdesign', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'GIMP', aliases: ['GNU GIMP'], isAI: false, categoryDe: 'Bildbearbeitung (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Inkscape', isAI: false, categoryDe: 'Vektorgrafik (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'DaVinci Resolve', aliases: ['DaVinci', 'Blackmagic DaVinci'], isAI: false, categoryDe: 'Videobearbeitung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Canva', aliases: ['Canva Basic', 'Canva Free'], isAI: false, categoryDe: 'Grafikdesign', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Canva AI = KI!)' },
  { name: 'Miro', aliases: ['Miro Board'], isAI: false, categoryDe: 'Whiteboard / Kollaboration', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Mural', isAI: false, categoryDe: 'Whiteboard / Kollaboration', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === DATEIFREIGABE ===
  { name: 'WeTransfer', aliases: ['We Transfer'], isAI: false, categoryDe: 'Dateitransfer', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'OneDrive', aliases: ['Microsoft OneDrive'], isAI: false, categoryDe: 'Cloud-Speicher', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Box', aliases: ['Box.com', 'Box Drive'], isAI: false, categoryDe: 'Cloud-Speicher', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Nextcloud', isAI: false, categoryDe: 'Cloud-Speicher (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'OwnCloud', aliases: ['ownCloud'], isAI: false, categoryDe: 'Cloud-Speicher (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'SharePoint', aliases: ['Microsoft SharePoint'], isAI: false, categoryDe: 'Dokumentenmanagement', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === ZEITERFASSUNG ===
  { name: 'Toggl', aliases: ['Toggl Track'], isAI: false, categoryDe: 'Zeiterfassung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Clockify', isAI: false, categoryDe: 'Zeiterfassung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Harvest', aliases: ['Harvest Time Tracking'], isAI: false, categoryDe: 'Zeiterfassung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'TimeTac', aliases: ['TimeTac Zeiterfassung'], isAI: false, categoryDe: 'Zeiterfassung (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Personio Zeiterfassung', aliases: ['Personio Basic'], isAI: false, categoryDe: 'HR-Zeiterfassung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Personio AI = KI!)' },
  { name: 'Crewmeister', isAI: false, categoryDe: 'Zeiterfassung (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'ZEP', aliases: ['ZEP Zeiterfassung'], isAI: false, categoryDe: 'Zeiterfassung (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === RECHNUNGSSTELLUNG ===
  { name: 'Billomat', isAI: false, categoryDe: 'Rechnungssoftware', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Debitoor', aliases: ['SumUp Invoices'], isAI: false, categoryDe: 'Rechnungssoftware', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Papierkram', aliases: ['papierkram.de'], isAI: false, categoryDe: 'Buchhaltung & Rechnungen', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Zervant', isAI: false, categoryDe: 'Rechnungssoftware', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Easybill', aliases: ['EasyBill'], isAI: false, categoryDe: 'Rechnungssoftware', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'invoiz', aliases: ['Invoiz'], isAI: false, categoryDe: 'Rechnungssoftware', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'BuchhaltungsButler', aliases: ['Buchhaltungs Butler'], isAI: false, categoryDe: 'Buchhaltung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === PASSWORT-MANAGER ===
  { name: '1Password', aliases: ['OnePassword', '1PW'], isAI: false, categoryDe: 'Passwort-Manager', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'LastPass', aliases: ['Last Pass'], isAI: false, categoryDe: 'Passwort-Manager', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Bitwarden', isAI: false, categoryDe: 'Passwort-Manager (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'KeePass', aliases: ['KeePassXC'], isAI: false, categoryDe: 'Passwort-Manager (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Dashlane', isAI: false, categoryDe: 'Passwort-Manager', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === VPN & ANTIVIRUS (KLASSISCH) ===
  { name: 'NordVPN', aliases: ['Nord VPN'], isAI: false, categoryDe: 'VPN-Dienst', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'ExpressVPN', aliases: ['Express VPN'], isAI: false, categoryDe: 'VPN-Dienst', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Surfshark', isAI: false, categoryDe: 'VPN-Dienst', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'ProtonVPN', aliases: ['Proton VPN'], isAI: false, categoryDe: 'VPN-Dienst', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Avira', aliases: ['Avira Antivirus'], isAI: false, categoryDe: 'Antivirus-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Kaspersky', aliases: ['Kaspersky Antivirus'], isAI: false, categoryDe: 'Antivirus-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Norton', aliases: ['Norton Antivirus', 'Norton 360'], isAI: false, categoryDe: 'Antivirus-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Bitdefender', isAI: false, categoryDe: 'Antivirus-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'ESET', aliases: ['ESET NOD32'], isAI: false, categoryDe: 'Antivirus-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'G DATA', aliases: ['G Data', 'GData'], isAI: false, categoryDe: 'Antivirus-Software (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Windows Defender', aliases: ['Microsoft Defender'], isAI: false, categoryDe: 'Antivirus-Software', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },

  // === E-MAIL-DIENSTE (OHNE KI) ===
  { name: 'ProtonMail', aliases: ['Proton Mail'], isAI: false, categoryDe: 'E-Mail-Dienst', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Posteo', isAI: false, categoryDe: 'E-Mail-Dienst (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'mailbox.org', aliases: ['Mailbox.org'], isAI: false, categoryDe: 'E-Mail-Dienst (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Gmail', aliases: ['Google Mail'], isAI: false, categoryDe: 'E-Mail-Dienst', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Gmail AI = KI!)' },

  // === WEITERE NICHT-KI-TOOLS ===
  { name: 'Confluence', aliases: ['Atlassian Confluence'], isAI: false, categoryDe: 'Wiki / Wissensdatenbank', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Notion', aliases: ['Notion Basic'], isAI: false, categoryDe: 'Notizen & Wissensdatenbank', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Notion AI = KI!)' },
  { name: 'Evernote', isAI: false, categoryDe: 'Notizen', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Obsidian', isAI: false, categoryDe: 'Notizen (lokal)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'GitHub', aliases: ['GitHub Basic', 'Git'], isAI: false, categoryDe: 'Code-Versionierung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber GitHub Copilot = KI!)' },
  { name: 'GitLab', isAI: false, categoryDe: 'Code-Versionierung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber GitLab Duo = KI!)' },
  { name: 'Bitbucket', aliases: ['Atlassian Bitbucket'], isAI: false, categoryDe: 'Code-Versionierung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Docker', aliases: ['Docker Desktop'], isAI: false, categoryDe: 'Container-Plattform', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Kubernetes', aliases: ['K8s'], isAI: false, categoryDe: 'Container-Orchestrierung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Terraform', aliases: ['HashiCorp Terraform'], isAI: false, categoryDe: 'Infrastruktur-Management', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Jenkins', isAI: false, categoryDe: 'CI/CD-Pipeline', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Matomo', aliases: ['Matomo Analytics'], isAI: false, categoryDe: 'Webanalyse (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Google Analytics', aliases: ['GA4'], isAI: false, categoryDe: 'Webanalyse', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber GA4 AI Insights = KI!)' },
  { name: 'Airtable', isAI: false, categoryDe: 'Datenbank / Tabellen', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Typeform', aliases: ['Typeform Basic'], isAI: false, categoryDe: 'Umfrage-Tool', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Typeform AI = KI!)' },
  { name: 'Google Forms', aliases: ['Google Formulare'], isAI: false, categoryDe: 'Umfrage-Tool', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Calendly', aliases: ['Calendly Basic'], isAI: false, categoryDe: 'Terminbuchung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Doodle', isAI: false, categoryDe: 'Terminplanung', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Mailchimp', aliases: ['Mailchimp Basic'], isAI: false, categoryDe: 'E-Mail-Marketing', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Mailchimp AI = KI!)' },
  { name: 'CleverReach', isAI: false, categoryDe: 'E-Mail-Marketing (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Brevo', aliases: ['Sendinblue', 'Brevo Newsletter'], isAI: false, categoryDe: 'E-Mail-Marketing', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'RapidMail', aliases: ['rapidmail'], isAI: false, categoryDe: 'E-Mail-Marketing (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Jimdo', aliases: ['Jimdo Basic'], isAI: false, categoryDe: 'Website-Baukasten', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Jimdo Dolphin = KI!)' },
  { name: 'Squarespace', isAI: false, categoryDe: 'Website-Baukasten', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Webflow', isAI: false, categoryDe: 'Website-Builder', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Wix', aliases: ['Wix Basic'], isAI: false, categoryDe: 'Website-Baukasten', riskHintDe: 'Keine KI — fällt nicht unter den AI Act (aber Wix ADI = KI!)' },
  { name: 'TYPO3', aliases: ['Typo3'], isAI: false, categoryDe: 'Content Management (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Drupal', isAI: false, categoryDe: 'Content Management (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Contao', isAI: false, categoryDe: 'Content Management (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'JTL-Shop', aliases: ['JTL', 'JTL Wawi'], isAI: false, categoryDe: 'E-Commerce (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Gambio', isAI: false, categoryDe: 'Online-Shop (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Magento', aliases: ['Adobe Commerce'], isAI: false, categoryDe: 'E-Commerce', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'PrestaShop', isAI: false, categoryDe: 'E-Commerce (Open Source)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
  { name: 'Xentral', aliases: ['Xentral ERP'], isAI: false, categoryDe: 'ERP-System (deutsch)', riskHintDe: 'Keine KI — fällt nicht unter den AI Act' },
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
