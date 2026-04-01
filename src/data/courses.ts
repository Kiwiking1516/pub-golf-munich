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
  { name: 'Papa Joe\'s Klimperkasten', drink: 'Kölsch 0,2l + Jazz', par: 4, time: '14:00', flags: [], activeRules: [], barId: 'koe-036' },
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
  { name: 'Papa Joe\'s Klimperkasten', drink: 'Kölsch 0,2l + Jazz', par: 4, time: '16:15', flags: [], activeRules: ['deckel-regel'], barId: 'koe-036' },
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
