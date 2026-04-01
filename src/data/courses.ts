import { Hole, CityId, GameMode } from '@/types/game';
import { getBarsForCity } from '@/data/pubs';

// ──── MÜNCHEN ────────────────────────────────────────────

const münchenBiergolf: Hole[] = [
  { name: 'Augustiner Stammhaus', drink: 'Weißbier 0,5l', par: 3, time: '10:00', flags: [], activeRules: [] },
  { name: 'Weisses Bräuhaus', drink: 'Schneider Weisse 0,5l', par: 3, time: '10:45', flags: [], activeRules: [], barId: 'muc-003' },
  { name: 'Tegernseer Tal', drink: 'Tegernseer Hell 0,5l', par: 3, time: '11:30', flags: [], activeRules: [] },
  { name: 'Viktualienmarkt', drink: 'Helles vom Fass 0,5l', par: 3, time: '12:15', flags: [], activeRules: [] },
  { name: 'Augustiner am Dom', drink: 'Augustiner Helles 0,5l', par: 3, time: '13:00', flags: [], activeRules: [], barId: 'muc-002' },
  { name: 'Augustiner am Platzl', drink: 'Edelstoff 0,5l', par: 3, time: '13:45', flags: [], activeRules: [] },
  { name: 'Hofbräuhaus', drink: '⚠️ PFLICHT-MAß 1,0l', par: 5, time: '14:30', flags: ['signature'], activeRules: [], barId: 'muc-001' },
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
  { name: 'Hofbräuhaus Finale', drink: 'Dunkles 0,5l', par: 3, time: '23:00', flags: ['finale'], activeRules: [], barId: 'muc-001' },
];

const münchenBiergarten: Hole[] = [
  { name: 'Augustiner-Keller', drink: 'Augustiner Maß 1,0l', par: 5, time: '11:00', flags: ['signature'], activeRules: [], barId: 'muc-007' },
  { name: 'Viktualienmarkt Biergarten', drink: 'Wechselndes Bier Maß', par: 5, time: '12:00', flags: [], activeRules: [] },
  { name: 'Hofbräukeller (Wiener Platz)', drink: 'Hofbräu Maß 1,0l', par: 5, time: '13:00', flags: [], activeRules: [], barId: 'muc-008' },
  { name: 'Paulaner am Nockherberg', drink: 'Paulaner Maß 1,0l', par: 5, time: '14:15', flags: [], activeRules: [], barId: 'muc-049' },
  { name: 'Chinesischer Turm', drink: 'Maß nach Wahl 1,0l', par: 5, time: '15:30', flags: ['turn'], activeRules: [], barId: 'muc-009' },
  { name: 'Seehaus im Englischen Garten', drink: 'Maß nach Wahl 1,0l', par: 5, time: '16:45', flags: [], activeRules: [], barId: 'muc-010' },
  { name: 'Taxisgarten', drink: 'Maß nach Wahl 1,0l', par: 5, time: '18:00', flags: [], activeRules: [] },
  { name: 'Hirschgarten', drink: 'Augustiner Maß 1,0l', par: 5, time: '19:30', flags: [], activeRules: [], barId: 'muc-011' },
  { name: 'Waldwirtschaft Großhesselohe', drink: 'Maß zum Finale 1,0l', par: 5, time: '21:00', flags: ['finale'], activeRules: [], barId: 'muc-050' },
];

// ──── FRANKFURT – Ebbelwoi-Runde ─────────────────────────

