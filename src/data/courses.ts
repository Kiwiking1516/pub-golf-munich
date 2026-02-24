import { Hole, CityId, GameMode } from '@/types/game';

// ──── MÜNCHEN ────────────────────────────────────────────

const münchenBiergolf: Hole[] = [
  { name: 'Augustiner Stammhaus', drink: 'Weißbier 0,5l', par: 3, time: '10:00', flags: [], activeRules: [] },
  { name: 'Weisses Bräuhaus', drink: 'Schneider Weisse 0,5l', par: 3, time: '10:45', flags: [], activeRules: [] },
  { name: 'Tegernseer Tal', drink: 'Tegernseer Hell 0,5l', par: 3, time: '11:30', flags: [], activeRules: [] },
  { name: 'Viktualienmarkt', drink: 'Helles vom Fass 0,5l', par: 3, time: '12:15', flags: [], activeRules: [] },
  { name: 'Augustiner am Dom', drink: 'Augustiner Helles 0,5l', par: 3, time: '13:00', flags: [], activeRules: [] },
  { name: 'Augustiner am Platzl', drink: 'Edelstoff 0,5l', par: 3, time: '13:45', flags: [], activeRules: [] },
  { name: 'Hofbräuhaus', drink: '⚠️ PFLICHT-MAß 1,0l', par: 5, time: '14:30', flags: ['signature'], activeRules: [] },
  { name: 'Irish Pub Dubliner', drink: 'Guinness 0,5l', par: 4, time: '15:30', flags: [], activeRules: [] },
  { name: 'Le Clou', drink: 'Helles 0,5l', par: 3, time: '16:15', flags: ['turn'], activeRules: [] },
  { name: 'Holy Spirit 1 Bar', drink: 'Helles 0,3l', par: 2, time: '17:00', flags: [], activeRules: [] },
  { name: "Kilian's Irish Pub", drink: 'Kilkenny 0,5l', par: 3, time: '17:45', flags: [], activeRules: [] },
  { name: 'Scholars Lounge', drink: 'Guinness 0,5l', par: 3, time: '18:30', flags: [], activeRules: [] },
  { name: "Kennedy's Bar", drink: 'Pint 0,5l', par: 3, time: '19:15', flags: [], activeRules: [] },
  { name: "Ned Kelly's", drink: 'Craft Bier 0,5l', par: 3, time: '20:00', flags: [], activeRules: [] },
  { name: 'Schiller Beerhouse', drink: 'Hausbier 0,5l', par: 3, time: '20:45', flags: [], activeRules: [] },
  { name: 'München72', drink: 'Weißbier/Helles 0,5l', par: 3, time: '21:30', flags: [], activeRules: [] },
  { name: 'Einstein 99', drink: 'Bier nach Wahl 0,5l', par: 3, time: '22:15', flags: [], activeRules: [] },
  { name: 'Hofbräuhaus Finale', drink: 'Dunkles 0,5l', par: 3, time: '23:00', flags: ['finale'], activeRules: [] },
];

const münchenBiergarten: Hole[] = [
  { name: 'Augustiner-Keller', drink: 'Augustiner Maß 1,0l', par: 5, time: '11:00', flags: ['signature'], activeRules: [] },
  { name: 'Viktualienmarkt Biergarten', drink: 'Wechselndes Bier Maß', par: 5, time: '12:00', flags: [], activeRules: [] },
  { name: 'Hofbräukeller (Wiener Platz)', drink: 'Hofbräu Maß 1,0l', par: 5, time: '13:00', flags: [], activeRules: [] },
  { name: 'Paulaner am Nockherberg', drink: 'Paulaner Maß 1,0l', par: 5, time: '14:15', flags: [], activeRules: [] },
  { name: 'Chinesischer Turm', drink: 'Maß nach Wahl 1,0l', par: 5, time: '15:30', flags: ['turn'], activeRules: [] },
  { name: 'Seehaus im Englischen Garten', drink: 'Maß nach Wahl 1,0l', par: 5, time: '16:45', flags: [], activeRules: [] },
  { name: 'Taxisgarten', drink: 'Maß nach Wahl 1,0l', par: 5, time: '18:00', flags: [], activeRules: [] },
  { name: 'Hirschgarten', drink: 'Augustiner Maß 1,0l', par: 5, time: '19:30', flags: [], activeRules: [] },
  { name: 'Waldwirtschaft Großhesselohe', drink: 'Maß zum Finale 1,0l', par: 5, time: '21:00', flags: ['finale'], activeRules: [] },
];

