import { Hole, CityId, GameMode } from '@/types/game';
import { getBarsForCity } from '@/data/pubs';

// ──── MÜNCHEN ────────────────────────────────────────────

const münchenBiergolf: Hole[] = [
  { name: 'Hofbräuhaus', drink: 'Maß Hell 1,0l', par: 5, time: '10:00', flags: ['signature'], activeRules: [], barId: 'muc-001' },
  { name: 'Schneider Weisses', drink: 'Schneider Weisse Original 0,5l', par: 4, time: '10:45', flags: [], activeRules: [], barId: 'muc-003' },
  { name: 'Augustiner am Dom', drink: 'Augustiner Edelstoff 0,5l', par: 4, time: '11:30', flags: [], activeRules: [], barId: 'muc-002' },
  { name: 'Spöckmeier', drink: 'Hofbräu Weisse 0,5l', par: 4, time: '12:15', flags: [], activeRules: [], barId: 'muc-035' },
  { name: 'Wirtshaus zum Straubinger', drink: 'Löwenbräu 0,5l', par: 4, time: '13:00', flags: [], activeRules: [], barId: 'muc-036' },
  { name: 'Zum Franziskaner', drink: 'Franziskaner Weissbier 0,5l', par: 4, time: '13:45', flags: [], activeRules: [], barId: 'muc-004' },
  { name: 'Schelling Salon', drink: 'Augustiner Pils 0,5l', par: 3, time: '14:30', flags: [], activeRules: [], barId: 'muc-012' },
  { name: 'Alter Simpl', drink: 'Pils vom Fass 0,5l', par: 3, time: '15:15', flags: [], activeRules: [], barId: 'muc-013' },
  { name: 'Max-Emanuel-Brauerei', drink: 'Max-Emanuel Hell 0,5l', par: 4, time: '16:00', flags: ['turn'], activeRules: [], barId: 'muc-014' },
  { name: 'Irish Folk Pub', drink: 'Guinness 0,5l', par: 4, time: '16:45', flags: [], activeRules: [], barId: 'muc-024' },
  { name: 'Rennbahn Schwabing', drink: 'Pils vom Fass 0,5l', par: 3, time: '17:30', flags: [], activeRules: [], barId: 'muc-023' },
  { name: 'Kaisergarten', drink: 'Kühles Bier 0,5l', par: 4, time: '18:15', flags: [], activeRules: [], barId: 'muc-025' },
  { name: 'Hofbräukeller', drink: 'Hofbräu Original 0,5l', par: 4, time: '19:00', flags: [], activeRules: [], barId: 'muc-008' },
  { name: 'Vivo', drink: 'Giesinger Bier 0,5l', par: 3, time: '19:45', flags: [], activeRules: [], barId: 'muc-030' },
  { name: 'Juleps New York Bar', drink: 'American Longdrink', par: 4, time: '20:30', flags: [], activeRules: [], barId: 'muc-028' },
  { name: 'Trachtenvogl', drink: 'Giesinger Bier 0,5l', par: 3, time: '21:15', flags: [], activeRules: [], barId: 'muc-019' },
  { name: 'Holy Home', drink: 'Craft Beer 0,33l', par: 3, time: '22:00', flags: [], activeRules: [], barId: 'muc-020' },
  { name: 'Paulaner Keller am Nockherberg', drink: 'Paulaner Märzen 0,5l', par: 5, time: '23:00', flags: ['finale'], activeRules: [], barId: 'muc-005' },
];

const münchenBiergarten: Hole[] = [
  { name: 'Augustiner Keller', drink: 'Augustiner Lagerbier Hell 0,5l', par: 4, time: '11:00', flags: ['signature'], activeRules: [], barId: 'muc-007' },
  { name: 'Englischer Garten – Chinesischer Turm', drink: 'Paulaner Hell 0,5l', par: 5, time: '12:00', flags: [], activeRules: [], barId: 'muc-009' },
  { name: 'Seehaus im Englischen Garten', drink: 'Hofbräu Hell 0,5l', par: 4, time: '13:00', flags: [], activeRules: [], barId: 'muc-010' },
  { name: 'Kaisergarten', drink: 'Kühles Bier 0,5l', par: 4, time: '14:00', flags: [], activeRules: [], barId: 'muc-025' },
  { name: 'Hirschgarten', drink: 'Augustiner Hell 0,5l', par: 5, time: '15:00', flags: ['turn'], activeRules: [], barId: 'muc-011' },
  { name: 'Hofbräukeller', drink: 'Hofbräu Original 0,5l', par: 4, time: '16:00', flags: [], activeRules: [], barId: 'muc-008' },
  { name: 'Muffatwerk Biergarten', drink: 'Bier 0,5l', par: 4, time: '17:00', flags: [], activeRules: [], barId: 'muc-033' },
  { name: 'Paulaner am Nockherberg Biergarten', drink: 'Paulaner Salvator 0,5l', par: 4, time: '18:30', flags: [], activeRules: [], barId: 'muc-049' },
  { name: 'Flaucher Biergarten', drink: 'Augustiner Hell 0,5l', par: 5, time: '20:00', flags: ['finale'], activeRules: [], barId: 'muc-034' },
];

// ──── FRANKFURT – Ebbelwoi-Runde ─────────────────────────