const frankfurtBiergolf: Hole[] = [
  { name: 'Zum Gemalten Haus', drink: 'Apfelwein 0,3l', par: 2, time: '11:00', flags: ['signature'], activeRules: [], barId: 'fra-001' },
  { name: 'Dauth-Schneider', drink: 'Apfelwein 0,3l', par: 2, time: '11:45', flags: [], activeRules: [], barId: 'fra-002' },
  { name: 'Wagner', drink: 'Apfelwein 0,3l', par: 2, time: '12:30', flags: [], activeRules: [], barId: 'fra-004' },
  { name: 'Klapper 33', drink: 'Bier vom Fass 0,5l', par: 3, time: '13:15', flags: [], activeRules: [], barId: 'fra-006' },
  { name: 'Alte Liebe', drink: 'Helles 0,5l', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'fra-007' },
  { name: 'Strandperle Sachsenhausen', drink: 'Bier 0,5l', par: 3, time: '14:45', flags: [], activeRules: [] },
  { name: 'Oppenheimer', drink: 'Helles 0,5l', par: 3, time: '15:30', flags: ['turn'], activeRules: [] },
  { name: 'Die Butze', drink: 'Bier 0,5l', par: 3, time: '16:15', flags: [], activeRules: [] },
  { name: 'Birmingham Pub', drink: 'Guinness 0,5l', par: 4, time: '17:00', flags: [], activeRules: [] },
  { name: 'Jazzkeller Frankfurt', drink: 'Bier 0,5l', par: 3, time: '17:45', flags: [], activeRules: [] },
  { name: "Sullivan's Irish Pub", drink: 'Kilkenny 0,5l', par: 3, time: '18:30', flags: [], activeRules: [] },
  { name: 'Naïv Bar', drink: 'Craft Bier 0,5l', par: 3, time: '19:15', flags: [], activeRules: [] },
  { name: 'Moloko! Bar', drink: 'Craft Bier 0,5l', par: 3, time: '20:00', flags: [], activeRules: [] },
  { name: 'Zum Feuerstuhl', drink: 'Bier 0,5l', par: 3, time: '20:45', flags: [], activeRules: [] },
  { name: 'Metropol', drink: 'Helles 0,5l', par: 3, time: '21:30', flags: [], activeRules: [], barId: 'fra-043' },
  { name: 'Freigut (Mainufer)', drink: 'Bier/Cocktail 0,5l', par: 3, time: '22:00', flags: [], activeRules: [] },
  { name: 'Innenstadt Bar', drink: 'Bier nach Wahl 0,5l', par: 3, time: '22:30', flags: [], activeRules: [] },
  { name: 'Zum Gemalten Haus (Finale)', drink: 'Apfelwein 0,5l', par: 5, time: '23:00', flags: ['finale'], activeRules: [], barId: 'fra-001' },
];

const frankfurtBiergarten: Hole[] = [
  { name: 'Atschel', drink: 'Hausgemachter Äppler 0,3l', par: 3, time: '11:00', flags: ['signature'], activeRules: [] },
  { name: 'Dauth-Schneider', drink: 'Kelterei O\'Sullivan 0,3l', par: 3, time: '11:45', flags: [], activeRules: [], barId: 'fra-002' },
  { name: 'Wagner', drink: 'Eigene Kelterei 0,3l', par: 3, time: '12:30', flags: [], activeRules: [], barId: 'fra-004' },
  { name: 'Zum Gemalten Haus', drink: 'Hauseigener Äppler 0,3l', par: 3, time: '13:15', flags: [], activeRules: [], barId: 'fra-001' },
  { name: 'Frau Rauscher', drink: 'Fassapfelwein 0,3l', par: 3, time: '14:00', flags: ['turn'], activeRules: [] },
  { name: 'Ebbelwoi Unser', drink: 'Brückenviertel Äppler 0,3l', par: 3, time: '14:45', flags: [], activeRules: [] },
  { name: 'Kanonesteppel', drink: 'Sachsenhäuser Äppler 0,3l', par: 3, time: '15:30', flags: [], activeRules: [] },
  { name: 'Klaane Sachsehäuser', drink: 'Lokale Kelterei 0,3l', par: 3, time: '16:15', flags: [], activeRules: [] },
  { name: 'Lorsbacher Thal', drink: 'Großer Bembel zum Finale 0,3l', par: 3, time: '17:00', flags: ['finale'], activeRules: [], barId: 'fra-003' },
];

