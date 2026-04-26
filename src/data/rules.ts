import { Rule, CityId } from '@/types/game';
import { getCityById } from './cities';

export const allRules: Rule[] = [
  // Handicap
  { id: 'linke-hand', emoji: '🤚', name: 'Linke Hand', type: 'handicap', shortEffect: '+1 Strafschluck bei Verstoß', description: 'Getränk ausschließlich mit der schwachen Hand halten. Wer wechselt oder mit beiden Händen hält, trinkt sofort einen Strafschluck.' },
  { id: 'kein-abstellen', emoji: '🚫', name: 'Kein Abstellen', type: 'handicap', shortEffect: 'Neustart bei Absetzen', description: 'Sobald das Glas angesetzt wird, darf es nicht mehr abgestellt werden – bis es leer ist. Wer absetzt, trinkt von vorne.' },
  { id: 'augenkontakt', emoji: '👁️', name: 'Augenkontakt-Pflicht', type: 'handicap', shortEffect: '-1 Punkt bei Verstoß', description: 'Beim Anstoßen muss mit jedem einzelnen Mitspieler Augenkontakt gehalten werden. Wer blinzelt oder wegschaut: -1 Punkt.' },
  { id: '60-sekunden', emoji: '⏱️', name: 'Tempo-Loch', type: 'handicap', shortEffect: '+2 wenn nicht in 90s fertig', description: 'Versuche dein Getränk in entspanntem Tempo innerhalb von 90 Sekunden zu leeren. Wenn nicht: +2 Score. Trinke nie schneller als dein persönliches Limit.' },
  { id: 'reihenfolge', emoji: '👑', name: 'Reihenfolge-Loch', type: 'handicap', shortEffect: '+1 für letzten Spieler', description: 'Die Gruppe bestimmt per Mehrheitsvote wer zuerst und wer zuletzt trinken muss. Der Letzte bekommt +1 auf seinen Score.' },
  { id: 'spiegeltrinken', emoji: '🪞', name: 'Spiegeltrinken', type: 'handicap', shortEffect: '+1 für langsamsten Spieler', description: 'Alle Spieler setzen gleichzeitig an. Wer als letzter fertig wird, bekommt +1 auf seinen Score.' },
  { id: 'profi-loch', emoji: '🏆', name: 'Profi-Loch', type: 'handicap', shortEffect: 'Par -1 (schwerer)', description: 'Par -1 für alle Spieler. Wer trotzdem Par schafft, bekommt +1 Bonus-Respekt-Punkt.' },
  { id: 'handicap-ausgleich', emoji: '⚖️', name: 'Handicap-Ausgleich', type: 'handicap', shortEffect: '+2 Score für den Führenden', description: 'Der aktuell führende Spieler bekommt +2 auf den Score. Kein zusätzliches Trinken — reines Score-Handicap.' },
  // Bonus
  { id: 'schnellstes-loch', emoji: '⚡', name: 'Schnellstes Loch', type: 'bonus', shortEffect: '-1 Bonus für schnellsten', description: 'Wer als erster sein Glas leert, bekommt -1 Bonuspunkt auf diesen Loch-Score.' },
  { id: 'senioren-handicap', emoji: '👴', name: 'Senioren-Handicap', type: 'bonus', shortEffect: 'Par +1 (leichter)', description: 'Par +1 für alle Spieler auf diesem Loch. Leichteres Loch – jeder hat einen Schluck mehr Zeit.' },
  // Spaß
  { id: 'windmill', emoji: '🏌️', name: 'Windmill-Start', type: 'fun', shortEffect: 'Ritual-Pflicht', description: 'Vor dem ersten Schluck muss jeder Spieler einen vollständigen Golferschwung simulieren. Wer es vergisst, darf erst danach trinken.' },
  { id: 'selbstkommentator', emoji: '🎙️', name: 'Selbstkommentator', type: 'fun', shortEffect: '+1 bei Schweigen', description: 'Jeder Spieler kommentiert sich beim Trinken live selbst wie in einer TV-Übertragung. Schweigen = +1 Strafschluck.' },
  { id: 'stumme-runde', emoji: '🤫', name: 'Stumme Runde', type: 'fun', shortEffect: '+1 Strafschluck pro Wort', description: 'Absolutes Schweigen ab Anstoßen bis das letzte Glas leer ist. Jedes Wort kostet einen Strafschluck.' },
  { id: 'glaesertausch', emoji: '🔄', name: 'Gläsertausch', type: 'fun', shortEffect: 'Pflicht-Tausch', description: 'Der Scoreführer und der Letzte tauschen ihre Getränke, bevor beide zu trinken beginnen.' },
  { id: 'prost-international', emoji: '🌍', name: 'Prost International', type: 'fun', shortEffect: 'Kein Deutsch beim Anstoßen', description: 'Anstoßen nur in Nicht-Deutsch. Wer Deutsch sagt: +1 Strafschluck.' },
  { id: 'beichtstuhl', emoji: '😳', name: 'Beichtstuhl', type: 'fun', shortEffect: 'Geschichte-Pflicht vor Trinken', description: 'Jeder muss vor dem ersten Schluck eine peinliche Geschichte erzählen. Ohne Geschichte oder bei Lüge: trinkt zuerst UND zuletzt.' },
  { id: 'lachverbot', emoji: '😐', name: 'Lachverbot', type: 'fun', shortEffect: '+1 pro Lachen', description: 'Während des Trinkens ist Lachen, Schmunzeln oder Grinsen verboten. Jedes Lächeln = +1 Strafschluck.' },
  { id: 'blind-tasting', emoji: '🙈', name: 'Blind Tasting', type: 'fun', shortEffect: '+1 bei falscher Antwort', description: 'Augen schließen beim ersten Schluck. Danach muss jeder die Biersorte benennen. Falsches Raten: +1 auf den Score.' },
  // Sonder
  { id: 'doppeltes-loch', emoji: '✖️', name: 'Doppeltes Loch', type: 'special', shortEffect: 'Score × 2 in Wertung', description: 'Dieses Loch zählt doppelt in der Gesamtwertung. Eagle = -4, Bogey = +2. Score × 2 eintragen.' },
  // Stadt-spezifisch
  { id: 'deckel-regel', emoji: '🍺', name: 'Deckel-Regel', type: 'handicap', shortEffect: '+1 Strafstange bei Vergessen', description: 'Bierdeckel auf die leere Stange legen – sonst bringt der Köbes automatisch die nächste. Wer das vergisst und eine ungewollte Nachbestellung bekommt, muss diese als Strafschlucke trinken.', cities: ['köln'] },
  { id: 'frachter-bonus', emoji: '🚢', name: 'Frachter-Bonus', type: 'bonus', shortEffect: '-1 bei Frachter-Sichtung', description: 'Wer beim Trinken einen vorbeifahrenden Containerfrachter sieht, bekommt -1 Bonuspunkt auf diesen Loch-Score.', cities: ['hamburg'] },
  // UK-specific rules
  { id: 'yard-of-ale', emoji: '🍺', name: 'Local Specialty', type: 'bonus', shortEffect: '-2 bonus for ordering the local specialty', description: 'If a player orders the pub\'s signature local drink (ask the bartender), they get -2 bonus on this hole.' },
  { id: 'pub-quiz', emoji: '🧠', name: 'Pub Quiz', type: 'fun', shortEffect: '+1 per wrong answer', description: 'Each player must answer a trivia question about the city. Wrong answer = +1 penalty sip.' },
  { id: 'accent-round', emoji: '🎭', name: 'Accent Round', type: 'fun', shortEffect: '+1 if you break character', description: 'Everyone must speak in a local accent for the entire hole. Breaking character = +1 penalty.', regions: ['uk'] },
  { id: 'round-shout', emoji: '📣', name: 'Round Shout', type: 'handicap', shortEffect: 'Last place buys the round', description: 'The player currently in last place must buy this round for everyone. Their penalty: +2 on score.', regions: ['uk'] },
];