const frankfurtBiergolf: Hole[] = [
  { name: 'Zum Gemalten Haus', drink: 'Apfelwein 0,3l Geripptes', par: 3, time: '11:00', flags: ['signature'], activeRules: [], barId: 'fra-001' },
  { name: 'Wagner', drink: 'Apfelwein 0,3l + Handkäse', par: 3, time: '11:45', flags: [], activeRules: [], barId: 'fra-004' },
  { name: 'Dauth-Schneider', drink: 'Apfelwein 0,3l Geripptes', par: 3, time: '12:30', flags: [], activeRules: [], barId: 'fra-002' },
  { name: 'Fichtekränzi', drink: 'Apfelwein 0,3l Geripptes', par: 3, time: '13:15', flags: [], activeRules: [], barId: 'fra-049' },
  { name: 'Klapper 33', drink: 'Pils vom Fass 0,5l', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'fra-006' },
  { name: 'Alte Liebe', drink: 'Bier 0,5l oder Apfelwein', par: 3, time: '14:45', flags: [], activeRules: [], barId: 'fra-007' },
  { name: 'Depot 1899', drink: 'Bier 0,5l', par: 4, time: '15:30', flags: [], activeRules: [], barId: 'fra-008' },
  { name: 'Chlodwig-Eck', drink: 'Apfelwein 0,3l', par: 3, time: '16:15', flags: [], activeRules: [], barId: 'fra-018' },
  { name: 'Metropol', drink: 'Bier 0,5l', par: 4, time: '17:00', flags: ['turn'], activeRules: [], barId: 'fra-043' },
  { name: 'Bierhaus in der Salzgass', drink: 'Binding vom Fass 0,5l', par: 4, time: '17:45', flags: [], activeRules: [], barId: 'fra-048' },
  { name: 'Drinksmith', drink: 'Craft Cocktail', par: 4, time: '18:30', flags: [], activeRules: [], barId: 'fra-019' },
  { name: 'Hunky Dory', drink: 'Hausgemixte Drinks', par: 4, time: '19:15', flags: [], activeRules: [], barId: 'fra-022' },
  { name: 'Goethe Bar', drink: 'Bier oder Cocktail', par: 4, time: '20:00', flags: [], activeRules: [], barId: 'fra-044' },
  { name: 'Frankfurter Botschaft', drink: 'Binding Bier 0,5l', par: 3, time: '20:45', flags: [], activeRules: [], barId: 'fra-047' },
  { name: 'Irish Pub Bornheim', drink: 'Guinness 0,5l', par: 4, time: '21:15', flags: [], activeRules: [], barId: 'fra-013' },
  { name: 'Ha-Ka', drink: 'Bier 0,5l + Cocktail', par: 3, time: '21:45', flags: [], activeRules: [], barId: 'fra-011' },
  { name: 'Feinstaub', drink: 'Bier 0,5l', par: 3, time: '22:15', flags: [], activeRules: [], barId: 'fra-017' },
  { name: 'Lorsbacher Thal', drink: 'Apfelwein Bembel 1,0l', par: 4, time: '23:00', flags: ['finale'], activeRules: [], barId: 'fra-003' },
];

const frankfurtBiergarten: Hole[] = [
  { name: 'Zum Gemalten Haus', drink: 'Hauseigener Äppler 0,3l', par: 3, time: '11:00', flags: ['signature'], activeRules: [], barId: 'fra-001' },
  { name: 'Wagner', drink: 'Eigene Kelterei 0,3l', par: 3, time: '11:45', flags: [], activeRules: [], barId: 'fra-004' },
  { name: 'Dauth-Schneider', drink: 'Apfelwein 0,3l', par: 3, time: '12:30', flags: [], activeRules: [], barId: 'fra-002' },
  { name: 'Fichtekränzi', drink: 'Apfelwein 0,3l Geripptes', par: 3, time: '13:15', flags: [], activeRules: [], barId: 'fra-049' },
  { name: 'Zur Eulenburg', drink: 'Apfelwein 0,3l Geripptes', par: 3, time: '14:00', flags: ['turn'], activeRules: [], barId: 'fra-005' },
  { name: 'Zur kleinen Glocke', drink: 'Apfelwein 0,3l Geripptes', par: 3, time: '14:45', flags: [], activeRules: [], barId: 'fra-010' },
  { name: 'Apfelwein Solzer', drink: 'Apfelwein 0,3l', par: 3, time: '15:30', flags: [], activeRules: [], barId: 'fra-042' },
  { name: 'Cider House Rules', drink: 'Craft Cider 0,33l', par: 4, time: '16:15', flags: [], activeRules: [], barId: 'fra-050' },
  { name: 'Lorsbacher Thal', drink: 'Großer Bembel zum Finale 0,3l', par: 4, time: '17:00', flags: ['finale'], activeRules: [], barId: 'fra-003' },
];

// ──── HAMBURG – Elbtour ─────────────────────────────────

const hamburgBiergolf: Hole[] = [
  { name: 'Gretel & Alfons', drink: 'Astra 0,5l', par: 4, time: '11:00', flags: ['signature'], activeRules: [], barId: 'ham-001' },
  { name: 'Hans-Albers-Eck', drink: 'Astra 0,5l + DJ', par: 3, time: '11:45', flags: [], activeRules: [], barId: 'ham-003' },
  { name: 'Zum Silbersack', drink: 'Astra 0,5l', par: 3, time: '12:30', flags: [], activeRules: [], barId: 'ham-002' },
  { name: 'Zur Ritze', drink: 'Astra 0,5l', par: 3, time: '13:15', flags: [], activeRules: [], barId: 'ham-004' },
  { name: 'Barbarabar', drink: 'Astra 0,5l', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'ham-007' },
  { name: "Rosi's Bar", drink: 'Astra + Korn', par: 3, time: '14:45', flags: [], activeRules: [], barId: 'ham-008' },
  { name: 'Chug Club', drink: 'Buttermilch-Margarita', par: 4, time: '15:30', flags: [], activeRules: [], barId: 'ham-013' },
  { name: 'Überquell Brauerei', drink: 'Überquell Craft Bier 0,3l', par: 4, time: '16:15', flags: [], activeRules: [], barId: 'ham-042' },
  { name: 'Elbschlosskeller', drink: 'Astra 0,5l', par: 3, time: '17:00', flags: ['turn'], activeRules: [], barId: 'ham-027' },
  { name: 'Fritz Bauch', drink: 'Jever vom Fass 0,5l', par: 3, time: '17:45', flags: [], activeRules: [], barId: 'ham-016' },
  { name: 'Katze', drink: 'Caipirinha', par: 4, time: '18:30', flags: [], activeRules: [], barId: 'ham-017' },
  { name: 'Altes Mädchen', drink: 'Ratsherrn Craft Bier 0,3l', par: 4, time: '19:15', flags: [], activeRules: [], barId: 'ham-048' },
  { name: 'Pony Bar', drink: 'Bier 0,5l', par: 3, time: '20:00', flags: [], activeRules: [], barId: 'ham-020' },
  { name: 'Astra-Stube', drink: 'Astra 0,5l', par: 3, time: '20:45', flags: [], activeRules: [], barId: 'ham-043' },
  { name: 'Aalhaus', drink: 'Bier 0,5l', par: 3, time: '21:15', flags: [], activeRules: [], barId: 'ham-023' },
  { name: 'Schellfischposten', drink: 'Astra 0,5l', par: 4, time: '21:45', flags: [], activeRules: [], barId: 'ham-025' },
  { name: 'Haifischbar', drink: 'Astra 0,5l + Korn', par: 3, time: '22:15', flags: [], activeRules: [], barId: 'ham-026' },
  { name: '20up Bar – Empire Riverside Hotel', drink: 'Cocktail + Elbpanorama', par: 5, time: '23:00', flags: ['finale'], activeRules: [], barId: 'ham-050' },
];