// ──── HAMBURG – Elbtour ─────────────────────────────────

const hamburgBiergolf: Hole[] = [
  { name: 'Beatles-Platz Bar', drink: 'Astra 0,5l', par: 3, time: '11:00', flags: ['signature'], activeRules: [] },
  { name: 'Große Freiheit 36 Bar', drink: 'Bier 0,5l', par: 3, time: '11:45', flags: [], activeRules: [] },
  { name: 'Davidwache-Eckkneipe', drink: 'Bier 0,5l', par: 3, time: '12:30', flags: [], activeRules: [] },
  { name: 'Chug Club', drink: 'Craft Bier 0,5l', par: 3, time: '13:15', flags: [], activeRules: [], barId: 'ham-013' },
  { name: 'Zum Silbersack', drink: 'Astra 0,5l', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'ham-002' },
  { name: 'Molotow Bar', drink: 'Bier 0,5l', par: 3, time: '14:45', flags: [], activeRules: [] },
  { name: 'Reeperbahn Bierhalle', drink: '⚠️ PFLICHT-MAß 1,0l', par: 5, time: '15:30', flags: ['signature'], activeRules: [] },
  { name: 'Rock Café Hamburg', drink: 'Bier 0,5l', par: 4, time: '16:30', flags: ['turn'], activeRules: [] },
  { name: 'Strandperle (Övelgönne)', drink: 'Bier 0,5l', par: 3, time: '17:15', flags: [], activeRules: [], barId: 'ham-039' },
  { name: 'Altonaer Bahnhof Bar', drink: 'Bier 0,5l', par: 3, time: '18:00', flags: [], activeRules: [] },
  { name: 'Schanzenviertel Kneipe', drink: 'Bier 0,5l', par: 3, time: '18:45', flags: [], activeRules: [] },
  { name: 'Rote Flora Bar', drink: 'Craft Bier 0,5l', par: 3, time: '19:30', flags: [], activeRules: [] },
  { name: 'Goldener Salon', drink: 'Bier 0,5l', par: 3, time: '20:15', flags: [], activeRules: [] },
  { name: 'Astra Stube', drink: 'Astra 0,5l', par: 3, time: '21:00', flags: [], activeRules: [], barId: 'ham-043' },
  { name: 'Hanseplatz Kneipe', drink: 'Bier 0,5l', par: 3, time: '21:30', flags: [], activeRules: [] },
  { name: 'Überquell Brauerei Bar', drink: 'Hausbrauerei 0,5l', par: 3, time: '22:00', flags: [], activeRules: [], barId: 'ham-042' },
  { name: 'St. Pauli Bar', drink: 'Bier nach Wahl 0,5l', par: 3, time: '22:30', flags: [], activeRules: [] },
  { name: 'Fischmarkt-Kneipe Finale', drink: 'Astra Finale 0,5l', par: 3, time: '23:00', flags: ['finale'], activeRules: [] },
];