export function getRuleById(id: string): Rule | undefined {
  return allRules.find(r => r.id === id);
}

/**
 * Returns rules that apply to the given city.
 * - Rules without `regions` and `cities` are universal and always included.
 * - Rules with `cities` matching the cityId are included.
 * - Rules with `regions` matching the city's region are included.
 *
 * If cityId is null/undefined, returns only universal rules.
 */
export function getRulesForCity(cityId: CityId | null | undefined): Rule[] {
  if (!cityId) {
    return allRules.filter(r => !r.cities?.length && !r.regions?.length);
  }
  const city = getCityById(cityId);
  const regionId = city?.region;
  return allRules.filter(rule => {
    const isUniversal = !rule.cities?.length && !rule.regions?.length;
    if (isUniversal) return true;
    if (rule.cities?.includes(cityId)) return true;
    if (regionId && rule.regions?.includes(regionId)) return true;
    return false;
  });
}

export function getRuleTypeColor(type: Rule['type']): string {
  switch (type) {
    case 'handicap': return 'rule-handicap';
    case 'bonus': return 'rule-bonus';
    case 'fun': return 'rule-fun';
    case 'special': return 'rule-special';
  }
}

export function getRuleTypeLabel(type: Rule['type']): string {
  switch (type) {
    case 'handicap': return 'Handicap';
    case 'bonus': return 'Bonus';
    case 'fun': return 'Spaß';
    case 'special': return 'Sonder';
  }
}