const hamburgBiergarten: Hole[] = [
  { name: 'Strandperle', drink: 'Bier 0,5l am Elbufer', par: 4, time: '11:00', flags: ['signature'], activeRules: ['frachter-bonus'], barId: 'ham-039' },
  { name: 'Fischauktionshalle Biergarten', drink: 'Astra 0,5l (Outdoor)', par: 4, time: '12:00', flags: [], activeRules: [], barId: 'ham-038' },
  { name: 'Haifischbar', drink: 'Astra 0,5l + Korn', par: 3, time: '13:00', flags: [], activeRules: [], barId: 'ham-026' },
  { name: 'Schellfischposten', drink: 'Astra 0,5l', par: 4, time: '14:00', flags: [], activeRules: [], barId: 'ham-025' },
  { name: 'Zur gemütlichen Ecke', drink: 'Astra 0,5l', par: 3, time: '15:00', flags: ['turn'], activeRules: [], barId: 'ham-037' },
  { name: 'Überquell Brauerei', drink: 'Überquell Craft Bier 0,3l', par: 4, time: '16:00', flags: [], activeRules: [], barId: 'ham-042' },
  { name: 'Altes Mädchen', drink: 'Ratsherrn Craft Bier 0,3l', par: 4, time: '17:00', flags: [], activeRules: [], barId: 'ham-048' },
  { name: 'Astra-Stube', drink: 'Astra 0,5l', par: 3, time: '18:00', flags: [], activeRules: [], barId: 'ham-043' },
  { name: '20up Bar – Empire Riverside Hotel', drink: 'Cocktail + Elbpanorama', par: 5, time: '19:00', flags: ['finale'], activeRules: [], barId: 'ham-050' },
];

// ──── KÖLN – Köbesrunde ──────────────────────────────────

const kölnBiergolf: Hole[] = [
  { name: 'Brauerei Sion', drink: 'Sion Kölsch 0,2l Stange', par: 3, time: '11:00', flags: ['signature'], activeRules: [], barId: 'koe-004' },
  { name: 'Früh am Dom', drink: 'Früh Kölsch 0,2l Stange', par: 3, time: '11:45', flags: [], activeRules: [], barId: 'koe-002' },
  { name: 'Brauhaus Gaffel am Dom', drink: 'Gaffel Kölsch 0,2l Stange', par: 3, time: '12:30', flags: [], activeRules: [], barId: 'koe-049' },
  { name: 'Malzmühle', drink: 'Mühlen Kölsch 0,2l Stange', par: 3, time: '13:15', flags: [], activeRules: [], barId: 'koe-003' },
  { name: "Papa Joe's Klimperkasten", drink: 'Kölsch 0,2l + Jazz', par: 4, time: '14:00', flags: [], activeRules: [], barId: 'koe-036' },
  { name: 'Wirtz', drink: 'Kölsch 0,2l Stange', par: 3, time: '14:45', flags: [], activeRules: [], barId: 'koe-048' },
  { name: 'Brauerei Päffgen', drink: 'Päffgen Kölsch 0,2l Stange', par: 3, time: '15:30', flags: [], activeRules: [], barId: 'koe-001' },
  { name: 'Hallmackenreuther', drink: 'Kölsch 0,2l Stange', par: 3, time: '16:15', flags: [], activeRules: [], barId: 'koe-008' },
  { name: 'Grünfeld', drink: 'Kölsch 0,2l + Kicker', par: 3, time: '17:00', flags: ['turn'], activeRules: [], barId: 'koe-007' },
  { name: 'Zum Knobelbecher', drink: 'Krönchen + Kölsch', par: 3, time: '17:45', flags: [], activeRules: [], barId: 'koe-011' },
  { name: 'Scheues Reh', drink: 'Kölsch 0,2l + Gin', par: 4, time: '18:30', flags: [], activeRules: [], barId: 'koe-013' },
  { name: 'Monkeys Cocktail Culture', drink: 'Cocktail oder Kölsch 0,2l', par: 4, time: '19:00', flags: [], activeRules: [], barId: 'koe-028' },
  { name: 'Bumann & Sohn', drink: 'Kölsch 0,2l + DJ', par: 3, time: '19:45', flags: [], activeRules: [], barId: 'koe-016' },
  { name: 'Hemmer', drink: 'Kölsch 0,2l', par: 3, time: '20:15', flags: [], activeRules: [], barId: 'koe-019' },
  { name: 'Torburg', drink: 'Kölsch 0,2l + Blues', par: 3, time: '20:45', flags: [], activeRules: [], barId: 'koe-021' },
  { name: 'Ubierschänke', drink: 'Kölsch 0,2l Stange', par: 3, time: '21:15', flags: [], activeRules: [], barId: 'koe-022' },
  { name: 'Chlodwig-Eck', drink: 'Kölsch 0,2l Stange', par: 3, time: '21:45', flags: [], activeRules: [], barId: 'koe-006' },
  { name: 'Brauerei zur Linde', drink: 'Linde Kölsch 0,2l Stange', par: 3, time: '23:00', flags: ['finale'], activeRules: [], barId: 'koe-005' },
];

const kölnBiergarten: Hole[] = [
  { name: 'Brauerei Sion', drink: 'Sion Kölsch 0,2l Stange', par: 3, time: '11:00', flags: ['signature'], activeRules: ['deckel-regel'], barId: 'koe-004' },
  { name: 'Früh am Dom', drink: 'Früh Kölsch 0,2l Stange', par: 3, time: '11:45', flags: [], activeRules: ['deckel-regel'], barId: 'koe-002' },
  { name: 'Brauhaus Gaffel am Dom', drink: 'Gaffel Kölsch 0,2l Stange', par: 3, time: '12:30', flags: [], activeRules: ['deckel-regel'], barId: 'koe-049' },
  { name: 'Malzmühle', drink: 'Mühlen Kölsch 0,2l Stange', par: 3, time: '13:15', flags: [], activeRules: ['deckel-regel'], barId: 'koe-003' },
  { name: 'Brauerei Päffgen', drink: 'Päffgen Kölsch 0,2l Stange', par: 3, time: '14:00', flags: ['turn'], activeRules: ['deckel-regel'], barId: 'koe-001' },
  { name: 'Brauerei zur Linde', drink: 'Linde Kölsch 0,2l Stange', par: 3, time: '14:45', flags: [], activeRules: ['deckel-regel'], barId: 'koe-005' },
  { name: 'Barabrossa Schänke', drink: 'Kölsch 0,2l (Deckel-Regel!)', par: 3, time: '15:30', flags: [], activeRules: ['deckel-regel'], barId: 'koe-045' },
  { name: "Papa Joe's Klimperkasten", drink: 'Kölsch 0,2l + Jazz', par: 4, time: '16:15', flags: [], activeRules: ['deckel-regel'], barId: 'koe-036' },
  { name: 'Wirtz', drink: 'Kölsch 0,2l Stange', par: 3, time: '17:00', flags: ['finale'], activeRules: ['deckel-regel'], barId: 'koe-048' },
];