// ──── FRANKFURT – Ebbelwoi-Runde ─────────────────────────

const frankfurtBiergolf: Hole[] = [
  { name: 'Zum Gemalten Haus', drink: 'Apfelwein 0,3l', par: 2, time: '11:00', flags: ['signature'], activeRules: [] },
  { name: 'Dauth-Schneider', drink: 'Apfelwein 0,3l', par: 2, time: '11:45', flags: [], activeRules: [] },
  { name: 'Wagner', drink: 'Apfelwein 0,3l', par: 2, time: '12:30', flags: [], activeRules: [] },
  { name: 'Klapper 33', drink: 'Bier vom Fass 0,5l', par: 3, time: '13:15', flags: [], activeRules: [] },
  { name: 'Alte Liebe', drink: 'Helles 0,5l', par: 3, time: '14:00', flags: [], activeRules: [] },
  { name: 'Strandperle Sachsenhausen', drink: 'Bier 0,5l', par: 3, time: '14:45', flags: [], activeRules: [] },
  { name: 'Oppenheimer', drink: 'Helles 0,5l', par: 3, time: '15:30', flags: ['turn'], activeRules: [] },
  { name: 'Die Butze', drink: 'Bier 0,5l', par: 3, time: '16:15', flags: [], activeRules: [] },
  { name: 'Birmingham Pub', drink: 'Guinness 0,5l', par: 4, time: '17:00', flags: [], activeRules: [] },
  { name: 'Jazzkeller Frankfurt', drink: 'Bier 0,5l', par: 3, time: '17:45', flags: [], activeRules: [] },
  { name: "Sullivan's Irish Pub", drink: 'Kilkenny 0,5l', par: 3, time: '18:30', flags: [], activeRules: [] },
  { name: 'Naïv Bar', drink: 'Craft Bier 0,5l', par: 3, time: '19:15', flags: [], activeRules: [] },
  { name: 'Moloko! Bar', drink: 'Craft Bier 0,5l', par: 3, time: '20:00', flags: [], activeRules: [] },
  { name: 'Zum Feuerstuhl', drink: 'Bier 0,5l', par: 3, time: '20:45', flags: [], activeRules: [] },
  { name: 'Metropol', drink: 'Helles 0,5l', par: 3, time: '21:30', flags: [], activeRules: [] },
  { name: 'Freigut (Mainufer)', drink: 'Bier/Cocktail 0,5l', par: 3, time: '22:00', flags: [], activeRules: [] },
  { name: 'Innenstadt Bar', drink: 'Bier nach Wahl 0,5l', par: 3, time: '22:30', flags: [], activeRules: [] },
  { name: 'Zum Gemalten Haus (Finale)', drink: 'Apfelwein 0,5l', par: 5, time: '23:00', flags: ['finale'], activeRules: [] },
];