const hamburgBiergarten: Hole[] = [
  { name: 'Strandperle (Övelgönne)', drink: 'Astra 0,5l', par: 5, time: '11:00', flags: ['signature'], activeRules: ['frachter-bonus'], barId: 'ham-039' },
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
  { name: 'Brauhaus Sion', drink: 'Sion Kölsch 0,2l', par: 2, time: '11:00', flags: ['signature'], activeRules: [], barId: 'koe-004' },
  { name: 'Früh am Dom', drink: 'Früh Kölsch 0,2l', par: 2, time: '11:45', flags: [], activeRules: [], barId: 'koe-002' },
  { name: 'Gaffel am Dom', drink: 'Gaffel Kölsch 0,2l', par: 2, time: '12:30', flags: [], activeRules: [], barId: 'koe-049' },
  { name: 'Peters Brauhaus', drink: 'Peters Kölsch 0,2l', par: 2, time: '13:15', flags: [], activeRules: [] },
  { name: 'Brauerei zur Malzmühle', drink: 'Mühlen Kölsch 0,2l', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'koe-003' },
  { name: 'Bierhaus en d\'r Salzgass', drink: 'Päffgen Kölsch 0,2l', par: 3, time: '14:45', flags: [], activeRules: [] },
  { name: 'Sünner im Walfisch', drink: 'Sünner Kölsch 0,2l', par: 3, time: '15:30', flags: ['turn'], activeRules: [] },
  { name: 'Brauhaus zum Prinzen', drink: 'Gaffel Kölsch 0,2l', par: 3, time: '16:15', flags: [], activeRules: [] },
  { name: 'Reissdorf Brauhaus', drink: 'Reissdorf Kölsch 0,2l', par: 3, time: '17:00', flags: [], activeRules: [] },
  { name: 'Gilden im Zims', drink: 'Gilden Kölsch 0,2l', par: 3, time: '17:45', flags: [], activeRules: [] },
  { name: 'Päffgen Friesenstraße', drink: 'Päffgen Kölsch 0,2l', par: 3, time: '18:30', flags: [], activeRules: [], barId: 'koe-001' },
  { name: 'Brauhaus Pütz', drink: 'Mühlen Kölsch 0,2l', par: 3, time: '19:00', flags: [], activeRules: [] },
  { name: 'Torburg Südstadt', drink: 'Kölsch nach Wahl 0,2l', par: 3, time: '19:45', flags: [], activeRules: [], barId: 'koe-021' },
  { name: 'Lommerzheim', drink: 'Päffgen Kölsch 0,2l', par: 3, time: '20:30', flags: [], activeRules: [] },
  { name: 'Früh em Veedel', drink: 'Früh Kölsch 0,2l', par: 3, time: '21:00', flags: [], activeRules: [] },
  { name: 'Ubierschänke', drink: 'Kölsch nach Wahl 0,2l', par: 3, time: '21:30', flags: [], activeRules: [], barId: 'koe-022' },
  { name: 'Kleine Kneipe Altstadt', drink: 'Kölsch nach Wahl 0,2l', par: 3, time: '22:00', flags: [], activeRules: [] },
  { name: 'Früh am Dom (Finale)', drink: '⚠️ DOPPEL-KÖLSCH 0,4l', par: 5, time: '23:00', flags: ['finale'], activeRules: [], barId: 'koe-002' },
];

const kölnBiergarten: Hole[] = [
  { name: 'Brauhaus Sion', drink: 'Sion Kölsch 0,2l', par: 3, time: '11:00', flags: ['signature'], activeRules: ['deckel-regel'], barId: 'koe-004' },
  { name: 'Früh am Dom', drink: 'Früh Kölsch 0,2l', par: 3, time: '11:45', flags: [], activeRules: ['deckel-regel'], barId: 'koe-002' },
  { name: 'Gaffel am Dom', drink: 'Gaffel Kölsch 0,2l', par: 3, time: '12:30', flags: [], activeRules: ['deckel-regel'], barId: 'koe-049' },
  { name: 'Peters Brauhaus', drink: 'Peters Kölsch 0,2l', par: 3, time: '13:15', flags: [], activeRules: ['deckel-regel'] },
  { name: 'Brauerei zur Malzmühle', drink: 'Mühlen Kölsch 0,2l', par: 3, time: '14:00', flags: ['turn'], activeRules: ['deckel-regel'], barId: 'koe-003' },
  { name: 'Bierhaus en d\'r Salzgass', drink: 'Päffgen Kölsch 0,2l', par: 3, time: '14:45', flags: [], activeRules: ['deckel-regel'] },
  { name: 'Reissdorf Brauhaus', drink: 'Reissdorf Kölsch 0,2l', par: 3, time: '15:30', flags: [], activeRules: ['deckel-regel'] },
  { name: 'Gilden im Zims', drink: 'Gilden Kölsch 0,2l', par: 3, time: '16:15', flags: [], activeRules: ['deckel-regel'] },
  { name: 'Päffgen Friesenstraße', drink: 'Päffgen vom Fass 0,2l', par: 3, time: '17:00', flags: ['finale'], activeRules: ['deckel-regel'], barId: 'koe-001' },
];