// ──── BERLIN – Spreebar-Tour ─────────────────────────────

const berlinBiergolf: Hole[] = [
  { name: 'Trinkteufel', drink: 'Bier vom Fass 0,5l', par: 3, time: '11:00', flags: ['signature'], activeRules: [], barId: 'ber-006' },
  { name: 'Madame Claude', drink: 'Bier 0,5l + Schnaps', par: 3, time: '11:45', flags: [], activeRules: [], barId: 'ber-003' },
  { name: 'Zur fetten Ecke', drink: 'Waldmeisterlikör + Pils', par: 3, time: '12:30', flags: [], activeRules: [], barId: 'ber-004' },
  { name: 'Hopfenreich', drink: 'Craft Beer vom Fass 0,4l', par: 4, time: '13:15', flags: [], activeRules: [], barId: 'ber-005' },
  { name: 'Oberbaumeck', drink: 'Bier 0,5l + Kicker', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'ber-016' },
  { name: 'Feuermelder', drink: 'Bier vom Fass 0,5l', par: 3, time: '14:45', flags: [], activeRules: [], barId: 'ber-011' },
  { name: 'Süss war gestern', drink: 'Ingwer-Cocktail', par: 4, time: '15:30', flags: [], activeRules: [], barId: 'ber-012' },
  { name: 'Hops & Barley', drink: 'Hausgebrautes Hell 0,5l', par: 4, time: '16:15', flags: [], activeRules: [], barId: 'ber-040' },
  { name: 'BrewDog Berlin', drink: 'BrewDog Punk IPA 0,4l', par: 4, time: '17:00', flags: ['turn'], activeRules: [], barId: 'ber-045' },
  { name: 'Mein Haus am See', drink: 'Bier vom Fass 0,5l', par: 3, time: '17:45', flags: [], activeRules: [], barId: 'ber-001' },
  { name: 'The Wash Bar', drink: 'Cocktail', par: 4, time: '18:30', flags: [], activeRules: [], barId: 'ber-022' },
  { name: 'Knutschfleck', drink: 'Cocktail Börse', par: 4, time: '19:15', flags: [], activeRules: [], barId: 'ber-033' },
  { name: 'Metzer Eck', drink: 'Bier vom Fass 0,5l', par: 3, time: '20:00', flags: [], activeRules: [], barId: 'ber-026' },
  { name: 'Zu mir oder zu dir', drink: 'Bier + Cocktail', par: 3, time: '20:45', flags: [], activeRules: [], barId: 'ber-027' },
  { name: 'Zum Starken August', drink: 'Bier 0,5l', par: 3, time: '21:15', flags: [], activeRules: [], barId: 'ber-044' },
  { name: 'Ankerklause', drink: 'Bier 0,5l', par: 3, time: '21:45', flags: [], activeRules: [], barId: 'ber-039' },
  { name: 'Vettern Bar', drink: 'Bier vom Fass 0,5l', par: 3, time: '22:15', flags: [], activeRules: [], barId: 'ber-017' },
  { name: 'Klunkerkranich', drink: 'Bier 0,5l (Rooftop)', par: 4, time: '23:00', flags: ['finale'], activeRules: [], barId: 'ber-042' },
];

const berlinBiergarten: Hole[] = [
  { name: 'Strandbar Mitte', drink: 'Bier 0,5l (Outdoor)', par: 4, time: '12:00', flags: ['signature'], activeRules: [], barId: 'ber-036' },
  { name: 'Holzmarkt 25', drink: 'Craft Beer 0,33l', par: 4, time: '13:00', flags: [], activeRules: [], barId: 'ber-037' },
  { name: 'RAW Gelände – Cassiopeia', drink: 'Bier 0,5l (Biergarten)', par: 4, time: '14:00', flags: [], activeRules: ['windmill'], barId: 'ber-048' },
  { name: 'BRLO Brauhaus', drink: 'BRLO Craft Beer 0,33l', par: 4, time: '15:00', flags: [], activeRules: [], barId: 'ber-030' },
  { name: 'Ankerklause', drink: 'Bier 0,5l', par: 3, time: '16:00', flags: ['turn'], activeRules: [], barId: 'ber-039' },
  { name: 'Klunkerkranich', drink: 'Bier 0,5l (Rooftop)', par: 4, time: '17:00', flags: [], activeRules: [], barId: 'ber-042' },
  { name: 'Clash', drink: 'Bier 0,5l', par: 3, time: '18:00', flags: [], activeRules: [], barId: 'ber-038' },
  { name: 'Bergschlösschen', drink: 'Bier vom Fass 0,5l', par: 3, time: '19:00', flags: [], activeRules: [], barId: 'ber-050' },
  { name: 'Monarch', drink: 'Bier 0,5l + Cocktail', par: 3, time: '20:00', flags: ['finale'], activeRules: [], barId: 'ber-049' },
];

// ──── LONDON ─────────────────────────────────────────────