const frankfurtBiergarten: Hole[] = [
  { name: 'Atschel', drink: 'Hausgemachter Äppler 0,3l', par: 3, time: '11:00', flags: ['signature'], activeRules: [] },
  { name: 'Dauth-Schneider', drink: 'Kelterei O\'Sullivan 0,3l', par: 3, time: '11:45', flags: [], activeRules: [] },
  { name: 'Wagner', drink: 'Eigene Kelterei 0,3l', par: 3, time: '12:30', flags: [], activeRules: [] },
  { name: 'Zum Gemalten Haus', drink: 'Hauseigener Äppler 0,3l', par: 3, time: '13:15', flags: [], activeRules: [] },
  { name: 'Frau Rauscher', drink: 'Fassapfelwein 0,3l', par: 3, time: '14:00', flags: ['turn'], activeRules: [] },
  { name: 'Ebbelwoi Unser', drink: 'Brückenviertel Äppler 0,3l', par: 3, time: '14:45', flags: [], activeRules: [] },
  { name: 'Kanonesteppel', drink: 'Sachsenhäuser Äppler 0,3l', par: 3, time: '15:30', flags: [], activeRules: [] },
  { name: 'Klaane Sachsehäuser', drink: 'Lokale Kelterei 0,3l', par: 3, time: '16:15', flags: [], activeRules: [] },
  { name: 'Lorsbacher Thal', drink: 'Großer Bembel zum Finale 0,3l', par: 3, time: '17:00', flags: ['finale'], activeRules: [] },
];

// ──── HAMBURG – Elbtour ─────────────────────────────────

const hamburgBiergolf: Hole[] = [
  { name: 'Beatles-Platz Bar', drink: 'Astra 0,5l', par: 3, time: '11:00', flags: ['signature'], activeRules: [] },
  { name: 'Große Freiheit 36 Bar', drink: 'Bier 0,5l', par: 3, time: '11:45', flags: [], activeRules: [] },
  { name: 'Davidwache-Eckkneipe', drink: 'Bier 0,5l', par: 3, time: '12:30', flags: [], activeRules: [] },
  { name: 'Chug Club', drink: 'Craft Bier 0,5l', par: 3, time: '13:15', flags: [], activeRules: [] },
  { name: 'Zum Silbersack', drink: 'Astra 0,5l', par: 3, time: '14:00', flags: [], activeRules: [] },
  { name: 'Molotow Bar', drink: 'Bier 0,5l', par: 3, time: '14:45', flags: [], activeRules: [] },
  { name: 'Reeperbahn Bierhalle', drink: '⚠️ PFLICHT-MAß 1,0l', par: 5, time: '15:30', flags: ['signature'], activeRules: [] },
  { name: 'Rock Café Hamburg', drink: 'Bier 0,5l', par: 4, time: '16:30', flags: ['turn'], activeRules: [] },
  { name: 'Strandperle (Övelgönne)', drink: 'Bier 0,5l', par: 3, time: '17:15', flags: [], activeRules: [] },
  { name: 'Altonaer Bahnhof Bar', drink: 'Bier 0,5l', par: 3, time: '18:00', flags: [], activeRules: [] },
  { name: 'Schanzenviertel Kneipe', drink: 'Bier 0,5l', par: 3, time: '18:45', flags: [], activeRules: [] },
  { name: 'Rote Flora Bar', drink: 'Craft Bier 0,5l', par: 3, time: '19:30', flags: [], activeRules: [] },
  { name: 'Goldener Salon', drink: 'Bier 0,5l', par: 3, time: '20:15', flags: [], activeRules: [] },
  { name: 'Astra Stube', drink: 'Astra 0,5l', par: 3, time: '21:00', flags: [], activeRules: [] },
  { name: 'Hanseplatz Kneipe', drink: 'Bier 0,5l', par: 3, time: '21:30', flags: [], activeRules: [] },
  { name: 'Überquell Brauerei Bar', drink: 'Hausbrauerei 0,5l', par: 3, time: '22:00', flags: [], activeRules: [] },
  { name: 'St. Pauli Bar', drink: 'Bier nach Wahl 0,5l', par: 3, time: '22:30', flags: [], activeRules: [] },
  { name: 'Fischmarkt-Kneipe Finale', drink: 'Astra Finale 0,5l', par: 3, time: '23:00', flags: ['finale'], activeRules: [] },
];

