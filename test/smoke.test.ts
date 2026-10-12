import { describe, it, expect } from 'vitest';
import { TRANSLATIONS } from '../src/i18n/translations';
import { SWAL_APPS } from '../src/data/ecosystem';
import fs from 'fs';
import path from 'path';

describe('Data Files', () => {
  it('should have ecosystem data', () => {
    expect(SWAL_APPS).toBeDefined();
    expect(SWAL_APPS.length).toBeGreaterThan(0);
  });

  it('should have valid plans catalog JSON', () => {
    const plansPath = path.resolve(__dirname, '../src/data/plans-catalog.v1.json');
    const plansData = fs.readFileSync(plansPath, 'utf8');
    const plans = JSON.parse(plansData);
    expect(plans).toBeDefined();
    expect(Array.isArray(plans.plans)).toBe(true);
    expect(plans.plans.length).toBeGreaterThan(0);
  });
});

describe('i18n completeness', () => {
  it('all languages should have some keys', () => {
    const langs = Object.keys(TRANSLATIONS);

    for (const lang of langs) {
      const langKeys = Object.keys(TRANSLATIONS[lang as keyof typeof TRANSLATIONS]);
      expect(langKeys.length).toBeGreaterThan(0);
    }
  });
});