const londonBiergolf: Hole[] = [
  { name: 'The Sherlock Holmes', drink: 'Pint of Lager', par: 3, time: '12:00', flags: ['signature'], activeRules: [], barId: 'lon-1752' },
  { name: 'The Clarence', drink: 'Pint of Lager', par: 3, time: '12:45', flags: [], activeRules: [], barId: 'lon-1751' },
  { name: 'Silver Cross', drink: 'Pint of Lager', par: 3, time: '13:30', flags: [], activeRules: [], barId: 'lon-2779' },
  { name: 'The Red Lion', drink: 'Pint of Lager', par: 3, time: '14:15', flags: [], activeRules: [], barId: 'lon-2777' },
  { name: "St Stephen's Tavern", drink: 'Pint of Lager', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'lon-281' },
  { name: 'Westminster Arms', drink: 'Pint of Lager', par: 3, time: '15:45', flags: [], activeRules: [], barId: 'lon-2771' },
  { name: 'The Sanctuary House', drink: 'Pint of Lager', par: 3, time: '16:30', flags: [], activeRules: [], barId: 'lon-2770' },
  { name: 'Two Chairmen', drink: 'Pint of Lager', par: 3, time: '17:15', flags: [], activeRules: [], barId: 'lon-2749' },
  { name: 'The Argyll Arms', drink: 'Pint of Lager', par: 3, time: '18:00', flags: ['turn'], activeRules: [], barId: 'lon-655' },
  { name: 'The Clachan', drink: 'Pint of Lager', par: 3, time: '18:45', flags: [], activeRules: [], barId: 'lon-2259' },
  { name: "The Shakespeare's Head", drink: 'Pint of Lager', par: 3, time: '19:30', flags: [], activeRules: [], barId: 'lon-2258' },
  { name: 'The Blue Posts', drink: 'Pint of Lager', par: 3, time: '20:15', flags: [], activeRules: [], barId: 'lon-2263' },
  { name: 'The Shaston Arms', drink: 'Pint of Lager', par: 3, time: '21:00', flags: [], activeRules: [], barId: 'lon-2256' },
  { name: 'The Windmill', drink: 'Pint of Lager', par: 3, time: '21:30', flags: [], activeRules: [], barId: 'lon-243' },
  { name: 'Coach and Horses', drink: 'Pint of Lager', par: 3, time: '22:00', flags: [], activeRules: [], barId: 'lon-2407' },
  { name: 'Crown & Sceptre', drink: 'Pint of Lager', par: 3, time: '22:30', flags: [], activeRules: [], barId: 'lon-2278' },
  { name: 'Yorkshire Grey', drink: 'Pint of Lager', par: 3, time: '23:00', flags: [], activeRules: [], barId: 'lon-1980' },
  { name: 'The Tattershall Castle', drink: 'Pint of Lager', par: 4, time: '23:45', flags: ['finale'], activeRules: [], barId: 'lon-1441' },
];

const londonBiergarten: Hole[] = [
  { name: 'The Old Blue Last', drink: 'Pint of Lager', par: 3, time: '13:00', flags: ['signature'], activeRules: [], barId: 'lon-1867' },
  { name: 'The Horse & Groom', drink: 'Pint of Lager', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'lon-1932' },
  { name: 'Bricklayer\'s Arms', drink: 'Pint of Lager', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'lon-1925' },
  { name: 'The Griffin', drink: 'Pint of Lager', par: 3, time: '16:00', flags: [], activeRules: [], barId: 'lon-1850' },
  { name: 'The Princess of Shoreditch', drink: 'Pint of Lager', par: 3, time: '17:00', flags: ['turn'], activeRules: [], barId: 'lon-417' },
  { name: 'Zigfrid', drink: 'Pint of Lager', par: 3, time: '18:00', flags: [], activeRules: [], barId: 'lon-531' },
  { name: 'The Reliance', drink: 'Pint of Lager', par: 3, time: '19:00', flags: [], activeRules: [], barId: 'lon-1928' },
  { name: 'The Fox', drink: 'Pint of Lager', par: 3, time: '20:00', flags: [], activeRules: [], barId: 'lon-1908' },
  { name: 'The Barley Mow', drink: 'Pint of Lager', par: 3, time: '21:00', flags: ['finale'], activeRules: [], barId: 'lon-1865' },
];

// ──── MANCHESTER ─────────────────────────────────────────

const manchesterBiergolf: Hole[] = [
  { name: 'Piccadilly Tap', drink: 'Craft IPA Pint', par: 3, time: '12:00', flags: ['signature'], activeRules: [], barId: 'man-104' },
  { name: 'The Star & Garter', drink: 'Pint of Lager', par: 3, time: '12:45', flags: [], activeRules: [], barId: 'man-136' },
  { name: 'Piccadilly Central', drink: 'Pint of Lager', par: 3, time: '13:30', flags: [], activeRules: [], barId: 'man-096' },
  { name: 'The Mill', drink: 'Pint of Lager', par: 3, time: '14:15', flags: [], activeRules: [], barId: 'man-113' },
  { name: 'The Thompsons Arms', drink: 'Pint of Lager', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'man-089' },
  { name: 'Via', drink: 'Pint of Lager', par: 3, time: '15:45', flags: [], activeRules: [], barId: 'man-128' },
  { name: 'The Church', drink: 'Pint of Lager', par: 3, time: '16:30', flags: [], activeRules: [], barId: 'man-041' },
  { name: 'The Molly House', drink: 'Craft IPA Pint', par: 3, time: '17:15', flags: [], activeRules: [], barId: 'man-055' },
  { name: 'Northern Bar', drink: 'Pint of Lager', par: 3, time: '18:00', flags: ['turn'], activeRules: [], barId: 'man-151' },
  { name: 'The Lass O\'Gowrie', drink: 'Pint of Guinness', par: 4, time: '18:45', flags: [], activeRules: [], barId: 'man-148' },
  { name: 'The Garratt', drink: 'Pint of Lager', par: 3, time: '19:30', flags: [], activeRules: [], barId: 'man-189' },
  { name: 'The Salutation', drink: 'Pint of Lager', par: 3, time: '20:15', flags: [], activeRules: [], barId: 'man-192' },
  { name: 'Sandbar', drink: 'Pint of Lager', par: 3, time: '21:00', flags: [], activeRules: [], barId: 'man-004' },
  { name: 'The Flour and Flagon', drink: 'Pint of Lager', par: 3, time: '21:30', flags: [], activeRules: [], barId: 'man-005' },
  { name: 'Kro Bar', drink: 'Pint of Lager', par: 3, time: '22:00', flags: [], activeRules: [], barId: 'man-002' },
  { name: 'Ducie Arms', drink: 'Pint of Lager', par: 3, time: '22:30', flags: [], activeRules: [], barId: 'man-001' },
  { name: 'The Big Hands', drink: 'Pint of Lager', par: 3, time: '23:00', flags: [], activeRules: [], barId: 'man-007' },
  { name: 'Turing Tap', drink: 'Craft IPA Pint', par: 4, time: '23:45', flags: ['finale'], activeRules: [], barId: 'man-185' },
];