// ──── BERLIN – Spreebar-Tour ─────────────────────────────

const berlinBiergolf: Hole[] = [
  { name: 'Brothers Cocktail Bar', drink: 'Craft Bier 0,5l', par: 3, time: '11:00', flags: ['signature'], activeRules: [] },
  { name: 'Simon-Dach-Straße Kneipe', drink: 'Bier 0,5l', par: 3, time: '11:45', flags: [], activeRules: [] },
  { name: 'Luzia Bar (Kreuzberg)', drink: 'Bier 0,5l', par: 3, time: '12:30', flags: [], activeRules: [] },
  { name: 'Ankerklause', drink: 'Bier vom Fass 0,5l', par: 3, time: '13:15', flags: [], activeRules: [], barId: 'ber-039' },
  { name: 'Südblock Bar (Kreuzberg)', drink: 'Craft Bier 0,5l', par: 3, time: '14:00', flags: [], activeRules: [] },
  { name: 'Fahimi Bar (Rooftop)', drink: 'Bier 0,5l', par: 3, time: '14:45', flags: [], activeRules: [] },
  { name: 'Mitte-Kneipe (Torstraße)', drink: 'Berliner Weiße 0,5l', par: 4, time: '15:30', flags: ['turn'], activeRules: [] },
  { name: 'Schwarze Pumpe', drink: 'Pilsner 0,5l', par: 3, time: '16:15', flags: [], activeRules: [] },
  { name: 'Prater Garten Bar', drink: 'Berliner Bier 0,5l', par: 3, time: '17:00', flags: [], activeRules: [] },
  { name: 'Kastanienallee Kneipe', drink: 'Bier 0,5l', par: 3, time: '17:45', flags: [], activeRules: [] },
  { name: 'Duncker Club Bar', drink: 'Bier 0,5l', par: 3, time: '18:30', flags: [], activeRules: [] },
  { name: 'BrewDog Berlin (Mitte)', drink: 'Craft IPA 0,5l', par: 4, time: '19:15', flags: [], activeRules: [], barId: 'ber-045' },
  { name: 'Hops & Barley', drink: 'Hausbrauerei 0,5l', par: 3, time: '20:00', flags: [], activeRules: [], barId: 'ber-040' },
  { name: 'Frannz Club Bar', drink: 'Bier 0,5l', par: 3, time: '20:45', flags: [], activeRules: [] },
  { name: 'Rosenthaler Platz Bar', drink: 'Bier nach Wahl 0,5l', par: 3, time: '21:15', flags: [], activeRules: [] },
  { name: 'Weinerei (Prenzlauer Berg)', drink: 'Bier/Wein 0,5l', par: 3, time: '21:45', flags: [], activeRules: [] },
  { name: 'Strandbar Mitte', drink: 'Bier nach Wahl 0,5l', par: 3, time: '22:15', flags: [], activeRules: [], barId: 'ber-036' },
  { name: 'Clärchens Ballhaus Finale', drink: '⚠️ BERLINER WEISSE 0,5l', par: 5, time: '23:00', flags: ['finale'], activeRules: [] },
];

