export interface Language {
  code: string;
  name: string;
  countryCode: string;
}

export const languages: Language[] = [
  { code: 'EN', name: 'English', countryCode: 'US' },
  { code: 'ES', name: 'Spanish', countryCode: 'ES' },
  { code: 'PT', name: 'Portuguese', countryCode: 'PT' },
  { code: 'DE', name: 'German', countryCode: 'DE' },
  { code: 'FR', name: 'French', countryCode: 'FR' },
  { code: 'IT', name: 'Italian', countryCode: 'IT' },
  { code: 'NL', name: 'Dutch', countryCode: 'NL' },
  { code: 'UA', name: 'Ukrainian', countryCode: 'UA' },
  { code: 'PL', name: 'Polish', countryCode: 'PL' },
  { code: 'SV', name: 'Swedish', countryCode: 'SE' },
  { code: 'RO', name: 'Romanian', countryCode: 'RO' },
];