const manchesterBiergarten: Hole[] = [
  { name: 'The Waldorf', drink: 'Pint of Lager', par: 3, time: '13:00', flags: ['signature'], activeRules: [], barId: 'man-025' },
  { name: 'The Eagle', drink: 'Pint of Lager', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'man-057' },
  { name: 'The Goose', drink: 'Pint of Lager', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'man-024' },
  { name: 'Grand Central', drink: 'Pint of Lager', par: 3, time: '16:00', flags: [], activeRules: [], barId: 'man-039' },
  { name: "O'Shea's", drink: 'Pint of Guinness', par: 4, time: '17:00', flags: ['turn'], activeRules: [], barId: 'man-060' },
  { name: 'The New Union', drink: 'Pint of Lager', par: 3, time: '18:00', flags: [], activeRules: [], barId: 'man-040' },
  { name: 'The Grafton Arms', drink: 'Pint of Lager', par: 3, time: '19:00', flags: [], activeRules: [], barId: 'man-184' },
  { name: 'The Grove', drink: 'Pint of Lager', par: 3, time: '20:00', flags: [], activeRules: [], barId: 'man-064' },
  { name: "O'Connell's", drink: 'Pint of Guinness', par: 4, time: '21:00', flags: ['finale'], activeRules: [], barId: 'man-178' },
];

// ──── LIVERPOOL ──────────────────────────────────────────

const liverpoolBiergolf: Hole[] = [
  { name: 'Ropes & Twines', drink: 'Craft IPA Pint', par: 3, time: '12:00', flags: ['signature'], activeRules: [], barId: 'liv-106' },
  { name: 'Little Hardware', drink: 'Pint of Lager', par: 3, time: '12:45', flags: [], activeRules: [], barId: 'liv-078' },
  { name: "Ava's Bar", drink: 'Pint of Lager', par: 3, time: '13:30', flags: [], activeRules: [], barId: 'liv-020' },
  { name: 'Bundobust', drink: 'Pint of Lager', par: 3, time: '14:15', flags: [], activeRules: [], barId: 'liv-049' },
  { name: 'Baa Bar', drink: 'Pint of Lager', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'liv-005' },
  { name: 'Black Rabbit', drink: 'Pint of Lager', par: 3, time: '15:45', flags: [], activeRules: [], barId: 'liv-059' },
  { name: 'Cheers Big Ears', drink: 'Pint of Lager', par: 3, time: '16:30', flags: [], activeRules: [], barId: 'liv-104' },
  { name: 'Coyote Ugly', drink: 'Pint of Lager', par: 3, time: '17:15', flags: [], activeRules: [], barId: 'liv-096' },
  { name: 'Revolution', drink: 'Pint of Lager', par: 3, time: '18:00', flags: ['turn'], activeRules: [], barId: 'liv-150' },
  { name: 'Ink Bar', drink: 'Craft Beer', par: 3, time: '18:45', flags: [], activeRules: [], barId: 'liv-188' },
  { name: 'The Peacock', drink: 'Pint of Lager', par: 3, time: '19:30', flags: [], activeRules: [], barId: 'liv-138' },
  { name: 'The Zanzibar Club', drink: 'Craft Beer', par: 3, time: '20:15', flags: [], activeRules: [], barId: 'liv-110' },
  { name: 'Butter', drink: 'Pint of Lager', par: 3, time: '21:00', flags: [], activeRules: [], barId: 'liv-136' },
  { name: 'The Highball Club', drink: 'Craft Beer', par: 3, time: '21:30', flags: [], activeRules: [], barId: 'liv-135' },
  { name: 'MOLOKO', drink: 'Pint of Lager', par: 3, time: '22:00', flags: [], activeRules: [], barId: 'liv-137' },
  { name: 'Heebie Jeebies', drink: 'Pint of Lager', par: 3, time: '22:30', flags: [], activeRules: [], barId: 'liv-147' },
  { name: 'Pixel Bar Liverpool', drink: 'Pint of Lager', par: 3, time: '23:00', flags: [], activeRules: [], barId: 'liv-083' },
  { name: "Crazy Pedro's", drink: 'Pint of Guinness', par: 4, time: '23:45', flags: ['finale'], activeRules: [], barId: 'liv-097' },
];

const liverpoolBiergarten: Hole[] = [
  { name: 'Rubber Soul', drink: 'Pint of Lager', par: 3, time: '13:00', flags: ['signature'], activeRules: [], barId: 'liv-030' },
  { name: "Mulligan's of Liverpool", drink: 'Pint of Lager', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'liv-053' },
  { name: 'One Under', drink: 'Pint of Lager', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'liv-086' },
  { name: 'Soho', drink: 'Pint of Lager', par: 3, time: '16:00', flags: [], activeRules: [], barId: 'liv-140' },
  { name: 'Modo', drink: 'Craft Beer', par: 3, time: '17:00', flags: ['turn'], activeRules: [], barId: 'liv-184' },
  { name: 'Camel Club', drink: 'Craft Beer', par: 3, time: '18:00', flags: [], activeRules: [], barId: 'liv-166' },
  { name: 'BrooklynMixer', drink: 'Pint of Lager', par: 3, time: '19:00', flags: [], activeRules: [], barId: 'liv-146' },
  { name: 'EBGBS', drink: 'Craft Beer', par: 3, time: '20:00', flags: [], activeRules: [], barId: 'liv-187' },
  { name: 'Aura', drink: 'Craft Beer', par: 4, time: '21:00', flags: ['finale'], activeRules: [], barId: 'liv-186' },
];

// ──── BRIGHTON ───────────────────────────────────────────