const berlinBiergarten: Hole[] = [
  { name: 'Strandbar Mitte (Monbijoupark)', drink: 'Berliner Pilsner 0,5l', par: 5, time: '12:00', flags: ['signature'], activeRules: [], barId: 'ber-036' },
  { name: 'Yaam Beach (Ostbahnhof)', drink: 'Bier nach Wahl 0,5l', par: 5, time: '13:00', flags: [], activeRules: [] },
  { name: 'RAW-Gelände Bar (Revaler Str.)', drink: 'Craft Bier 0,5l', par: 5, time: '14:00', flags: [], activeRules: ['windmill'], barId: 'ber-048' },
  { name: 'Holzmarkt 25 (Spreeufer)', drink: 'Hausbrauerei 0,5l', par: 5, time: '15:00', flags: [], activeRules: [], barId: 'ber-037' },
  { name: 'Ankerklause (Kottbusser Brücke)', drink: 'Bier vom Fass 0,5l', par: 5, time: '16:00', flags: ['turn'], activeRules: [], barId: 'ber-039' },
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

import { allRules } from '@/data/rules';

export function assignDefaultRules(holes: Hole[]): Hole[] {
  const eligibleRules = allRules.filter(r => r.id !== 'doppeltes-loch' && r.id !== 'deckel-regel' && r.id !== 'frachter-bonus');
  const shuffled = [...eligibleRules].sort(() => Math.random() - 0.5);
  let ruleIdx = 0;
  return holes.map((h, i) => {
    if (h.activeRules.length > 0) return h;
    if (i === 0 || i === holes.length - 1) return h;
    if (Math.random() < 0.4 && ruleIdx < shuffled.length) {
      return { ...h, activeRules: [shuffled[ruleIdx++].id] };
    }
    return h;
  });
}

/**
 * Enrich holes with coordinates from the bar database.
 * Priority: barId → exact name → substring → word overlap (≥2 words)
 */
export function enrichHolesWithCoordinates(holes: Hole[], city: CityId): Hole[] {
  const bars = getBarsForCity(city);
  if (bars.length === 0) return holes;

  return holes.map(hole => {
    // Already has coordinates
    if (hole.lat != null && hole.lng != null) return hole;

    // 1. barId lookup
    if (hole.barId) {
      const bar = bars.find(b => b.id === hole.barId);
      if (bar) return { ...hole, lat: bar.lat, lng: bar.lng, barId: bar.id };
    }

    const holeName = hole.name.toLowerCase();

    // 2. Exact name match
    let match = bars.find(b => b.name.toLowerCase() === holeName);
    if (match) return { ...hole, lat: match.lat, lng: match.lng, barId: match.id };

    // 3. Substring match
    match = bars.find(b =>
      holeName.includes(b.name.toLowerCase()) ||
      b.name.toLowerCase().includes(holeName)
    );
    if (match) return { ...hole, lat: match.lat, lng: match.lng, barId: match.id };

    // 4. Word overlap (≥2 significant words)
    const holeWords = holeName.replace(/[^a-zäöüß\s]/g, '').split(/\s+/).filter(w => w.length > 2);
    let bestMatch: typeof bars[0] | null = null;
    let bestScore = 0;
    for (const b of bars) {
      const barWords = b.name.toLowerCase().replace(/[^a-zäöüß\s]/g, '').split(/\s+/).filter(w => w.length > 2);
      const overlap = holeWords.filter(w => barWords.some(bw => bw.includes(w) || w.includes(bw))).length;
      if (overlap > bestScore && overlap >= 2) {
        bestScore = overlap;
        bestMatch = b;
      }
    }
    if (bestMatch) return { ...hole, lat: bestMatch.lat, lng: bestMatch.lng, barId: bestMatch.id };

    return hole;
  });
}

export function getDefaultHoles(city: CityId, mode: GameMode): Hole[] {
  const src = courseMap[city]?.[mode] || [];
  const holes = src.map(h => ({ ...h, flags: [...h.flags], activeRules: [...h.activeRules] }));
  const enriched = enrichHolesWithCoordinates(holes, city);
  return assignDefaultRules(enriched);
}

export function getTotalPar(holes: Hole[]): number {
  return holes.reduce((sum, h) => sum + h.par, 0);
}

export function getCourseInfo(city: CityId, mode: GameMode): { holes: number; par: number } {
  const src = courseMap[city]?.[mode] || [];
  return { holes: src.length, par: getTotalPar(src) };
}
