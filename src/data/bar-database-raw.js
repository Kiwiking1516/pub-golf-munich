/**
 * PUB GOLF BAR DATABASE
 * 250 Bars & Kneipen – 50 pro Stadt
 * Städte: München, Berlin, Frankfurt, Hamburg, Köln
 *
 * Schema:
 * id          – eindeutige ID (stadt-###)
 * city        – stadtschlüssel
 * name        – Name der Bar/Kneipe
 * address     – Straße + Hausnummer
 * district    – Stadtviertel (für Cluster-Routing)
 * lat / lng   – Koordinaten (WGS84, auf ~20m genau)
 * drink       – empfohlenes Getränk
 * par         – Loch-Par (3–6)
 * type        – brauhaus | kneipe | bar | biergarten | cocktailbar | irish | sportbar | szene
 * tags        – Array für Filterung & Storytelling
 */

export const BAR_DATABASE = [

  // ═══════════════════════════════════════════════════════════════
  // MÜNCHEN  🍺  (muc-001 bis muc-050)
  // ═══════════════════════════════════════════════════════════════

  { id: "muc-001", city: "münchen", name: "Hofbräuhaus", address: "Platzl 9", district: "altstadt",
    lat: 48.1378, lng: 11.5799, drink: "Maß Hell 1,0l", par: 5, type: "brauhaus",
    tags: ["klassiker", "touristik", "bierhalle", "signature", "weltberühmt"] },

  { id: "muc-002", city: "münchen", name: "Augustiner am Dom", address: "Frauenplatz 2", district: "altstadt",
    lat: 48.1388, lng: 11.5732, drink: "Augustiner Edelstoff 0,5l", par: 4, type: "brauhaus",
    tags: ["klassiker", "brauhaus", "altstadt"] },

  { id: "muc-003", city: "münchen", name: "Schneider Weisses", address: "Tal 7", district: "altstadt",
    lat: 48.1362, lng: 11.5776, drink: "Schneider Weisse Original 0,5l", par: 4, type: "brauhaus",
    tags: ["weissbier", "traditionslokal", "altstadt"] },

  { id: "muc-004", city: "münchen", name: "Zum Franziskaner", address: "Residenzstraße 9", district: "altstadt",
    lat: 48.1400, lng: 11.5770, drink: "Franziskaner Weissbier 0,5l", par: 4, type: "brauhaus",
    tags: ["historisch", "weissbier", "nobelviertel"] },

  { id: "muc-005", city: "münchen", name: "Paulaner Keller am Nockherberg", address: "Hochstraße 77", district: "au",
    lat: 48.1230, lng: 11.5820, drink: "Paulaner Märzen 0,5l", par: 5, type: "biergarten",
    tags: ["biergarten", "au", "aussicht", "paulaner"] },

  { id: "muc-006", city: "münchen", name: "Löwenbräukeller", address: "Stiglmaierplatz 2", district: "maxvorstadt",
    lat: 48.1484, lng: 11.5584, drink: "Löwenbräu Hell 0,5l", par: 4, type: "brauhaus",
    tags: ["klassiker", "brauhaus", "stiglmaierplatz", "keller"] },

  { id: "muc-007", city: "münchen", name: "Augustiner Keller", address: "Arnulfstraße 52", district: "maxvorstadt",
    lat: 48.1476, lng: 11.5567, drink: "Augustiner Lagerbier Hell 0,5l", par: 4, type: "biergarten",
    tags: ["biergarten", "kult", "augustiner", "outdoor"] },

  { id: "muc-008", city: "münchen", name: "Hofbräukeller", address: "Innere-Wiener-Straße 19", district: "haidhausen",
    lat: 48.1326, lng: 11.5952, drink: "Hofbräu Original 0,5l", par: 4, type: "biergarten",
    tags: ["biergarten", "haidhausen", "hofbräu", "lokalkolorit"] },

  { id: "muc-009", city: "münchen", name: "Englischer Garten – Chinesischer Turm", address: "Englischer Garten 3", district: "maxvorstadt",
    lat: 48.1545, lng: 11.5909, drink: "Paulaner Hell 0,5l", par: 5, type: "biergarten",
    tags: ["biergarten", "outdoor", "kult", "englischer-garten"] },

  { id: "muc-010", city: "münchen", name: "Seehaus im Englischen Garten", address: "Kleinhesseloher See 3", district: "schwabing",
    lat: 48.1614, lng: 11.5929, drink: "Hofbräu Hell 0,5l", par: 4, type: "biergarten",
    tags: ["biergarten", "see", "schwabing", "seeblick"] },

  { id: "muc-011", city: "münchen", name: "Hirschgarten", address: "Hirschgarten 1", district: "neuhausen",
    lat: 48.1448, lng: 11.5213, drink: "Augustiner Hell 0,5l", par: 5, type: "biergarten",
    tags: ["biergarten", "riesig", "neuhausen", "naturidyll"] },

  { id: "muc-012", city: "münchen", name: "Schelling Salon", address: "Schellingstraße 54", district: "maxvorstadt",
    lat: 48.1507, lng: 11.5721, drink: "Augustiner Pils 0,5l", par: 3, type: "kneipe",
    tags: ["kultlokal", "historisch", "billard", "maxvorstadt", "urgemütlich"] },

  { id: "muc-013", city: "münchen", name: "Alter Simpl", address: "Türkenstraße 57", district: "maxvorstadt",
    lat: 48.1509, lng: 11.5755, drink: "Pils vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["kultlokal", "maxvorstadt", "künstlertreffpunkt", "historisch"] },

  { id: "muc-014", city: "münchen", name: "Max-Emanuel-Brauerei", address: "Adalbertstraße 33", district: "maxvorstadt",
    lat: 48.1518, lng: 11.5703, drink: "Max-Emanuel Hell 0,5l", par: 4, type: "brauhaus",
    tags: ["brauerei", "maxvorstadt", "hausgebraut", "gemütlich"] },

  { id: "muc-015", city: "münchen", name: "Park Café", address: "Sophienstraße 7", district: "maxvorstadt",
    lat: 48.1465, lng: 11.5649, drink: "Cocktail oder Bier 0,5l", par: 4, type: "bar",
    tags: ["szene", "maxvorstadt", "biergarten-sommers", "elegant"] },

  { id: "muc-016", city: "münchen", name: "Kleiner Kranich", address: "Neureutherstraße 21", district: "maxvorstadt",
    lat: 48.1530, lng: 11.5770, drink: "Pils vom Fass 0,3l", par: 3, type: "kneipe",
    tags: ["gemütlich", "maxvorstadt", "entspannt", "stammkneipe"] },

  { id: "muc-017", city: "münchen", name: "Atzinger", address: "Schellingstraße 9", district: "maxvorstadt",
    lat: 48.1504, lng: 11.5724, drink: "Augustiner Hell 0,5l", par: 3, type: "kneipe",
    tags: ["studentenkneipe", "günstig", "maxvorstadt", "gemütlich"] },

  { id: "muc-018", city: "münchen", name: "Steinheil 16", address: "Steinheilstraße 16", district: "maxvorstadt",
    lat: 48.1481, lng: 11.5672, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["studenten", "günstig", "maxvorstadt", "entspannt"] },

  { id: "muc-019", city: "münchen", name: "Trachtenvogl", address: "Reichenbachstraße 47", district: "isarvorstadt",
    lat: 48.1296, lng: 11.5717, drink: "Giesinger Bier 0,5l", par: 3, type: "kneipe",
    tags: ["szene", "glockenbachviertel", "hipster", "kultkneipe"] },

  { id: "muc-020", city: "münchen", name: "Holy Home", address: "Reichenbachstraße 21", district: "isarvorstadt",
    lat: 48.1302, lng: 11.5714, drink: "Craft Beer 0,33l", par: 3, type: "bar",
    tags: ["szene", "glockenbachviertel", "alternativ", "cocktails"] },

  { id: "muc-021", city: "münchen", name: "Salon Irkutsk", address: "Tumblingerstraße 29", district: "isarvorstadt",
    lat: 48.1282, lng: 11.5668, drink: "Wermut oder Pils 0,3l", par: 3, type: "bar",
    tags: ["szene", "isarvorstadt", "wermut", "trendy"] },

  { id: "muc-022", city: "münchen", name: "Substanz", address: "Ruppertstraße 28", district: "isarvorstadt",
    lat: 48.1290, lng: 11.5650, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["alternativ", "isarvorstadt", "livemusik", "kultlokal"] },

  { id: "muc-023", city: "münchen", name: "Rennbahn Schwabing", address: "Feilitzschstraße 12", district: "schwabing",
    lat: 48.1629, lng: 11.5868, drink: "Pils vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["schwabing", "kultlokal", "gemütlich", "gemischt"] },

  { id: "muc-024", city: "münchen", name: "Irish Folk Pub", address: "Giselastraße 11", district: "schwabing",
    lat: 48.1601, lng: 11.5868, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish", "schwabing", "ältester-irischer-pub", "livemusik"] },

  { id: "muc-025", city: "münchen", name: "Kaisergarten", address: "Kaiserstraße 34", district: "schwabing",
    lat: 48.1572, lng: 11.5880, drink: "Kühles Bier 0,5l", par: 4, type: "biergarten",
    tags: ["biergarten", "schwabing", "gemütlich", "kastanien"] },

  { id: "muc-026", city: "münchen", name: "Zum Jennerwein", address: "Belgradstraße 27", district: "schwabing",
    lat: 48.1648, lng: 11.5770, drink: "Pils 0,5l", par: 3, type: "kneipe",
    tags: ["schwabing", "alternativ", "punk", "gemütlich"] },

  { id: "muc-027", city: "münchen", name: "Schwabinger Wassermann", address: "Herzogstraße 82", district: "schwabing",
    lat: 48.1645, lng: 11.5820, drink: "Bier + Cocktail", par: 4, type: "kneipe",
    tags: ["schwabing", "wirtshaus", "gemütlich", "gemischt"] },

  { id: "muc-028", city: "münchen", name: "Juleps New York Bar", address: "Breisacher Straße 18", district: "haidhausen",
    lat: 48.1338, lng: 11.6005, drink: "American Longdrink", par: 4, type: "cocktailbar",
    tags: ["haidhausen", "bermudadreieck", "cocktails", "szene"] },

  { id: "muc-029", city: "münchen", name: "EscoBar", address: "Breisacher Straße 10", district: "haidhausen",
    lat: 48.1334, lng: 11.6000, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["haidhausen", "bermudadreieck", "szene", "cocktails"] },

  { id: "muc-030", city: "münchen", name: "Vivo", address: "Lothringer Straße 11", district: "haidhausen",
    lat: 48.1317, lng: 11.5989, drink: "Giesinger Bier 0,5l", par: 3, type: "kneipe",
    tags: ["haidhausen", "schafkopf", "gemütlich", "lokalkolorit"] },

  { id: "muc-031", city: "münchen", name: "Kugler Alm", address: "Einstein 42", district: "haidhausen",
    lat: 48.1351, lng: 11.5945, drink: "Augustiner Hell 0,5l", par: 4, type: "brauhaus",
    tags: ["haidhausen", "brauhaus", "bayerisch", "gemütlich"] },

  { id: "muc-032", city: "münchen", name: "Wirtshaus in der Au", address: "Lilienstraße 51", district: "au",
    lat: 48.1260, lng: 11.5822, drink: "Weissbier 0,5l", par: 4, type: "brauhaus",
    tags: ["au", "weissbier", "bayerisch", "kult"] },

  { id: "muc-033", city: "münchen", name: "Muffatwerk Biergarten", address: "Zellstraße 4", district: "haidhausen",
    lat: 48.1310, lng: 11.5897, drink: "Bier 0,5l", par: 4, type: "biergarten",
    tags: ["haidhausen", "biergarten", "outdoor", "kultur"] },

  { id: "muc-034", city: "münchen", name: "Flaucher Biergarten", address: "Isarauen 8", district: "thalkirchen",
    lat: 48.1094, lng: 11.5418, drink: "Augustiner Hell 0,5l", par: 5, type: "biergarten",
    tags: ["biergarten", "isar", "outdoor", "naturidyll", "familienfreundlich"] },

  { id: "muc-035", city: "münchen", name: "Spöckmeier", address: "Rosenstraße 9", district: "altstadt",
    lat: 48.1371, lng: 11.5744, drink: "Hofbräu Weisse 0,5l", par: 4, type: "brauhaus",
    tags: ["altstadt", "brauhaus", "bayerisch", "marienplatz-nähe"] },

  { id: "muc-036", city: "münchen", name: "Wirtshaus zum Straubinger", address: "Blumenstraße 5", district: "altstadt",
    lat: 48.1355, lng: 11.5732, drink: "Löwenbräu 0,5l", par: 4, type: "brauhaus",
    tags: ["altstadt", "traditionslokal", "bayerisch", "historisch"] },

  { id: "muc-037", city: "münchen", name: "Bamberger Haus", address: "Brunnerstraße 2", district: "maxvorstadt",
    lat: 48.1468, lng: 11.5642, drink: "Schlenkerla Rauchbier 0,5l", par: 4, type: "brauhaus",
    tags: ["maxvorstadt", "biervielfalt", "fränkisch", "rarität"] },

  { id: "muc-038", city: "münchen", name: "Schumanns Bar", address: "Odeonsplatz 6-7", district: "altstadt",
    lat: 48.1424, lng: 11.5779, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["premium", "altstadt", "cocktails", "prominenz", "elegant"] },

  { id: "muc-039", city: "münchen", name: "Robinson Kuhlmann Bar", address: "Klenzestraße 59", district: "isarvorstadt",
    lat: 48.1294, lng: 11.5697, drink: "Craft Beer oder Cocktail", par: 3, type: "bar",
    tags: ["szene", "gärtnerplatz", "hip", "skatekult"] },

  { id: "muc-040", city: "münchen", name: "Café Reitschule", address: "Königinstraße 34", district: "schwabing",
    lat: 48.1558, lng: 11.5890, drink: "Weissbier 0,5l", par: 4, type: "brauhaus",
    tags: ["schwabing", "english-garden", "biergarten", "niveauvoll"] },

  { id: "muc-041", city: "münchen", name: "Scheidegger", address: "Bauerstraße 16", district: "schwabing",
    lat: 48.1568, lng: 11.5828, drink: "Bier vom Fass 0,5l", par: 4, type: "kneipe",
    tags: ["schwabing", "bayerisch", "gemütlich", "rustikal"] },

  { id: "muc-042", city: "münchen", name: "Bumsvoll Bar", address: "Zugspitzstraße 19", district: "giesing",
    lat: 48.1186, lng: 11.5853, drink: "Isarwasser Hausschnaps + Bier", par: 3, type: "kneipe",
    tags: ["giesing", "boazn", "geheimtipp", "alternativ"] },

  { id: "muc-043", city: "münchen", name: "Altgiesing", address: "Silberhornstraße 22", district: "giesing",
    lat: 48.1176, lng: 11.5868, drink: "Pils vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["giesing", "gemütlich", "dart", "lokalkolorit"] },

  { id: "muc-044", city: "münchen", name: "X-Bar", address: "Innere-Wiener-Straße 10", district: "lehel",
    lat: 48.1338, lng: 11.5919, drink: "Cocktail oder Bier", par: 3, type: "kneipe",
    tags: ["lehel", "alternativ", "kult", "szene"] },

  { id: "muc-045", city: "münchen", name: "Bräustüberl Weihenstephan", address: "Weihenstephaner Berg 1", district: "freising",
    lat: 48.3970, lng: 11.7279, drink: "Weihenstephaner Hefeweisse 0,5l", par: 5, type: "brauhaus",
    tags: ["älteste-brauerei", "ausflugsziel", "weihenstephan", "weissbier"] },

  { id: "muc-046", city: "münchen", name: "Giesinger Bräu – Gebäudekomplex", address: "Martin-Luther-Straße 2", district: "giesing",
    lat: 48.1208, lng: 11.5849, drink: "Giesinger Nockherberg Hell 0,5l", par: 4, type: "brauhaus",
    tags: ["craft", "giesing", "hausbrauerei", "urban"] },

  { id: "muc-047", city: "münchen", name: "Tagträumer", address: "Fraunhoferstraße 43", district: "isarvorstadt",
    lat: 48.1316, lng: 11.5741, drink: "Café oder Bier 0,5l", par: 3, type: "kneipe",
    tags: ["glockenbachviertel", "gemütlich", "gemischt", "szene"] },

  { id: "muc-048", city: "münchen", name: "Franziskaner Fuchsenbräu", address: "Perusastraße 5", district: "altstadt",
    lat: 48.1395, lng: 11.5751, drink: "Franziskaner Kristallklar 0,5l", par: 4, type: "brauhaus",
    tags: ["altstadt", "brauhaus", "historisch", "bayerisch"] },

  { id: "muc-049", city: "münchen", name: "Paulaner am Nockherberg Biergarten", address: "Hochstraße 77", district: "au",
    lat: 48.1228, lng: 11.5825, drink: "Paulaner Salvator 0,5l", par: 4, type: "biergarten",
    tags: ["biergarten", "au", "paulaner", "klosterbrauerei"] },

  { id: "muc-050", city: "münchen", name: "Waldwirtschaft Großhesselohe", address: "Georg-Kalb-Straße 3", district: "pullach",
    lat: 48.0716, lng: 11.5059, drink: "Augustiner Hell 0,5l", par: 5, type: "biergarten",
    tags: ["ausflugsziel", "biergarten", "isar", "jazzbiergarten", "outdoor"] },


  // ═══════════════════════════════════════════════════════════════
  // BERLIN  🐻  (ber-001 bis ber-050)
  // ═══════════════════════════════════════════════════════════════

  { id: "ber-001", city: "berlin", name: "Mein Haus am See", address: "Brunnenstraße 197-198", district: "mitte",
    lat: 52.5316, lng: 13.4032, drink: "Bier vom Fass 0,5l", par: 3, type: "bar",
    tags: ["kult", "mitte", "szene", "hipster", "rosenthaler-platz"] },

  { id: "ber-002", city: "berlin", name: "Zum Goldenen Handschuh", address: "Schanzenstraße 56", district: "altona",
    lat: 53.5550, lng: 9.9600, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["kultlokal", "rund-um-die-uhr", "honka", "kiez"] },

  { id: "ber-003", city: "berlin", name: "Madame Claude", address: "Lübbener Straße 19", district: "kreuzberg",
    lat: 52.4970, lng: 13.4394, drink: "Bier 0,5l + Schnaps", par: 3, type: "kneipe",
    tags: ["kreuzberg", "möbel-an-der-decke", "alternativ", "livemusik"] },

  { id: "ber-004", city: "berlin", name: "Zur fetten Ecke", address: "Schlesische Straße 16", district: "kreuzberg",
    lat: 52.4995, lng: 13.4449, drink: "Waldmeisterlikör + Pils", par: 3, type: "kneipe",
    tags: ["kreuzberg", "schlesi", "kult", "tanzen", "DJ"] },

  { id: "ber-005", city: "berlin", name: "Hopfenreich", address: "Sorauer Straße 31", district: "kreuzberg",
    lat: 52.4985, lng: 13.4435, drink: "Craft Beer vom Fass 0,4l", par: 4, type: "bar",
    tags: ["craft-beer", "kreuzberg", "zapfhähne", "biervielfalt"] },

  { id: "ber-006", city: "berlin", name: "Trinkteufel", address: "Oranienstraße 195", district: "kreuzberg",
    lat: 52.5010, lng: 13.4170, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["kreuzberg", "punk", "rock", "kicker", "flipper"] },

  { id: "ber-007", city: "berlin", name: "Intertank", address: "Manteuffelstraße 47", district: "kreuzberg",
    lat: 52.4992, lng: 13.4219, drink: "Bier 0,5l + Korn", par: 3, type: "kneipe",
    tags: ["kreuzberg", "kiez-kaschemme", "legend", "ehrlich"] },

  { id: "ber-008", city: "berlin", name: "Wowsville", address: "Ohlauer Straße 33", district: "kreuzberg",
    lat: 52.4988, lng: 13.4157, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["kreuzberg", "rock", "groupies", "gemütlich"] },

  { id: "ber-009", city: "berlin", name: "Franken Bar", address: "Oranienstraße 19A", district: "kreuzberg",
    lat: 52.5013, lng: 13.4147, drink: "Fränkisches Bier 0,5l", par: 3, type: "kneipe",
    tags: ["kreuzberg", "fränkisch", "gemütlich", "stammkneipe"] },

  { id: "ber-010", city: "berlin", name: "Zyankali Bar", address: "Gneisenaustraße 17", district: "kreuzberg",
    lat: 52.4913, lng: 13.3936, drink: "Cocktail oder Bier", par: 3, type: "bar",
    tags: ["kreuzberg", "szene", "gemütlich", "cocktails"] },

  { id: "ber-011", city: "berlin", name: "Feuermelder", address: "Krossener Straße 24", district: "friedrichshain",
    lat: 52.5137, lng: 13.4618, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["friedrichshain", "boxhagen", "billard", "flipper"] },

  { id: "ber-012", city: "berlin", name: "Süss war gestern", address: "Wühlischstraße 43", district: "friedrichshain",
    lat: 52.5132, lng: 13.4574, drink: "Ingwer-Cocktail", par: 4, type: "bar",
    tags: ["friedrichshain", "szene", "60s", "tanzfläche"] },

  { id: "ber-013", city: "berlin", name: "Café Übereck", address: "Sonntagstraße 31", district: "friedrichshain",
    lat: 52.5118, lng: 13.4592, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["friedrichshain", "gemütlich", "frühstück", "eckkneipe"] },

  { id: "ber-014", city: "berlin", name: "Fischladen", address: "Rigaer Straße 83", district: "friedrichshain",
    lat: 52.5148, lng: 13.4700, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["friedrichshain", "alternativ", "billard", "linkes-publikum"] },

  { id: "ber-015", city: "berlin", name: "Zum Schmutzigen Hobby", address: "Revaler Straße 99", district: "friedrichshain",
    lat: 52.5082, lng: 13.4545, drink: "Bier + Korn", par: 3, type: "kneipe",
    tags: ["friedrichshain", "RAW", "queer", "90s-parties"] },

  { id: "ber-016", city: "berlin", name: "Oberbaumeck", address: "Bevernstraße 5", district: "kreuzberg",
    lat: 52.5001, lng: 13.4465, drink: "Bier 0,5l + Kicker", par: 3, type: "kneipe",
    tags: ["kreuzberg", "punkig", "kicker", "fussball", "st-pauli"] },

  { id: "ber-017", city: "berlin", name: "Vettern Bar", address: "Reuterstraße 64", district: "neukölln",
    lat: 52.4864, lng: 13.4280, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["neukölln", "reuterkiez", "vintage", "studenten", "rohbeton"] },

  { id: "ber-018", city: "berlin", name: "Trude Ruth & Goldammer", address: "Flughafenstraße 38", district: "neukölln",
    lat: 52.4828, lng: 13.4328, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["neukölln", "eckkneipe", "dunkel", "gemütlich", "versacken"] },

  { id: "ber-019", city: "berlin", name: "Zum Böhmischen Dorf", address: "Sanderstraße 11", district: "neukölln",
    lat: 52.4882, lng: 13.4314, drink: "Pilsner Urquell vom Tank 0,5l", par: 4, type: "kneipe",
    tags: ["neukölln", "pilsner", "gemütlich", "tankkbier"] },

  { id: "ber-020", city: "berlin", name: "Schlawinchen", address: "Schönleinstraße 34", district: "kreuzberg",
    lat: 52.4936, lng: 13.4152, drink: "Bier 0,5l (eine Sorte)", par: 3, type: "kneipe",
    tags: ["kreuzberg", "24h", "kult", "überdreht", "günstig"] },

  { id: "ber-021", city: "berlin", name: "Reingold Bar", address: "Novalisstraße 11", district: "mitte",
    lat: 52.5302, lng: 13.3880, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["mitte", "businessszene", "17m-tresen", "goldwand"] },

  { id: "ber-022", city: "berlin", name: "The Wash Bar", address: "Weinbergsweg 1", district: "mitte",
    lat: 52.5338, lng: 13.4032, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["mitte", "rosenthaler-platz", "dunkel", "graffiti", "cocktails"] },

  { id: "ber-023", city: "berlin", name: "Schwarzes Café", address: "Kantstraße 148", district: "charlottenburg",
    lat: 52.5060, lng: 13.3195, drink: "Bier 0,5l oder Cocktail", par: 3, type: "kneipe",
    tags: ["charlottenburg", "24h", "künstler", "touristen", "frühstück"] },

  { id: "ber-024", city: "berlin", name: "Wilhelm Hoeck 1892", address: "Wilmersdorfer Straße 149", district: "charlottenburg",
    lat: 52.5101, lng: 13.3046, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["charlottenburg", "historisch", "traditionslokal", "filmkulisse"] },

  { id: "ber-025", city: "berlin", name: "Zum Anker", address: "Lohmeyerstraße 16", district: "charlottenburg",
    lat: 52.5147, lng: 13.2956, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["charlottenburg", "billard", "gemütlich", "geheimtipp"] },

  { id: "ber-026", city: "berlin", name: "Metzer Eck", address: "Metzer Straße 33", district: "prenzlauer-berg",
    lat: 52.5381, lng: 13.4280, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["prenzlauer-berg", "altberliner", "gemütlich", "historisch"] },

  { id: "ber-027", city: "berlin", name: "Zu mir oder zu dir", address: "Stargarder Straße 12", district: "prenzlauer-berg",
    lat: 52.5420, lng: 13.4198, drink: "Bier + Cocktail", par: 3, type: "kneipe",
    tags: ["prenzlauer-berg", "date-location", "wohnzimmer", "gemütlich"] },

  { id: "ber-028", city: "berlin", name: "Möve im Felsenkeller", address: "Akazienstraße 2", district: "schöneberg",
    lat: 52.4886, lng: 13.3582, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["schöneberg", "100-jahre", "tradition", "ruhig", "konversation"] },

  { id: "ber-029", city: "berlin", name: "Stadtklause", address: "Stresemannstraße 90", district: "kreuzberg",
    lat: 52.5010, lng: 13.3802, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["kreuzberg", "anhalter-bahnhof", "hausmannskost", "versteckt"] },

  { id: "ber-030", city: "berlin", name: "BRLO Brauhaus", address: "Schöneberger Straße 16", district: "kreuzberg",
    lat: 52.5022, lng: 13.3796, drink: "BRLO Craft Beer 0,33l", par: 4, type: "biergarten",
    tags: ["craft", "kreuzberg", "biergarten", "hausgebraut", "hip"] },

  { id: "ber-031", city: "berlin", name: "Leuchtturm", address: "Akazienstraße 28", district: "schöneberg",
    lat: 52.4895, lng: 13.3590, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["schöneberg", "akazienkiez", "institution", "gemütlich"] },

  { id: "ber-032", city: "berlin", name: "Zur Quelle", address: "Alt-Moabit 87", district: "moabit",
    lat: 52.5268, lng: 13.3525, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["moabit", "24h", "kult", "immer-voll", "traditionslokal"] },

  { id: "ber-033", city: "berlin", name: "Knutschfleck", address: "Dircksenstraße 47-49", district: "mitte",
    lat: 52.5208, lng: 13.4120, drink: "Cocktail Börse", par: 4, type: "cocktailbar",
    tags: ["mitte", "alex", "cocktailbörse", "showbühne", "abwechslungsreich"] },

  { id: "ber-034", city: "berlin", name: "Minimal Bar", address: "Reuterstraße 26", district: "neukölln",
    lat: 52.4870, lng: 13.4267, drink: "Bier 0,5l + Ping Pong", par: 3, type: "bar",
    tags: ["neukölln", "tischtennis", "rundlauf", "minimal", "tanzen"] },

  { id: "ber-035", city: "berlin", name: "Straßenbahn", address: "Eisenacher Straße 12", district: "schöneberg",
    lat: 52.4897, lng: 13.3572, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["schöneberg", "authentisch", "berliner", "gemütlich"] },

  { id: "ber-036", city: "berlin", name: "Strandbar Mitte", address: "Monbijoustraße 3", district: "mitte",
    lat: 52.5225, lng: 13.3982, drink: "Bier 0,5l (Outdoor)", par: 4, type: "biergarten",
    tags: ["mitte", "outdoor", "spreeufer", "strandbar", "sommer"] },

  { id: "ber-037", city: "berlin", name: "Holzmarkt 25", address: "Holzmarktstraße 25", district: "mitte",
    lat: 52.5115, lng: 13.4187, drink: "Craft Beer 0,33l", par: 4, type: "biergarten",
    tags: ["mitte", "outdoor", "spree", "urban", "kreativ"] },

  { id: "ber-038", city: "berlin", name: "Clash", address: "Gneisenaustraße 2A", district: "kreuzberg",
    lat: 52.4911, lng: 13.3930, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["kreuzberg", "punk", "biergarten", "mehringhof", "alternativ"] },

  { id: "ber-039", city: "berlin", name: "Ankerklause", address: "Kottbusser Damm 104", district: "neukölln",
    lat: 52.4929, lng: 13.4222, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["neukölln", "landwehrkanal", "gemütlich", "tanzen", "mix-publikum"] },

  { id: "ber-040", city: "berlin", name: "Hops & Barley", address: "Wühlischstraße 22-23", district: "friedrichshain",
    lat: 52.5128, lng: 13.4561, drink: "Hausgebrautes Hell 0,5l", par: 4, type: "brauhaus",
    tags: ["friedrichshain", "craft", "hausgebraut", "gemütlich"] },

  { id: "ber-041", city: "berlin", name: "Monterey Bar", address: "Oranienstraße 33", district: "kreuzberg",
    lat: 52.4999, lng: 13.4175, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["kreuzberg", "szene", "cocktails", "trendy"] },

  { id: "ber-042", city: "berlin", name: "Klunkerkranich", address: "Karl-Marx-Straße 66 (Dach)", district: "neukölln",
    lat: 52.4817, lng: 13.4350, drink: "Bier 0,5l (Rooftop)", par: 4, type: "biergarten",
    tags: ["neukölln", "rooftop", "urban", "sommer", "sonnenuntergang"] },

  { id: "ber-043", city: "berlin", name: "Scotch & Sofa", address: "Kollwitzstraße 18", district: "prenzlauer-berg",
    lat: 52.5390, lng: 13.4206, drink: "Whisky 4cl", par: 4, type: "cocktailbar",
    tags: ["prenzlauer-berg", "whisky", "sofas", "gemütlich"] },

  { id: "ber-044", city: "berlin", name: "Zum Starken August", address: "Schönhauser Allee 56A", district: "prenzlauer-berg",
    lat: 52.5397, lng: 13.4174, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["prenzlauer-berg", "eckkneipe", "gemütlich", "schönhauser"] },

  { id: "ber-045", city: "berlin", name: "BrewDog Berlin", address: "Revaler Straße 99", district: "friedrichshain",
    lat: 52.5078, lng: 13.4547, drink: "BrewDog Punk IPA 0,4l", par: 4, type: "bar",
    tags: ["friedrichshain", "RAW", "craft", "international", "viele-hähne"] },

  { id: "ber-046", city: "berlin", name: "Bar Coa", address: "Schlesische Straße 39", district: "kreuzberg",
    lat: 52.4988, lng: 13.4460, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["kreuzberg", "schlesi", "szene", "trendy"] },

  { id: "ber-047", city: "berlin", name: "Loftus Bar", address: "Boxhagener Straße 107", district: "friedrichshain",
    lat: 52.5131, lng: 13.4635, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["friedrichshain", "boxhagen", "gemütlich", "kiez"] },

  { id: "ber-048", city: "berlin", name: "RAW Gelände – Cassiopeia", address: "Revaler Straße 99", district: "friedrichshain",
    lat: 52.5084, lng: 13.4542, drink: "Bier 0,5l (Biergarten)", par: 4, type: "biergarten",
    tags: ["friedrichshain", "RAW", "biergarten", "urban-culture", "outdoor"] },

  { id: "ber-049", city: "berlin", name: "Monarch", address: "Skalitzer Straße 134", district: "kreuzberg",
    lat: 52.5006, lng: 13.4275, drink: "Bier 0,5l + Cocktail", par: 3, type: "bar",
    tags: ["kreuzberg", "szene", "over-rewe", "kult", "abends"] },

  { id: "ber-050", city: "berlin", name: "Bergschlösschen", address: "Bergmannstraße 2", district: "kreuzberg",
    lat: 52.4929, lng: 13.3934, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["kreuzberg", "bergmannkiez", "gemütlich", "eckkneipe", "entspannt"] },


  // ═══════════════════════════════════════════════════════════════
  // FRANKFURT  🍏  (fra-001 bis fra-050)
  // ═══════════════════════════════════════════════════════════════

  { id: "fra-001", city: "frankfurt", name: "Zum Gemalten Haus", address: "Schweizer Straße 67", district: "sachsenhausen",
    lat: 50.0985, lng: 8.6833, drink: "Apfelwein 0,3l Geripptes", par: 3, type: "brauhaus",
    tags: ["kult", "sachsenhausen", "apfelwein", "wandgemälde", "institution"] },

  { id: "fra-002", city: "frankfurt", name: "Dauth-Schneider", address: "Neuer Mainzer Straße 19", district: "sachsenhausen",
    lat: 50.0997, lng: 8.6768, drink: "Apfelwein 0,3l Geripptes", par: 3, type: "brauhaus",
    tags: ["sachsenhausen", "apfelwein", "traditionslokal", "frankfurter"] },

  { id: "fra-003", city: "frankfurt", name: "Lorsbacher Thal", address: "Große Rittergasse 49", district: "sachsenhausen",
    lat: 50.1006, lng: 8.6834, drink: "Apfelwein Bembel 1,0l", par: 4, type: "brauhaus",
    tags: ["sachsenhausen", "apfelwein", "bembel", "hinterhof", "gemütlich"] },

  { id: "fra-004", city: "frankfurt", name: "Wagner", address: "Schweizer Straße 71", district: "sachsenhausen",
    lat: 50.0983, lng: 8.6836, drink: "Apfelwein 0,3l + Handkäse", par: 3, type: "brauhaus",
    tags: ["sachsenhausen", "apfelwein", "handkäse", "klassiker"] },

  { id: "fra-005", city: "frankfurt", name: "Zur Eulenburg", address: "Eulengasse 46", district: "sachsenhausen",
    lat: 50.1020, lng: 8.6870, drink: "Apfelwein 0,3l Geripptes", par: 3, type: "brauhaus",
    tags: ["sachsenhausen", "apfelwein", "lokal", "gemütlich"] },

  { id: "fra-006", city: "frankfurt", name: "Klapper 33", address: "Klappergasse 33", district: "sachsenhausen",
    lat: 50.1013, lng: 8.6820, drink: "Pils vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["sachsenhausen", "kopfsteinpflaster", "eintracht", "dart", "rock"] },

  { id: "fra-007", city: "frankfurt", name: "Alte Liebe", address: "Darmstädter Landstraße 23", district: "sachsenhausen",
    lat: 50.0976, lng: 8.6872, drink: "Bier 0,5l oder Apfelwein", par: 3, type: "kneipe",
    tags: ["sachsenhausen", "wohnzimmer-feeling", "tatort", "konzerte", "lokal"] },

  { id: "fra-008", city: "frankfurt", name: "Depot 1899", address: "Textorstraße 33", district: "sachsenhausen",
    lat: 50.0997, lng: 8.6910, drink: "Bier 0,5l", par: 4, type: "sportbar",
    tags: ["sachsenhausen", "depot", "sport", "eintracht", "events"] },

  { id: "fra-009", city: "frankfurt", name: "Stevedoo Sportsbar", address: "Kleine Rittergasse 28", district: "sachsenhausen",
    lat: 50.1000, lng: 8.6820, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sachsenhausen", "sport", "abends", "gemütlich"] },

  { id: "fra-010", city: "frankfurt", name: "Zur kleinen Glocke", address: "Paradiesgasse 61", district: "sachsenhausen",
    lat: 50.1030, lng: 8.6800, drink: "Apfelwein 0,3l Geripptes", par: 3, type: "brauhaus",
    tags: ["sachsenhausen", "kult", "apfelwein", "charme"] },

  { id: "fra-011", city: "frankfurt", name: "Ha-Ka", address: "Habsburgerallee 21", district: "bornheim",
    lat: 50.1235, lng: 8.7068, drink: "Bier 0,5l + Cocktail", par: 3, type: "kneipe",
    tags: ["bornheim", "terrasse", "gemütlich", "abends", "stammkneipe"] },

  { id: "fra-012", city: "frankfurt", name: "Zum Alten Schlagbaum", address: "Berger Straße 248", district: "bornheim",
    lat: 50.1230, lng: 8.7062, drink: "Schoppen oder Pils 0,5l", par: 3, type: "kneipe",
    tags: ["bornheim", "eckkneipe", "tresen", "günstig", "stammkneipe"] },

  { id: "fra-013", city: "frankfurt", name: "Irish Pub Bornheim", address: "Berger Straße 255", district: "bornheim",
    lat: 50.1228, lng: 8.7064, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["bornheim", "irish", "livemusik", "quiz", "sport"] },

  { id: "fra-014", city: "frankfurt", name: "Chaplin Bar", address: "Habsburgerallee 23", district: "bornheim",
    lat: 50.1236, lng: 8.7073, drink: "Gin Tonic (50+ Sorten)", par: 4, type: "bar",
    tags: ["bornheim", "gin", "100-sorten", "gemütlich"] },

  { id: "fra-015", city: "frankfurt", name: "Mosaik Jazz Bar", address: "Freiligrathstraße 57", district: "bornheim",
    lat: 50.1248, lng: 8.7094, drink: "Wein oder Cocktail", par: 4, type: "bar",
    tags: ["bornheim", "jazz", "mediterran", "stimmungsvoll"] },

  { id: "fra-016", city: "frankfurt", name: "Bornheimer Dorfstadl", address: "Berger Straße 249", district: "bornheim",
    lat: 50.1229, lng: 8.7062, drink: "Allgäuer Bier 0,5l", par: 4, type: "sportbar",
    tags: ["bornheim", "allgäu", "sport", "sky", "rustikal"] },

  { id: "fra-017", city: "frankfurt", name: "Feinstaub", address: "Friedberger Landstraße 131", district: "nordend",
    lat: 50.1290, lng: 8.6928, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["nordend", "alternativ", "musik", "nacht-noch-was-los"] },

  { id: "fra-018", city: "frankfurt", name: "Chlodwig-Eck", address: "Klappergasse 35", district: "sachsenhausen",
    lat: 50.1013, lng: 8.6819, drink: "Apfelwein 0,3l", par: 3, type: "kneipe",
    tags: ["sachsenhausen", "kultlokal", "sport-leinwand", "gemütlich"] },

  { id: "fra-019", city: "frankfurt", name: "Drinksmith", address: "Fahrgasse 91", district: "altstadt",
    lat: 50.1107, lng: 8.6820, drink: "Craft Cocktail", par: 4, type: "cocktailbar",
    tags: ["altstadt", "nachbarschaftsbar", "cocktails", "handwerkskunst"] },

  { id: "fra-020", city: "frankfurt", name: "White Rabbit Bar", address: "Untermainkai 23", district: "altstadt",
    lat: 50.1083, lng: 8.6741, drink: "Alice Cocktail", par: 4, type: "cocktailbar",
    tags: ["altstadt", "maintor", "wunderland-thema", "first-class-cocktails"] },

  { id: "fra-021", city: "frankfurt", name: "Seven Swans Bar", address: "Mainkai 9", district: "altstadt",
    lat: 50.1096, lng: 8.6810, drink: "Ausgezeichneter Cocktail", par: 4, type: "cocktailbar",
    tags: ["altstadt", "award-winning", "szene", "mainufer"] },

  { id: "fra-022", city: "frankfurt", name: "Hunky Dory", address: "Stiftstraße 18", district: "innenstadt",
    lat: 50.1161, lng: 8.6780, drink: "Hausgemixte Drinks + Retrotelefon", par: 4, type: "bar",
    tags: ["innenstadt", "retro", "phone-order", "szene", "cool"] },

  { id: "fra-023", city: "frankfurt", name: "Roomers Bar", address: "Gutleutstraße 85", district: "bahnhofsviertel",
    lat: 50.1042, lng: 8.6622, drink: "Hotel Signature Cocktail", par: 5, type: "cocktailbar",
    tags: ["bahnhofsviertel", "luxury", "award-winning", "hotelbar"] },

  { id: "fra-024", city: "frankfurt", name: "Freigraf", address: "Braubachstraße 34", district: "altstadt",
    lat: 50.1118, lng: 8.6830, drink: "Hessisches Bier 0,5l", par: 4, type: "brauhaus",
    tags: ["altstadt", "römer-nähe", "brauhaus", "hessisch"] },

  { id: "fra-025", city: "frankfurt", name: "Zum Paulaner", address: "Neue Mainzer Straße 31", district: "innenstadt",
    lat: 50.1093, lng: 8.6679, drink: "Paulaner Weisse 0,5l", par: 4, type: "brauhaus",
    tags: ["innenstadt", "münchen-feeling", "brauhaus", "businessviertel"] },

  { id: "fra-026", city: "frankfurt", name: "Bockenheimer Weinkontor", address: "Leipziger Straße 3", district: "bockenheim",
    lat: 50.1267, lng: 8.6569, drink: "Hessischer Wein 0,2l", par: 4, type: "bar",
    tags: ["bockenheim", "wein", "gemütlich", "keller"] },

  { id: "fra-027", city: "frankfurt", name: "Plank", address: "Leibnizstraße 31", district: "bockenheim",
    lat: 50.1259, lng: 8.6558, drink: "Craft Beer 0,33l", par: 4, type: "bar",
    tags: ["bockenheim", "craft", "hip", "studenten", "abwechslungsreich"] },

  { id: "fra-028", city: "frankfurt", name: "Lagerhaus", address: "Scheffelstraße 36", district: "nordend",
    lat: 50.1298, lng: 8.6899, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["nordend", "konzerte", "events", "alternativ"] },

  { id: "fra-029", city: "frankfurt", name: "Bar Bornheim", address: "Berger Straße 235", district: "bornheim",
    lat: 50.1227, lng: 8.7060, drink: "Gin oder Cocktail", par: 4, type: "cocktailbar",
    tags: ["bornheim", "gin", "lounge", "kamin", "schick"] },

  { id: "fra-030", city: "frankfurt", name: "Rotisserie im Römer", address: "Römerberg 25", district: "altstadt",
    lat: 50.1104, lng: 8.6825, drink: "Bier 0,5l", par: 4, type: "brauhaus",
    tags: ["altstadt", "römer", "historisch", "touristisch"] },

  { id: "fra-031", city: "frankfurt", name: "Max + Moritz", address: "Berger Straße 19", district: "bornheim",
    lat: 50.1195, lng: 8.7014, drink: "Bier 0,5l oder Wein", par: 3, type: "kneipe",
    tags: ["bornheim", "gemütlich", "mix-publikum", "feierabend"] },

  { id: "fra-032", city: "frankfurt", name: "Fahrbar", address: "Darmstädter Landstraße 45", district: "sachsenhausen",
    lat: 50.0965, lng: 8.6879, drink: "Cocktail oder Bier", par: 3, type: "bar",
    tags: ["sachsenhausen", "szene", "lokal", "abends"] },

  { id: "fra-033", city: "frankfurt", name: "Hühnerfritz", address: "Schweizer Straße 66", district: "sachsenhausen",
    lat: 50.0984, lng: 8.6832, drink: "Apfelwein 0,3l", par: 3, type: "kneipe",
    tags: ["sachsenhausen", "lokal", "authentisch", "günstig"] },

  { id: "fra-034", city: "frankfurt", name: "Einstand", address: "Textorstraße 47", district: "sachsenhausen",
    lat: 50.1002, lng: 8.6915, drink: "Craft Bier 0,33l", par: 4, type: "bar",
    tags: ["sachsenhausen", "craft", "gemütlich", "szene"] },

  { id: "fra-035", city: "frankfurt", name: "Murphy's Law Irish Pub", address: "Schäfergasse 31", district: "innenstadt",
    lat: 50.1143, lng: 8.6814, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["innenstadt", "irish", "livemusik", "sport"] },

  { id: "fra-036", city: "frankfurt", name: "Ostpol", address: "Scheffelstraße 30", district: "nordend",
    lat: 50.1296, lng: 8.6895, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["nordend", "alternativ", "kulturkneipe", "veranstaltungen"] },

  { id: "fra-037", city: "frankfurt", name: "Wein & Käse Dünker", address: "Berger Straße 265", district: "bornheim",
    lat: 50.1233, lng: 8.7071, drink: "Hessischer Weisswein 0,2l", par: 4, type: "bar",
    tags: ["bornheim", "weinstube", "älteste-weinhandlung", "keller"] },

  { id: "fra-038", city: "frankfurt", name: "Silberburg", address: "Schneckenhofstraße 24", district: "sachsenhausen",
    lat: 50.0998, lng: 8.6848, drink: "Bier 0,5l + Dart", par: 3, type: "kneipe",
    tags: ["sachsenhausen", "dart", "stammgäste", "bodenständig"] },

  { id: "fra-039", city: "frankfurt", name: "Cuba Libre Bar", address: "Kaiserhofstraße 2", district: "innenstadt",
    lat: 50.1128, lng: 8.6726, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["innenstadt", "latein", "cocktails", "feierabend"] },

  { id: "fra-040", city: "frankfurt", name: "Zum Eisernen Steg", address: "Fahrtor 1", district: "altstadt",
    lat: 50.1096, lng: 8.6804, drink: "Bier 0,5l", par: 4, type: "kneipe",
    tags: ["altstadt", "main-nähe", "brückenblick", "touristisch"] },

  { id: "fra-041", city: "frankfurt", name: "Sachsenhäuser Warte", address: "Waldschmidtstraße 19", district: "sachsenhausen",
    lat: 50.1038, lng: 8.6982, drink: "Apfelwein Bembel 1,0l", par: 4, type: "brauhaus",
    tags: ["sachsenhausen", "apfelwein", "klassiker", "traditionslokal"] },

  { id: "fra-042", city: "frankfurt", name: "Ebbelwei-Expreß Haltestelle Lokalbahnhof", address: "Darmstädter Landstraße 4", district: "sachsenhausen",
    lat: 50.0985, lng: 8.6852, drink: "Apfelwein 0,3l", par: 3, type: "kneipe",
    tags: ["sachsenhausen", "ebbelwoi", "lokalbahnhof", "klassiker"] },

  { id: "fra-043", city: "frankfurt", name: "Metropol", address: "Weckmarkt 13", district: "altstadt",
    lat: 50.1104, lng: 8.6835, drink: "Bier 0,5l", par: 4, type: "kneipe",
    tags: ["altstadt", "biertisch", "gemütlich", "römer-nähe"] },

  { id: "fra-044", city: "frankfurt", name: "Goethe Bar", address: "Großer Hirschgraben 23", district: "innenstadt",
    lat: 50.1107, lng: 8.6780, drink: "Bier oder Cocktail", par: 4, type: "bar",
    tags: ["innenstadt", "goethe-haus", "kulturell", "schick"] },

  { id: "fra-045", city: "frankfurt", name: "Alto Bar", address: "Konrad-Adenauer-Straße 17", district: "innenstadt",
    lat: 50.1163, lng: 8.6830, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["innenstadt", "lounge", "abendessen", "szene"] },

  { id: "fra-046", city: "frankfurt", name: "Kiosk 11", address: "Elbinger Straße 11", district: "nordend",
    lat: 50.1325, lng: 8.6948, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["nordend", "kiez", "entspannt", "stammgäste"] },

  { id: "fra-047", city: "frankfurt", name: "Frankfurter Botschaft", address: "Berger Straße 68", district: "bornheim",
    lat: 50.1208, lng: 8.7020, drink: "Binding Bier 0,5l", par: 3, type: "kneipe",
    tags: ["bornheim", "lokal", "feierabend", "gemütlich"] },

  { id: "fra-048", city: "frankfurt", name: "Bierhaus in der Salzgass", address: "Salzgasse 2", district: "altstadt",
    lat: 50.1102, lng: 8.6856, drink: "Binding vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["altstadt", "frankfurter", "binding", "touristisch", "laut"] },

  { id: "fra-049", city: "frankfurt", name: "Fichtekränzi", address: "Wallstraße 5", district: "sachsenhausen",
    lat: 50.1012, lng: 8.6841, drink: "Apfelwein 0,3l Geripptes", par: 3, type: "brauhaus",
    tags: ["sachsenhausen", "apfelwein", "lokal", "gemütlich"] },

  { id: "fra-050", city: "frankfurt", name: "Cider House Rules", address: "Schweizer Platz 6", district: "sachsenhausen",
    lat: 50.0978, lng: 8.6807, drink: "Craft Cider 0,33l", par: 4, type: "bar",
    tags: ["sachsenhausen", "cider", "craft", "hip", "international"] },


  // ═══════════════════════════════════════════════════════════════
  // HAMBURG  ⚓  (ham-001 bis ham-050)
  // ═══════════════════════════════════════════════════════════════

  { id: "ham-001", city: "hamburg", name: "Gretel & Alfons", address: "Große Freiheit 29", district: "st-pauli",
    lat: 53.5504, lng: 9.9590, drink: "Astra 0,5l", par: 4, type: "kneipe",
    tags: ["kult", "st-pauli", "beatles-stammkneipe", "historisch", "kiez"] },

  { id: "ham-002", city: "hamburg", name: "Zum Silbersack", address: "Silbersackstraße 9", district: "st-pauli",
    lat: 53.5506, lng: 9.9630, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["st-pauli", "kult", "seit-1949", "rund-um-die-uhr", "kiez"] },

  { id: "ham-003", city: "hamburg", name: "Hans-Albers-Eck", address: "Hans-Albers-Platz 14", district: "st-pauli",
    lat: 53.5509, lng: 9.9647, drink: "Astra 0,5l + DJ", par: 3, type: "kneipe",
    tags: ["st-pauli", "kiez", "kiezkneipe", "DJ", "tanzen"] },

  { id: "ham-004", city: "hamburg", name: "Zur Ritze", address: "Paul-Roosen-Straße 31", district: "st-pauli",
    lat: 53.5518, lng: 9.9582, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["st-pauli", "boxring", "kult", "berühmt", "klitschkos-trainiert"] },

  { id: "ham-005", city: "hamburg", name: "Korallbar", address: "Simon-von-Utrecht-Straße 89", district: "st-pauli",
    lat: 53.5514, lng: 9.9672, drink: "Cocktail oder Astra", par: 3, type: "kneipe",
    tags: ["st-pauli", "u-förmiger-tresen", "hafenromantik", "gemütlich"] },

  { id: "ham-006", city: "hamburg", name: "Holsten-Schwemme", address: "Holstenstraße 68", district: "st-pauli",
    lat: 53.5514, lng: 9.9614, drink: "Herrengedeck (Bier + Mexikaner)", par: 3, type: "kneipe",
    tags: ["st-pauli", "urig", "fischernetze", "gemütlich", "kult"] },

  { id: "ham-007", city: "hamburg", name: "Barbarabar", address: "Hamburger Berg 14", district: "st-pauli",
    lat: 53.5510, lng: 9.9618, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["st-pauli", "wohnzimmer", "fotoautomat", "gemütlich", "morgenstunden"] },

  { id: "ham-008", city: "hamburg", name: "Rosi's Bar", address: "Hamburger Berg 7", district: "st-pauli",
    lat: 53.5508, lng: 9.9615, drink: "Astra + Korn", par: 3, type: "kneipe",
    tags: ["st-pauli", "institution", "funk", "soul", "ska", "60s"] },

  { id: "ham-009", city: "hamburg", name: "Die Möwe", address: "Reeperbahn 13", district: "st-pauli",
    lat: 53.5502, lng: 9.9645, drink: "Möwenschiss (Korn + Pumpernickel)", par: 3, type: "kneipe",
    tags: ["st-pauli", "schummrig", "retrosofas", "hipster-drinks", "retro"] },

  { id: "ham-010", city: "hamburg", name: "Berg 4", address: "Hamburger Berg 4", district: "st-pauli",
    lat: 53.5506, lng: 9.9614, drink: "Astra 0,5l + Vinyl-DJ", par: 3, type: "kneipe",
    tags: ["st-pauli", "hip-hop", "house", "disco", "kicker", "outdoor"] },

  { id: "ham-011", city: "hamburg", name: "Toom Peerstall", address: "Marktstraße 97", district: "st-pauli",
    lat: 53.5528, lng: 9.9636, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["st-pauli", "queer", "safe-space", "kult", "seit-1919"] },

  { id: "ham-012", city: "hamburg", name: "Baby Goat Barn", address: "Detlev-Bremer-Straße 49", district: "st-pauli",
    lat: 53.5519, lng: 9.9596, drink: "Hamburger Craft Beer 0,33l", par: 4, type: "bar",
    tags: ["st-pauli", "craft", "pizza", "pubquiz", "modern"] },

  { id: "ham-013", city: "hamburg", name: "Chug Club", address: "Davidstraße 13", district: "st-pauli",
    lat: 53.5503, lng: 9.9630, drink: "Buttermilch-Margarita", par: 4, type: "cocktailbar",
    tags: ["st-pauli", "versteckt", "exzentrische-drinks", "szene"] },

  { id: "ham-014", city: "hamburg", name: "Pelican Bar", address: "Paul-Roosen-Straße 17", district: "st-pauli",
    lat: 53.5519, lng: 9.9579, drink: "Cocktail (Happy Hour bis 21h)", par: 4, type: "cocktailbar",
    tags: ["st-pauli", "happy-hour", "pop-ambiente", "szene"] },

  { id: "ham-015", city: "hamburg", name: "dripBAR", address: "Hein-Köllisch-Platz 11", district: "st-pauli",
    lat: 53.5475, lng: 9.9627, drink: "Slow-Drip Cocktail", par: 5, type: "cocktailbar",
    tags: ["st-pauli", "hafen", "slow-drip-verfahren", "premium", "einzigartig"] },

  { id: "ham-016", city: "hamburg", name: "Fritz Bauch", address: "Bartelsstraße 6", district: "schanze",
    lat: 53.5628, lng: 9.9641, drink: "Jever vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["schanze", "kultlokal", "norddeutsch", "dunkel", "urig"] },

  { id: "ham-017", city: "hamburg", name: "Katze", address: "Schulterblatt 88", district: "schanze",
    lat: 53.5626, lng: 9.9654, drink: "Caipirinha", par: 4, type: "bar",
    tags: ["schanze", "caipi", "touris", "feiern", "schulterblatt"] },

  { id: "ham-018", city: "hamburg", name: "Die Mutter", address: "Stresemannstraße 72", district: "schanze",
    lat: 53.5580, lng: 9.9608, drink: "Jever vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["schanze", "stammkneipe", "souterrain", "seit-ewigkeiten", "herzlich"] },

  { id: "ham-019", city: "hamburg", name: "Berliner Betrüger", address: "Juliusstraße 25", district: "schanze",
    lat: 53.5604, lng: 9.9574, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["schanze", "dunkel", "gemütlich", "gemischt"] },

  { id: "ham-020", city: "hamburg", name: "Pony Bar", address: "Schulterblatt 112", district: "schanze",
    lat: 53.5634, lng: 9.9660, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["schanze", "konzerte", "open-mic", "café-tagsüber", "kultur"] },

  { id: "ham-021", city: "hamburg", name: "Bar Thier", address: "Max-Brauer-Allee 278", district: "schanze",
    lat: 53.5600, lng: 9.9580, drink: "Ratsherrn 0,5l + DJ", par: 4, type: "bar",
    tags: ["schanze", "queer", "drag", "weekend", "szene"] },

  { id: "ham-022", city: "hamburg", name: "Lilli Escher", address: "Max-Brauer-Allee 279", district: "altona",
    lat: 53.5599, lng: 9.9579, drink: "Cocktail + Billard", par: 4, type: "cocktailbar",
    tags: ["altona", "schanze-grenze", "cocktails", "billard", "szene"] },

  { id: "ham-023", city: "hamburg", name: "Aalhaus", address: "Zeiseweg 2", district: "altona",
    lat: 53.5542, lng: 9.9430, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["altona", "livemusik", "knobeln", "quiz", "europa-bestes-quiz"] },

  { id: "ham-024", city: "hamburg", name: "Familieneck", address: "Ottenser Hauptstraße 9", district: "ottensen",
    lat: 53.5524, lng: 9.9342, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["ottensen", "über-60-jahre", "reparieren-statt-renovieren", "authentisch"] },

  { id: "ham-025", city: "hamburg", name: "Schellfischposten", address: "Carsten-Rehder-Straße 68", district: "altona",
    lat: 53.5463, lng: 9.9358, drink: "Astra 0,5l", par: 4, type: "kneipe",
    tags: ["altona", "fischmarkt", "seemannskneipe", "historisch", "hafen"] },

  { id: "ham-026", city: "hamburg", name: "Haifischbar", address: "Große Elbstraße 172", district: "altona",
    lat: 53.5454, lng: 9.9372, drink: "Astra 0,5l + Korn", par: 3, type: "kneipe",
    tags: ["altona", "maritime", "bekannt-aus-tv", "hafen", "seemannskneipe"] },

  { id: "ham-027", city: "hamburg", name: "Elbschlosskeller", address: "Bernhard-Nocht-Straße 70", district: "st-pauli",
    lat: 53.5484, lng: 9.9611, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["st-pauli", "rund-um-die-uhr", "kellerbar", "günstig", "kult"] },

  { id: "ham-028", city: "hamburg", name: "Sommersalon", address: "Spielbudenplatz 21", district: "st-pauli",
    lat: 53.5500, lng: 9.9637, drink: "Funk-Cocktail", par: 4, type: "bar",
    tags: ["st-pauli", "club", "funk", "soul", "disco", "entspannt"] },

  { id: "ham-029", city: "hamburg", name: "Kemp's Pub", address: "Milchstraße 15", district: "rotherbaum",
    lat: 53.5619, lng: 9.9908, drink: "Bier 0,5l + Livemusik", par: 4, type: "irish",
    tags: ["rotherbaum", "irish", "alster", "livemusik", "familiär"] },

  { id: "ham-030", city: "hamburg", name: "439 Bar", address: "Max-Brauer-Allee 25", district: "altona",
    lat: 53.5572, lng: 9.9526, drink: "Cocktail (Swing & Soul)", par: 4, type: "bar",
    tags: ["altona", "seit-80er", "swing", "soul", "gesittet", "ruhig"] },

  { id: "ham-031", city: "hamburg", name: "Clockers", address: "Detlev-Bremer-Straße 5", district: "st-pauli",
    lat: 53.5522, lng: 9.9596, drink: "Gin Tonic (Riesenauswahl)", par: 4, type: "cocktailbar",
    tags: ["st-pauli", "gin", "tonic-sorten", "modern", "szene"] },

  { id: "ham-032", city: "hamburg", name: "F+K – Freundlich & Kompetent", address: "Hamburger Straße 13", district: "mundsburg",
    lat: 53.5714, lng: 10.0259, drink: "Astra 0,5l + Kicker", par: 3, type: "kneipe",
    tags: ["mundsburg", "kicker", "bierautomat", "gemütlich", "livemusik"] },

  { id: "ham-033", city: "hamburg", name: "Eimseck", address: "Wrangelstraße 30", district: "eimsbüttel",
    lat: 53.5698, lng: 9.9575, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["eimsbüttel", "nachbarschaftstreff", "fussball", "tresen", "holz"] },

  { id: "ham-034", city: "hamburg", name: "Scharfe Ecke", address: "Clemens-Schultz-Straße 86", district: "st-pauli",
    lat: 53.5520, lng: 9.9661, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["st-pauli", "urig", "fair", "echter-kiez", "muss-man-gewesen-sein"] },

  { id: "ham-035", city: "hamburg", name: "Kaiserkeller", address: "Große Freiheit 36", district: "st-pauli",
    lat: 53.5503, lng: 9.9592, drink: "Astra 0,5l", par: 4, type: "kneipe",
    tags: ["st-pauli", "beatles-keller", "historisch", "livemusik", "kult"] },

  { id: "ham-036", city: "hamburg", name: "ZWICK St. Pauli", address: "Schulterblatt 50", district: "schanze",
    lat: 53.5612, lng: 9.9632, drink: "Bier 0,5l + Livemusik", par: 3, type: "sportbar",
    tags: ["schanze", "bundesliga", "livemusik", "sport"] },

  { id: "ham-037", city: "hamburg", name: "Zur gemütlichen Ecke", address: "Bei den St. Pauli Landungsbrücken 3", district: "st-pauli",
    lat: 53.5470, lng: 9.9682, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["st-pauli", "landungsbrücken", "hafenkneipe", "gemütlich"] },

  { id: "ham-038", city: "hamburg", name: "Fischauktionshalle Biergarten", address: "Große Elbstraße 9", district: "altona",
    lat: 53.5447, lng: 9.9369, drink: "Astra 0,5l (Outdoor)", par: 4, type: "biergarten",
    tags: ["altona", "fischmarkt", "outdoor", "hafen", "elbeblick"] },

  { id: "ham-039", city: "hamburg", name: "Strandperle", address: "Övelgönne 60", district: "neumühlen",
    lat: 53.5425, lng: 9.9083, drink: "Bier 0,5l am Elbufer", par: 4, type: "biergarten",
    tags: ["neumühlen", "elbstrand", "outdoor", "containerblick", "entspannt"] },

  { id: "ham-040", city: "hamburg", name: "Surfside Bar", address: "Falkensteiner Ufer 101", district: "blankenese",
    lat: 53.5594, lng: 9.8137, drink: "Bier 0,5l am Elbufer", par: 4, type: "biergarten",
    tags: ["blankenese", "elbufer", "outdoor", "ausflugsziel", "beachclub"] },

  { id: "ham-041", city: "hamburg", name: "Schulterblatt 73", address: "Schulterblatt 73", district: "schanze",
    lat: 53.5621, lng: 9.9647, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["schanze", "gemütlich", "lokal", "stammgäste"] },

  { id: "ham-042", city: "hamburg", name: "Überquell Brauerei", address: "Nobistor 17", district: "st-pauli",
    lat: 53.5500, lng: 9.9552, drink: "Überquell Craft Bier 0,3l", par: 4, type: "brauhaus",
    tags: ["st-pauli", "craft", "hausgebraut", "schick", "neues-format"] },

  { id: "ham-043", city: "hamburg", name: "Astra-Stube", address: "Max-Brauer-Allee 200", district: "altona",
    lat: 53.5561, lng: 9.9518, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["altona", "astra", "hamburgisch", "lokal", "günstig"] },

  { id: "ham-044", city: "hamburg", name: "Knuth", address: "Friedensallee 9", district: "ottensen",
    lat: 53.5541, lng: 9.9321, drink: "Wein oder Bier", par: 4, type: "kneipe",
    tags: ["ottensen", "frühstück", "wein", "salate", "nachbarschaft"] },

  { id: "ham-045", city: "hamburg", name: "Park Hyatt Bar – Sky Bar", address: "Bugenhagenstraße 8", district: "innenstadt",
    lat: 53.5508, lng: 9.9963, drink: "Cocktail (Hamburg-Skyline)", par: 5, type: "cocktailbar",
    tags: ["innenstadt", "premium", "aussicht", "hotelbar", "elegant"] },

  { id: "ham-046", city: "hamburg", name: "Wunderbar", address: "Hamburger Berg 17", district: "st-pauli",
    lat: 53.5509, lng: 9.9620, drink: "Cocktail in Rot und Gold", par: 4, type: "cocktailbar",
    tags: ["st-pauli", "30-jahre", "opulent", "kult", "kultlokal"] },

  { id: "ham-047", city: "hamburg", name: "Zum Speicher", address: "Speicherstraße 45", district: "hafencity",
    lat: 53.5436, lng: 9.9972, drink: "Bier 0,5l", par: 4, type: "kneipe",
    tags: ["hafencity", "speicherstadt", "gemütlich", "abends"] },

  { id: "ham-048", city: "hamburg", name: "Altes Mädchen", address: "Lagerstraße 28b", district: "schanze",
    lat: 53.5561, lng: 9.9626, drink: "Ratsherrn Craft Bier 0,3l", par: 4, type: "brauhaus",
    tags: ["schanze", "craft", "ratsherrn", "brauerei", "hip", "restaurant"] },

  { id: "ham-049", city: "hamburg", name: "Peter Pane", address: "Reeperbahn 46", district: "st-pauli",
    lat: 53.5501, lng: 9.9656, drink: "Craft Bier 0,5l", par: 4, type: "bar",
    tags: ["st-pauli", "burger", "craft", "modern", "reeperbahn"] },

  { id: "ham-050", city: "hamburg", name: "20up Bar – Empire Riverside Hotel", address: "Bernhard-Nocht-Straße 97", district: "st-pauli",
    lat: 53.5480, lng: 9.9601, drink: "Cocktail + Elbpanorama", par: 5, type: "cocktailbar",
    tags: ["st-pauli", "rooftop", "elbblick", "premium", "20-etage"] },


  // ═══════════════════════════════════════════════════════════════
  // KÖLN  🏛️  (koe-001 bis koe-050)
  // ═══════════════════════════════════════════════════════════════

  { id: "koe-001", city: "köln", name: "Brauerei Päffgen", address: "Friesenstraße 64", district: "friesenviertel",
    lat: 50.9451, lng: 6.9431, drink: "Päffgen Kölsch 0,2l Stange", par: 3, type: "brauhaus",
    tags: ["brauerei", "päffgen", "kult", "friesenviertel", "hausgebraut"] },

  { id: "koe-002", city: "köln", name: "Früh am Dom", address: "Am Hof 12-14", district: "altstadt-nord",
    lat: 50.9399, lng: 6.9585, drink: "Früh Kölsch 0,2l Stange", par: 3, type: "brauhaus",
    tags: ["brauerei", "früh", "dom-nähe", "touristisch", "klassiker"] },

  { id: "koe-003", city: "köln", name: "Malzmühle", address: "Heumarkt 6", district: "altstadt-süd",
    lat: 50.9357, lng: 6.9584, drink: "Mühlen Kölsch 0,2l Stange", par: 3, type: "brauhaus",
    tags: ["brauerei", "mühlen-kölsch", "altstadt", "kult", "hausgebraut"] },

  { id: "koe-004", city: "köln", name: "Brauerei Sion", address: "Unter Taschenmacher 5", district: "altstadt-nord",
    lat: 50.9389, lng: 6.9580, drink: "Sion Kölsch 0,2l Stange", par: 3, type: "brauhaus",
    tags: ["brauerei", "sion", "altstadt", "traditionsbrauerei", "gemütlich"] },

  { id: "koe-005", city: "köln", name: "Brauerei zur Linde", address: "Alteburger Straße 26", district: "altstadt-süd",
    lat: 50.9289, lng: 6.9519, drink: "Linde Kölsch 0,2l Stange", par: 3, type: "brauhaus",
    tags: ["brauerei", "südstadt", "gemütlich", "kult", "lokal"] },

  { id: "koe-006", city: "köln", name: "Chlodwig-Eck", address: "Annostraße 1-3", district: "altstadt-süd",
    lat: 50.9298, lng: 6.9540, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
    tags: ["altstadt-süd", "bap-gründer", "promine", "sport-leinwand", "kult"] },

  { id: "koe-007", city: "köln", name: "Grünfeld", address: "Brüsseler Straße 63", district: "belgisches-viertel",
    lat: 50.9420, lng: 6.9400, drink: "Kölsch 0,2l + Kicker", par: 3, type: "kneipe",
    tags: ["belgisches-viertel", "kicker", "schach", "kult", "terrasse"] },

  { id: "koe-008", city: "köln", name: "Hallmackenreuther", address: "Brüsseler Platz 9", district: "belgisches-viertel",
    lat: 50.9425, lng: 6.9393, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
    tags: ["belgisches-viertel", "brüsseler-platz", "60s-look", "kult", "café-bar"] },

  { id: "koe-009", city: "köln", name: "Scheinbar", address: "Engelbertstraße 49", district: "belgisches-viertel",
    lat: 50.9418, lng: 6.9367, drink: "Kölsch 0,2l + Cocktail", par: 3, type: "bar",
    tags: ["belgisches-viertel", "roter-samt", "kultig", "flirtfaktor", "schummrig"] },

  { id: "koe-010", city: "köln", name: "Kölschbar (KB)", address: "Lindenstraße 28", district: "belgisches-viertel",
    lat: 50.9410, lng: 6.9360, drink: "Kölsch 0,2l Stange + Kicker", par: 3, type: "kneipe",
    tags: ["belgisches-viertel", "eckkneipe", "kicker", "tatort", "stammgäste"] },

  { id: "koe-011", city: "köln", name: "Zum Knobelbecher", address: "Brüsseler Straße 47", district: "belgisches-viertel",
    lat: 50.9414, lng: 6.9374, drink: "Krönchen (Mariacron) + Kölsch", par: 3, type: "kneipe",
    tags: ["belgisches-viertel", "kegelbahn", "kultseele-uschi", "gemischt"] },

  { id: "koe-012", city: "köln", name: "Pegel", address: "Rathenauplatz 21", district: "belgisches-viertel",
    lat: 50.9408, lng: 6.9352, drink: "Kölsch 0,2l + Budweiser", par: 3, type: "kneipe",
    tags: ["belgisches-viertel", "unkompliziert", "gemütlich", "live-dj"] },

  { id: "koe-013", city: "köln", name: "Scheues Reh", address: "Antwerpener Straße 6", district: "belgisches-viertel",
    lat: 50.9426, lng: 6.9396, drink: "Kölsch 0,2l + Gin", par: 4, type: "bar",
    tags: ["belgisches-viertel", "konzerte", "lesungen", "djs", "kunst"] },

  { id: "koe-014", city: "köln", name: "Die Wohngemeinschaft", address: "Richard-Wagner-Straße 39", district: "belgisches-viertel",
    lat: 50.9416, lng: 6.9404, drink: "Kölsch 0,2l", par: 3, type: "bar",
    tags: ["belgisches-viertel", "hostel-bar", "tischtennis", "konzerte", "outdoor"] },

  { id: "koe-015", city: "köln", name: "Barracuda Bar", address: "Antwerpener Straße 43", district: "belgisches-viertel",
    lat: 50.9429, lng: 6.9399, drink: "Kölsch 0,2l", par: 3, type: "kneipe",
    tags: ["belgisches-viertel", "kult", "stadtgarten", "lokal", "seit-langem"] },

  { id: "koe-016", city: "köln", name: "Bumann & Sohn", address: "Bartholomäus-Schink-Straße 6", district: "ehrenfeld",
    lat: 50.9487, lng: 6.9205, drink: "Kölsch 0,2l + DJ-Tanzen", par: 3, type: "kneipe",
    tags: ["ehrenfeld", "industrielook", "biergarten", "dj", "tanzen"] },

  { id: "koe-017", city: "köln", name: "Schwarze Hase", address: "Venloer Straße 42", district: "ehrenfeld",
    lat: 50.9490, lng: 6.9196, drink: "Kölsch vom Fass 0,2l + DJ", par: 3, type: "bar",
    tags: ["ehrenfeld", "industriecharme", "dj", "wochenende", "cocktails"] },

  { id: "koe-018", city: "köln", name: "Hängende Gärten von Ehrenfeld", address: "Hüttenstraße 74", district: "ehrenfeld",
    lat: 50.9484, lng: 6.9219, drink: "Kölsch 0,2l + Foodtruck", par: 3, type: "biergarten",
    tags: ["ehrenfeld", "biergarten", "blumen", "foodtrucks", "outdoor"] },

  { id: "koe-019", city: "köln", name: "Hemmer", address: "Venloer Straße 184", district: "ehrenfeld",
    lat: 50.9501, lng: 6.9165, drink: "Kölsch 0,2l", par: 3, type: "kneipe",
    tags: ["ehrenfeld", "veedels-kneipe", "lokal", "beliebt", "gemütlich"] },

  { id: "koe-020", city: "köln", name: "Em Drügge Pitter (E.D.P.)", address: "Venloer Straße 416", district: "ehrenfeld",
    lat: 50.9521, lng: 6.9113, drink: "Guinness vom Fass + Kölsch", par: 3, type: "kneipe",
    tags: ["ehrenfeld", "24h", "eckkneipe", "dart", "flipper", "pool"] },

  { id: "koe-021", city: "köln", name: "Torburg", address: "Kartäuserwall 20", district: "altstadt-süd",
    lat: 50.9257, lng: 6.9500, drink: "Kölsch 0,2l + Blues", par: 3, type: "kneipe",
    tags: ["südstadt", "blues-kneipe", "livemusik", "whiskey", "quiz"] },

  { id: "koe-022", city: "köln", name: "Ubierschänke", address: "Ubierring 11", district: "altstadt-süd",
    lat: 50.9257, lng: 6.9512, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
    tags: ["südstadt", "eckkneipe", "karneval", "bands-entdeckt", "fc-köln"] },

  { id: "koe-023", city: "köln", name: "Kleines Finanzamt", address: "Friedrichstraße 2", district: "neustadt-süd",
    lat: 50.9296, lng: 6.9530, drink: "Kölsch 0,2l + Kegeln", par: 3, type: "kneipe",
    tags: ["neustadt-süd", "kegelbahn", "kultkneipe", "essen", "gemütlich"] },

  { id: "koe-024", city: "köln", name: "Lommi", address: "Bonner Straße 56", district: "altstadt-süd",
    lat: 50.9265, lng: 6.9484, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
    tags: ["südstadt", "mutter-aller-kaschämmen", "rustikal", "kult"] },

  { id: "koe-025", city: "köln", name: "Weißer Holunder", address: "Gladbacher Straße 48", district: "neustadt-nord",
    lat: 50.9467, lng: 6.9487, drink: "Bärenfang oder Goldwasser", par: 4, type: "kneipe",
    tags: ["neustadt-nord", "jukebox-1954", "50er-einrichtung", "schnaps", "urgestein"] },

  { id: "koe-026", city: "köln", name: "Rosebud", address: "Heinsberger Straße 20", district: "neustadt-nord",
    lat: 50.9458, lng: 6.9408, drink: "Basilikum Cocktail (Award-Winning)", par: 4, type: "cocktailbar",
    tags: ["neustadt-nord", "prämiert", "premium-cocktails", "elegant"] },

  { id: "koe-027", city: "köln", name: "Rubinrot", address: "Sömmeringstraße 9", district: "ehrenfeld",
    lat: 50.9491, lng: 6.9240, drink: "Cocktail Klassiker oder Hauskreation", par: 4, type: "cocktailbar",
    tags: ["ehrenfeld", "roter-eingang", "cocktails", "warm", "romantisch"] },

  { id: "koe-028", city: "köln", name: "Monkeys Cocktail Culture", address: "Venloer Straße 33", district: "belgisches-viertel",
    lat: 50.9430, lng: 6.9406, drink: "Cocktail oder Kölsch 0,2l", par: 4, type: "cocktailbar",
    tags: ["belgisches-viertel", "stadtgarten", "terrasse", "cocktails", "feierabend"] },

  { id: "koe-029", city: "köln", name: "Forelle Blau", address: "Pfeilstraße 31", district: "belgisches-viertel",
    lat: 50.9416, lng: 6.9390, drink: "Johann Schäfer Craft Beer 0,33l", par: 4, type: "bar",
    tags: ["belgisches-viertel", "craft", "10-fassbiere", "fc-köln", "wechselnde-sorten"] },

  { id: "koe-030", city: "köln", name: "Lotta Bar", address: "Zülpicher Straße 35", district: "neustadt-süd",
    lat: 50.9325, lng: 6.9456, drink: "Kölsch 0,2l + Punk-Soul-Ska", par: 3, type: "kneipe",
    tags: ["zülpicher", "alternativ", "politisch-links", "musik", "kult"] },

  { id: "koe-031", city: "köln", name: "Frieda Bar", address: "Ehrenstraße 77", district: "belgisches-viertel",
    lat: 50.9408, lng: 6.9367, drink: "Kölsch 0,2l + Jever", par: 3, type: "kneipe",
    tags: ["belgisches-viertel", "punk", "stoner", "holztheke", "wohnzimmer"] },

  { id: "koe-032", city: "köln", name: "Im Leuchtturm", address: "Mauritiussteinweg 88", district: "neustadt-süd",
    lat: 50.9314, lng: 6.9468, drink: "Reissdorf Kölsch 0,2l + Meeresschnaps", par: 3, type: "kneipe",
    tags: ["neustadt-süd", "seemannskneipe", "maritime", "biergarten", "rheinischer-frohsinn"] },

  { id: "koe-033", city: "köln", name: "Gottes Grüne Wiese", address: "Maastrichter Straße 61", district: "belgisches-viertel",
    lat: 50.9413, lng: 6.9388, drink: "Kölsch 0,2l + FC-Übertagung", par: 3, type: "sportbar",
    tags: ["belgisches-viertel", "fussball", "kicker", "quiz", "sport"] },

  { id: "koe-034", city: "köln", name: "Kuen Kneipe", address: "Kuenstraße 9", district: "nippes",
    lat: 50.9621, lng: 6.9613, drink: "Kölsch 0,2l + Soul & Jazz", par: 3, type: "kneipe",
    tags: ["nippes", "gemütlich", "events", "soul-jazz", "nach-hause-ausgehen"] },

  { id: "koe-035", city: "köln", name: "Alt Neppes", address: "Wilhelmstraße 41", district: "nippes",
    lat: 50.9618, lng: 6.9610, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
    tags: ["nippes", "kölsches-herz", "außengastronomie", "veedel", "lokal"] },

  { id: "koe-036", city: "köln", name: "Papa Joe's Klimperkasten", address: "Alter Markt 50-52", district: "altstadt-nord",
    lat: 50.9384, lng: 6.9587, drink: "Kölsch 0,2l + Jazz", par: 4, type: "kneipe",
    tags: ["altstadt", "jazz-live", "historisch", "trompeten-deko", "kult"] },

  { id: "koe-037", city: "köln", name: "ZwoEinz", address: "Hochstadenstraße 21", district: "belgisches-viertel",
    lat: 50.9413, lng: 6.9378, drink: "Kölsch 0,2l + Zocken", par: 3, type: "kneipe",
    tags: ["belgisches-viertel", "keller", "gaming", "günstig", "studenten"] },

  { id: "koe-038", city: "köln", name: "Südkurve", address: "Luxemburger Straße 41", district: "sülz",
    lat: 50.9225, lng: 6.9403, drink: "Kölsch 0,2l + FC live", par: 3, type: "sportbar",
    tags: ["sülz", "fc-köln", "bundesliga", "gemütlich", "neighborhood"] },

  { id: "koe-039", city: "köln", name: "Crevette Rose", address: "Liburger Straße 5", district: "ehrenfeld",
    lat: 50.9479, lng: 6.9213, drink: "Longdrink oder Cocktail", par: 4, type: "cocktailbar",
    tags: ["ehrenfeld", "cocktails", "absacker", "lokal", "entspannt"] },

  { id: "koe-040", city: "köln", name: "The Bär", address: "Thebäerstraße 10", district: "ehrenfeld",
    lat: 50.9488, lng: 6.9231, drink: "Gin (350 Labels)", par: 4, type: "cocktailbar",
    tags: ["ehrenfeld", "gin", "350-sorten", "cocktails", "bier-auch"] },

  { id: "koe-041", city: "köln", name: "Stapel.Bar", address: "Heliosstraße 35-39", district: "ehrenfeld",
    lat: 50.9501, lng: 6.9148, drink: "Cocktail + Dart", par: 4, type: "bar",
    tags: ["ehrenfeld", "industriehalle", "paletten", "tatort", "dart"] },

  { id: "koe-042", city: "köln", name: "Bar Rix", address: "Friesenwall 68", district: "friesenviertel",
    lat: 50.9440, lng: 6.9440, drink: "Wein + Käseteller", par: 4, type: "bar",
    tags: ["friesenviertel", "weinbar", "gemütlich", "käse", "niveauvoll"] },

  { id: "koe-043", city: "köln", name: "Trierer Eck", address: "Händelstraße 59", district: "altstadt-süd",
    lat: 50.9268, lng: 6.9508, drink: "Kölsch 0,2l + Currywurst", par: 3, type: "kneipe",
    tags: ["südstadt", "landhaus-terrasse", "fanbase", "familiär", "halver-hahn"] },

  { id: "koe-044", city: "köln", name: "Berg Krug", address: "Bartholomäus-Schink-Straße 1", district: "ehrenfeld",
    lat: 50.9479, lng: 6.9207, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
    tags: ["ehrenfeld", "urkölsch", "gediegener", "ruhig", "traditionell"] },

  { id: "koe-045", city: "köln", name: "Barabrossa Schänke", address: "Barbarossaplatz 1", district: "neustadt-süd",
    lat: 50.9292, lng: 6.9463, drink: "Kölsch 0,2l (Deckel-Regel!)", par: 3, type: "brauhaus",
    tags: ["neustadt-süd", "kölsche-tradition", "kult", "deckelregel", "flimm"] },

  { id: "koe-046", city: "köln", name: "Café Storch", address: "Aachener Straße 42", district: "belgisches-viertel",
    lat: 50.9409, lng: 6.9352, drink: "Wein oder heißer Kakao", par: 4, type: "bar",
    tags: ["belgisches-viertel", "kunst", "kerzenschein", "date-location", "terrasse"] },

  { id: "koe-047", city: "köln", name: "Harry's New York Bar", address: "Trankgasse 1", district: "altstadt-nord",
    lat: 50.9400, lng: 6.9577, drink: "Cocktail + Piano", par: 4, type: "cocktailbar",
    tags: ["altstadt", "afterwork", "livemusik", "piano", "cocktails"] },

  { id: "koe-048", city: "köln", name: "Wirtz", address: "Eigelstein 73", district: "altstadt-nord",
    lat: 50.9424, lng: 6.9611, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
    tags: ["altstadt", "seit-1889", "gute-stube", "kölsch-sprache", "historisch"] },

  { id: "koe-049", city: "köln", name: "Brauhaus Gaffel am Dom", address: "Bahnhofsvorplatz 1", district: "altstadt-nord",
    lat: 50.9401, lng: 6.9591, drink: "Gaffel Kölsch 0,2l Stange", par: 3, type: "brauhaus",
    tags: ["altstadt", "gaffel", "dom", "touristisch", "klassiker"] },

  { id: "koe-050", city: "köln", name: "Hopla", address: "Berliner Straße 4", district: "kalk",
    lat: 50.9274, lng: 7.0000, drink: "Kölsch 0,2l + Cocktail", par: 3, type: "kneipe",
    tags: ["kalk", "günstig", "studenten", "kicker", "livemusik"] },

];

/**
 * Hilfsfunktionen für den Randomizer
 */

// Alle Bars einer Stadt abrufen
export function getBarsForCity(city) {
  return BAR_DATABASE.filter(b => b.city === city.toLowerCase());
}

// Nächste-Nachbar-Routing: Sortiert Bars in eine sinnvolle geografische Route
export function sortByNearestNeighbor(bars, startIndex = 0) {
  if (bars.length <= 1) return bars;
  
  const sorted = [];
  const remaining = [...bars];
  let current = remaining.splice(startIndex, 1)[0];
  sorted.push(current);
  
  while (remaining.length > 0) {
    let nearestIdx = 0;
    let nearestDist = Infinity;
    
    remaining.forEach((bar, idx) => {
      const dist = Math.pow(bar.lat - current.lat, 2) + Math.pow(bar.lng - current.lng, 2);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestIdx = idx;
      }
    });
    
    current = remaining.splice(nearestIdx, 1)[0];
    sorted.push(current);
  }
  
  return sorted;
}

// Zufälligen Kurs generieren (18 oder 9 Löcher)
export function generateRandomCourse(city, holeCount = 18, seed = null) {
  const cityBars = getBarsForCity(city);
  
  // Fisher-Yates Shuffle
  const shuffled = [...cityBars];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Gewünschte Anzahl Bars auswählen
  const selected = shuffled.slice(0, Math.min(holeCount, shuffled.length));
  
  // Geografisch sinnvolle Route erstellen
  return sortByNearestNeighbor(selected);
}

// Gesamtpar eines Kurses berechnen
export function calculateTotalPar(course) {
  return course.reduce((sum, bar) => sum + bar.par, 0);
}