const hamburgBiergarten: Hole[] = [
  { name: 'Strandperle (Övelgönne)', drink: 'Astra 0,5l', par: 5, time: '11:00', flags: ['signature'], activeRules: ['frachter-bonus'] },
  { name: 'Ahoi Strandkiosk (Övelgönne)', drink: 'Astra 0,5l', par: 5, time: '12:00', flags: [], activeRules: [] },
  { name: 'Museumshafen Kiosk (Övelgönne)', drink: 'Astra 0,5l', par: 5, time: '13:00', flags: [], activeRules: [] },
  { name: 'Altes Lotsenhaus (Neumühlen)', drink: 'Astra 0,5l', par: 5, time: '14:00', flags: [], activeRules: [] },
  { name: 'StrandPauli (Hafenstraße)', drink: 'Astra 0,5l', par: 5, time: '15:00', flags: ['turn'], activeRules: [] },
  { name: 'Brücke 10 (Landungsbrücken)', drink: 'Astra 0,5l', par: 5, time: '16:00', flags: [], activeRules: [] },
  { name: 'Dock 13 (Großmarkt)', drink: 'Astra 0,5l', par: 5, time: '17:00', flags: [], activeRules: [] },
  { name: 'Alsterperle (Außenalster)', drink: 'Alsterwasser 0,5l', par: 5, time: '18:00', flags: [], activeRules: [] },
  { name: 'Elbphilharmonie Plaza Bar', drink: 'Astra Finale 0,5l', par: 5, time: '19:00', flags: ['finale'], activeRules: [] },
];

// ──── KÖLN – Köbesrunde ──────────────────────────────────

const kölnBiergolf: Hole[] = [
  { name: 'Brauhaus Sion', drink: 'Sion Kölsch 0,2l', par: 2, time: '11:00', flags: ['signature'], activeRules: [] },
  { name: 'Früh am Dom', drink: 'Früh Kölsch 0,2l', par: 2, time: '11:45', flags: [], activeRules: [] },
  { name: 'Gaffel am Dom', drink: 'Gaffel Kölsch 0,2l', par: 2, time: '12:30', flags: [], activeRules: [] },
  { name: 'Peters Brauhaus', drink: 'Peters Kölsch 0,2l', par: 2, time: '13:15', flags: [], activeRules: [] },
  { name: 'Brauerei zur Malzmühle', drink: 'Mühlen Kölsch 0,2l', par: 3, time: '14:00', flags: [], activeRules: [] },
  { name: 'Bierhaus en d\'r Salzgass', drink: 'Päffgen Kölsch 0,2l', par: 3, time: '14:45', flags: [], activeRules: [] },
  { name: 'Sünner im Walfisch', drink: 'Sünner Kölsch 0,2l', par: 3, time: '15:30', flags: ['turn'], activeRules: [] },
  { name: 'Brauhaus zum Prinzen', drink: 'Gaffel Kölsch 0,2l', par: 3, time: '16:15', flags: [], activeRules: [] },
  { name: 'Reissdorf Brauhaus', drink: 'Reissdorf Kölsch 0,2l', par: 3, time: '17:00', flags: [], activeRules: [] },
  { name: 'Gilden im Zims', drink: 'Gilden Kölsch 0,2l', par: 3, time: '17:45', flags: [], activeRules: [] },
  { name: 'Päffgen Friesenstraße', drink: 'Päffgen Kölsch 0,2l', par: 3, time: '18:30', flags: [], activeRules: [] },
  { name: 'Brauhaus Pütz', drink: 'Mühlen Kölsch 0,2l', par: 3, time: '19:00', flags: [], activeRules: [] },
  { name: 'Torburg Südstadt', drink: 'Kölsch nach Wahl 0,2l', par: 3, time: '19:45', flags: [], activeRules: [] },
  { name: 'Lommerzheim', drink: 'Päffgen Kölsch 0,2l', par: 3, time: '20:30', flags: [], activeRules: [] },
  { name: 'Früh em Veedel', drink: 'Früh Kölsch 0,2l', par: 3, time: '21:00', flags: [], activeRules: [] },
  { name: 'Ubierschänke', drink: 'Kölsch nach Wahl 0,2l', par: 3, time: '21:30', flags: [], activeRules: [] },
  { name: 'Kleine Kneipe Altstadt', drink: 'Kölsch nach Wahl 0,2l', par: 3, time: '22:00', flags: [], activeRules: [] },
  { name: 'Früh am Dom (Finale)', drink: '⚠️ DOPPEL-KÖLSCH 0,4l', par: 5, time: '23:00', flags: ['finale'], activeRules: [] },
];

