import { Rule } from '@/types/game';

export const allRules: Rule[] = [
  // Handicap
  { id: 'linke-hand', emoji: '🤚', name: 'Linke Hand', type: 'handicap', shortEffect: '+1 Strafschluck bei Verstoß', description: 'Getränk ausschließlich mit der schwachen Hand halten. Wer wechselt oder mit beiden Händen hält, trinkt sofort einen Strafschluck.' },
  { id: 'kein-abstellen', emoji: '🚫', name: 'Kein Abstellen', type: 'handicap', shortEffect: 'Neustart bei Absetzen', description: 'Sobald das Glas angesetzt wird, darf es nicht mehr abgestellt werden – bis es leer ist. Wer absetzt, trinkt von vorne.' },
  { id: 'augenkontakt', emoji: '👁️', name: 'Augenkontakt-Pflicht', type: 'handicap', shortEffect: '-1 Punkt bei Verstoß', description: 'Beim Anstoßen muss mit jedem einzelnen Mitspieler Augenkontakt gehalten werden. Wer blinzelt oder wegschaut: -1 Punkt.' },
  { id: '60-sekunden', emoji: '⏱️', name: '60-Sekunden-Loch', type: 'handicap', shortEffect: '+2 Score bei Überschreitung', description: 'Das Getränk muss innerhalb von 60 Sekunden geleert sein. Wer es nicht schafft: +2 auf den Score.' },
  { id: 'reihenfolge', emoji: '👑', name: 'Reihenfolge-Loch', type: 'handicap', shortEffect: '+1 für letzten Spieler', description: 'Die Gruppe bestimmt per Mehrheitsvote wer zuerst und wer zuletzt trinken muss. Der Letzte bekommt +1 auf seinen Score.' },
  { id: 'spiegeltrinken', emoji: '🪞', name: 'Spiegeltrinken', type: 'handicap', shortEffect: '+1 für langsamsten Spieler', description: 'Alle Spieler setzen gleichzeitig an. Wer als letzter fertig wird, bekommt +1 auf seinen Score.' },
  { id: 'profi-loch', emoji: '🏆', name: 'Profi-Loch', type: 'handicap', shortEffect: 'Par -1 (schwerer)', description: 'Par -1 für alle Spieler. Wer trotzdem Par schafft, bekommt +1 Bonus-Respekt-Punkt.' },
  { id: 'handicap-ausgleich', emoji: '⚖️', name: 'Handicap-Ausgleich', type: 'handicap', shortEffect: '+2 Pflichtschlucke für Führenden', description: 'Der aktuell führende Spieler muss 2 extra Schlucke trinken, bevor er weitermachen darf. Kein Abstellen dazwischen.' },
  // Bonus
  { id: 'mass-upgrade', emoji: '🍺', name: 'Maß-Upgrade Bonus', type: 'bonus', shortEffect: '-2 Bonus bei Upgrade', description: 'Wer sein Getränk freiwillig auf eine volle Maß upgradet, bekommt automatisch -2 Punkte Bonus auf dieses Loch.' },
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
];

export function getRuleById(id: string): Rule | undefined {
  return allRules.find(r => r.id === id);
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