const brightonBiergolf: Hole[] = [
  { name: 'Brighton Dome Cafe Bar', drink: 'Pint of Lager', par: 3, time: '12:00', flags: ['signature'], activeRules: [], barId: 'bri-047' },
  { name: 'The Archives', drink: 'Pint of Lager', par: 3, time: '12:45', flags: [], activeRules: [], barId: 'bri-030' },
  { name: 'Ten Green Bottles', drink: 'Pint of Lager', par: 3, time: '13:30', flags: [], activeRules: [], barId: 'bri-011' },
  { name: 'Dead Wax Social', drink: 'Pint of Lager', par: 3, time: '14:15', flags: [], activeRules: [], barId: 'bri-007' },
  { name: 'The Colonnade Bar', drink: 'Pint of Lager', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'bri-040' },
  { name: 'Bohemia', drink: 'Pint of Lager', par: 3, time: '15:45', flags: [], activeRules: [], barId: 'bri-029' },
  { name: 'Be At One', drink: 'Pint of Lager', par: 3, time: '16:30', flags: [], activeRules: [], barId: 'bri-054' },
  { name: 'Nautilus Lounge', drink: 'Craft Beer', par: 3, time: '17:15', flags: [], activeRules: [], barId: 'bri-017' },
  { name: 'Afinity Bar', drink: 'Pint of Lager', par: 3, time: '18:00', flags: ['turn'], activeRules: [], barId: 'bri-024' },
  { name: 'The Plotting Parlour', drink: 'Pint of Lager', par: 3, time: '18:45', flags: [], activeRules: [], barId: 'bri-068' },
  { name: 'The Latest Music Bar', drink: 'Pint of Lager', par: 3, time: '19:30', flags: [], activeRules: [], barId: 'bri-063' },
  { name: 'Amsterdam', drink: 'Pint of Lager', par: 3, time: '20:15', flags: [], activeRules: [], barId: 'bri-002' },
  { name: 'Patterns', drink: 'Craft Beer', par: 3, time: '21:00', flags: [], activeRules: [], barId: 'bri-083' },
  { name: 'Loading', drink: 'Pint of Lager', par: 3, time: '21:30', flags: [], activeRules: [], barId: 'bri-055' },
  { name: 'Chalk', drink: 'Craft Beer', par: 3, time: '22:00', flags: [], activeRules: [], barId: 'bri-084' },
  { name: 'The Verdict', drink: 'Pint of Lager', par: 3, time: '22:30', flags: [], activeRules: [], barId: 'bri-053' },
  { name: 'Lucky Voice', drink: 'Pint of Lager', par: 3, time: '23:00', flags: [], activeRules: [], barId: 'bri-031' },
  { name: 'Ohso Social', drink: 'Pint of Lager', par: 4, time: '23:45', flags: ['finale'], activeRules: [], barId: 'bri-005' },
];

const brightonBiergarten: Hole[] = [
  { name: 'The Basement', drink: 'Craft Beer', par: 3, time: '13:00', flags: ['signature'], activeRules: [], barId: 'bri-072' },
  { name: 'The Golden Pineapple', drink: 'Pint of Lager', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'bri-039' },
  { name: 'The Twisted Lemon', drink: 'Pint of Lager', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'bri-043' },
  { name: 'Bar 32', drink: 'Pint of Lager', par: 3, time: '16:00', flags: [], activeRules: [], barId: 'bri-045' },
  { name: 'Brighton Rocks', drink: 'Pint of Lager', par: 3, time: '17:00', flags: ['turn'], activeRules: [], barId: 'bri-022' },
  { name: 'The Funky Fish', drink: 'Pint of Lager', par: 3, time: '18:00', flags: [], activeRules: [], barId: 'bri-014' },
  { name: 'Sidewinder', drink: 'Pint of Lager', par: 3, time: '19:00', flags: [], activeRules: [], barId: 'bri-012' },
  { name: 'The Bootlegger', drink: 'Pint of Lager', par: 3, time: '20:00', flags: [], activeRules: [], barId: 'bri-001' },
  { name: 'Dirty Blonde', drink: 'Pint of Lager', par: 4, time: '21:00', flags: ['finale'], activeRules: [], barId: 'bri-032' },
];

// ──── NEWCASTLE ──────────────────────────────────────────

const newcastleBiergolf: Hole[] = [
  { name: 'The Charles Grey', drink: 'Pint of Newcastle Brown', par: 3, time: '12:00', flags: ['signature'], activeRules: [], barId: 'new-004' },
  { name: 'Bacchus', drink: 'Pint of Newcastle Brown', par: 3, time: '12:45', flags: [], activeRules: [], barId: 'new-002' },
  { name: 'The Peacock', drink: 'Pint of Newcastle Brown', par: 3, time: '13:30', flags: [], activeRules: [], barId: 'new-003' },
  { name: 'The Holy Hobo', drink: 'Pint of Newcastle Brown', par: 3, time: '14:15', flags: [], activeRules: [], barId: 'new-005' },
  { name: 'Newcastle Arms', drink: 'Pint of Newcastle Brown', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'new-008' },
  { name: 'City Tavern', drink: 'Pint of Newcastle Brown', par: 3, time: '15:45', flags: [], activeRules: [], barId: 'new-122' },
  { name: 'The Five Swans', drink: 'Pint of Newcastle Brown', par: 3, time: '16:30', flags: [], activeRules: [], barId: 'new-185' },
  { name: 'Centurion', drink: 'Pint of Newcastle Brown', par: 3, time: '17:15', flags: [], activeRules: [], barId: 'new-026' },
  { name: 'The Bodega', drink: 'Pint of Newcastle Brown', par: 3, time: '18:00', flags: ['turn'], activeRules: [], barId: 'new-028' },
  { name: 'The Forth', drink: 'Pint of Newcastle Brown', par: 3, time: '18:45', flags: [], activeRules: [], barId: 'new-027' },
  { name: 'Sgt. Peppers', drink: 'Pint of Newcastle Brown', par: 3, time: '19:30', flags: [], activeRules: [], barId: 'new-012' },
  { name: 'Filthy\'s', drink: 'Pint of Newcastle Brown', par: 3, time: '20:15', flags: [], activeRules: [], barId: 'new-011' },
  { name: 'The Dog & Parrot', drink: 'Pint of Newcastle Brown', par: 3, time: '21:00', flags: [], activeRules: [], barId: 'new-013' },
  { name: 'The Hotspur', drink: 'Pint of Newcastle Brown', par: 3, time: '21:30', flags: [], activeRules: [], barId: 'new-014' },
  { name: 'The Canny Lad', drink: 'Pint of Newcastle Brown', par: 3, time: '22:00', flags: [], activeRules: [], barId: 'new-021' },
  { name: 'Rose & Crown', drink: 'Pint of Newcastle Brown', par: 3, time: '22:30', flags: [], activeRules: [], barId: 'new-010' },
  { name: 'Kabannas', drink: 'Pint of Newcastle Brown', par: 3, time: '23:00', flags: [], activeRules: [], barId: 'new-037' },
  { name: 'Lady Grey\'s', drink: 'Pint of Newcastle Brown', par: 4, time: '23:45', flags: ['finale'], activeRules: [], barId: 'new-041' },
];