const kölnBiergarten: Hole[] = [
  { name: 'Brauhaus Sion', drink: 'Sion Kölsch 0,2l', par: 3, time: '11:00', flags: ['signature'], activeRules: ['deckel-regel'] },
  { name: 'Früh am Dom', drink: 'Früh Kölsch 0,2l', par: 3, time: '11:45', flags: [], activeRules: ['deckel-regel'] },
  { name: 'Gaffel am Dom', drink: 'Gaffel Kölsch 0,2l', par: 3, time: '12:30', flags: [], activeRules: ['deckel-regel'] },
  { name: 'Peters Brauhaus', drink: 'Peters Kölsch 0,2l', par: 3, time: '13:15', flags: [], activeRules: ['deckel-regel'] },
  { name: 'Brauerei zur Malzmühle', drink: 'Mühlen Kölsch 0,2l', par: 3, time: '14:00', flags: ['turn'], activeRules: ['deckel-regel'] },
  { name: 'Bierhaus en d\'r Salzgass', drink: 'Päffgen Kölsch 0,2l', par: 3, time: '14:45', flags: [], activeRules: ['deckel-regel'] },
  { name: 'Reissdorf Brauhaus', drink: 'Reissdorf Kölsch 0,2l', par: 3, time: '15:30', flags: [], activeRules: ['deckel-regel'] },
  { name: 'Gilden im Zims', drink: 'Gilden Kölsch 0,2l', par: 3, time: '16:15', flags: [], activeRules: ['deckel-regel'] },
  { name: 'Päffgen Friesenstraße', drink: 'Päffgen vom Fass 0,2l', par: 3, time: '17:00', flags: ['finale'], activeRules: ['deckel-regel'] },
];

// ──── BERLIN – Spreebar-Tour ─────────────────────────────

const berlinBiergolf: Hole[] = [
  { name: 'Brothers Cocktail Bar', drink: 'Craft Bier 0,5l', par: 3, time: '11:00', flags: ['signature'], activeRules: [] },
  { name: 'Simon-Dach-Straße Kneipe', drink: 'Bier 0,5l', par: 3, time: '11:45', flags: [], activeRules: [] },
  { name: 'Luzia Bar (Kreuzberg)', drink: 'Bier 0,5l', par: 3, time: '12:30', flags: [], activeRules: [] },
  { name: 'Ankerklause', drink: 'Bier vom Fass 0,5l', par: 3, time: '13:15', flags: [], activeRules: [] },
  { name: 'Südblock Bar (Kreuzberg)', drink: 'Craft Bier 0,5l', par: 3, time: '14:00', flags: [], activeRules: [] },
  { name: 'Fahimi Bar (Rooftop)', drink: 'Bier 0,5l', par: 3, time: '14:45', flags: [], activeRules: [] },
  { name: 'Mitte-Kneipe (Torstraße)', drink: 'Berliner Weiße 0,5l', par: 4, time: '15:30', flags: ['turn'], activeRules: [] },
  { name: 'Schwarze Pumpe', drink: 'Pilsner 0,5l', par: 3, time: '16:15', flags: [], activeRules: [] },
  { name: 'Prater Garten Bar', drink: 'Berliner Bier 0,5l', par: 3, time: '17:00', flags: [], activeRules: [] },
  { name: 'Kastanienallee Kneipe', drink: 'Bier 0,5l', par: 3, time: '17:45', flags: [], activeRules: [] },
  { name: 'Duncker Club Bar', drink: 'Bier 0,5l', par: 3, time: '18:30', flags: [], activeRules: [] },
  { name: 'BrewDog Berlin (Mitte)', drink: 'Craft IPA 0,5l', par: 4, time: '19:15', flags: [], activeRules: [] },
  { name: 'Hops & Barley', drink: 'Hausbrauerei 0,5l', par: 3, time: '20:00', flags: [], activeRules: [] },
  { name: 'Frannz Club Bar', drink: 'Bier 0,5l', par: 3, time: '20:45', flags: [], activeRules: [] },
  { name: 'Rosenthaler Platz Bar', drink: 'Bier nach Wahl 0,5l', par: 3, time: '21:15', flags: [], activeRules: [] },
  { name: 'Weinerei (Prenzlauer Berg)', drink: 'Bier/Wein 0,5l', par: 3, time: '21:45', flags: [], activeRules: [] },
  { name: 'Strandbar Mitte', drink: 'Bier nach Wahl 0,5l', par: 3, time: '22:15', flags: [], activeRules: [] },
  { name: 'Clärchens Ballhaus Finale', drink: '⚠️ BERLINER WEISSE 0,5l', par: 5, time: '23:00', flags: ['finale'], activeRules: [] },
];

