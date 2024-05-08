import { CATEGORIES, COUNTRIES, LANGUAGES } from '@/api/newa-api/constants';
import { z } from 'zod';

export const CountrySchema = z.union([
    z.literal(COUNTRIES.AE),
    z.literal(COUNTRIES.AR),
    z.literal(COUNTRIES.AT),
    z.literal(COUNTRIES.AU),
    z.literal(COUNTRIES.BE),
    z.literal(COUNTRIES.BG),
    z.literal(COUNTRIES.BR),
    z.literal(COUNTRIES.CA),
    z.literal(COUNTRIES.CH),
    z.literal(COUNTRIES.CN),
    z.literal(COUNTRIES.CO),
    z.literal(COUNTRIES.CU),
    z.literal(COUNTRIES.CZ),
    z.literal(COUNTRIES.DE),
    z.literal(COUNTRIES.EG),
    z.literal(COUNTRIES.FR),
    z.literal(COUNTRIES.GB),
    z.literal(COUNTRIES.GR),
    z.literal(COUNTRIES.HK),
    z.literal(COUNTRIES.HU),
    z.literal(COUNTRIES.ID),
    z.literal(COUNTRIES.IE),
    z.literal(COUNTRIES.IL),
    z.literal(COUNTRIES.IN),
    z.literal(COUNTRIES.IT),
    z.literal(COUNTRIES.JP),
    z.literal(COUNTRIES.KR),
    z.literal(COUNTRIES.LT),
    z.literal(COUNTRIES.LV),
    z.literal(COUNTRIES.MA),
    z.literal(COUNTRIES.MX),
    z.literal(COUNTRIES.MY),
    z.literal(COUNTRIES.NG),
    z.literal(COUNTRIES.NL),
    z.literal(COUNTRIES.NO),
    z.literal(COUNTRIES.NZ),
    z.literal(COUNTRIES.PH),
    z.literal(COUNTRIES.PL),
    z.literal(COUNTRIES.PT),
    z.literal(COUNTRIES.RO),
    z.literal(COUNTRIES.RS),
    z.literal(COUNTRIES.RU),
    z.literal(COUNTRIES.SA),
    z.literal(COUNTRIES.SE),
    z.literal(COUNTRIES.SG),
    z.literal(COUNTRIES.SI),
    z.literal(COUNTRIES.SK),
    z.literal(COUNTRIES.TH),
    z.literal(COUNTRIES.TR),
    z.literal(COUNTRIES.TW),
    z.literal(COUNTRIES.UA),
    z.literal(COUNTRIES.US),
    z.literal(COUNTRIES.VE),
    z.literal(COUNTRIES.ZA),
]);

export const CategorySchema = z.union([
    z.literal(CATEGORIES.BUSINESS),
    z.literal(CATEGORIES.ENTERTAINMENT),
    z.literal(CATEGORIES.GENERAL),
    z.literal(CATEGORIES.HEALTH),
    z.literal(CATEGORIES.SCIENCE),
    z.literal(CATEGORIES.SPORTS),
    z.literal(CATEGORIES.TECHNOLOGY),
]);

export const LanguageSchema = z.union([
    z.literal(LANGUAGES.AR),
    z.literal(LANGUAGES.DE),
    z.literal(LANGUAGES.EN),
    z.literal(LANGUAGES.ES),
    z.literal(LANGUAGES.FR),
    z.literal(LANGUAGES.HE),
    z.literal(LANGUAGES.IT),
    z.literal(LANGUAGES.NL),
    z.literal(LANGUAGES.NO),
    z.literal(LANGUAGES.PT),
    z.literal(LANGUAGES.RU),
    z.literal(LANGUAGES.SE),
    z.literal(LANGUAGES.UD),
]);