const newcastleBiergarten: Hole[] = [
  { name: 'The Black & White Bull', drink: 'Pint of Newcastle Brown', par: 3, time: '13:00', flags: ['signature'], activeRules: [], barId: 'new-001' },
  { name: 'The Tanners Arms', drink: 'Pint of Newcastle Brown', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'new-006' },
  { name: 'The Cluny', drink: 'Pint of Newcastle Brown', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'new-007' },
  { name: 'The Magpie', drink: 'Pint of Newcastle Brown', par: 3, time: '16:00', flags: [], activeRules: [], barId: 'new-017' },
  { name: "Alfie's", drink: 'Pint of Newcastle Brown', par: 3, time: '17:00', flags: ['turn'], activeRules: [], barId: 'new-009' },
  { name: 'Three Bulls Heads', drink: 'Pint of Newcastle Brown', par: 3, time: '18:00', flags: [], activeRules: [], barId: 'new-016' },
  { name: 'The Geordie Star', drink: 'Pint of Newcastle Brown', par: 3, time: '19:00', flags: [], activeRules: [], barId: 'new-029' },
  { name: 'The Metropole', drink: 'Pint of Newcastle Brown', par: 3, time: '20:00', flags: [], activeRules: [], barId: 'new-030' },
  { name: 'Madisons', drink: 'Pint of Newcastle Brown', par: 4, time: '21:00', flags: ['finale'], activeRules: [], barId: 'new-015' },
];

// ──── DUBLIN ─────────────────────────────────────────────

const dublinBiergolf: Hole[] = [
  { name: 'The Temple Bar', drink: 'Pint of Guinness', par: 3, time: '12:00', flags: ['signature'], activeRules: [], barId: 'dub-369' },
  { name: 'The Auld Dubliner', drink: 'Pint of Guinness', par: 4, time: '12:45', flags: [], activeRules: [], barId: 'dub-410' },
  { name: 'The Old Storehouse', drink: 'Pint of Guinness', par: 3, time: '13:30', flags: [], activeRules: [], barId: 'dub-044' },
  { name: 'Foggy Dew', drink: 'Pint of Guinness', par: 3, time: '14:15', flags: [], activeRules: [], barId: 'dub-358' },
  { name: 'The Vat House', drink: 'Pint of Guinness', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'dub-323' },
  { name: 'The Stag\'s Head', drink: 'Pint of Guinness', par: 3, time: '15:45', flags: [], activeRules: [], barId: 'dub-285' },
  { name: 'Dame Tavern', drink: 'Pint of Guinness', par: 3, time: '16:30', flags: [], activeRules: [], barId: 'dub-097' },
  { name: 'The International Bar', drink: 'Pint of Guinness', par: 3, time: '17:15', flags: [], activeRules: [], barId: 'dub-329' },
  { name: 'The Bankers', drink: 'Pint of Guinness', par: 3, time: '18:00', flags: ['turn'], activeRules: [], barId: 'dub-317' },
  { name: 'J. Grogan\'s', drink: 'Pint of Guinness', par: 3, time: '18:45', flags: [], activeRules: [], barId: 'dub-290' },
  { name: 'The Hairy Lemon', drink: 'Pint of Guinness', par: 3, time: '19:30', flags: [], activeRules: [], barId: 'dub-335' },
  { name: "Hogan's Bar", drink: 'Pint of Guinness', par: 3, time: '20:15', flags: [], activeRules: [], barId: 'dub-035' },
  { name: 'Bruxelles', drink: 'Pint of Guinness', par: 3, time: '21:00', flags: [], activeRules: [], barId: 'dub-316' },
  { name: 'The George', drink: 'Pint of Guinness', par: 3, time: '21:30', flags: [], activeRules: [], barId: 'dub-347' },
  { name: "McDaid's", drink: 'Pint of Guinness', par: 4, time: '22:00', flags: [], activeRules: [], barId: 'dub-346' },
  { name: "O'Neill's", drink: 'Pint of Guinness', par: 3, time: '22:30', flags: [], activeRules: [], barId: 'dub-166' },
  { name: 'The Long Hall', drink: 'Pint of Guinness', par: 3, time: '23:00', flags: [], activeRules: [], barId: 'dub-389' },
  { name: "Neary's Bar & Lounge", drink: 'Craft Beer', par: 4, time: '23:45', flags: ['finale'], activeRules: [], barId: 'dub-296' },
];

const dublinBiergarten: Hole[] = [
  { name: 'The Old Stand', drink: 'Pint of Guinness', par: 3, time: '13:00', flags: ['signature'], activeRules: [], barId: 'dub-350' },
  { name: 'The Rag Trader', drink: 'Pint of Guinness', par: 3, time: '14:00', flags: [], activeRules: [], barId: 'dub-348' },
  { name: '4 Dame Lane', drink: 'Pint of Guinness', par: 3, time: '15:00', flags: [], activeRules: [], barId: 'dub-286' },
  { name: 'The Exchequer', drink: 'Pint of Guinness', par: 3, time: '16:00', flags: [], activeRules: [], barId: 'dub-079' },
  { name: "Peter's Pub", drink: 'Pint of Guinness', par: 3, time: '17:00', flags: ['turn'], activeRules: [], barId: 'dub-295' },
  { name: 'Bar Rua', drink: 'Pint of Guinness', par: 3, time: '18:00', flags: [], activeRules: [], barId: 'dub-297' },
  { name: "Sheehan's", drink: 'Pint of Guinness', par: 3, time: '19:00', flags: [], activeRules: [], barId: 'dub-298' },
  { name: 'The Pawn Shop', drink: 'Craft IPA Pint', par: 3, time: '20:00', flags: [], activeRules: [], barId: 'dub-337' },
  { name: "Sinnott's", drink: 'Pint of Guinness', par: 4, time: '21:00', flags: ['finale'], activeRules: [], barId: 'dub-080' },
];

// ──── LOOKUP ─────────────────────────────────────────────

const courseMap: Record<CityId, Record<GameMode, Hole[]>> = {
  münchen: { biergolf: münchenBiergolf, biergarten: münchenBiergarten },
  frankfurt: { biergolf: frankfurtBiergolf, biergarten: frankfurtBiergarten },
  hamburg: { biergolf: hamburgBiergolf, biergarten: hamburgBiergarten },
  köln: { biergolf: kölnBiergolf, biergarten: kölnBiergarten },
  berlin: { biergolf: berlinBiergolf, biergarten: berlinBiergarten },
  london: { biergolf: londonBiergolf, biergarten: londonBiergarten },
  manchester: { biergolf: manchesterBiergolf, biergarten: manchesterBiergarten },
  liverpool: { biergolf: liverpoolBiergolf, biergarten: liverpoolBiergarten },
  brighton: { biergolf: brightonBiergolf, biergarten: brightonBiergarten },
  newcastle: { biergolf: newcastleBiergolf, biergarten: newcastleBiergarten },
  dublin: { biergolf: dublinBiergolf, biergarten: dublinBiergarten },
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