const berlinBiergarten: Hole[] = [
  { name: 'Strandbar Mitte (Monbijoupark)', drink: 'Berliner Pilsner 0,5l', par: 5, time: '12:00', flags: ['signature'], activeRules: [] },
  { name: 'Yaam Beach (Ostbahnhof)', drink: 'Bier nach Wahl 0,5l', par: 5, time: '13:00', flags: [], activeRules: [] },
  { name: 'RAW-Gelände Bar (Revaler Str.)', drink: 'Craft Bier 0,5l', par: 5, time: '14:00', flags: [], activeRules: ['windmill'] },
  { name: 'Holzmarkt 25 (Spreeufer)', drink: 'Hausbrauerei 0,5l', par: 5, time: '15:00', flags: [], activeRules: [] },
  { name: 'Ankerklause (Kottbusser Brücke)', drink: 'Bier vom Fass 0,5l', par: 5, time: '16:00', flags: ['turn'], activeRules: [] },
  { name: 'Freischwimmer (Flutgraben)', drink: 'Bier nach Wahl 0,5l', par: 5, time: '17:00', flags: [], activeRules: [] },
  { name: 'Golgatha (Viktoriapark)', drink: 'Bier nach Wahl 0,5l', par: 5, time: '18:00', flags: [], activeRules: [] },
  { name: 'Urban Spree (Revaler Str.)', drink: 'Craft Bier 0,5l', par: 5, time: '19:00', flags: [], activeRules: [] },
  { name: 'Watergate Terrasse (Spreeufer)', drink: 'Berliner Weiße 0,5l', par: 5, time: '20:00', flags: ['finale'], activeRules: [] },
];

// ──── LOOKUP ─────────────────────────────────────────────

const courseMap: Record<CityId, Record<GameMode, Hole[]>> = {
  münchen: { biergolf: münchenBiergolf, biergarten: münchenBiergarten },
  frankfurt: { biergolf: frankfurtBiergolf, biergarten: frankfurtBiergarten },
  hamburg: { biergolf: hamburgBiergolf, biergarten: hamburgBiergarten },
  köln: { biergolf: kölnBiergolf, biergarten: kölnBiergarten },
  berlin: { biergolf: berlinBiergolf, biergarten: berlinBiergarten },
};

export function getDefaultHoles(city: CityId, mode: GameMode): Hole[] {
  const src = courseMap[city]?.[mode] || [];
  return src.map(h => ({ ...h, flags: [...h.flags], activeRules: [...h.activeRules] }));
}

export function getTotalPar(holes: Hole[]): number {
  return holes.reduce((sum, h) => sum + h.par, 0);
}

export function getCourseInfo(city: CityId, mode: GameMode): { holes: number; par: number } {
  const src = courseMap[city]?.[mode] || [];
  return { holes: src.length, par: getTotalPar(src) };
}
