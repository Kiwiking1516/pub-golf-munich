/**
 * PUB GOLF BAR DATABASE
 * 1748 Bars & Kneipen
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
 * type        – brauhaus | kneipe | bar | biergarten | cocktailbar | irish | sportbar | szene | craft
 * tags        – Array für Filterung & Storytelling
 */

export const BAR_DATABASE = [

  // ═══════════════════════════════════════════════════════════════
  // MÜNCHEN  🍺  (muc-001 bis muc-342)
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
    lat: 48.14, lng: 11.577, drink: "Franziskaner Weissbier 0,5l", par: 4, type: "brauhaus",
    tags: ["historisch", "weissbier", "nobelviertel"] },

  { id: "muc-005", city: "münchen", name: "Paulaner Keller am Nockherberg", address: "Hochstraße 77", district: "au",
    lat: 48.123, lng: 11.582, drink: "Paulaner Märzen 0,5l", par: 5, type: "biergarten",
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
    lat: 48.153, lng: 11.577, drink: "Pils vom Fass 0,3l", par: 3, type: "kneipe",
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
    lat: 48.129, lng: 11.565, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["alternativ", "isarvorstadt", "livemusik", "kultlokal"] },

  { id: "muc-023", city: "münchen", name: "Rennbahn Schwabing", address: "Feilitzschstraße 12", district: "schwabing",
    lat: 48.1629, lng: 11.5868, drink: "Pils vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["schwabing", "kultlokal", "gemütlich", "gemischt"] },

  { id: "muc-024", city: "münchen", name: "Irish Folk Pub", address: "Giselastraße 11", district: "schwabing",
    lat: 48.1601, lng: 11.5868, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish", "schwabing", "ältester-irischer-pub", "livemusik"] },

  { id: "muc-025", city: "münchen", name: "Kaisergarten", address: "Kaiserstraße 34", district: "schwabing",
    lat: 48.1572, lng: 11.588, drink: "Kühles Bier 0,5l", par: 4, type: "biergarten",
    tags: ["biergarten", "schwabing", "gemütlich", "kastanien"] },

  { id: "muc-026", city: "münchen", name: "Zum Jennerwein", address: "Belgradstraße 27", district: "schwabing",
    lat: 48.1648, lng: 11.577, drink: "Pils 0,5l", par: 3, type: "kneipe",
    tags: ["schwabing", "alternativ", "punk", "gemütlich"] },

  { id: "muc-027", city: "münchen", name: "Schwabinger Wassermann", address: "Herzogstraße 82", district: "schwabing",
    lat: 48.1645, lng: 11.582, drink: "Bier + Cocktail", par: 4, type: "kneipe",
    tags: ["schwabing", "wirtshaus", "gemütlich", "gemischt"] },

  { id: "muc-028", city: "münchen", name: "Juleps New York Bar", address: "Breisacher Straße 18", district: "haidhausen",
    lat: 48.1338, lng: 11.6005, drink: "American Longdrink", par: 4, type: "cocktailbar",
    tags: ["haidhausen", "bermudadreieck", "cocktails", "szene"] },

  { id: "muc-029", city: "münchen", name: "EscoBar", address: "Breisacher Straße 10", district: "haidhausen",
    lat: 48.1334, lng: 11.6, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["haidhausen", "bermudadreieck", "szene", "cocktails"] },

  { id: "muc-030", city: "münchen", name: "Vivo", address: "Lothringer Straße 11", district: "haidhausen",
    lat: 48.1317, lng: 11.5989, drink: "Giesinger Bier 0,5l", par: 3, type: "kneipe",
    tags: ["haidhausen", "schafkopf", "gemütlich", "lokalkolorit"] },

  { id: "muc-031", city: "münchen", name: "Kugler Alm", address: "Einstein 42", district: "haidhausen",
    lat: 48.1351, lng: 11.5945, drink: "Augustiner Hell 0,5l", par: 4, type: "brauhaus",
    tags: ["haidhausen", "brauhaus", "bayerisch", "gemütlich"] },

  { id: "muc-032", city: "münchen", name: "Wirtshaus in der Au", address: "Lilienstraße 51", district: "au",
    lat: 48.126, lng: 11.5822, drink: "Weissbier 0,5l", par: 4, type: "brauhaus",
    tags: ["au", "weissbier", "bayerisch", "kult"] },

  { id: "muc-033", city: "münchen", name: "Muffatwerk Biergarten", address: "Zellstraße 4", district: "haidhausen",
    lat: 48.131, lng: 11.5897, drink: "Bier 0,5l", par: 4, type: "biergarten",
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
    lat: 48.1558, lng: 11.589, drink: "Weissbier 0,5l", par: 4, type: "brauhaus",
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
    lat: 48.397, lng: 11.7279, drink: "Weihenstephaner Hefeweisse 0,5l", par: 5, type: "brauhaus",
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

  { id: "muc-051", city: "münchen", name: "Monchalant", address: "Pariser Straße 15", 
    lat: 48.127, lng: 11.5979, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-052", city: "münchen", name: "Negroni", address: "Sedanstraße 9", 
    lat: 48.1306, lng: 11.5974, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "italian"] },

  { id: "muc-053", city: "münchen", name: "Bar Room München", address: "Adresse unbekannt", 
    lat: 48.1315, lng: 11.5968, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-054", city: "münchen", name: "The Moon Bar Lehel", address: "Thierschplatz 5", 
    lat: 48.1395, lng: 11.5892, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-055", city: "münchen", name: "Kauz", address: "Adresse unbekannt", 
    lat: 48.1364, lng: 11.5643, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-056", city: "münchen", name: "Kubaschewski", address: "Karlsplatz 5", 
    lat: 48.1398, lng: 11.5667, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-057", city: "münchen", name: "Café Soleil", address: "Lassallestraße 101", 
    lat: 48.1983, lng: 11.5347, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-058", city: "münchen", name: "Devo's", address: "Stadelheimer Straße 19", 
    lat: 48.1005, lng: 11.5876, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-059", city: "münchen", name: "Medusa Lounge", address: "Adresse unbekannt", 
    lat: 48.2149, lng: 11.5308, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "muc-060", city: "münchen", name: "Elmas Lounge", address: "Riesenfeldstraße 81", 
    lat: 48.1867, lng: 11.562, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "muc-061", city: "münchen", name: "Bravi Ragazzi", address: "Naupliastraße 50b", 
    lat: 48.0959, lng: 11.5758, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-062", city: "münchen", name: "Palm Lounge", address: "Ständlerstraße 42", 
    lat: 48.1044, lng: 11.6056, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "muc-063", city: "münchen", name: "Schau ma moi", address: "Tegernseer Landstraße 82", 
    lat: 48.1147, lng: 11.579, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-064", city: "münchen", name: "Giesinger Stehausschank", address: "Schellingstraße 27", 
    lat: 48.1501, lng: 11.5761, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "muc-065", city: "münchen", name: "Tijuana", address: "Leopoldstraße 13a", 
    lat: 48.1556, lng: 11.5831, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-066", city: "münchen", name: "Graf Rumford", address: "Adresse unbekannt", 
    lat: 48.1338, lng: 11.5798, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-067", city: "münchen", name: "freebird Bar & Food", address: "Adresse unbekannt", 
    lat: 48.1538, lng: 11.5757, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-068", city: "münchen", name: "Vega Bar", address: "Georgenstraße 56", 
    lat: 48.1554, lng: 11.5748, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-069", city: "münchen", name: "Zum Fiaker", address: "Josef-Beiser-Straße 25", 
    lat: 48.1006, lng: 11.6302, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-070", city: "münchen", name: "Cocktailhouse", address: "Feilitzschstraße 25", 
    lat: 48.161, lng: 11.5908, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "hausbrauerei"] },

  { id: "muc-071", city: "münchen", name: "Tumult", address: "Blütenstraße 4", 
    lat: 48.1519, lng: 11.5761, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-072", city: "münchen", name: "Fox Bar", address: "Barer Straße 47", 
    lat: 48.1516, lng: 11.5735, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-073", city: "münchen", name: "Buccibar", address: "Occamstraße 9", 
    lat: 48.162, lng: 11.5895, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-074", city: "münchen", name: "Kr@ftwerk", address: "Thalkirchner Straße 4", 
    lat: 48.1322, lng: 11.5666, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-075", city: "münchen", name: "M. C. Mueller", address: "Fraunhoferstraße 2", 
    lat: 48.1312, lng: 11.5715, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "burger"] },

  { id: "muc-076", city: "münchen", name: "Edelheiss", address: "Pestalozzistraße 6", 
    lat: 48.1318, lng: 11.5673, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "outdoor", "hausbrauerei"] },

  { id: "muc-077", city: "münchen", name: "NiL", address: "Hans-Sachs-Straße 2", 
    lat: 48.1305, lng: 11.57, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-078", city: "münchen", name: "Hey Luigi", address: "Holzstraße 29", 
    lat: 48.1288, lng: 11.5683, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-079", city: "münchen", name: "Senatore", address: "Sendlinger-Tor-Platz 5", 
    lat: 48.1328, lng: 11.5666, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-080", city: "münchen", name: "Café Lord", address: "Dollmannstraße 27", 
    lat: 48.1192, lng: 11.5774, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-081", city: "münchen", name: "Salve - Bar, Cucina & Pizzeria", address: "Hohenzollernstraße 124", 
    lat: 48.1613, lng: 11.5693, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "italian"] },

  { id: "muc-082", city: "münchen", name: "Treffpunkt SportBar", address: "Schleißheimer Straße 125", 
    lat: 48.1621, lng: 11.5635, drink: "Helles 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar", "outdoor"] },

  { id: "muc-083", city: "münchen", name: "Georg's", address: "Georgenstraße 48", 
    lat: 48.1551, lng: 11.576, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-084", city: "münchen", name: "Der kleine Kranich", address: "Neureutherstraße 21", 
    lat: 48.155, lng: 11.5713, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "hausbrauerei"] },

  { id: "muc-085", city: "münchen", name: "Unibar", address: "Adresse unbekannt", 
    lat: 48.0805, lng: 11.6412, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-086", city: "münchen", name: "American Bar", address: "Adresse unbekannt", 
    lat: 48.1511, lng: 11.6199, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-087", city: "münchen", name: "Peppermint Lounge", address: "Wasserburger Landstraße 108", 
    lat: 48.1177, lng: 11.6885, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "muc-088", city: "münchen", name: "Stazione di Aperitivo", address: "Kaufingerstraße 5", 
    lat: 48.137, lng: 11.5731, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-089", city: "münchen", name: "Crönlein", address: "Am Nockherberg 8", 
    lat: 48.1215, lng: 11.5815, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-090", city: "münchen", name: "Old No.7", address: "Senftenauerstraße 97", 
    lat: 48.13, lng: 11.487, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-091", city: "münchen", name: "Nymphenburger Bistro", address: "Wotanstraße 89", 
    lat: 48.1528, lng: 11.5075, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "greek"] },

  { id: "muc-092", city: "münchen", name: "Patolli", address: "Sendlinger Straße 62", 
    lat: 48.1343, lng: 11.5681, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "coffee_shop"] },

  { id: "muc-093", city: "münchen", name: "Abseits", address: "Marktstraße 3", 
    lat: 48.1619, lng: 11.5885, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "hausbrauerei"] },

  { id: "muc-094", city: "münchen", name: "Kongressbar", address: "Theresienhöhe 15", 
    lat: 48.1322, lng: 11.544, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-095", city: "münchen", name: "Zur Gruam", address: "Thalkirchner Straße 114", 
    lat: 48.1203, lng: 11.5558, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-096", city: "münchen", name: "Miraggio", address: "Adresse unbekannt", 
    lat: 48.1216, lng: 11.5348, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-097", city: "münchen", name: "Muffatcafe", address: "Zellstraße 4", 
    lat: 48.1332, lng: 11.5897, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-098", city: "münchen", name: "Ochsengarten", address: "Müllerstraße 47", 
    lat: 48.1315, lng: 11.5679, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "hausbrauerei"] },

  { id: "muc-099", city: "münchen", name: "Lehel Bar Food Club", address: "Karl-Scharnagl-Ring 6", 
    lat: 48.1395, lng: 11.585, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-100", city: "münchen", name: "Shakespeare", address: "Seidlstraße 2a", 
    lat: 48.1426, lng: 11.5567, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-101", city: "münchen", name: "Foyer", address: "Adresse unbekannt", 
    lat: 48.1341, lng: 11.5693, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-102", city: "münchen", name: "Coeur", address: "Theresienstraße 38", 
    lat: 48.1481, lng: 11.5753, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "outdoor", "italian", "hausbrauerei"] },

  { id: "muc-103", city: "münchen", name: "Mister B's", address: "Herzog-Heinrich-Straße 38", 
    lat: 48.1288, lng: 11.5556, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-104", city: "münchen", name: "Zephyr Bar", address: "Adresse unbekannt", 
    lat: 48.129, lng: 11.5765, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-105", city: "münchen", name: "Frau Bartels", address: "Klenzestraße 51", 
    lat: 48.1298, lng: 11.5732, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-106", city: "münchen", name: "Favorit Bar", address: "Damenstiftstraße 12", 
    lat: 48.1367, lng: 11.5685, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-107", city: "münchen", name: "Bamboleo", address: "Tegernseer Landstraße 96", 
    lat: 48.114, lng: 11.5782, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-108", city: "münchen", name: "Barissimo", address: "Blumenstraße 1", 
    lat: 48.1345, lng: 11.5754, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-109", city: "münchen", name: "Times", address: "Adresse unbekannt", 
    lat: 48.1236, lng: 11.5476, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-110", city: "münchen", name: "Best Cafe Bar", address: "Adresse unbekannt", 
    lat: 48.1233, lng: 11.5465, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-111", city: "münchen", name: "Di Bar", address: "Adresse unbekannt", 
    lat: 48.1341, lng: 11.5762, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-112", city: "münchen", name: "Café Bar bei Pedja", address: "Westendstraße 136", 
    lat: 48.1379, lng: 11.5319, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-113", city: "münchen", name: "San Paolo | Bar Café", address: "Adresse unbekannt", 
    lat: 48.1384, lng: 11.5417, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-114", city: "münchen", name: "Crêperie Bernard et Bernard", address: "Innere Wiener Straße 32", 
    lat: 48.1337, lng: 11.5948, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-115", city: "münchen", name: "Garçon", address: "Utzschneiderstraße 4", 
    lat: 48.134, lng: 11.5753, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-116", city: "münchen", name: "Drei Glöcklein", address: "Hans-Sachs-Straße 8", 
    lat: 48.13, lng: 11.5698, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-117", city: "münchen", name: "Mia san's", address: "Hauptplatz 4", 
    lat: 48.0672, lng: 11.3804, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-118", city: "münchen", name: "LIVE Sportsbar", address: "Oberhofer Platz 4", 
    lat: 48.1864, lng: 11.5766, drink: "Helles 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "muc-119", city: "münchen", name: "Alte Galerie", address: "Kaulbachstraße 75", 
    lat: 48.1543, lng: 11.5851, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-120", city: "münchen", name: "LEO 49 Bar & Restaurant", address: "Leopoldstraße 49", 
    lat: 48.1603, lng: 11.5855, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-121", city: "münchen", name: "Orient Garden", address: "Leopoldstraße 27", 
    lat: 48.1582, lng: 11.5845, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-122", city: "münchen", name: "Bar Giornale", address: "Leopoldstraße 7", 
    lat: 48.1543, lng: 11.5825, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "coffee_shop", "italian"] },

  { id: "muc-123", city: "münchen", name: "Cafe-Bar-Live", address: "Adresse unbekannt", 
    lat: 48.2207, lng: 11.4759, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-124", city: "münchen", name: "Cafe Noel", address: "Adresse unbekannt", 
    lat: 48.1463, lng: 11.4594, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-125", city: "münchen", name: "Seven", address: "Am Harras 2", 
    lat: 48.1164, lng: 11.5399, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-126", city: "münchen", name: "BO12", address: "Gerhart-Hauptmann-Ring 54", 
    lat: 48.0992, lng: 11.6538, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-127", city: "münchen", name: "Pacific Times", address: "Baaderstraße 28", 
    lat: 48.1318, lng: 11.5795, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-128", city: "münchen", name: "Polka", address: "Adresse unbekannt", 
    lat: 48.128, lng: 11.6, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-129", city: "münchen", name: "West-Pol", address: "Westendstraße 144", 
    lat: 48.1379, lng: 11.5305, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-130", city: "münchen", name: "Dream", address: "Adresse unbekannt", 
    lat: 48.1349, lng: 11.5345, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-131", city: "münchen", name: "Cafebar 007", address: "Stiftsbogen 43", 
    lat: 48.1202, lng: 11.4913, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-132", city: "münchen", name: "Bar Färber", address: "Corneliusstraße 34", 
    lat: 48.1304, lng: 11.5776, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-133", city: "münchen", name: "Barocco", address: "Sollner Straße 50", 
    lat: 48.0768, lng: 11.526, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-134", city: "münchen", name: "La Claque", address: "Adresse unbekannt", 
    lat: 48.1304, lng: 11.5625, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-135", city: "münchen", name: "Maxe Belle Spitz", address: "Schellingstraße 91", 
    lat: 48.1522, lng: 11.5689, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-136", city: "münchen", name: "Hangman", address: "Reichenbachstraße 37", 
    lat: 48.1299, lng: 11.5759, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-137", city: "münchen", name: "Aquitaine Vinothèque", address: "Theresienstraße 19", district: "maxvorstadt",
    lat: 48.1474, lng: 11.5772, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-138", city: "münchen", name: "Zum Roten Knopf", address: "Steinstraße 63", 
    lat: 48.1306, lng: 11.596, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-139", city: "münchen", name: "Tap-House Munich", address: "Rosenheimer Straße 108", 
    lat: 48.1252, lng: 11.5992, drink: "Craft Bier 0,5l", par: 3, type: "craft",
    tags: ["craft", "burger"] },

  { id: "muc-140", city: "münchen", name: "L'Aperitivo", address: "Westenriederstraße 13", 
    lat: 48.1351, lng: 11.5777, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "italian"] },

  { id: "muc-141", city: "münchen", name: "Café Valentin", address: "Bahnhofstraße 1", 
    lat: 48.196, lng: 11.373, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-142", city: "münchen", name: "gehölz", address: "Schellingstraße 45", 
    lat: 48.1507, lng: 11.5742, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-143", city: "münchen", name: "Corleone", address: "Sendlinger-Tor-Platz 7", 
    lat: 48.1338, lng: 11.5651, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-144", city: "münchen", name: "barbarbar", address: "Adresse unbekannt", 
    lat: 48.1498, lng: 11.5565, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-145", city: "münchen", name: "Bar Gabanyi", address: "Adresse unbekannt", 
    lat: 48.1328, lng: 11.5576, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-146", city: "münchen", name: "el Tato", address: "Buttermelcherstraße 9", 
    lat: 48.1326, lng: 11.5782, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-147", city: "münchen", name: "Kulturstrand", address: "Adresse unbekannt", 
    lat: 48.1286, lng: 11.5798, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-148", city: "münchen", name: "zum Jagerhansl", address: "Augustenstraße 107", 
    lat: 48.1535, lng: 11.5656, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-149", city: "münchen", name: "Landshuter Bräustüberl", address: "Adresse unbekannt", 
    lat: 48.1196, lng: 11.5499, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus"] },

  { id: "muc-150", city: "münchen", name: "Zum Wolf", address: "Pestalozzistraße 22", 
    lat: 48.1305, lng: 11.5672, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-151", city: "münchen", name: "Kilombo", address: "Gollierstraße 14a", 
    lat: 48.1359, lng: 11.5443, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-152", city: "münchen", name: "Jazzbar Vogler", address: "Rumfordstraße 17", 
    lat: 48.1336, lng: 11.5777, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-153", city: "münchen", name: "RG Bar", address: "Adresse unbekannt", 
    lat: 48.1474, lng: 11.4601, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-154", city: "münchen", name: "Lucky Who", address: "Brienner Straße 14", 
    lat: 48.1437, lng: 11.5744, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-155", city: "münchen", name: "Pilsbar Zic-Zac", address: "Oefelestraße 15", 
    lat: 48.1193, lng: 11.5727, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-156", city: "münchen", name: "Boazeria", address: "Freibadstraße 1", 
    lat: 48.1198, lng: 11.5724, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-157", city: "münchen", name: "drehbar Event Location", address: "Adresse unbekannt", 
    lat: 48.0927, lng: 11.5068, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-158", city: "münchen", name: "Vitigno", address: "Aggensteinstraße 25", 
    lat: 48.094, lng: 11.5693, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-159", city: "münchen", name: "Lola", address: "Ickstattstraße 2a", 
    lat: 48.1297, lng: 11.5706, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-160", city: "münchen", name: "SAUNA", address: "Adresse unbekannt", 
    lat: 48.1436, lng: 11.5578, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-161", city: "münchen", name: "Dosage", address: "Alter Hof 3", 
    lat: 48.1383, lng: 11.5778, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-162", city: "münchen", name: "Der Akademiker", address: "Clemensstraße 118", 
    lat: 48.1645, lng: 11.5655, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-163", city: "münchen", name: "La Piazetta", address: "Adresse unbekannt", 
    lat: 48.2274, lng: 11.4674, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "hausbrauerei"] },

  { id: "muc-164", city: "münchen", name: "OHG Neubiberg", address: "Adresse unbekannt", 
    lat: 48.0781, lng: 11.6304, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-165", city: "münchen", name: "Davide", address: "Westermühlstraße 39", 
    lat: 48.1273, lng: 11.572, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-166", city: "münchen", name: "Chang Bistro & Catering", address: "Wolfratshauser Straße 268", 
    lat: 48.0718, lng: 11.519, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-167", city: "münchen", name: "Ferdings", address: "Klenzestraße 43", 
    lat: 48.1304, lng: 11.5742, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-168", city: "münchen", name: "Moon Bar", address: "Adresse unbekannt", 
    lat: 48.1463, lng: 11.4634, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-169", city: "münchen", name: "Bridge", address: "Trappentreustraße 10", 
    lat: 48.139, lng: 11.5339, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "chinese"] },

  { id: "muc-170", city: "münchen", name: "Ambar Bistro", address: "Adresse unbekannt", 
    lat: 48.1178, lng: 11.5825, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "italian"] },

  { id: "muc-171", city: "münchen", name: "Cafe Bar 1", address: "Alpenstraße 19", 
    lat: 48.1167, lng: 11.5835, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-172", city: "münchen", name: "The Salty Horse Bar", address: "Zugspitzstraße 10", 
    lat: 48.1174, lng: 11.5841, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-173", city: "münchen", name: "Hangover", address: "Adresse unbekannt", 
    lat: 48.1164, lng: 11.5018, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-174", city: "münchen", name: "Paradoxx", address: "Wasserburger Landstraße 178", 
    lat: 48.1157, lng: 11.6944, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-175", city: "münchen", name: "Plan B", address: "Starnberger Straße 3", 
    lat: 48.066, lng: 11.3797, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-176", city: "münchen", name: "Cocoon Pinsa & Bar", address: "Lindwurmstraße 37", 
    lat: 48.1308, lng: 11.5616, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-177", city: "münchen", name: "Déjà bu?", address: "Buttermelcherstraße 2a", 
    lat: 48.1329, lng: 11.5768, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-178", city: "münchen", name: "The Royal Dolores Munich Pub", address: "Marienplatz 8", 
    lat: 48.1374, lng: 11.5761, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "barrierefrei", "hausbrauerei"] },

  { id: "muc-179", city: "münchen", name: "Jem & Flo", address: "Sankt-Paul-Straße 1a", 
    lat: 48.1372, lng: 11.5534, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "pizza"] },

  { id: "muc-180", city: "münchen", name: "Lotus", address: "Adresse unbekannt", 
    lat: 48.1366, lng: 11.5561, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-181", city: "münchen", name: "Bei Erol - Café & Bar", address: "Dachauer Straße 28", 
    lat: 48.1441, lng: 11.56, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "muc-182", city: "münchen", name: "Heir", address: "Parkstraße 30", 
    lat: 48.1351, lng: 11.5441, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-183", city: "münchen", name: "Bar Polloi", address: "Adresse unbekannt", 
    lat: 48.1331, lng: 11.5688, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-184", city: "münchen", name: "Billy's Billard", address: "Lerchenstraße 5", 
    lat: 48.2017, lng: 11.5427, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-185", city: "münchen", name: "Landhaus", address: "Adresse unbekannt", 
    lat: 48.1367, lng: 11.5806, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-186", city: "münchen", name: "The Madam Bar", address: "Ledererstraße 21", 
    lat: 48.1368, lng: 11.5797, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-187", city: "münchen", name: "BOB im Park", address: "Kolehmainenweg 7", 
    lat: 48.1775, lng: 11.5513, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-188", city: "münchen", name: "IsarBar", address: "Adresse unbekannt", 
    lat: 48.1394, lng: 11.5575, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-189", city: "münchen", name: "Black & White", address: "Adresse unbekannt", 
    lat: 48.1506, lng: 11.557, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-190", city: "münchen", name: "shisha bar", address: "Adresse unbekannt", 
    lat: 48.1373, lng: 11.5637, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-191", city: "münchen", name: "Minna Thiel", address: "Bernd-Eichinger-Platz 1", 
    lat: 48.147, lng: 11.5696, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-192", city: "münchen", name: "Unter Deck", address: "Adresse unbekannt", 
    lat: 48.135, lng: 11.5711, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-193", city: "münchen", name: "minibar", address: "Winterstraße 4", 
    lat: 48.1156, lng: 11.572, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-194", city: "münchen", name: "Pils-Doktor", address: "Leopoldstraße 124", 
    lat: 48.1669, lng: 11.5865, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-195", city: "münchen", name: "Jaded monkey", address: "Herzog-Wilhelm-Straße 25", 
    lat: 48.1354, lng: 11.5673, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-196", city: "münchen", name: "Music Club Munich Zentrum für Musiker", address: "Margot-Kalinke-Straße 3", 
    lat: 48.1938, lng: 11.5957, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "outdoor"] },

  { id: "muc-197", city: "münchen", name: "The Keg", address: "Trautenwolfstraße 1", 
    lat: 48.1581, lng: 11.5855, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-198", city: "münchen", name: "Cafe Bar Silver", address: "Adresse unbekannt", 
    lat: 48.1828, lng: 11.5634, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-199", city: "münchen", name: "Bukowski", address: "Adresse unbekannt", 
    lat: 48.1319, lng: 11.5754, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-200", city: "münchen", name: "The LOUIS Roof Terrace", address: "Adresse unbekannt", 
    lat: 48.1361, lng: 11.5754, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-201", city: "münchen", name: "Les Fleurs Du Mal", address: "Adresse unbekannt", 
    lat: 48.1439, lng: 11.5787, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-202", city: "münchen", name: "Pasinger Nachtcafe bei Keko", address: "Bodenseestraße 19", 
    lat: 48.147, lng: 11.4553, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-203", city: "münchen", name: "Der Eifrige Student", address: "Werner-Heisenberg-Weg 106", 
    lat: 48.0814, lng: 11.6446, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-204", city: "münchen", name: "toto's basement", address: "Adresse unbekannt", 
    lat: 48.1553, lng: 11.6372, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-205", city: "münchen", name: "Snakes", address: "Ligsalzstraße 33", 
    lat: 48.1344, lng: 11.5425, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "hausbrauerei"] },

  { id: "muc-206", city: "münchen", name: "Squeeze", address: "Adresse unbekannt", 
    lat: 48.1316, lng: 11.5664, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-207", city: "münchen", name: "Bondi Bar", address: "Fraunhoferstraße 32", 
    lat: 48.1287, lng: 11.5747, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-208", city: "münchen", name: "Emix", address: "Helene-Mayer-Ring 14", 
    lat: 48.1821, lng: 11.5529, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-209", city: "münchen", name: "Nachteule", address: "Adresse unbekannt", 
    lat: 48.1033, lng: 11.4205, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-210", city: "münchen", name: "Kinky Slice", address: "Reichenbachstraße 29", 
    lat: 48.1305, lng: 11.576, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-211", city: "münchen", name: "Japa Tapa", address: "Maximilianstraße 35", 
    lat: 48.1395, lng: 11.584, drink: "Craft Bier 0,5l", par: 3, type: "craft",
    tags: ["craft"] },

  { id: "muc-212", city: "münchen", name: "Gorilla Bar", address: "Hirschbergstraße 23", 
    lat: 48.1483, lng: 11.532, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-213", city: "münchen", name: "Fredy's Bar", address: "Adresse unbekannt", 
    lat: 48.1464, lng: 11.4615, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-214", city: "münchen", name: "Mr. Mumble's", address: "Adresse unbekannt", 
    lat: 48.1335, lng: 11.5791, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-215", city: "münchen", name: "Gin City", address: "Speicherstraße 20", 
    lat: 48.124, lng: 11.6061, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-216", city: "münchen", name: "Hood the Bar", address: "Adresse unbekannt", 
    lat: 48.1488, lng: 11.5347, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-217", city: "münchen", name: "Tambosi Bar", address: "Odeonsplatz 18", 
    lat: 48.1429, lng: 11.5781, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-218", city: "münchen", name: "Havana Club Cuban Bar", address: "Herrnstraße 30", 
    lat: 48.1361, lng: 11.583, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-219", city: "münchen", name: "Juliet Rose Bar", address: "Rosenheimer Straße 15", 
    lat: 48.1299, lng: 11.5927, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "muc-220", city: "münchen", name: "Frisches Bier", address: "Thalkirchner Straße 53", 
    lat: 48.1223, lng: 11.559, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-221", city: "münchen", name: "PANORAMA BAR „Cloud One“", address: "Adresse unbekannt", 
    lat: 48.178, lng: 11.5921, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-222", city: "münchen", name: "Bar du Port", address: "Albrechtstraße 32", 
    lat: 48.1565, lng: 11.5388, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-223", city: "münchen", name: "Transit Rooftop & Bar", address: "Adresse unbekannt", 
    lat: 48.1255, lng: 11.6052, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-224", city: "münchen", name: "Kölsch Bar", address: "Adresse unbekannt", 
    lat: 48.1246, lng: 11.6055, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-225", city: "münchen", name: "Bar dell Osteria", address: "Schellingstraße 60", 
    lat: 48.1514, lng: 11.5723, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-226", city: "münchen", name: "Goodtimes", address: "Schwanseestraße 81", 
    lat: 48.1035, lng: 11.5975, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-227", city: "münchen", name: "MaVie", address: "Kreillerstraße 160a", 
    lat: 48.124, lng: 11.6564, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-228", city: "münchen", name: "Wallace Bar", address: "Occamstraße 2", 
    lat: 48.1615, lng: 11.5894, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-229", city: "münchen", name: "Jay-R", address: "Pilgersheimer Straße 70", 
    lat: 48.1129, lng: 11.5713, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-230", city: "münchen", name: "Kooks", address: "Geyerstraße 18", 
    lat: 48.1251, lng: 11.5656, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "hausbrauerei"] },

  { id: "muc-231", city: "münchen", name: "Retro Time", address: "Gubestraße 20", district: "moosach",
    lat: 48.1801, lng: 11.5111, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "outdoor", "hausbrauerei"] },

  { id: "muc-232", city: "münchen", name: "Trisoux", address: "Adresse unbekannt", 
    lat: 48.1312, lng: 11.5686, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-233", city: "münchen", name: "M’Uniqo", address: "Leopoldstraße 170", 
    lat: 48.1715, lng: 11.5865, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-234", city: "münchen", name: "Ogidiga's Afro Bar", address: "Maistraße 63", 
    lat: 48.1263, lng: 11.5613, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-235", city: "münchen", name: "opops pak", address: "Waltherstraße 15", 
    lat: 48.1286, lng: 11.5611, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-236", city: "münchen", name: "Bar Mural", address: "Theresienstraße 3", district: "maxvorstadt",
    lat: 48.147, lng: 11.5787, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-237", city: "münchen", name: "Mon Ami", address: "Adresse unbekannt", 
    lat: 48.1606, lng: 11.5863, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-238", city: "münchen", name: "NV Club", address: "Residenzstraße 3", 
    lat: 48.1389, lng: 11.5777, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "outdoor"] },

  { id: "muc-239", city: "münchen", name: "Stockwerk", address: "Adresse unbekannt", 
    lat: 48.1877, lng: 11.3835, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-240", city: "münchen", name: "Theos", address: "Adresse unbekannt", 
    lat: 48.1728, lng: 11.5949, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-241", city: "münchen", name: "Home Munich", address: "Amalienstraße 23", 
    lat: 48.1473, lng: 11.5763, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-242", city: "münchen", name: "Bar Alvino", address: "Brienner Straße 10", 
    lat: 48.1433, lng: 11.5749, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-243", city: "münchen", name: "SaSu Conceptbar", address: "Clemensstraße 15", 
    lat: 48.1635, lng: 11.5834, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "italian", "german"] },

  { id: "muc-244", city: "münchen", name: "CAFE 7GÜN", address: "Gotteszeller Straße 2", 
    lat: 48.1268, lng: 11.6153, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "muc-245", city: "münchen", name: "Happy Billard", address: "Fraunhoferstraße 6", district: "martinsried",
    lat: 48.1102, lng: 11.4498, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-246", city: "münchen", name: "Distillers Bar", address: "Theklastraße 1", 
    lat: 48.1325, lng: 11.5729, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-247", city: "münchen", name: "Lemon Lounge", address: "Balanstraße 176", 
    lat: 48.1071, lng: 11.6039, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "muc-248", city: "münchen", name: "X", address: "Sternstraße 20", 
    lat: 48.1397, lng: 11.5911, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-249", city: "münchen", name: "Cafe Sports Bar Koukou", address: "Adresse unbekannt", 
    lat: 48.1459, lng: 11.4679, drink: "Helles 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "muc-250", city: "münchen", name: "Pils-Pub 64", address: "Ludwig-Thoma-Straße 42", 
    lat: 48.0636, lng: 11.6798, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-251", city: "münchen", name: "Philoma Spielcenter", address: "Schleißheimer Straße 12", 
    lat: 48.1486, lng: 11.5593, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-252", city: "münchen", name: "Bar Tantris", address: "Johann-Fichte-Straße 7", 
    lat: 48.1698, lng: 11.5884, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "international"] },

  { id: "muc-253", city: "münchen", name: "Simsalabim", address: "Marienstraße 18", 
    lat: 48.1358, lng: 11.582, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-254", city: "münchen", name: "Gabi's Stüberl", address: "Leonrodstraße 87", 
    lat: 48.1589, lng: 11.546, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "hausbrauerei"] },

  { id: "muc-255", city: "münchen", name: "RamBar-ZamBar", address: "Adresse unbekannt", 
    lat: 48.2019, lng: 11.5666, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-256", city: "münchen", name: "Bar Uno", address: "Ludwigstraße 11", 
    lat: 48.1452, lng: 11.5785, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-257", city: "münchen", name: "miXbar", address: "Ottobrunner Straße 13", 
    lat: 48.1119, lng: 11.6181, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "hausbrauerei"] },

  { id: "muc-258", city: "münchen", name: "Heubodenbar", address: "Adresse unbekannt", 
    lat: 48.1279, lng: 11.5561, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-259", city: "münchen", name: "Vinothek", address: "Adresse unbekannt", 
    lat: 48.1398, lng: 11.5623, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-260", city: "münchen", name: "Olympiapark Biergarten", address: "Spiridon-Louis-Ring 7", 
    lat: 48.1744, lng: 11.5485, drink: "Maß Hell 1,0l", par: 5, type: "biergarten",
    tags: ["biergarten", "outdoor", "barrierefrei"] },

  { id: "muc-261", city: "münchen", name: "Cafe Moosach", address: "Adresse unbekannt", 
    lat: 48.1794, lng: 11.5089, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-262", city: "münchen", name: "Peoples Lounge", address: "Adresse unbekannt", 
    lat: 48.1228, lng: 11.5462, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "muc-263", city: "münchen", name: "Juliets Stüberl", address: "Clemensstraße 82", 
    lat: 48.1639, lng: 11.5718, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "hausbrauerei"] },

  { id: "muc-264", city: "münchen", name: "Carlito's", address: "Ohlmüllerstraße 11", 
    lat: 48.1258, lng: 11.5793, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-265", city: "münchen", name: "Q'UZINO", address: "Waltramstraße 1", 
    lat: 48.1065, lng: 11.5802, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-266", city: "münchen", name: "Espinoza", address: "Adresse unbekannt", 
    lat: 48.1126, lng: 11.585, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-267", city: "münchen", name: "Cafè Montana", address: "Adresse unbekannt", 
    lat: 48.1106, lng: 11.5941, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "hausbrauerei"] },

  { id: "muc-268", city: "münchen", name: "Papa Schlumpf", address: "Adresse unbekannt", 
    lat: 48.1307, lng: 11.6184, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-269", city: "münchen", name: "Egons Underground", address: "Willi-Graf-Straße 15", 
    lat: 48.183, lng: 11.6128, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-270", city: "münchen", name: "Baraki", address: "Schleißheimer Straße 246", 
    lat: 48.1714, lng: 11.565, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "hausbrauerei"] },

  { id: "muc-271", city: "münchen", name: "Einstein 99", address: "Adresse unbekannt", 
    lat: 48.1358, lng: 11.6058, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-272", city: "münchen", name: "ZAYA", address: "Hofangerstraße 2", 
    lat: 48.1183, lng: 11.6303, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-273", city: "münchen", name: "Frau im Mond", address: "Museumsinsel 1", 
    lat: 48.1292, lng: 11.5819, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-274", city: "münchen", name: "magari", address: "Adresse unbekannt", 
    lat: 48.1275, lng: 11.6086, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-275", city: "münchen", name: "Neuhausener Treff", address: "Adresse unbekannt", 
    lat: 48.1494, lng: 11.5364, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-276", city: "münchen", name: "Bla", address: "Adresse unbekannt", 
    lat: 48.1197, lng: 11.5563, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-277", city: "münchen", name: "Sonnenstüberl", address: "Adresse unbekannt", 
    lat: 48.118, lng: 11.5438, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-278", city: "münchen", name: "Boomerang", address: "Adresse unbekannt", 
    lat: 48.1207, lng: 11.5409, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-279", city: "münchen", name: "Sava Bar", address: "Lindwurmstraße 111", 
    lat: 48.1279, lng: 11.5554, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "turkish"] },

  { id: "muc-280", city: "münchen", name: "Dachgarten - auf dem Gasteig", address: "Rosenheimer Straße 5", 
    lat: 48.1306, lng: 11.5916, drink: "Maß Hell 1,0l", par: 5, type: "biergarten",
    tags: ["biergarten", "hausbrauerei"] },

  { id: "muc-281", city: "münchen", name: "Pigalle", address: "Adresse unbekannt", 
    lat: 48.1241, lng: 11.5612, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-282", city: "münchen", name: "Tusonido Bar", address: "Hauptstraße 29", 
    lat: 48.0628, lng: 11.6148, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-283", city: "münchen", name: "Curtain Call", address: "Pestalozzistraße 14", 
    lat: 48.1311, lng: 11.5672, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-284", city: "münchen", name: "Valentin", address: "Pfisterstraße 9", 
    lat: 48.1384, lng: 11.58, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-285", city: "münchen", name: "ROJ Bistro Bar", address: "Adresse unbekannt", 
    lat: 48.1105, lng: 11.5777, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-286", city: "münchen", name: "Terra", address: "Baaderstraße 1", 
    lat: 48.1334, lng: 11.5818, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-287", city: "münchen", name: "Eintrach - Cafe Bistro", address: "Adresse unbekannt", 
    lat: 48.1169, lng: 11.5906, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-288", city: "münchen", name: "Fledermaus", address: "Ganghoferstraße 74", 
    lat: 48.1285, lng: 11.5386, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-289", city: "münchen", name: "Le Jardin", address: "Leopoldstraße 153", 
    lat: 48.1714, lng: 11.5856, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "muc-290", city: "münchen", name: "Tram-Bar", address: "Adresse unbekannt", 
    lat: 48.1226, lng: 11.5548, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-291", city: "münchen", name: "Isarflimmern München", address: "Praterwehrbrücke", 
    lat: 48.1367, lng: 11.5894, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-292", city: "münchen", name: "Zum Doll-Eck", address: "Adresse unbekannt", 
    lat: 48.1208, lng: 11.5777, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-293", city: "münchen", name: "Diba", address: "Adresse unbekannt", 
    lat: 48.1252, lng: 11.5502, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-294", city: "münchen", name: "KYAH", address: "Rumfordstraße 2", 
    lat: 48.1332, lng: 11.5749, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-295", city: "münchen", name: "Arri Bar", address: "Adresse unbekannt", 
    lat: 48.1537, lng: 11.5777, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-296", city: "münchen", name: "La Casina - Vinoteca Bar Cucina", address: "Frohschammerstraße 14", 
    lat: 48.1791, lng: 11.5687, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "italian"] },

  { id: "muc-297", city: "münchen", name: "Kaminbar", address: "Arnulfstraße 4", 
    lat: 48.1418, lng: 11.5594, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-298", city: "münchen", name: "Elephant Bar", address: "Kreillerstraße 64", 
    lat: 48.1262, lng: 11.6412, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "friture"] },

  { id: "muc-299", city: "münchen", name: "Seasons Bar", address: "Adresse unbekannt", 
    lat: 48.1391, lng: 11.5819, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-300", city: "münchen", name: "Mini Bar", address: "Adresse unbekannt", 
    lat: 48.1521, lng: 11.5305, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-301", city: "münchen", name: "The Boilerman Bar", address: "Bahnhofplatz 1", 
    lat: 48.1398, lng: 11.5615, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "muc-302", city: "münchen", name: "Löwenbräu am Grünwalder", address: "Tegernseer Landstraße 114", 
    lat: 48.1122, lng: 11.5759, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus"] },

  { id: "muc-303", city: "münchen", name: "Skyline Billard Sportbar", address: "Münchner Straße 87a", 
    lat: 48.2447, lng: 11.4479, drink: "Helles 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "muc-304", city: "münchen", name: "Habe die Ehre", address: "Thiereckstraße 2", 
    lat: 48.1381, lng: 11.5743, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-305", city: "münchen", name: "Bikini Mitte", address: "Sonnenstraße 17", 
    lat: 48.1368, lng: 11.5658, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-306", city: "münchen", name: "Toros", address: "Albert-Roßhaupter-Straße 78", 
    lat: 48.1169, lng: 11.5284, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-307", city: "münchen", name: "Sortie", address: "Adresse unbekannt", 
    lat: 48.127, lng: 11.5963, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-308", city: "münchen", name: "Charlatan", address: "Einsteinstraße 50", 
    lat: 48.1356, lng: 11.602, drink: "Helles vom Fass 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "hausbrauerei"] },

  { id: "muc-309", city: "münchen", name: "Tam Tam Treppenbar", address: "Adresse unbekannt", 
    lat: 48.1377, lng: 11.5818, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-310", city: "münchen", name: "Anna Bar", address: "Fraunhoferstraße 24", 
    lat: 48.1292, lng: 11.5743, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "italian"] },

  { id: "muc-311", city: "münchen", name: "Street Bar", address: "Adresse unbekannt", 
    lat: 48.1301, lng: 11.6222, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-312", city: "münchen", name: "Herr Bartels", address: "Blumenstraße 21a", 
    lat: 48.1322, lng: 11.5717, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-313", city: "münchen", name: "TIVO", address: "Oettingenstraße 74", 
    lat: 48.1493, lng: 11.5951, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-314", city: "münchen", name: "Ungewitter Bar", address: "Adresse unbekannt", 
    lat: 48.1551, lng: 11.5731, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "muc-315", city: "münchen", name: "Max & Moritz - Social Club", address: "Leopoldstraße 150", 
    lat: 48.1697, lng: 11.587, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-316", city: "münchen", name: "Terasse", address: "Adresse unbekannt", 
    lat: 48.1446, lng: 11.522, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "muc-317", city: "münchen", name: "Gans Woanders", address: "Pilgersheimer Straße 13", 
    lat: 48.1183, lng: 11.5748, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "pizza"] },

  { id: "muc-318", city: "münchen", name: "OlyLounge", address: "Adresse unbekannt", 
    lat: 48.1802, lng: 11.5526, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "muc-319", city: "münchen", name: "milch und bar", address: "Sonnenstraße 27", 
    lat: 48.1352, lng: 11.5662, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-320", city: "münchen", name: "Barbarella", address: "Am Bogen 33", 
    lat: 48.065, lng: 11.6659, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-321", city: "münchen", name: "P1", address: "Prinzregentenstraße 1", 
    lat: 48.1444, lng: 11.5853, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "barrierefrei"] },

  { id: "muc-322", city: "münchen", name: "Sunny Red", address: "Hansastraße 41", 
    lat: 48.1283, lng: 11.5348, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-323", city: "münchen", name: "Café Kranhalle", address: "Hansastraße 39", 
    lat: 48.1294, lng: 11.5337, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "barrierefrei"] },

  { id: "muc-324", city: "münchen", name: "Sweet", address: "Maximiliansplatz 5", 
    lat: 48.1422, lng: 11.5706, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-325", city: "münchen", name: "089 Bar", address: "Maximiliansplatz 5", 
    lat: 48.1422, lng: 11.5699, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-326", city: "münchen", name: "Neuraum", address: "Arnulfstraße 17", 
    lat: 48.1423, lng: 11.5512, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-327", city: "münchen", name: "Evergreen Dancing", address: "Neuhauser Straße 47", 
    lat: 48.1388, lng: 11.5668, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-328", city: "münchen", name: "STROM", address: "Lindwurmstraße 88", 
    lat: 48.1249, lng: 11.5491, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-329", city: "münchen", name: "Pimpernel", address: "Müllerstraße 56", 
    lat: 48.1323, lng: 11.5673, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-330", city: "münchen", name: "NY.Club", address: "Elisenstraße 3", 
    lat: 48.1414, lng: 11.5628, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "barrierefrei"] },

  { id: "muc-331", city: "münchen", name: "BORN TO ROCK", address: "Landsberger Straße 185", 
    lat: 48.1396, lng: 11.5229, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-332", city: "münchen", name: "Tanzcafé Maratonga", address: "Adresse unbekannt", 
    lat: 48.1342, lng: 11.5954, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-333", city: "münchen", name: "Discothek Crash", address: "Ainmillerstraße 10", 
    lat: 48.1586, lng: 11.5833, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "barrierefrei"] },

  { id: "muc-334", city: "münchen", name: "KADE", address: "Grasmeierstraße 23", 
    lat: 48.1819, lng: 11.6116, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-335", city: "münchen", name: "La Nuit", address: "Maximiliansplatz 16", 
    lat: 48.1418, lng: 11.5722, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-336", city: "münchen", name: "ABC Alte Börse Club", address: "Lenbachplatz 2a", 
    lat: 48.1409, lng: 11.5677, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-337", city: "münchen", name: "Closer", address: "Adresse unbekannt", 
    lat: 48.1383, lng: 11.5656, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-338", city: "münchen", name: "Die Bombe", address: "Adresse unbekannt", 
    lat: 48.1369, lng: 11.5643, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-339", city: "münchen", name: "Palais Club & Bar", address: "Arnulfstraße 16", 
    lat: 48.142, lng: 11.5582, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-340", city: "münchen", name: "lieberscholli - space for art, club and culture", address: "Landsberger Straße 212", 
    lat: 48.1419, lng: 11.516, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-341", city: "münchen", name: "Blitz Club", address: "Museumsinsel 1", 
    lat: 48.1315, lng: 11.586, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "muc-342", city: "münchen", name: "Nachtgalerie", address: "Landsberger Straße 185", 
    lat: 48.1401, lng: 11.5228, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },


  // ═══════════════════════════════════════════════════════════════
  // BERLIN  🐻  (ber-001 bis ber-863)
  // ═══════════════════════════════════════════════════════════════

  { id: "ber-001", city: "berlin", name: "Mein Haus am See", address: "Brunnenstraße 197-198", district: "mitte",
    lat: 52.5316, lng: 13.4032, drink: "Bier vom Fass 0,5l", par: 3, type: "bar",
    tags: ["kult", "mitte", "szene", "hipster", "rosenthaler-platz"] },

  { id: "ber-002", city: "berlin", name: "Zum Goldenen Handschuh", address: "Schanzenstraße 56", district: "altona",
    lat: 53.555, lng: 9.96, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["kultlokal", "rund-um-die-uhr", "honka", "kiez"] },

  { id: "ber-003", city: "berlin", name: "Madame Claude", address: "Lübbener Straße 19", district: "kreuzberg",
    lat: 52.497, lng: 13.4394, drink: "Bier 0,5l + Schnaps", par: 3, type: "kneipe",
    tags: ["kreuzberg", "möbel-an-der-decke", "alternativ", "livemusik"] },

  { id: "ber-004", city: "berlin", name: "Zur fetten Ecke", address: "Schlesische Straße 16", district: "kreuzberg",
    lat: 52.4995, lng: 13.4449, drink: "Waldmeisterlikör + Pils", par: 3, type: "kneipe",
    tags: ["kreuzberg", "schlesi", "kult", "tanzen", "DJ"] },

  { id: "ber-005", city: "berlin", name: "Hopfenreich", address: "Sorauer Straße 31", district: "kreuzberg",
    lat: 52.4985, lng: 13.4435, drink: "Craft Beer vom Fass 0,4l", par: 4, type: "bar",
    tags: ["craft-beer", "kreuzberg", "zapfhähne", "biervielfalt"] },

  { id: "ber-006", city: "berlin", name: "Trinkteufel", address: "Oranienstraße 195", district: "kreuzberg",
    lat: 52.501, lng: 13.417, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
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
    lat: 52.5148, lng: 13.47, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["friedrichshain", "alternativ", "billard", "linkes-publikum"] },

  { id: "ber-015", city: "berlin", name: "Zum Schmutzigen Hobby", address: "Revaler Straße 99", district: "friedrichshain",
    lat: 52.5082, lng: 13.4545, drink: "Bier + Korn", par: 3, type: "kneipe",
    tags: ["friedrichshain", "RAW", "queer", "90s-parties"] },

  { id: "ber-016", city: "berlin", name: "Oberbaumeck", address: "Bevernstraße 5", district: "kreuzberg",
    lat: 52.5001, lng: 13.4465, drink: "Bier 0,5l + Kicker", par: 3, type: "kneipe",
    tags: ["kreuzberg", "punkig", "kicker", "fussball", "st-pauli"] },

  { id: "ber-017", city: "berlin", name: "Vettern Bar", address: "Reuterstraße 64", district: "neukölln",
    lat: 52.4864, lng: 13.428, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
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
    lat: 52.5302, lng: 13.388, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["mitte", "businessszene", "17m-tresen", "goldwand"] },

  { id: "ber-022", city: "berlin", name: "The Wash Bar", address: "Weinbergsweg 1", district: "mitte",
    lat: 52.5338, lng: 13.4032, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["mitte", "rosenthaler-platz", "dunkel", "graffiti", "cocktails"] },

  { id: "ber-023", city: "berlin", name: "Schwarzes Café", address: "Kantstraße 148", district: "charlottenburg",
    lat: 52.506, lng: 13.3195, drink: "Bier 0,5l oder Cocktail", par: 3, type: "kneipe",
    tags: ["charlottenburg", "24h", "künstler", "touristen", "frühstück"] },

  { id: "ber-024", city: "berlin", name: "Wilhelm Hoeck 1892", address: "Wilmersdorfer Straße 149", district: "charlottenburg",
    lat: 52.5101, lng: 13.3046, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["charlottenburg", "historisch", "traditionslokal", "filmkulisse"] },

  { id: "ber-025", city: "berlin", name: "Zum Anker", address: "Lohmeyerstraße 16", district: "charlottenburg",
    lat: 52.5147, lng: 13.2956, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["charlottenburg", "billard", "gemütlich", "geheimtipp"] },

  { id: "ber-026", city: "berlin", name: "Metzer Eck", address: "Metzer Straße 33", district: "prenzlauer-berg",
    lat: 52.5381, lng: 13.428, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["prenzlauer-berg", "altberliner", "gemütlich", "historisch"] },

  { id: "ber-027", city: "berlin", name: "Zu mir oder zu dir", address: "Stargarder Straße 12", district: "prenzlauer-berg",
    lat: 52.542, lng: 13.4198, drink: "Bier + Cocktail", par: 3, type: "kneipe",
    tags: ["prenzlauer-berg", "date-location", "wohnzimmer", "gemütlich"] },

  { id: "ber-028", city: "berlin", name: "Möve im Felsenkeller", address: "Akazienstraße 2", district: "schöneberg",
    lat: 52.4886, lng: 13.3582, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["schöneberg", "100-jahre", "tradition", "ruhig", "konversation"] },

  { id: "ber-029", city: "berlin", name: "Stadtklause", address: "Stresemannstraße 90", district: "kreuzberg",
    lat: 52.501, lng: 13.3802, drink: "Bier vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["kreuzberg", "anhalter-bahnhof", "hausmannskost", "versteckt"] },

  { id: "ber-030", city: "berlin", name: "BRLO Brauhaus", address: "Schöneberger Straße 16", district: "kreuzberg",
    lat: 52.5022, lng: 13.3796, drink: "BRLO Craft Beer 0,33l", par: 4, type: "biergarten",
    tags: ["craft", "kreuzberg", "biergarten", "hausgebraut", "hip"] },

  { id: "ber-031", city: "berlin", name: "Leuchtturm", address: "Akazienstraße 28", district: "schöneberg",
    lat: 52.4895, lng: 13.359, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["schöneberg", "akazienkiez", "institution", "gemütlich"] },

  { id: "ber-032", city: "berlin", name: "Zur Quelle", address: "Alt-Moabit 87", district: "moabit",
    lat: 52.5268, lng: 13.3525, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["moabit", "24h", "kult", "immer-voll", "traditionslokal"] },

  { id: "ber-033", city: "berlin", name: "Knutschfleck", address: "Dircksenstraße 47-49", district: "mitte",
    lat: 52.5208, lng: 13.412, drink: "Cocktail Börse", par: 4, type: "cocktailbar",
    tags: ["mitte", "alex", "cocktailbörse", "showbühne", "abwechslungsreich"] },

  { id: "ber-034", city: "berlin", name: "Minimal Bar", address: "Reuterstraße 26", district: "neukölln",
    lat: 52.487, lng: 13.4267, drink: "Bier 0,5l + Ping Pong", par: 3, type: "bar",
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
    lat: 52.4911, lng: 13.393, drink: "Bier 0,5l", par: 3, type: "kneipe",
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
    lat: 52.4817, lng: 13.435, drink: "Bier 0,5l (Rooftop)", par: 4, type: "biergarten",
    tags: ["neukölln", "rooftop", "urban", "sommer", "sonnenuntergang"] },

  { id: "ber-043", city: "berlin", name: "Scotch & Sofa", address: "Kollwitzstraße 18", district: "prenzlauer-berg",
    lat: 52.539, lng: 13.4206, drink: "Whisky 4cl", par: 4, type: "cocktailbar",
    tags: ["prenzlauer-berg", "whisky", "sofas", "gemütlich"] },

  { id: "ber-044", city: "berlin", name: "Zum Starken August", address: "Schönhauser Allee 56A", district: "prenzlauer-berg",
    lat: 52.5397, lng: 13.4174, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["prenzlauer-berg", "eckkneipe", "gemütlich", "schönhauser"] },

  { id: "ber-045", city: "berlin", name: "BrewDog Berlin", address: "Revaler Straße 99", district: "friedrichshain",
    lat: 52.5078, lng: 13.4547, drink: "BrewDog Punk IPA 0,4l", par: 4, type: "bar",
    tags: ["friedrichshain", "RAW", "craft", "international", "viele-hähne"] },

  { id: "ber-046", city: "berlin", name: "Bar Coa", address: "Schlesische Straße 39", district: "kreuzberg",
    lat: 52.4988, lng: 13.446, drink: "Cocktail", par: 4, type: "cocktailbar",
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

  { id: "ber-051", city: "berlin", name: "Albert's", address: "Scharnweberstraße 16", 
    lat: 52.5638, lng: 13.3288, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei", "hausbrauerei"] },

  { id: "ber-052", city: "berlin", name: "Bellboy Berlin", address: "Anton-Wilhelm-Amo-Straße 30", 
    lat: 52.5121, lng: 13.3919, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-053", city: "berlin", name: "Newton Bar", address: "Charlottenstraße 57", 
    lat: 52.5129, lng: 13.3912, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-054", city: "berlin", name: "No Limit Shishabar", address: "Adresse unbekannt", 
    lat: 52.5656, lng: 13.3209, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-055", city: "berlin", name: "en passant", address: "Schönhauser Allee 58", district: "prenzlauer berg",
    lat: 52.5442, lng: 13.4129, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-056", city: "berlin", name: "Z-Bar", address: "Bergstraße 2", district: "mitte",
    lat: 52.5295, lng: 13.3956, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-057", city: "berlin", name: "Immertreu", address: "Christburger Straße 6", district: "prenzlauer berg",
    lat: 52.5364, lng: 13.4251, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-058", city: "berlin", name: "Tiger Karaoke", address: "Müllerstraße 6", 
    lat: 52.5414, lng: 13.3685, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-059", city: "berlin", name: "Laalia", address: "Adresse unbekannt", 
    lat: 52.5426, lng: 13.3761, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-060", city: "berlin", name: "Café Nostalgie", address: "Crellestraße 22", district: "schöneberg",
    lat: 52.4883, lng: 13.3619, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "ber-061", city: "berlin", name: "Schloss Neuschweinsteiger", address: "Emser Straße 122", district: "neukölln",
    lat: 52.469, lng: 13.4355, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "ber-062", city: "berlin", name: "Keyif", address: "Adresse unbekannt", 
    lat: 52.512, lng: 13.4613, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-063", city: "berlin", name: "Himmelreich", address: "Simon-Dach-Straße 36", district: "friedrichshain",
    lat: 52.5103, lng: 13.4566, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-064", city: "berlin", name: "Ysy", address: "Adresse unbekannt", 
    lat: 52.5158, lng: 13.4592, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-065", city: "berlin", name: "Lauschangriff", address: "Adresse unbekannt", 
    lat: 52.5182, lng: 13.4553, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-066", city: "berlin", name: "Zeitgeist", address: "Gärtnerstraße 15", district: "friedrichshain",
    lat: 52.5112, lng: 13.4613, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-067", city: "berlin", name: "Charlotte", address: "Charlottenstraße 14a", district: "spandau",
    lat: 52.5372, lng: 13.2023, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-068", city: "berlin", name: "booze bar berlin", address: "Boxhagener Straße 105", district: "friedrichshain",
    lat: 52.5127, lng: 13.4587, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-069", city: "berlin", name: "Quasimodo", address: "Kantstraße 12A", district: "charlottenburg",
    lat: 52.5059, lng: 13.3284, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-070", city: "berlin", name: "Konsum", address: "Adresse unbekannt", 
    lat: 52.3918, lng: 13.0953, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-071", city: "berlin", name: "Bar im Wasserturm", address: "Waldowstraße 20", district: "alt-hohenschönhausen",
    lat: 52.5477, lng: 13.4887, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-072", city: "berlin", name: "Billardsalon Köh", address: "Sophienstraße 6", district: "mitte",
    lat: 52.5252, lng: 13.4019, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-073", city: "berlin", name: "Deck 5", address: "Greifenhagener Straße 47", 
    lat: 52.5494, lng: 13.4165, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-074", city: "berlin", name: "macke prinz", address: "Zionskirchstraße 39", district: "mitte",
    lat: 52.5345, lng: 13.4047, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-075", city: "berlin", name: "Salon Babette", address: "Karl-Marx-Allee 36", district: "mitte",
    lat: 52.5195, lng: 13.4234, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-076", city: "berlin", name: "Süß war gestern", address: "Wühlischstraße 43", district: "friedrichshain",
    lat: 52.5086, lng: 13.4611, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-077", city: "berlin", name: "Vincent Piano Bar", address: "Schiffbauerdamm 6", district: "mitte",
    lat: 52.5216, lng: 13.3861, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-078", city: "berlin", name: "Sohnemann", address: "Niederbarnimstraße 23", district: "friedrichshain",
    lat: 52.5143, lng: 13.4595, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-079", city: "berlin", name: "Havanna Bar", address: "Treskowallee 111", district: "karlshorst",
    lat: 52.4817, lng: 13.5257, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-080", city: "berlin", name: "Bar Voyage", address: "Nollendorfstraße 1", district: "schöneberg",
    lat: 52.498, lng: 13.3563, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-081", city: "berlin", name: "Monster Ronson's Ichiban Karaoke", address: "Warschauer Straße 34", district: "friedrichshain",
    lat: 52.5052, lng: 13.4484, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-082", city: "berlin", name: "Dietrich", address: "Reichenberger Straße 103", district: "kreuzberg",
    lat: 52.4936, lng: 13.4378, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-083", city: "berlin", name: "Frau Luna", address: "Paul-Lincke-Ufer 44", 
    lat: 52.4963, lng: 13.4211, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-084", city: "berlin", name: "X-Bar", address: "Raumerstraße 17", district: "prenzlauer berg",
    lat: 52.5416, lng: 13.4219, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-085", city: "berlin", name: "Dirty Velvet Drinkery", address: "Lychener Straße 39", district: "prenzlauer berg",
    lat: 52.5437, lng: 13.4173, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-086", city: "berlin", name: "Der Weinlobbyist", address: "Kolonnenstraße 62", 
    lat: 52.4866, lng: 13.3593, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-087", city: "berlin", name: "Palm Beach", address: "Adresse unbekannt", 
    lat: 52.5206, lng: 13.4046, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-088", city: "berlin", name: "Huttenklause", address: "Huttenstraße 23", district: "moabit",
    lat: 52.5287, lng: 13.3183, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-089", city: "berlin", name: "Ringbar", address: "Adresse unbekannt", 
    lat: 52.473, lng: 13.4546, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-090", city: "berlin", name: "La Vida Bar", address: "Sonnenallee 218", district: "neukölln",
    lat: 52.4738, lng: 13.4555, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-091", city: "berlin", name: "Rauschecafe", address: "Braunschweiger Straße 77", district: "neukölln",
    lat: 52.4705, lng: 13.4434, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-092", city: "berlin", name: "By Cengiz", address: "Karl-Marx-Straße 210", district: "neukölln",
    lat: 52.4713, lng: 13.4411, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-093", city: "berlin", name: "Roter Rabe", address: "Kottbusser Straße 13", district: "kreuzberg",
    lat: 52.4966, lng: 13.4193, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-094", city: "berlin", name: "Roderich", address: "Adresse unbekannt", 
    lat: 52.5706, lng: 13.4097, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-095", city: "berlin", name: "Society", address: "Stendaler Straße 25", district: "hellersdorf",
    lat: 52.5381, lng: 13.6041, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-096", city: "berlin", name: "Escobar", address: "Adresse unbekannt", 
    lat: 52.4974, lng: 13.4539, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-097", city: "berlin", name: "Country Cheers", address: "Karl-Marx-Allee 63", district: "friedrichshain",
    lat: 52.5185, lng: 13.4323, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-098", city: "berlin", name: "Zart", address: "Schinkestraße 14", district: "neukölln",
    lat: 52.4943, lng: 13.4251, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-099", city: "berlin", name: "Yolanda", address: "Senefelderstraße 27", district: "prenzlauer berg",
    lat: 52.542, lng: 13.4228, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-100", city: "berlin", name: "Trude, Ruth und Goldammer", address: "Flughafenstraße 38", district: "neukölln",
    lat: 52.4813, lng: 13.4279, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-101", city: "berlin", name: "Bar Misirlou", address: "Dunckerstraße 10", district: "prenzlauer berg",
    lat: 52.5423, lng: 13.4209, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-102", city: "berlin", name: "Liberda", address: "Pflügerstraße 19", 
    lat: 52.4915, lng: 13.4288, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-103", city: "berlin", name: "Freya Fuchs", address: "Tegeler Straße 34", district: "wedding",
    lat: 52.542, lng: 13.3567, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-104", city: "berlin", name: "Mad Monkey Room", address: "Danziger Straße 1", district: "prenzlauer berg",
    lat: 52.5411, lng: 13.413, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-105", city: "berlin", name: "meliá tapas", address: "Friedrichstraße 103", 
    lat: 52.5217, lng: 13.3883, drink: "IPA 0,5l", par: 3, type: "craft",
    tags: ["craft", "outdoor", "barrierefrei", "spanish"] },

  { id: "ber-106", city: "berlin", name: "EL FUEGO BAR", address: "Adresse unbekannt", 
    lat: 52.5486, lng: 13.5017, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-107", city: "berlin", name: "The Double Inn", address: "Wilhelminenhofstraße 89", district: "oberschöneweide",
    lat: 52.4618, lng: 13.5121, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-108", city: "berlin", name: "Celo Privat Bar", address: "Ohlauer Straße 37", district: "kreuzberg",
    lat: 52.4946, lng: 13.4296, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-109", city: "berlin", name: "Tante Grete", address: "Stargarder Straße 10", 
    lat: 52.5469, lng: 13.4165, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-110", city: "berlin", name: "Trixie Bar", address: "Stargarder Straße 13", 
    lat: 52.5466, lng: 13.4174, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-111", city: "berlin", name: "Crossroads", address: "Gneiststraße 10", district: "prenzlauer berg",
    lat: 52.5442, lng: 13.4155, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-112", city: "berlin", name: "Le Balto", address: "Hobrechtstraße 28", district: "neukölln",
    lat: 52.4909, lng: 13.4263, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-113", city: "berlin", name: "Slumberland", address: "Goltzstraße 24", district: "schöneberg",
    lat: 52.4968, lng: 13.3538, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-114", city: "berlin", name: "Internezzo III Cafe Bar", address: "Langhansstraße 151", 
    lat: 52.5487, lng: 13.4501, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-115", city: "berlin", name: "Valla Vino", address: "Lychener Straße 3", district: "prenzlauer berg",
    lat: 52.5411, lng: 13.4144, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-116", city: "berlin", name: "Froschkönig, Literatur- & Pianobar", address: "Weisestraße 17", district: "neukölln",
    lat: 52.4769, lng: 13.4239, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-117", city: "berlin", name: "Lost my voice", address: "Rosenthaler Straße 1", district: "mitte",
    lat: 52.5293, lng: 13.4014, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-118", city: "berlin", name: "gainsbourg bar américain", address: "Jeanne-Mammen-Bogen 5", district: "charlottenburg",
    lat: 52.5047, lng: 13.325, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-119", city: "berlin", name: "Posh Bar", address: "Voxstraße 4", district: "tiergarten",
    lat: 52.5087, lng: 13.373, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-120", city: "berlin", name: "Café Melanie", address: "Adresse unbekannt", 
    lat: 52.4245, lng: 13.4361, drink: "Berliner Pilsner 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "barrierefrei", "hausbrauerei"] },

  { id: "ber-121", city: "berlin", name: "AVCI Cocktail-Bar", address: "Adresse unbekannt", 
    lat: 52.5067, lng: 13.4961, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-122", city: "berlin", name: "Krüger", address: "Lychener Straße 26", district: "prenzlauer berg",
    lat: 52.5428, lng: 13.4167, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-123", city: "berlin", name: "Caspar", address: "Greifswalder Straße 167", district: "prenzlauer berg",
    lat: 52.5412, lng: 13.4384, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-124", city: "berlin", name: "Neuro Bar Adlershof", address: "Rudower Chaussee 14", 
    lat: 52.4323, lng: 13.5347, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-125", city: "berlin", name: "Hook Bar", address: "Pankstraße 15", 
    lat: 52.5461, lng: 13.3719, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-126", city: "berlin", name: "Mega", address: "Gerichtstraße 57", district: "wedding",
    lat: 52.5446, lng: 13.3686, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-127", city: "berlin", name: "Mega 3", address: "Wiesenstraße 18", district: "gesundbrunnen",
    lat: 52.5471, lng: 13.375, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "ber-128", city: "berlin", name: "Cafe Ortak", address: "Adresse unbekannt", 
    lat: 52.5504, lng: 13.3787, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-129", city: "berlin", name: "Manico", address: "Breite Straße 1", 
    lat: 52.4734, lng: 13.2991, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-130", city: "berlin", name: "Paka Club", address: "Reinickendorfer Straße 111", district: "wedding",
    lat: 52.544, lng: 13.3694, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "barrierefrei"] },

  { id: "ber-131", city: "berlin", name: "Cafe Bar El Toredo", address: "Stettiner Straße 60", 
    lat: 52.5521, lng: 13.3844, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-132", city: "berlin", name: "Absinth-Druide", address: "Schönhauser Allee 42", 
    lat: 52.5398, lng: 13.4126, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-133", city: "berlin", name: "Wax On", address: "Weserstraße 208", district: "neukölln",
    lat: 52.4881, lng: 13.4299, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-134", city: "berlin", name: "Babylon Café Bar", address: "Adresse unbekannt", 
    lat: 52.5803, lng: 13.3988, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-135", city: "berlin", name: "Tipsy Bear", address: "Eberswalder Straße 21", district: "prenzlauer berg",
    lat: 52.541, lng: 13.4106, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-136", city: "berlin", name: "L.U.X", address: "Schlesische Straße 41", district: "kreuzberg",
    lat: 52.5004, lng: 13.4437, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-137", city: "berlin", name: "Freibeuter", address: "Silvio-Meier-Straße 10", district: "friedrichshain",
    lat: 52.5162, lng: 13.4633, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-138", city: "berlin", name: "K1 Bar", address: "Adresse unbekannt", 
    lat: 52.5744, lng: 13.3598, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-139", city: "berlin", name: "Golden Hour Bar", address: "Samariterstraße 17", district: "friedrichshain",
    lat: 52.5188, lng: 13.4665, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-140", city: "berlin", name: "Hausbar", address: "Rykestraße 54", district: "prenzlauer berg",
    lat: 52.5349, lng: 13.419, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-141", city: "berlin", name: "Walther Bar", address: "Rheinstraße 40", district: "steglitz",
    lat: 52.4649, lng: 13.3288, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-142", city: "berlin", name: "9:00 pm", address: "Adresse unbekannt", 
    lat: 52.5061, lng: 13.3445, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-143", city: "berlin", name: "eleven n lounge", address: "Grünberger Straße 60", district: "friedrichshain",
    lat: 52.5117, lng: 13.4564, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-144", city: "berlin", name: "Schokoladen", address: "Ackerstraße 169", district: "mitte",
    lat: 52.5297, lng: 13.3972, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "juice", "coffee_shop", "hausbrauerei"] },

  { id: "ber-145", city: "berlin", name: "erika & hilde", address: "Weigandufer 9", 
    lat: 52.4857, lng: 13.4422, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-146", city: "berlin", name: "Bar Amelie", address: "Auguststraße 2", district: "mitte",
    lat: 52.5258, lng: 13.3909, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-147", city: "berlin", name: "Blue Island", address: "Karl-Marx-Straße 131a", district: "großziethen",
    lat: 52.3994, lng: 13.4415, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-148", city: "berlin", name: "Mon Ami", address: "Föhrer Straße 7", district: "wedding",
    lat: 52.5411, lng: 13.3481, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-149", city: "berlin", name: "Eschschloraque Rümschrümp", address: "Rosenthaler Straße 39", district: "mitte",
    lat: 52.5245, lng: 13.4017, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-150", city: "berlin", name: "Schlesisch Blau", address: "Köpenicker Straße 1a", 
    lat: 52.5015, lng: 13.4415, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "french", "german"] },

  { id: "ber-151", city: "berlin", name: "Frannz Club", address: "Schönhauser Allee 36", district: "prenzlauer berg",
    lat: 52.5382, lng: 13.4127, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "barrierefrei"] },

  { id: "ber-152", city: "berlin", name: "Henry's Bar", address: "Leonorenstraße 22", 
    lat: 52.4436, lng: 13.3402, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-153", city: "berlin", name: "Kapitalist", address: "Oderberger Straße 2", district: "prenzlauer berg",
    lat: 52.5381, lng: 13.4114, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-154", city: "berlin", name: "Sonntags-Club", address: "Greifenhagener Straße 28", district: "prenzlauer berg",
    lat: 52.5513, lng: 13.4187, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-155", city: "berlin", name: "Nathanja & Heinrich", address: "Weichselstraße 44", district: "neukölln",
    lat: 52.4874, lng: 13.4367, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-156", city: "berlin", name: "Nonno", address: "Akazienstraße 7A", 
    lat: 52.4878, lng: 13.3546, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-157", city: "berlin", name: "La Buvette", address: "Gleimstraße 41", district: "prenzlauer berg",
    lat: 52.5474, lng: 13.409, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "french"] },

  { id: "ber-158", city: "berlin", name: "Mario´s Pub", address: "Adresse unbekannt", 
    lat: 52.4108, lng: 13.2625, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-159", city: "berlin", name: "Hackbarth's", address: "Auguststraße 49a", district: "mitte",
    lat: 52.5278, lng: 13.4007, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-160", city: "berlin", name: "Maigold", address: "Merseburger Straße 7", district: "schöneberg",
    lat: 52.4882, lng: 13.3526, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-161", city: "berlin", name: "Paparazzi 63 - Cafe Shisha Lounge Bar", address: "Adresse unbekannt", 
    lat: 52.5217, lng: 13.5916, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "barrierefrei"] },

  { id: "ber-162", city: "berlin", name: "K-King Karaoke", address: "Leibnizstraße 68", district: "charlottenburg",
    lat: 52.5055, lng: 13.3134, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-163", city: "berlin", name: "Broschek", address: "Weichselstraße 6", district: "neukölln",
    lat: 52.4841, lng: 13.4329, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-164", city: "berlin", name: "Silberfisch", address: "Adresse unbekannt", 
    lat: 52.5254, lng: 13.3919, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-165", city: "berlin", name: "Primitiv Bar", address: "Simon-Dach-Straße 28", district: "friedrichshain",
    lat: 52.5086, lng: 13.4558, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-166", city: "berlin", name: "Pavlov's Bar", address: "Eylauer Straße 26", district: "kreuzberg",
    lat: 52.4876, lng: 13.3751, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-167", city: "berlin", name: "Mirror", address: "Adresse unbekannt", 
    lat: 52.4996, lng: 13.4348, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-168", city: "berlin", name: "Bar Lenciaga", address: "Adresse unbekannt", 
    lat: 52.5513, lng: 13.3679, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-169", city: "berlin", name: "Neue Odessa Bar", address: "Torstraße 89", district: "mitte",
    lat: 52.5297, lng: 13.4057, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-170", city: "berlin", name: "Mondhuegel", address: "Bürknerstraße 6", 
    lat: 52.4934, lng: 13.4253, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-171", city: "berlin", name: "C&B Cafe & Bar", address: "Weitlingstraße 13A", 
    lat: 52.5097, lng: 13.4983, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-172", city: "berlin", name: "Alles GuT", address: "Horstweg 7", district: "charlottenburg",
    lat: 52.5119, lng: 13.2941, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-173", city: "berlin", name: "3", address: "Adresse unbekannt", 
    lat: 52.5269, lng: 13.4146, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-174", city: "berlin", name: "Enoteca Sorsi e Morsi", address: "Marienburger Straße 10", district: "prenzlauer berg",
    lat: 52.5345, lng: 13.4248, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-175", city: "berlin", name: "Hintersee", address: "Greifenhagener Straße 55", district: "prenzlauer berg",
    lat: 52.5476, lng: 13.4152, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-176", city: "berlin", name: "Moto", address: "Paul-Robeson-Straße 46", district: "prenzlauer berg",
    lat: 52.5521, lng: 13.4128, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-177", city: "berlin", name: "2 Dünyar", address: "Willdenowstraße 19A", 
    lat: 52.5428, lng: 13.3623, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-178", city: "berlin", name: "Amigo", address: "Adresse unbekannt", 
    lat: 52.4945, lng: 13.3013, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-179", city: "berlin", name: "Betty F***", address: "Mulackstraße 13", district: "mitte",
    lat: 52.5275, lng: 13.4052, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-180", city: "berlin", name: "Greentree", address: "Heerstraße 8", district: "westend",
    lat: 52.5095, lng: 13.2694, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-181", city: "berlin", name: "The Pig in Paradise", address: "Wichertstraße 10", district: "prenzlauer berg",
    lat: 52.5497, lng: 13.4173, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-182", city: "berlin", name: "Caffe Sammbuca Sportbar", address: "Schottstraße 4", district: "lichtenberg",
    lat: 52.515, lng: 13.4907, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar", "outdoor"] },

  { id: "ber-183", city: "berlin", name: "Feger", address: "Adresse unbekannt", 
    lat: 52.5008, lng: 13.4206, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-184", city: "berlin", name: "Diva", address: "Straßmannstraße 37", 
    lat: 52.523, lng: 13.4527, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-185", city: "berlin", name: "Empor Sportsbar", address: "Milastraße 5", district: "prenzlauer berg",
    lat: 52.5452, lng: 13.411, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar", "outdoor", "barrierefrei"] },

  { id: "ber-186", city: "berlin", name: "Freunde", address: "Damaschkestraße", 
    lat: 52.5011, lng: 13.2982, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-187", city: "berlin", name: "Volksbar", address: "Rosa-Luxemburg-Straße 39", district: "mitte",
    lat: 52.5267, lng: 13.4107, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-188", city: "berlin", name: "CoCo", address: "Turmstraße 54", district: "moabit",
    lat: 52.5273, lng: 13.3312, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-189", city: "berlin", name: "ČSA", address: "Karl-Marx-Allee 96", district: "friedrichshain",
    lat: 52.5167, lng: 13.4424, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-190", city: "berlin", name: "Punta Sportsbar", address: "Adresse unbekannt", 
    lat: 52.4638, lng: 13.3311, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar", "outdoor", "barrierefrei"] },

  { id: "ber-191", city: "berlin", name: "Ritchie", address: "Oranienstraße 174", district: "kreuzberg",
    lat: 52.5014, lng: 13.4186, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-192", city: "berlin", name: "Casablanca", address: "Adresse unbekannt", 
    lat: 52.4349, lng: 13.2597, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-193", city: "berlin", name: "Atelier", address: "Kurfürstendamm 110", 
    lat: 52.4979, lng: 13.2927, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-194", city: "berlin", name: "Rodi Cocktailbar", address: "Holzmarktstraße 75", district: "mitte",
    lat: 52.5159, lng: 13.4188, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "german"] },

  { id: "ber-195", city: "berlin", name: "Lale", address: "Müllerstraße 121", district: "wedding",
    lat: 52.5541, lng: 13.3451, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-196", city: "berlin", name: "Caipi Bar", address: "Greifswalder Straße 191", district: "prenzlauer berg",
    lat: 52.5357, lng: 13.432, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-197", city: "berlin", name: "Bar Tausend", address: "Schiffbauerdamm 11", district: "mitte",
    lat: 52.5208, lng: 13.3847, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-198", city: "berlin", name: "Zaffke", address: "Rathenower Straße 44", district: "moabit",
    lat: 52.5335, lng: 13.35, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "ber-199", city: "berlin", name: "O Tannenbaum", address: "Hermannstraße 232", district: "neukölln",
    lat: 52.4816, lng: 13.4251, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-200", city: "berlin", name: "Mastul", address: "Liebenwalder Straße 33", district: "wedding",
    lat: 52.552, lng: 13.3582, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-201", city: "berlin", name: "Albert", address: "Berliner Allee 122", district: "weißensee",
    lat: 52.5504, lng: 13.4611, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-202", city: "berlin", name: "Sportsbar", address: "Baumschulenstraße 11", district: "baumschulenweg",
    lat: 52.4668, lng: 13.4889, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ber-203", city: "berlin", name: "Moonlight", address: "Frankfurter Allee 98", district: "friedrichshain",
    lat: 52.5137, lng: 13.4728, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-204", city: "berlin", name: "Salut!", address: "Goltzstraße 7", 
    lat: 52.4911, lng: 13.3534, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-205", city: "berlin", name: "Treff 25", address: "Gleimstraße 25", 
    lat: 52.5474, lng: 13.4114, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-206", city: "berlin", name: "Patesô", address: "Novalisstraße 2", district: "mitte",
    lat: 52.5281, lng: 13.389, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-207", city: "berlin", name: "Bijou Bar", address: "Monbijouplatz 1", district: "mitte",
    lat: 52.523, lng: 13.4, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-208", city: "berlin", name: "Bistro und Bar \"New Wave\"", address: "Pistoriusstraße 90", district: "weißensee",
    lat: 52.5563, lng: 13.436, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-209", city: "berlin", name: "WeserKulisse", address: "Adresse unbekannt", 
    lat: 52.4884, lng: 13.4276, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-210", city: "berlin", name: "Profi Sportsbar", address: "Sonnenallee 166", district: "neukölln",
    lat: 52.4777, lng: 13.4478, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar", "outdoor"] },

  { id: "ber-211", city: "berlin", name: "Bar Südwest", address: "Südwestkorso", district: "friedenau",
    lat: 52.4733, lng: 13.3222, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-212", city: "berlin", name: "Kumpelnest 3000", address: "Adresse unbekannt", 
    lat: 52.5031, lng: 13.3664, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-213", city: "berlin", name: "Ajpnia", address: "Wartburgstraße 18", district: "schöneberg",
    lat: 52.4868, lng: 13.343, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-214", city: "berlin", name: "Kindl Stuben", address: "Sonnenallee 92", district: "neukölln",
    lat: 52.4825, lng: 13.4381, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "german"] },

  { id: "ber-215", city: "berlin", name: "XXL Cruising-Club", address: "Bornholmer Straße 7", district: "prenzlauer berg",
    lat: 52.5542, lng: 13.4121, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-216", city: "berlin", name: "Q62", address: "Schönhauser Allee 111", district: "prenzlauer berg",
    lat: 52.5512, lng: 13.4136, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-217", city: "berlin", name: "Laksmi", address: "Wrangelstraße 93", district: "kreuzberg",
    lat: 52.4997, lng: 13.4395, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-218", city: "berlin", name: "Schmetterling", address: "Adresse unbekannt", 
    lat: 52.4944, lng: 13.4289, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-219", city: "berlin", name: "Becketts Kopf", address: "Pappelallee 64", district: "prenzlauer berg",
    lat: 52.5455, lng: 13.4169, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-220", city: "berlin", name: "Coconut Cafe / Bar / Lounge", address: "Anton-Saefkow-Platz 11", district: "fennpfuhl",
    lat: 52.5292, lng: 13.47, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor", "barrierefrei"] },

  { id: "ber-221", city: "berlin", name: "Cento Passi", address: "Krossener Straße 34", district: "friedrichshain",
    lat: 52.5094, lng: 13.465, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-222", city: "berlin", name: "Hotelbar Rix", address: "Rollbergstraße", 
    lat: 52.4784, lng: 13.4269, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-223", city: "berlin", name: "Kunstfabrik Schlot", address: "Invalidenstraße 117", district: "mitte",
    lat: 52.5303, lng: 13.3852, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-224", city: "berlin", name: "Capone\\'s Bar", address: "Adresse unbekannt", 
    lat: 52.5713, lng: 13.5684, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-225", city: "berlin", name: "Palladium Berlin", address: "Adresse unbekannt", district: "mitte",
    lat: 52.5222, lng: 13.3988, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-226", city: "berlin", name: "meisterschueler", address: "Friedrichstraße 105B", 
    lat: 52.5226, lng: 13.3887, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-227", city: "berlin", name: "Continental Club", address: "Uhlandstraße 124", 
    lat: 52.4906, lng: 13.3233, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-228", city: "berlin", name: "Geist im Glas", address: "Lenaustraße 27", district: "neukölln",
    lat: 52.4901, lng: 13.4248, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "american", "diner"] },

  { id: "ber-229", city: "berlin", name: "Rosie's", address: "Adresse unbekannt", 
    lat: 52.5301, lng: 13.4019, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-230", city: "berlin", name: "Gravity", address: "Lehrter Straße 55", district: "moabit",
    lat: 52.5342, lng: 13.3587, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-231", city: "berlin", name: "Varadero", address: "Vorbergstraße 11", district: "schöneberg",
    lat: 52.4891, lng: 13.3552, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "cuban"] },

  { id: "ber-232", city: "berlin", name: "Marlene Bar", address: "Adresse unbekannt", 
    lat: 52.5068, lng: 13.3451, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-233", city: "berlin", name: "Le Jardin", address: "Kleine Präsidentenstraße 4", 
    lat: 52.5225, lng: 13.4, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-234", city: "berlin", name: "Freetime", address: "Adresse unbekannt", 
    lat: 52.5557, lng: 13.4793, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-235", city: "berlin", name: "Lab.Oratory", address: "Am Wriezener Bahnhof", district: "friedrichshain",
    lat: 52.5116, lng: 13.443, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-236", city: "berlin", name: "Green Door Bar", address: "Winterfeldtstraße 50", district: "schöneberg",
    lat: 52.497, lng: 13.3529, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-237", city: "berlin", name: "Puro", address: "Adresse unbekannt", 
    lat: 52.4981, lng: 13.3081, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-238", city: "berlin", name: "Café Augusta", address: "Jonasstraße 22", district: "neukölln",
    lat: 52.4715, lng: 13.4337, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "breakfast", "cake", "coffee_shop", "international"] },

  { id: "ber-239", city: "berlin", name: "Suzie Mambo", address: "Veteranenstraße 16", district: "mitte",
    lat: 52.5335, lng: 13.4023, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-240", city: "berlin", name: "Timber Doodle Bar", address: "Wühlischstraße 37", district: "friedrichshain",
    lat: 52.5091, lng: 13.4589, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-241", city: "berlin", name: "Landebahn 3.0", address: "Wiesenweg 1", district: "selchow",
    lat: 52.3636, lng: 13.4718, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-242", city: "berlin", name: "Roberta", address: "Zionskirchstraße 7", district: "mitte",
    lat: 52.5356, lng: 13.4013, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-243", city: "berlin", name: "Stagger Lee", address: "Nollendorfstraße 27", district: "schöneberg",
    lat: 52.4976, lng: 13.3515, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-244", city: "berlin", name: "Nachbar", address: "Maaßenstraße 12", district: "schöneberg",
    lat: 52.4975, lng: 13.3541, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-245", city: "berlin", name: "City Bar Sopot", address: "Adresse unbekannt", 
    lat: 52.4905, lng: 13.4347, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "croatian"] },

  { id: "ber-246", city: "berlin", name: "Tristeza", address: "Pannierstraße 5", district: "neukölln",
    lat: 52.4866, lng: 13.431, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-247", city: "berlin", name: "Kamine & Wein", address: "Prinzenallee 58", district: "gesundbrunnen",
    lat: 52.5579, lng: 13.3853, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-248", city: "berlin", name: "Kürbiskern Zauberbar", address: "Kopernikusstraße 23", district: "friedrichshain",
    lat: 52.5104, lng: 13.4544, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-249", city: "berlin", name: "CuBar", address: "Paulsborner Straße", district: "wilmersdorf",
    lat: 52.4985, lng: 13.307, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-250", city: "berlin", name: "Arkaoda", address: "Karl-Marx-Platz 16", district: "neukölln",
    lat: 52.4739, lng: 13.4426, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-251", city: "berlin", name: "Balera Weinhandlung", address: "Karl-Marx-Platz 6", district: "neukölln",
    lat: 52.4736, lng: 13.4417, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-252", city: "berlin", name: "Bar96", address: "Leibnizstraße 43", district: "charlottenburg",
    lat: 52.5042, lng: 13.3138, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-253", city: "berlin", name: "Billardaire", address: "Monumentenstraße 35", district: "schöneberg",
    lat: 52.4892, lng: 13.3653, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-254", city: "berlin", name: "Weinberg", address: "Adresse unbekannt", 
    lat: 52.5327, lng: 13.424, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-255", city: "berlin", name: "Jatz", address: "Gottschedstraße 2", district: "gesundbrunnen",
    lat: 52.5502, lng: 13.3692, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-256", city: "berlin", name: "Mega Spass Mega Bar", address: "Adresse unbekannt", 
    lat: 52.4854, lng: 13.4491, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-257", city: "berlin", name: "Rum Trader", address: "Adresse unbekannt", 
    lat: 52.4984, lng: 13.3266, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-258", city: "berlin", name: "Mozartkugel", address: "Adresse unbekannt", 
    lat: 52.5422, lng: 13.2379, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-259", city: "berlin", name: "Fuks", address: "Hobrechtstraße 64", district: "neukölln",
    lat: 52.4897, lng: 13.4263, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-260", city: "berlin", name: "Gaststätte Berlinicke Stuben", address: "Adresse unbekannt", 
    lat: 52.4664, lng: 13.3776, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-261", city: "berlin", name: "Destille", address: "Adresse unbekannt", 
    lat: 52.5518, lng: 13.3619, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-262", city: "berlin", name: "Kubis Point", address: "Medebacher Weg 14", district: "tegel",
    lat: 52.5869, lng: 13.2809, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "cake"] },

  { id: "ber-263", city: "berlin", name: "Gallina", address: "Adresse unbekannt", 
    lat: 52.5023, lng: 13.4305, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-264", city: "berlin", name: "Poropati", address: "Weserstraße 79", 
    lat: 52.4804, lng: 13.4466, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-265", city: "berlin", name: "Lambo Bar", address: "Torfstraße 9", 
    lat: 52.5402, lng: 13.3525, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-266", city: "berlin", name: "Curly", address: "Adolfstraße 17", district: "wedding",
    lat: 52.5479, lng: 13.3669, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-267", city: "berlin", name: "Herman Belgian Bar", address: "Schönhauser Allee 173", district: "prenzlauer berg",
    lat: 52.5324, lng: 13.4121, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-268", city: "berlin", name: "Tetova", address: "Adresse unbekannt", 
    lat: 52.5483, lng: 13.3626, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-269", city: "berlin", name: "Osmanli", address: "Adresse unbekannt", 
    lat: 52.5466, lng: 13.369, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-270", city: "berlin", name: "Piano Bar", address: "Seestraße 57", district: "wedding",
    lat: 52.5518, lng: 13.3554, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-271", city: "berlin", name: "Kiss Lounge", address: "Adresse unbekannt", 
    lat: 52.5501, lng: 13.3646, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-272", city: "berlin", name: "Henrietta", address: "Malplaquetstraße 28", 
    lat: 52.5514, lng: 13.358, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "hausbrauerei"] },

  { id: "ber-273", city: "berlin", name: "Yeşilirmak", address: "Prinz-Eugen-Straße 23", 
    lat: 52.5473, lng: 13.3653, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-274", city: "berlin", name: "Horke's Café & Bar", address: "Adresse unbekannt", 
    lat: 52.5607, lng: 13.0997, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-275", city: "berlin", name: "B-Lage", address: "Mareschstraße 1", district: "neukölln",
    lat: 52.4737, lng: 13.4512, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-276", city: "berlin", name: "Vesper Bar", address: "Kurfürstendamm", 
    lat: 52.4993, lng: 13.3048, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-277", city: "berlin", name: "Café Helium", address: "Mariannenstraße 4", 
    lat: 52.5011, lng: 13.4234, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-278", city: "berlin", name: "Goldfisch", address: "Grünberger Straße 67", district: "friedrichshain",
    lat: 52.5116, lng: 13.4583, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-279", city: "berlin", name: "Hefner", address: "Kantstraße 146", district: "charlottenburg",
    lat: 52.5056, lng: 13.3233, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-280", city: "berlin", name: "Blauer Affe", address: "Adresse unbekannt", 
    lat: 52.4791, lng: 13.4497, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-281", city: "berlin", name: "EX YU Lounge", address: "Adresse unbekannt", 
    lat: 52.5648, lng: 13.3242, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-282", city: "berlin", name: "12", address: "Sprengelstraße 12", district: "wedding",
    lat: 52.5421, lng: 13.3556, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-283", city: "berlin", name: "Mondlicht", address: "Wilhelmshavener Straße 70", 
    lat: 52.5272, lng: 13.3412, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-284", city: "berlin", name: "Tirrée", address: "Birkenstraße 46", district: "moabit",
    lat: 52.532, lng: 13.3416, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "breakfast"] },

  { id: "ber-285", city: "berlin", name: "Kumami", address: "Kietzer Straße 3", district: "köpenick",
    lat: 52.4446, lng: 13.5777, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "japanese"] },

  { id: "ber-286", city: "berlin", name: "Schwarze Traube", address: "Wrangelstraße 24", district: "kreuzberg",
    lat: 52.5022, lng: 13.4329, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-287", city: "berlin", name: "Absolut", address: "Pichelsdorfer Straße 98", district: "wilhelmstadt",
    lat: 52.5235, lng: 13.1978, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-288", city: "berlin", name: "Q1 Cafe Lounge", address: "Adresse unbekannt", 
    lat: 52.551, lng: 13.51, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "barrierefrei"] },

  { id: "ber-289", city: "berlin", name: "Cafe Trifft", address: "Triftstraße 7", 
    lat: 52.5444, lng: 13.3597, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-290", city: "berlin", name: "Bar Solut", address: "Müllerstraße 157", district: "wedding",
    lat: 52.5449, lng: 13.3613, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-291", city: "berlin", name: "Barbie Bar", address: "Mehringdamm 77", 
    lat: 52.4895, lng: 13.3868, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-292", city: "berlin", name: "Mandingo-Diskothek", address: "Mehringdamm 107", district: "kreuzberg",
    lat: 52.4871, lng: 13.3865, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-293", city: "berlin", name: "Suspiria", address: "Bergmannstraße 104", district: "kreuzberg",
    lat: 52.49, lng: 13.389, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-294", city: "berlin", name: "Pool & Cigars", address: "Adresse unbekannt", 
    lat: 52.5397, lng: 13.4141, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-295", city: "berlin", name: "Riwaq Bar Und Restaurant", address: "Skalitzer Straße 68", district: "kreuzberg",
    lat: 52.5003, lng: 13.4397, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-296", city: "berlin", name: "Studio 8", address: "Grüntaler Straße 8", district: "gesundbrunnen",
    lat: 52.5518, lng: 13.3866, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-297", city: "berlin", name: "Bistro Spumante", address: "Reichenberger Straße 73", district: "kreuzberg",
    lat: 52.4943, lng: 13.4338, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-298", city: "berlin", name: "Café & Bar", address: "Karl-Marx-Straße 212", district: "neukölln",
    lat: 52.4708, lng: 13.4412, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-299", city: "berlin", name: "Cafe Barman", address: "An der Urania 5", 
    lat: 52.5021, lng: 13.3492, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-300", city: "berlin", name: "It's A Bar", address: "Spreewaldplatz 14", 
    lat: 52.4982, lng: 13.4308, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-301", city: "berlin", name: "Surprise Club", address: "Potsdamer Straße 84", district: "tiergarten",
    lat: 52.5034, lng: 13.3656, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-302", city: "berlin", name: "Granada", address: "Seestraße 95", district: "wedding",
    lat: 52.5504, lng: 13.351, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-303", city: "berlin", name: "Hafenbar Tegel", address: "Wilkestraße 1", district: "tegel",
    lat: 52.5884, lng: 13.2744, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-304", city: "berlin", name: "Mango Cocktailbar", address: "Adresse unbekannt", 
    lat: 52.4446, lng: 13.5862, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "barrierefrei"] },

  { id: "ber-305", city: "berlin", name: "Sowieso Neukölln e.V.", address: "Weisestraße 24", district: "neukölln",
    lat: 52.4754, lng: 13.4244, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-306", city: "berlin", name: "Weinverein am Berg", address: "Fidicinstraße 38", 
    lat: 52.4872, lng: 13.3891, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei", "international"] },

  { id: "ber-307", city: "berlin", name: "The Black Lodge", address: "Adresse unbekannt", 
    lat: 52.4922, lng: 13.4244, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-308", city: "berlin", name: "Musikcafé Sterlitz", address: "Seestraße 104", district: "wedding",
    lat: 52.5491, lng: 13.3484, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-309", city: "berlin", name: "Fitcher's Vogel", address: "Warschauer Straße 26", district: "friedrichshain",
    lat: 52.5104, lng: 13.4512, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-310", city: "berlin", name: "Hurricane", address: "Ufnaustraße 2", district: "moabit",
    lat: 52.5292, lng: 13.3173, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-311", city: "berlin", name: "George R", address: "Wilhelmshavener Straße 57", district: "moabit",
    lat: 52.5302, lng: 13.3412, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-312", city: "berlin", name: "Bar Zentral", address: "Lotte-Lenya-Bogen 551", district: "charlottenburg",
    lat: 52.5051, lng: 13.329, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-313", city: "berlin", name: "Monkey Bar", address: "Budapester Straße 40", 
    lat: 52.5057, lng: 13.3377, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-314", city: "berlin", name: "X Cafe Lounge", address: "Wollankstraße 96", district: "gesundbrunnen",
    lat: 52.5636, lng: 13.3921, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-315", city: "berlin", name: "Café Löwe", address: "Soldiner Straße 88", district: "gesundbrunnen",
    lat: 52.5583, lng: 13.3869, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-316", city: "berlin", name: "Flamingo 33", address: "Wollankstraße 68", district: "gesundbrunnen",
    lat: 52.5605, lng: 13.3882, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-317", city: "berlin", name: "Graffiti Lounge", address: "Kattegatstraße 2", district: "gesundbrunnen",
    lat: 52.5641, lng: 13.392, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-318", city: "berlin", name: "Academie Lounge", address: "Köthener Straße 44", district: "kreuzberg",
    lat: 52.5072, lng: 13.3776, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-319", city: "berlin", name: "Maza Lounge", address: "Karl-Marx-Allee 121", district: "friedrichshain",
    lat: 52.5171, lng: 13.4473, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-320", city: "berlin", name: "Tennis", address: "Adresse unbekannt", 
    lat: 52.481, lng: 13.4294, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-321", city: "berlin", name: "Steckenpferd", address: "Adresse unbekannt", 
    lat: 52.4128, lng: 13.5152, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-322", city: "berlin", name: "Amalia", address: "Selkestraße 27", district: "neukölln",
    lat: 52.4701, lng: 13.4369, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei", "hausbrauerei"] },

  { id: "ber-323", city: "berlin", name: "Prachtwerk", address: "Ganghoferstraße 2", 
    lat: 52.4791, lng: 13.4388, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-324", city: "berlin", name: "Horst & Jutta", address: "Scharnweberstraße 42", district: "friedrichshain",
    lat: 52.5128, lng: 13.4651, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-325", city: "berlin", name: "Zum goldenen Handwerk", address: "Obentrautstraße 36", 
    lat: 52.4968, lng: 13.3852, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-326", city: "berlin", name: "Queso y Jamon Cocktails & Tapas", address: "Schönhauser Allee 36-39", district: "prenzlauer berg",
    lat: 52.5385, lng: 13.414, drink: "IPA 0,5l", par: 3, type: "craft",
    tags: ["craft", "hausbrauerei"] },

  { id: "ber-327", city: "berlin", name: "Barrel Weinbar", address: "Petersburger Platz 1", district: "friedrichshain",
    lat: 52.5218, lng: 13.4495, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-328", city: "berlin", name: "Kleopatra Shishabar", address: "Adresse unbekannt", 
    lat: 52.5287, lng: 13.3856, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-329", city: "berlin", name: "solar", address: "Stresemannstraße 76", district: "kreuzberg",
    lat: 52.5043, lng: 13.3837, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-330", city: "berlin", name: "KiKi Sol", address: "Reinickendorfer Straße 96", district: "wedding",
    lat: 52.5476, lng: 13.3689, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-331", city: "berlin", name: "Das Rössle", address: "Braunschweiger Straße 51", district: "neukölln",
    lat: 52.4709, lng: 13.4468, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-332", city: "berlin", name: "Brinks", address: "Hasenheide 117", district: "kreuzberg",
    lat: 52.4864, lng: 13.4234, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-333", city: "berlin", name: "Oldieclub", address: "Scharnweberstraße 55a", district: "reinickendorf",
    lat: 52.5676, lng: 13.3141, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-334", city: "berlin", name: "Adara", address: "Boxhagener Straße 75", district: "friedrichshain",
    lat: 52.5073, lng: 13.4684, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-335", city: "berlin", name: "Perro Loco", address: "Sonntagstraße 5", district: "friedrichshain",
    lat: 52.5052, lng: 13.4672, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-336", city: "berlin", name: "Elegance Cafe", address: "Genter Straße 7", district: "wedding",
    lat: 52.5444, lng: 13.3579, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-337", city: "berlin", name: "Schlüter's", address: "Schlüterstraße 75", district: "charlottenburg",
    lat: 52.509, lng: 13.3183, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-338", city: "berlin", name: "Café Diseño", address: "Adresse unbekannt", 
    lat: 52.5586, lng: 13.413, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-339", city: "berlin", name: "Helle Beach", address: "Lyonel-Feininger-Straße 1", 
    lat: 52.5371, lng: 13.6073, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-340", city: "berlin", name: "Zap", address: "Seelingstraße 21", district: "charlottenburg",
    lat: 52.5156, lng: 13.2931, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-341", city: "berlin", name: "Miami Cocktail Bar", address: "Kurt-Weill-Gasse 7", district: "hellersdorf",
    lat: 52.5376, lng: 13.6036, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-342", city: "berlin", name: "Fabelhaft Bar", address: "Schönleinstraße 6", district: "kreuzberg",
    lat: 52.4923, lng: 13.421, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "coffee_shop"] },

  { id: "ber-343", city: "berlin", name: "Sheriff Teddy Bar", address: "Weserstraße 25", 
    lat: 52.5115, lng: 13.4635, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-344", city: "berlin", name: "HASE", address: "Gabriel-Max-Straße 3", district: "friedrichshain",
    lat: 52.5099, lng: 13.4583, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-345", city: "berlin", name: "Barkamp", address: "Harbigstraße 14", 
    lat: 52.5027, lng: 13.2632, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-346", city: "berlin", name: "Kieztreff", address: "Alt-Buch 38A", district: "buch",
    lat: 52.6353, lng: 13.4999, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-347", city: "berlin", name: "Lounge Bar Café", address: "Grunewaldstraße 53", district: "schöneberg",
    lat: 52.4881, lng: 13.3374, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-348", city: "berlin", name: "Bar Buñuel", address: "Bergstraße 25", district: "mitte",
    lat: 52.5317, lng: 13.3945, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-349", city: "berlin", name: "Baden im Wein", address: "Schönhauser Allee 155", 
    lat: 52.5376, lng: 13.4118, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-350", city: "berlin", name: "Kitty Cheng", address: "Adresse unbekannt", 
    lat: 52.5299, lng: 13.4043, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-351", city: "berlin", name: "Villa Neukölln", address: "Hermannstraße 233", 
    lat: 52.4821, lng: 13.4251, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-352", city: "berlin", name: "Bar 55°", address: "Rheinstraße 55", district: "friedenau",
    lat: 52.4693, lng: 13.3333, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "hausbrauerei"] },

  { id: "ber-353", city: "berlin", name: "Galander Kreuzberg", address: "Großbeerenstraße 54", district: "kreuzberg",
    lat: 52.4919, lng: 13.3831, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-354", city: "berlin", name: "Offen Bar", address: "Hauptstraße 80B", district: "friedenau",
    lat: 52.4722, lng: 13.3364, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "ber-355", city: "berlin", name: "Café Keese", address: "Bismarckstraße 108", district: "charlottenburg",
    lat: 52.512, lng: 13.3166, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-356", city: "berlin", name: "Voulez Vouz", address: "Sredzkistraße 65", district: "prenzlauer berg",
    lat: 52.5375, lng: 13.4224, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-357", city: "berlin", name: "Apothekenbar", address: "Adresse unbekannt", 
    lat: 52.5017, lng: 13.4239, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-358", city: "berlin", name: "iLand", address: "Tempelhofer Damm 227", district: "tempelhof",
    lat: 52.4544, lng: 13.3857, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-359", city: "berlin", name: "Bar Steinkeller", address: "Steinstraße 20", district: "mitte",
    lat: 52.5273, lng: 13.404, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-360", city: "berlin", name: "Fadice Bar", address: "Havelstraße", district: "spandau",
    lat: 52.5386, lng: 13.2061, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-361", city: "berlin", name: "Arizona", address: "Neue Grottkauer Straße 3", 
    lat: 52.5294, lng: 13.5923, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-362", city: "berlin", name: "HELLERSDORFER PERLE", address: "Riesaer Straße 102", district: "hellersdorf",
    lat: 52.5305, lng: 13.6211, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-363", city: "berlin", name: "Sporthalle Charlottenburg", address: "Adresse unbekannt", 
    lat: 52.5233, lng: 13.3056, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ber-364", city: "berlin", name: "Pozzi Bar", address: "Potsdamer Straße 124", district: "schöneberg",
    lat: 52.4996, lng: 13.3625, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-365", city: "berlin", name: "Ciro Bar", address: "Rankestraße 31", district: "charlottenburg",
    lat: 52.5031, lng: 13.3348, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-366", city: "berlin", name: "Rotbart", address: "Böhmische Straße 43", district: "neukölln",
    lat: 52.4742, lng: 13.4492, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-367", city: "berlin", name: "Galander", address: "Adresse unbekannt", 
    lat: 52.5053, lng: 13.3015, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-368", city: "berlin", name: "What's up", address: "Dominicusstraße 36", district: "schöneberg",
    lat: 52.4813, lng: 13.3489, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-369", city: "berlin", name: "Kaschk by Brlo", address: "Linienstraße 40", district: "mitte",
    lat: 52.5284, lng: 13.4099, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-370", city: "berlin", name: "The Golden", address: "Adresse unbekannt", 
    lat: 52.5004, lng: 13.3006, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-371", city: "berlin", name: "Vin Aqua Vin", address: "Weserstraße 204", 
    lat: 52.4879, lng: 13.4306, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-372", city: "berlin", name: "Zig Zag", address: "Hauptstraße 89", district: "schöneberg",
    lat: 52.4751, lng: 13.34, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-373", city: "berlin", name: "Windhorst", address: "Dorotheenstraße 65", district: "mitte",
    lat: 52.5184, lng: 13.3862, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-374", city: "berlin", name: "Jansen Bar", address: "Gotenstraße 71", district: "schöneberg",
    lat: 52.483, lng: 13.3604, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-375", city: "berlin", name: "Cocktailbar Zeitlos IV", address: "Schlüterstraße 60", district: "charlottenburg",
    lat: 52.5054, lng: 13.3177, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-376", city: "berlin", name: "Gestrandet an der Jannowitzbrücke", address: "Rolandufer", district: "mitte",
    lat: 52.5149, lng: 13.4174, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-377", city: "berlin", name: "Voima", address: "Adresse unbekannt", 
    lat: 52.4967, lng: 13.3579, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-378", city: "berlin", name: "Blarney Pub", address: "Methfesselstraße 4", district: "kreuzberg",
    lat: 52.4895, lng: 13.3854, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-379", city: "berlin", name: "KK2 Kneipenkönig \"zwei\"", address: "Adresse unbekannt", 
    lat: 52.4662, lng: 13.323, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-380", city: "berlin", name: "Zum Lindenblatt", address: "Bornstraße 9", district: "friedenau",
    lat: 52.466, lng: 13.3242, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-381", city: "berlin", name: "Nachtleben Berlin", address: "Torstraße 58", 
    lat: 52.5287, lng: 13.4088, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-382", city: "berlin", name: "Alaska", address: "Reuterstraße 85", 
    lat: 52.4829, lng: 13.4288, drink: "IPA 0,5l", par: 3, type: "craft",
    tags: ["craft", "outdoor", "barrierefrei", "tapas"] },

  { id: "ber-383", city: "berlin", name: "Neues Ufer", address: "Hauptstraße 157", district: "schöneberg",
    lat: 52.4895, lng: 13.3598, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-384", city: "berlin", name: "Café und Game", address: "Grünauer Straße 4", 
    lat: 52.4439, lng: 13.5689, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-385", city: "berlin", name: "Foersters Feine Biere", address: "Bornstraße 20", 
    lat: 52.4666, lng: 13.3219, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-386", city: "berlin", name: "Aliyah", address: "Rheinstraße 36", district: "friedenau",
    lat: 52.4661, lng: 13.3293, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-387", city: "berlin", name: "Diele", address: "Adresse unbekannt", 
    lat: 52.4546, lng: 13.577, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-388", city: "berlin", name: "Tusches Kick & Rush", address: "Am Generalshof 3", district: "köpenick",
    lat: 52.4526, lng: 13.5754, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ber-389", city: "berlin", name: "Molly Malones", address: "Torellstraße 1", district: "friedrichshain",
    lat: 52.5112, lng: 13.447, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-390", city: "berlin", name: "Fairytale", address: "Am Friedrichshain 24", district: "prenzlauer berg",
    lat: 52.5287, lng: 13.4282, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-391", city: "berlin", name: "Barkett", address: "Czeminskistraße 10", district: "schöneberg",
    lat: 52.4881, lng: 13.364, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-392", city: "berlin", name: "Zoo Loge", address: "Adresse unbekannt", 
    lat: 52.506, lng: 13.3338, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-393", city: "berlin", name: "Caravaggi Naturwein", address: "Lettestraße 3", district: "prenzlauer berg",
    lat: 52.543, lng: 13.4202, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "italian"] },

  { id: "ber-394", city: "berlin", name: "Fjord", address: "Eisenacher Straße 86", district: "schöneberg",
    lat: 52.4902, lng: 13.3494, drink: "IPA 0,5l", par: 3, type: "craft",
    tags: ["craft", "outdoor", "norwegian"] },

  { id: "ber-395", city: "berlin", name: "Ernst", address: "Solmsstraße 29", 
    lat: 52.4895, lng: 13.3922, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-396", city: "berlin", name: "Miami Club & Cocktailbar", address: "Seddiner Straße 8", district: "friedrichsfelde",
    lat: 52.5134, lng: 13.5222, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-397", city: "berlin", name: "Town Bar", address: "Werderscher Markt 11", district: "mitte",
    lat: 52.5151, lng: 13.3979, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-398", city: "berlin", name: "The Bar Fox", address: "Adresse unbekannt", 
    lat: 52.5026, lng: 13.3223, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-399", city: "berlin", name: "Arena Bar 1136", address: "Adresse unbekannt", 
    lat: 52.5068, lng: 13.5124, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar", "outdoor"] },

  { id: "ber-400", city: "berlin", name: "Collins", address: "Schönfließer Straße 17", 
    lat: 52.6692, lng: 13.2879, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-401", city: "berlin", name: "Marienhof", address: "Marienburger Straße 7", district: "prenzlauer berg",
    lat: 52.5348, lng: 13.424, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-402", city: "berlin", name: "Wohnzimmer", address: "Lettestraße 6", district: "prenzlauer berg",
    lat: 52.5434, lng: 13.4192, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-403", city: "berlin", name: "Keith", address: "Schillerpromenade 2", district: "neukölln",
    lat: 52.4782, lng: 13.4213, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "hausbrauerei"] },

  { id: "ber-404", city: "berlin", name: "Simon's Bar", address: "Simon-Dach-Straße 40", 
    lat: 52.5112, lng: 13.457, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-405", city: "berlin", name: "Meißner's Probierstube", address: "Bochumer Straße 6", district: "moabit",
    lat: 52.5235, lng: 13.3379, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-406", city: "berlin", name: "wein.doch.nicht", address: "Schützenstraße 3", district: "steglitz",
    lat: 52.455, lng: 13.3245, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-407", city: "berlin", name: "Cherry Lounge", address: "Waidmannsluster Damm 175", district: "waidmannslust",
    lat: 52.607, lng: 13.3191, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-408", city: "berlin", name: "Shisha Sova Lounge", address: "Koloniestraße 9", district: "gesundbrunnen",
    lat: 52.5553, lng: 13.3774, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-409", city: "berlin", name: "Moje Bar", address: "Brüsseler Straße 6", district: "wedding",
    lat: 52.5483, lng: 13.352, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-410", city: "berlin", name: "Wilma", address: "Adresse unbekannt", 
    lat: 52.5608, lng: 13.3729, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-411", city: "berlin", name: "alphonse", address: "Sanderstraße 2", district: "neukölln",
    lat: 52.4921, lng: 13.4234, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-412", city: "berlin", name: "Cafe Warschau", address: "Sonnenallee 27", 
    lat: 52.4866, lng: 13.4295, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-413", city: "berlin", name: "lütt", address: "Adresse unbekannt", 
    lat: 52.4939, lng: 13.4291, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-414", city: "berlin", name: "Sharlie Cheen Bar", address: "Brunnenstraße 196", district: "mitte",
    lat: 52.5302, lng: 13.4007, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-415", city: "berlin", name: "Karakas Bar", address: "Kurfürstenstraße 9", district: "tiergarten",
    lat: 52.4992, lng: 13.3675, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-416", city: "berlin", name: "Timeless", address: "Hauptstraße 34", district: "schöneberg",
    lat: 52.4846, lng: 13.3525, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-417", city: "berlin", name: "Qiu", address: "Adresse unbekannt", 
    lat: 52.509, lng: 13.374, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-418", city: "berlin", name: "Dr. Maury in vino sanitas", address: "Schönhauser Allee 62", district: "prenzlauer berg",
    lat: 52.5457, lng: 13.4133, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-419", city: "berlin", name: "Limonadier", address: "Nostitzstraße 12", district: "kreuzberg",
    lat: 52.4919, lng: 13.3905, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-420", city: "berlin", name: "Heile Welt", address: "Motzstraße 5", district: "schöneberg",
    lat: 52.4988, lng: 13.3516, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-421", city: "berlin", name: "Scheune", address: "Motzstraße 25", district: "schöneberg",
    lat: 52.4977, lng: 13.3484, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-422", city: "berlin", name: "Segunda Casa", address: "Eisenacher Straße 2", district: "schöneberg",
    lat: 52.4999, lng: 13.3493, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei", "hausbrauerei"] },

  { id: "ber-423", city: "berlin", name: "Tabasco", address: "Fuggerstraße 3", district: "schöneberg",
    lat: 52.4993, lng: 13.3489, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-424", city: "berlin", name: "Bar am Lützowplatz", address: "Adresse unbekannt", 
    lat: 52.5046, lng: 13.3536, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-425", city: "berlin", name: "Lebensstern", address: "Kurfürstenstraße 58", district: "tiergarten",
    lat: 52.502, lng: 13.3546, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-426", city: "berlin", name: "El Greco", address: "Karl-Heinrich-Ulrichs-Straße 2", district: "schöneberg",
    lat: 52.5003, lng: 13.3543, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-427", city: "berlin", name: "Isy Chill Out", address: "Adresse unbekannt", 
    lat: 52.545, lng: 13.5504, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-428", city: "berlin", name: "Ciwan", address: "Adresse unbekannt", 
    lat: 52.5124, lng: 13.4899, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-429", city: "berlin", name: "Big Ben Bar", address: "Adresse unbekannt", 
    lat: 52.4978, lng: 13.3611, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-430", city: "berlin", name: "CAFE LA BOOM", address: "Landsberger Allee 219", district: "alt-hohenschönhausen",
    lat: 52.5342, lng: 13.4863, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-431", city: "berlin", name: "WandelBar", address: "Birkbuschstraße 87", district: "steglitz",
    lat: 52.4505, lng: 13.3227, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-432", city: "berlin", name: "Weinverein Rote Insel", address: "Leuthener Straße 5", district: "schöneberg",
    lat: 52.4813, lng: 13.3613, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-433", city: "berlin", name: "Cafe Maxy", address: "Wilhelminenhofstraße 38", district: "oberschöneweide",
    lat: 52.4613, lng: 13.5199, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-434", city: "berlin", name: "Kani Mani", address: "Kastanienallee 95", district: "prenzlauer berg",
    lat: 52.5389, lng: 13.4104, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-435", city: "berlin", name: "Lucky Bar", address: "Edisonstraße 17", district: "oberschöneweide",
    lat: 52.4641, lng: 13.5139, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-436", city: "berlin", name: "Mauerwinzer", address: "Wolliner Straße 20", 
    lat: 52.5393, lng: 13.4021, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-437", city: "berlin", name: "Tagesbar 69", address: "Warschauer Straße 69", district: "friedrichshain",
    lat: 52.5116, lng: 13.4526, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-438", city: "berlin", name: "GinChilla Bar", address: "Warschauer Straße 33", 
    lat: 52.5079, lng: 13.4501, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-439", city: "berlin", name: "A-Trane", address: "Bleibtreustraße 1", district: "charlottenburg",
    lat: 52.5073, lng: 13.3201, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-440", city: "berlin", name: "Lang Bar", address: "Adresse unbekannt", 
    lat: 52.5054, lng: 13.3332, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-441", city: "berlin", name: "Buck & Breck", address: "Brunnenstraße 177", district: "mitte",
    lat: 52.5321, lng: 13.399, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-442", city: "berlin", name: "Hidden Boulevard Bar", address: "Crellestraße 44", district: "schöneberg",
    lat: 52.4875, lng: 13.359, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-443", city: "berlin", name: "Sportsbar 63", address: "Frankfurter Allee 61", 
    lat: 52.5147, lng: 13.4666, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar", "outdoor"] },

  { id: "ber-444", city: "berlin", name: "Zum Patzenhofer", address: "Meinekestraße 26", 
    lat: 52.5025, lng: 13.3294, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "german"] },

  { id: "ber-445", city: "berlin", name: "45° Cocktailbar", address: "Frankfurter Allee 250", 
    lat: 52.5118, lng: 13.4977, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor", "barrierefrei"] },

  { id: "ber-446", city: "berlin", name: "Yu", address: "Adresse unbekannt", 
    lat: 52.5127, lng: 13.498, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-447", city: "berlin", name: "Schurkenkeller", address: "Christinenstraße 28", 
    lat: 52.5327, lng: 13.4102, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-448", city: "berlin", name: "Die Legende von Paula und Ben", address: "Gneisenaustraße 58", 
    lat: 52.4899, lng: 13.4042, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-449", city: "berlin", name: "Havana Bar & Chat", address: "Wollankstraße 115", district: "pankow",
    lat: 52.5667, lng: 13.3973, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-450", city: "berlin", name: "Wild Tales", address: "Diedenhofer Straße 6", district: "prenzlauer berg",
    lat: 52.5341, lng: 13.4172, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-451", city: "berlin", name: "Roses Bar", address: "Oranienstraße 187", district: "kreuzberg",
    lat: 52.5005, lng: 13.4216, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-452", city: "berlin", name: "End.", address: "Heidenfeldstraße 11", district: "friedrichshain",
    lat: 52.526, lng: 13.4514, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-453", city: "berlin", name: "Korki's Bar", address: "Wilmersdorfer Straße 143", district: "charlottenburg",
    lat: 52.5127, lng: 13.3053, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-454", city: "berlin", name: "Frolic Lounge", address: "Adresse unbekannt", 
    lat: 52.4452, lng: 13.5736, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-455", city: "berlin", name: "Basalt", address: "Utrechter Straße 38", district: "wedding",
    lat: 52.5507, lng: 13.3607, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-456", city: "berlin", name: "Saligari", address: "Simplonstraße 23", district: "friedrichshain",
    lat: 52.5083, lng: 13.4593, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-457", city: "berlin", name: "Green Village", address: "Brunnenstraße 94", 
    lat: 52.5457, lng: 13.3906, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-458", city: "berlin", name: "Bar Franzotti", address: "Kreuzbergstraße 71", 
    lat: 52.4898, lng: 13.3834, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-459", city: "berlin", name: "Mendy und Edeltraut", address: "Weserstraße 43", 
    lat: 52.4847, lng: 13.4379, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-460", city: "berlin", name: "King café", address: "Adresse unbekannt", 
    lat: 52.5541, lng: 13.3764, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-461", city: "berlin", name: "ZOE Bar", address: "Große Präsidentenstraße 6-7", 
    lat: 52.5231, lng: 13.4008, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-462", city: "berlin", name: "Saphire Bar", address: "Bötzowstraße 31", 
    lat: 52.5318, lng: 13.4341, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-463", city: "berlin", name: "Bar Milano", address: "Adresse unbekannt", 
    lat: 52.5313, lng: 13.4002, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-464", city: "berlin", name: "8MM", address: "Schönhauser Allee 177 B", district: "prenzlauer berg",
    lat: 52.5312, lng: 13.4116, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-465", city: "berlin", name: "Lindeneck", address: "Adresse unbekannt", 
    lat: 52.4451, lng: 13.5053, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-466", city: "berlin", name: "Coco Lounge", address: "Grolmanstraße", district: "charlottenburg",
    lat: 52.5081, lng: 13.3209, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-467", city: "berlin", name: "vorWien", address: "Skalitzer Straße 41", 
    lat: 52.4991, lng: 13.4288, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-468", city: "berlin", name: "Funkloch", address: "Wildenbruchstraße 68", 
    lat: 52.4864, lng: 13.4461, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-469", city: "berlin", name: "Mauna Island", address: "Adresse unbekannt", 
    lat: 52.5335, lng: 13.3859, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-470", city: "berlin", name: "BeachBar Mitte", address: "Adresse unbekannt", 
    lat: 52.5332, lng: 13.3849, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-471", city: "berlin", name: "Coron & Bar", address: "Adresse unbekannt", 
    lat: 52.5339, lng: 13.3849, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-472", city: "berlin", name: "Shisha-Bar International", address: "Adresse unbekannt", 
    lat: 52.3768, lng: 13.0934, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-473", city: "berlin", name: "US Bowl", address: "Adresse unbekannt", 
    lat: 52.5621, lng: 13.4597, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "american"] },

  { id: "ber-474", city: "berlin", name: "Rhabarbar", address: "Danziger Straße 58", district: "prenzlauer berg",
    lat: 52.5393, lng: 13.4217, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-475", city: "berlin", name: "Cafe Köşe Başi", address: "Gerichtstraße 16", district: "gesundbrunnen",
    lat: 52.5438, lng: 13.3743, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-476", city: "berlin", name: "Bata", address: "Heidestraße 50", district: "moabit",
    lat: 52.5304, lng: 13.3671, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei", "pasta", "pizza", "vietnamese"] },

  { id: "ber-477", city: "berlin", name: "Medlodi", address: "Adresse unbekannt", 
    lat: 52.5657, lng: 13.3637, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-478", city: "berlin", name: "Ex Yu", address: "Adresse unbekannt", 
    lat: 52.5457, lng: 13.3691, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-479", city: "berlin", name: "La Picá", address: "Boxhagener Straße 48", 
    lat: 52.5087, lng: 13.4659, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-480", city: "berlin", name: "Viola Lounge", address: "Adresse unbekannt", 
    lat: 52.5423, lng: 13.3507, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-481", city: "berlin", name: "Jahn's Biergarten", address: "Binzstraße 47a", 
    lat: 52.5639, lng: 13.4216, drink: "Bier nach Wahl 0,5l", par: 5, type: "biergarten",
    tags: ["biergarten", "outdoor"] },

  { id: "ber-482", city: "berlin", name: "Bilionari", address: "Adresse unbekannt", 
    lat: 52.5069, lng: 13.3043, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-483", city: "berlin", name: "Bloom's", address: "Detmolder Straße 61", district: "wilmersdorf",
    lat: 52.4786, lng: 13.3254, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-484", city: "berlin", name: "Papillon Musikcafé", address: "Prühßstraße 49", 
    lat: 52.4434, lng: 13.3856, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-485", city: "berlin", name: "San-Franz-Isco", address: "Detmolder Straße 21", district: "wilmersdorf",
    lat: 52.479, lng: 13.319, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-486", city: "berlin", name: "The Forsberg", address: "Gerichtstraße 26", 
    lat: 52.5444, lng: 13.3717, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "hausbrauerei"] },

  { id: "ber-487", city: "berlin", name: "Gleis 11", address: "Adresse unbekannt", 
    lat: 52.5003, lng: 13.3755, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-488", city: "berlin", name: "Akita Sushi Bar", address: "Beusselstraße 72", 
    lat: 52.5282, lng: 13.3285, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "sushi"] },

  { id: "ber-489", city: "berlin", name: "Chez Charly", address: "Adresse unbekannt", 
    lat: 52.5472, lng: 13.3502, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-490", city: "berlin", name: "Bar Brutal", address: "Hobrechtstraße 54", 
    lat: 52.4918, lng: 13.4257, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-491", city: "berlin", name: "Pharaos", address: "Prinzenallee 86", district: "gesundbrunnen",
    lat: 52.5533, lng: 13.3818, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-492", city: "berlin", name: "Café Gold", address: "Altenbraker Straße 19", district: "neukölln",
    lat: 52.4703, lng: 13.4325, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-493", city: "berlin", name: "Château", address: "Adresse unbekannt", 
    lat: 52.5645, lng: 13.327, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-494", city: "berlin", name: "Beste", address: "Willdenowstraße 12A", district: "wedding",
    lat: 52.5439, lng: 13.3606, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-495", city: "berlin", name: "La Vie", address: "Adresse unbekannt", 
    lat: 52.4861, lng: 13.4292, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-496", city: "berlin", name: "Cafe Sohbet", address: "Sprengelstraße 6", district: "wedding",
    lat: 52.5426, lng: 13.3581, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-497", city: "berlin", name: "Sportsbar Maxim", address: "Adresse unbekannt", 
    lat: 52.5614, lng: 13.4092, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ber-498", city: "berlin", name: "C'est la vie", address: "Adresse unbekannt", 
    lat: 52.5177, lng: 13.3068, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-499", city: "berlin", name: "Victoria Bar", address: "Potsdamer Straße 102", district: "tiergarten",
    lat: 52.5014, lng: 13.3639, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-500", city: "berlin", name: "Paloma Bar", address: "Adresse unbekannt", 
    lat: 52.4993, lng: 13.4189, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-501", city: "berlin", name: "Adara House", address: "Buckower Chaussee 160", district: "lichtenrade",
    lat: 52.4141, lng: 13.4001, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-502", city: "berlin", name: "Bloona", address: "Gärtnerstraße 12", 
    lat: 52.5105, lng: 13.4609, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-503", city: "berlin", name: "Luft und Liebe", address: "Boxhagener Straße 26", district: "friedrichshain",
    lat: 52.5126, lng: 13.4579, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-504", city: "berlin", name: "Beuster Bar", address: "Weserstraße 32", 
    lat: 52.486, lng: 13.4354, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "international"] },

  { id: "ber-505", city: "berlin", name: "Promenaden Eck", address: "Schillerpromenade 11", district: "neukölln",
    lat: 52.4757, lng: 13.4221, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei", "hausbrauerei"] },

  { id: "ber-506", city: "berlin", name: "Nachtigall Bar", address: "Adresse unbekannt", 
    lat: 52.5358, lng: 13.4164, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-507", city: "berlin", name: "Hafen", address: "Motzstraße 19", district: "schöneberg",
    lat: 52.498, lng: 13.3492, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-508", city: "berlin", name: "Mein Freund Harvey", address: "Kulmer Straße 20A", 
    lat: 52.492, lng: 13.3646, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-509", city: "berlin", name: "BAR BAUTROCKNER", address: "Jungstraße 29", district: "friedrichshain",
    lat: 52.512, lng: 13.4665, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-510", city: "berlin", name: "Marrakesch", address: "Schönhauser Allee 5", district: "prenzlauer berg",
    lat: 52.5295, lng: 13.4103, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-511", city: "berlin", name: "Sports Bar", address: "Bölschestraße 68", district: "friedrichshagen",
    lat: 52.4561, lng: 13.6256, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ber-512", city: "berlin", name: "PlaceOne Panoramabar", address: "Strausberger Platz 1", district: "friedrichshain",
    lat: 52.5193, lng: 13.427, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-513", city: "berlin", name: "Facciola", address: "Forster Straße 5", 
    lat: 52.4958, lng: 13.4336, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-514", city: "berlin", name: "Bar Centrale Novantesimominuto", address: "Augsburger Straße 33", district: "charlottenburg",
    lat: 52.5018, lng: 13.334, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-515", city: "berlin", name: "Café Linie 1", address: "Wilhelmstraße 9", 
    lat: 52.5014, lng: 13.389, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-516", city: "berlin", name: "Joker's Bar", address: "Adresse unbekannt", 
    lat: 52.5322, lng: 13.4708, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-517", city: "berlin", name: "Bar Luxus", address: "Prenzlauer Allee 197", 
    lat: 52.5387, lng: 13.4235, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-518", city: "berlin", name: "Bar BoBu", address: "Müggelstraße 9", 
    lat: 52.5121, lng: 13.4708, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-519", city: "berlin", name: "Overtime", address: "Adresse unbekannt", 
    lat: 52.565, lng: 13.3947, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-520", city: "berlin", name: "Holzmarkt25", address: "Holzmarktstraße 25", district: "friedrichshain",
    lat: 52.5115, lng: 13.4267, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-521", city: "berlin", name: "Black Pearl", address: "Adresse unbekannt", 
    lat: 52.5313, lng: 13.3435, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-522", city: "berlin", name: "Beach Zone Lichtenberg", address: "Adresse unbekannt", 
    lat: 52.5306, lng: 13.4766, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-523", city: "berlin", name: "KollektivBar ES", address: "Pflügerstraße 52", 
    lat: 52.4901, lng: 13.4335, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-524", city: "berlin", name: "Club Lokum", address: "Buddestraße 12", 
    lat: 52.5886, lng: 13.2889, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-525", city: "berlin", name: "Aladin Shisha Lounge", address: "Medebacher Weg 3", 
    lat: 52.5856, lng: 13.2808, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-526", city: "berlin", name: "K2 Bar", address: "Adresse unbekannt", 
    lat: 52.5675, lng: 13.3786, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-527", city: "berlin", name: "Meine Bar Ici", address: "Auguststraße 61", district: "mitte",
    lat: 52.5272, lng: 13.3975, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-528", city: "berlin", name: "Spielpass Bierbar", address: "Adresse unbekannt", 
    lat: 52.5463, lng: 13.5926, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-529", city: "berlin", name: "Heine", address: "Putlitzstraße 19", 
    lat: 52.5325, lng: 13.343, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-530", city: "berlin", name: "The Castle", address: "Invalidenstraße 129", 
    lat: 52.5315, lng: 13.3884, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei", "hausbrauerei"] },

  { id: "ber-531", city: "berlin", name: "The Curtain Club", address: "Potsdamer Platz 3", 
    lat: 52.5102, lng: 13.3752, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-532", city: "berlin", name: "Prinzipal Bar", address: "Adresse unbekannt", 
    lat: 52.501, lng: 13.4197, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-533", city: "berlin", name: "203 Bar im Fernsehturm", address: "Panoramastraße 1a", district: "mitte",
    lat: 52.5209, lng: 13.4094, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-534", city: "berlin", name: "Journey into the Night", address: "Adresse unbekannt", 
    lat: 52.5052, lng: 13.3202, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-535", city: "berlin", name: "Kupferkanne", address: "Steinmetzstraße 18", district: "schöneberg",
    lat: 52.4958, lng: 13.3631, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-536", city: "berlin", name: "12 Grad Aetherloge", address: "Adresse unbekannt", 
    lat: 52.515, lng: 13.459, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-537", city: "berlin", name: "Balcone Lounge", address: "Hasenheide 47", district: "kreuzberg",
    lat: 52.4888, lng: 13.4117, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor", "barrierefrei"] },

  { id: "ber-538", city: "berlin", name: "Miami", address: "Adresse unbekannt", 
    lat: 52.5527, lng: 13.3797, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-539", city: "berlin", name: "Die Bar Frohnau", address: "Adresse unbekannt", 
    lat: 52.6315, lng: 13.289, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-540", city: "berlin", name: "Grand Bar", address: "Oranienburger Straße", 
    lat: 52.525, lng: 13.3933, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-541", city: "berlin", name: "Zum Schwalbenschwanz", address: "Margaretenstraße 22", 
    lat: 52.5076, lng: 13.4991, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "ber-542", city: "berlin", name: "Morgen wird besser", address: "Hagenstraße 7", 
    lat: 52.5137, lng: 13.4998, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-543", city: "berlin", name: "Donau 115", address: "Donaustraße 115", 
    lat: 52.4835, lng: 13.4335, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-544", city: "berlin", name: "Mini Lounge", address: "Neue Bahnhofstraße 36", 
    lat: 52.5046, lng: 13.4685, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-545", city: "berlin", name: "Carlotta Bar", address: "Lenbachstraße 10", 
    lat: 52.5051, lng: 13.4659, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-546", city: "berlin", name: "The Brit-Pub", address: "Fellbacher Straße", 
    lat: 52.6165, lng: 13.3086, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-547", city: "berlin", name: "Du Beast (mutant radio)", address: "Innstraße 4", 
    lat: 52.4825, lng: 13.4452, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-548", city: "berlin", name: "Bar Schwips", address: "Eichendorffstraße 1", 
    lat: 52.5295, lng: 13.3881, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-549", city: "berlin", name: "Mima", address: "Winsstraße 1", district: "prenzlauer berg",
    lat: 52.531, lng: 13.4229, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-550", city: "berlin", name: "El Diablo", address: "Adresse unbekannt", 
    lat: 52.4992, lng: 13.43, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-551", city: "berlin", name: "Mister Hu", address: "Adresse unbekannt", 
    lat: 52.4928, lng: 13.3533, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-552", city: "berlin", name: "Erdal’s Bierstube", address: "Adresse unbekannt", 
    lat: 52.4558, lng: 13.3807, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-553", city: "berlin", name: "Noble Rot", address: "Gärtnerstraße 6", 
    lat: 52.5094, lng: 13.4603, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-554", city: "berlin", name: "Mandaloun", address: "Kaiser-Friedrich-Straße 40", 
    lat: 52.5091, lng: 13.3016, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-555", city: "berlin", name: "Seventh Day", address: "Adresse unbekannt", 
    lat: 52.4928, lng: 13.3868, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-556", city: "berlin", name: "Herr Lindemann", address: "Adresse unbekannt", 
    lat: 52.4737, lng: 13.445, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-557", city: "berlin", name: "Why Not Café", address: "Adresse unbekannt", 
    lat: 52.5259, lng: 13.3073, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-558", city: "berlin", name: "ILOsBar", address: "Motzstraße 30", 
    lat: 52.4977, lng: 13.3474, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "ber-559", city: "berlin", name: "LAFLAVA", address: "Adresse unbekannt", 
    lat: 52.544, lng: 13.3937, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-560", city: "berlin", name: "Meins", address: "Rembrandtstraße 12", district: "schöneberg",
    lat: 52.469, lng: 13.3408, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-561", city: "berlin", name: "Orania", address: "Adresse unbekannt", 
    lat: 52.5021, lng: 13.4168, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-562", city: "berlin", name: "Torbar", address: "Torstraße 183", district: "mitte",
    lat: 52.5286, lng: 13.3935, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-563", city: "berlin", name: "Anna Hirsch Bar", address: "Adresse unbekannt", 
    lat: 52.5276, lng: 13.3886, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-564", city: "berlin", name: "Berlin Icebar - Polar Expedition", address: "Spandauer Straße 2", district: "mitte",
    lat: 52.5213, lng: 13.4036, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei", "waffle", "ice_cream"] },

  { id: "ber-565", city: "berlin", name: "Blacklist", address: "Neue Kantstraße 1", district: "charlottenburg",
    lat: 52.507, lng: 13.2947, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-566", city: "berlin", name: "Bar hotel Numa", address: "Friedrichstraße 31", district: "kreuzberg",
    lat: 52.5048, lng: 13.391, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-567", city: "berlin", name: "BLO Kantine", address: "Kaskelstraße 55", 
    lat: 52.5047, lng: 13.4835, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-568", city: "berlin", name: "Zuckerzauber", address: "Markgrafendamm 24c", district: "friedrichshain",
    lat: 52.5023, lng: 13.4663, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-569", city: "berlin", name: "Antikriegscafé COOP", address: "Rochstraße 3", 
    lat: 52.524, lng: 13.4073, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-570", city: "berlin", name: "Bebua", address: "Adresse unbekannt", 
    lat: 52.5002, lng: 13.3218, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-571", city: "berlin", name: "mokai", address: "Adresse unbekannt", 
    lat: 52.5065, lng: 13.299, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-572", city: "berlin", name: "Mr. Susan", address: "Krausnickstraße 1", district: "mitte",
    lat: 52.5244, lng: 13.3957, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-573", city: "berlin", name: "Cafe Happy", address: "Adresse unbekannt", 
    lat: 52.4679, lng: 13.4418, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-574", city: "berlin", name: "Comebuy", address: "Friedrichstraße 150", 
    lat: 52.5184, lng: 13.3884, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "bubble_tea"] },

  { id: "ber-575", city: "berlin", name: "Glasweise Weinbar", address: "Taubenstraße 20", district: "mitte",
    lat: 52.5132, lng: 13.3945, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-576", city: "berlin", name: "Kosova Bar", address: "Adresse unbekannt", 
    lat: 52.509, lng: 13.5027, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-577", city: "berlin", name: "Cafe Prince / King's Bar", address: "Adresse unbekannt", 
    lat: 52.5529, lng: 13.3825, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-578", city: "berlin", name: "Baraka", address: "Adresse unbekannt", 
    lat: 52.5546, lng: 13.3837, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-579", city: "berlin", name: "Bar 131", address: "Adresse unbekannt", 
    lat: 52.5273, lng: 13.3865, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-580", city: "berlin", name: "Bubbles - Lounge", address: "Roedernallee 167", 
    lat: 52.5813, lng: 13.3447, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-581", city: "berlin", name: "Wieviel Zeit", address: "Adresse unbekannt", 
    lat: 52.524, lng: 13.3819, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-582", city: "berlin", name: "Hildegard Bar", address: "Marburger Straße 3", district: "charlottenburg",
    lat: 52.5031, lng: 13.3369, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-583", city: "berlin", name: "Rodi Bier Bar", address: "Hohenschönhauser Straße 72", 
    lat: 52.5352, lng: 13.4688, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-584", city: "berlin", name: "Ruine Bar", address: "Adresse unbekannt", 
    lat: 52.4687, lng: 13.4318, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-585", city: "berlin", name: "Atlas", address: "Graefestraße 10", 
    lat: 52.494, lng: 13.4183, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-586", city: "berlin", name: "Relax Mimmo Can", address: "Reinickendorfer Straße 112", 
    lat: 52.5435, lng: 13.3694, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-587", city: "berlin", name: "Sportsbar, Bet 3000", address: "Hansastraße 249", 
    lat: 52.5614, lng: 13.4992, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ber-588", city: "berlin", name: "Lobby 030", address: "Richardstraße 76", district: "neukölln",
    lat: 52.4748, lng: 13.4449, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-589", city: "berlin", name: "Black & White", address: "Soldiner Straße 69", 
    lat: 52.5599, lng: 13.3813, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-590", city: "berlin", name: "Femo-Cafe", address: "Adresse unbekannt", 
    lat: 52.5712, lng: 13.3796, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-591", city: "berlin", name: "Barred", address: "Mariannenstraße 29", 
    lat: 52.4969, lng: 13.4207, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-592", city: "berlin", name: "Galander Haifischbar", address: "Arndtstraße 25", 
    lat: 52.4886, lng: 13.3899, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-593", city: "berlin", name: "Compass Bar Berlin", address: "Adresse unbekannt", 
    lat: 52.5075, lng: 13.4713, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-594", city: "berlin", name: "MINI", address: "Urbanstraße 126", 
    lat: 52.4913, lng: 13.4159, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-595", city: "berlin", name: "Fabelei", address: "Kyffhäuserstraße 21", 
    lat: 52.4936, lng: 13.3521, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-596", city: "berlin", name: "Break Bar & Lounge", address: "Freiheit 12", 
    lat: 52.4479, lng: 13.5785, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-597", city: "berlin", name: "duke bar", address: "Freiheit 15", 
    lat: 52.4478, lng: 13.5769, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-598", city: "berlin", name: "Das Caro", address: "Caroline-Michaelis-Straße 1", district: "mitte",
    lat: 52.5315, lng: 13.3857, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-599", city: "berlin", name: "[B]", address: "Marktstraße 7", 
    lat: 52.5045, lng: 13.4721, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-600", city: "berlin", name: "Restaurant Kleens Bar", address: "Tile-Brügge-Weg 25", 
    lat: 52.5916, lng: 13.2915, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-601", city: "berlin", name: "Malia Cocktail Bar", address: "Karl-Marx-Straße 191", district: "neukölln",
    lat: 52.4731, lng: 13.4411, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-602", city: "berlin", name: "Café Kulis", address: "Karl-Marx-Straße 198", district: "neukölln",
    lat: 52.4726, lng: 13.4409, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-603", city: "berlin", name: "Bebeq Xalcatraz", address: "Karl-Marx-Straße 170", district: "neukölln",
    lat: 52.4748, lng: 13.4398, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-604", city: "berlin", name: "Loft14", address: "Landsberger Allee 106", district: "fennpfuhl",
    lat: 52.5285, lng: 13.4574, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-605", city: "berlin", name: "Schröders", address: "Karl-Marx-Straße 18", 
    lat: 52.4176, lng: 13.2263, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei", "german"] },

  { id: "ber-606", city: "berlin", name: "Transformator Frohnau", address: "Fürstendamm 40", district: "frohnau",
    lat: 52.6309, lng: 13.309, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-607", city: "berlin", name: "Zagga Bar", address: "Adresse unbekannt", 
    lat: 52.5066, lng: 13.3011, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-608", city: "berlin", name: "260 Grad", address: "Mühlenstraße 13", 
    lat: 52.5044, lng: 13.4426, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-609", city: "berlin", name: "Fredericks", address: "Lüderitzstraße 10", district: "wedding",
    lat: 52.5504, lng: 13.3492, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-610", city: "berlin", name: "As", address: "Ollenhauerstraße 14", district: "reinickendorf",
    lat: 52.5666, lng: 13.3292, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-611", city: "berlin", name: "Bar", address: "Adresse unbekannt", 
    lat: 52.5187, lng: 13.3016, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-612", city: "berlin", name: "New-Pacha", address: "Schützenstraße 21", district: "steglitz",
    lat: 52.4526, lng: 13.3216, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-613", city: "berlin", name: "Xerima", address: "Adresse unbekannt", 
    lat: 52.4598, lng: 13.3258, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-614", city: "berlin", name: "Space Meduza", address: "Skalitzer Straße 80", district: "kreuzberg",
    lat: 52.5007, lng: 13.4392, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-615", city: "berlin", name: "Migi Würsch", address: "Boxhagener Straße 14", 
    lat: 52.5137, lng: 13.4545, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-616", city: "berlin", name: "Bizim Mekan", address: "Adresse unbekannt", 
    lat: 52.5511, lng: 13.3643, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-617", city: "berlin", name: "Lamm Bar", address: "Wisbyer Straße 10439", 
    lat: 52.5533, lng: 13.4151, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-618", city: "berlin", name: "Masala", address: "Reginhardstraße 54", district: "reinickendorf",
    lat: 52.5619, lng: 13.3731, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-619", city: "berlin", name: "Badfish", address: "Adresse unbekannt", 
    lat: 52.5105, lng: 13.4578, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-620", city: "berlin", name: "Barbados", address: "Reinickendorfer Straße 91B", district: "wedding",
    lat: 52.5489, lng: 13.3685, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-621", city: "berlin", name: "Mali Bar", address: "Plantagenstraße 41", 
    lat: 52.5462, lng: 13.3682, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-622", city: "berlin", name: "M2", address: "Adresse unbekannt", 
    lat: 52.4286, lng: 13.3303, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-623", city: "berlin", name: "Frobenstüb'l", address: "Adresse unbekannt", 
    lat: 52.4263, lng: 13.335, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-624", city: "berlin", name: "Imperial", address: "Adresse unbekannt", 
    lat: 52.4935, lng: 13.365, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-625", city: "berlin", name: "Isotop", address: "Pohlstraße 64", district: "tiergarten",
    lat: 52.5014, lng: 13.3621, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-626", city: "berlin", name: "Herbst", address: "Monumentenstraße 29", 
    lat: 52.488, lng: 13.3741, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-627", city: "berlin", name: "Bar 51", address: "Adresse unbekannt", 
    lat: 52.4854, lng: 13.4327, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-628", city: "berlin", name: "My Dream", address: "Adresse unbekannt", 
    lat: 52.4938, lng: 13.3632, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-629", city: "berlin", name: "Sicula Bar", address: "Scharnweberstraße 46", district: "friedrichshain",
    lat: 52.5126, lng: 13.4664, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei", "italian"] },

  { id: "ber-630", city: "berlin", name: "The Red Room", address: "Hufelandstraße 15", 
    lat: 52.532, lng: 13.432, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-631", city: "berlin", name: "Trauma", address: "Eschenbachstraße 1", 
    lat: 52.4686, lng: 13.4904, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-632", city: "berlin", name: "be-mee", address: "Adresse unbekannt", 
    lat: 52.5046, lng: 13.3275, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-633", city: "berlin", name: "Die Kleine Philharmonie", address: "Adresse unbekannt", 
    lat: 52.4997, lng: 13.3301, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-634", city: "berlin", name: "Laros", address: "Adresse unbekannt", 
    lat: 52.5252, lng: 13.3303, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-635", city: "berlin", name: "Belushi's", address: "Ziegelstraße 28", district: "mitte",
    lat: 52.5236, lng: 13.391, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "burger"] },

  { id: "ber-636", city: "berlin", name: "Fasanen 47", address: "Fasanenstraße 47", district: "wilmersdorf",
    lat: 52.4961, lng: 13.3267, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-637", city: "berlin", name: "Baba", address: "Adresse unbekannt", 
    lat: 52.4673, lng: 13.4402, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-638", city: "berlin", name: "Badabing Social Club", address: "Adresse unbekannt", 
    lat: 52.4902, lng: 13.4184, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-639", city: "berlin", name: "House of Gin", address: "Adresse unbekannt", 
    lat: 52.505, lng: 13.3387, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-640", city: "berlin", name: "Mein Quartier", address: "Adresse unbekannt", 
    lat: 52.6385, lng: 13.4905, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-641", city: "berlin", name: "Deriva Bar", address: "Mainzer Straße 23", district: "neukölln",
    lat: 52.4807, lng: 13.4277, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-642", city: "berlin", name: "Eva", address: "Adresse unbekannt", 
    lat: 52.5514, lng: 13.3796, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-643", city: "berlin", name: "Double X Bar 2", address: "Greifswalder Straße 160", district: "prenzlauer berg",
    lat: 52.5429, lng: 13.4404, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-644", city: "berlin", name: "Jana's Coffee Lounge", address: "Adresse unbekannt", 
    lat: 52.4758, lng: 13.4233, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-645", city: "berlin", name: "Adrijan Smoking Lounge", address: "Adresse unbekannt", 
    lat: 52.5173, lng: 13.454, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor", "barrierefrei"] },

  { id: "ber-646", city: "berlin", name: "Coppi Cabana", address: "Coppistraße 14", 
    lat: 52.5082, lng: 13.4823, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-647", city: "berlin", name: "Schnabels Klause", address: "Adresse unbekannt", 
    lat: 52.4343, lng: 13.4552, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-648", city: "berlin", name: "Donna Bar", address: "Adresse unbekannt", 
    lat: 52.4935, lng: 13.4179, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-649", city: "berlin", name: "Black & Gold Bar", address: "Müllerstraße 116", district: "wedding",
    lat: 52.5548, lng: 13.3439, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-650", city: "berlin", name: "Lucky Seven", address: "Ofener Straße 15", district: "wedding",
    lat: 52.5555, lng: 13.3439, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-651", city: "berlin", name: "Barcelona", address: "Müllerstraße 67", district: "wedding",
    lat: 52.5566, lng: 13.3417, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-652", city: "berlin", name: "Hotelbar", address: "Rudolf-Breitscheid-Straße 190-192", district: "babelsberg nord",
    lat: 52.3954, lng: 13.1274, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei", "hausbrauerei"] },

  { id: "ber-653", city: "berlin", name: "Almi Su", address: "Adresse unbekannt", 
    lat: 52.5529, lng: 13.3473, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-654", city: "berlin", name: "Sweet Monkey Bar", address: "Adresse unbekannt", 
    lat: 52.4787, lng: 13.3449, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-655", city: "berlin", name: "Bar26", address: "Adresse unbekannt", 
    lat: 52.5954, lng: 13.332, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-656", city: "berlin", name: "Barracuda", address: "Warnitzer Straße 24", 
    lat: 52.5671, lng: 13.5172, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-657", city: "berlin", name: "Cafe Lion", address: "Adresse unbekannt", 
    lat: 52.5562, lng: 13.3721, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-658", city: "berlin", name: "Lucky's Bier Bar", address: "Rykestraße 29", 
    lat: 52.539, lng: 13.4228, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-659", city: "berlin", name: "Weser 58", address: "Adresse unbekannt", 
    lat: 52.4829, lng: 13.4415, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-660", city: "berlin", name: "interkosmos", address: "Fanningerstraße 47", district: "lichtenberg",
    lat: 52.5141, lng: 13.4984, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-661", city: "berlin", name: "Fantasy", address: "Silbersteinstraße 101", district: "neukölln",
    lat: 52.4658, lng: 13.4275, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-662", city: "berlin", name: "Café Şamata", address: "Adresse unbekannt", 
    lat: 52.559, lng: 13.3862, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-663", city: "berlin", name: "Cafe Bar Gold", address: "Silbersteinstraße 82", 
    lat: 52.4663, lng: 13.4297, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-664", city: "berlin", name: "Cafe Lounge", address: "Niemetzstraße 22", district: "neukölln",
    lat: 52.4721, lng: 13.4509, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-665", city: "berlin", name: "Bajszel", address: "Emser Straße 8-9", district: "neukölln",
    lat: 52.4697, lng: 13.4394, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-666", city: "berlin", name: "Xelor Kesselhaus JazzBar", address: "Mittelbuschweg 10", 
    lat: 52.4693, lng: 13.4483, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-667", city: "berlin", name: "Lina Cafe Lounge", address: "Heinz-Galinski-Straße 15", district: "gesundbrunnen",
    lat: 52.555, lng: 13.3719, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-668", city: "berlin", name: "Panda Bar", address: "Adresse unbekannt", 
    lat: 52.571, lng: 13.3609, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-669", city: "berlin", name: "Cafè Time E.K.", address: "Adresse unbekannt", 
    lat: 52.5687, lng: 13.3614, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-670", city: "berlin", name: "Diamond Café Lounge", address: "Adresse unbekannt", 
    lat: 52.5684, lng: 13.3623, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "barrierefrei"] },

  { id: "ber-671", city: "berlin", name: "Black Rose", address: "Hauptstraße 113-115", district: "schöneberg",
    lat: 52.482, lng: 13.3491, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-672", city: "berlin", name: "Pool-Inn", address: "Wönnichstraße 68-70", 
    lat: 52.5047, lng: 13.4965, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-673", city: "berlin", name: "Zum Rennbahn-Eck", address: "Rennbahnallee 1", 
    lat: 52.5139, lng: 13.669, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "hausbrauerei"] },

  { id: "ber-674", city: "berlin", name: "Neigh Bar", address: "Adresse unbekannt", 
    lat: 52.4815, lng: 13.4324, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-675", city: "berlin", name: "Café 18", address: "Erkstraße 18", district: "neukölln",
    lat: 52.4815, lng: 13.4387, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-676", city: "berlin", name: "EGO Cafe bar", address: "Braunschweiger Straße 33", district: "neukölln",
    lat: 52.4714, lng: 13.45, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-677", city: "berlin", name: "Treff 26", address: "Adresse unbekannt", 
    lat: 52.5983, lng: 13.3554, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-678", city: "berlin", name: "Shisha Code Red", address: "Brückenstraße 7", 
    lat: 52.4577, lng: 13.5114, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-679", city: "berlin", name: "The famous bar", address: "Dominicusstraße 44", district: "schöneberg",
    lat: 52.4806, lng: 13.3505, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-680", city: "berlin", name: "Mauritius", address: "Havemannstraße 12A", 
    lat: 52.569, lng: 13.5685, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-681", city: "berlin", name: "Chill Lounge", address: "Havemannstraße 4A", 
    lat: 52.5698, lng: 13.5668, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-682", city: "berlin", name: "BMC Lounge", address: "Eichhorster Straße 1C", 
    lat: 52.5711, lng: 13.5695, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-683", city: "berlin", name: "Manzana", address: "Residenzstraße 80", district: "gesundbrunnen",
    lat: 52.5584, lng: 13.3712, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-684", city: "berlin", name: "Savlatore Pulvermacher", address: "Adresse unbekannt", 
    lat: 52.547, lng: 13.4095, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-685", city: "berlin", name: "Café Fulda", address: "Fuldastraße 2", 
    lat: 52.4823, lng: 13.4341, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-686", city: "berlin", name: "Lehmann's Weinstube", address: "Adresse unbekannt", 
    lat: 52.4711, lng: 13.2907, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-687", city: "berlin", name: "Club49", address: "Ohlauer Straße 31", 
    lat: 52.495, lng: 13.43, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-688", city: "berlin", name: "Fero Cafe Bar", address: "Böhlener Straße 7", district: "hellersdorf",
    lat: 52.5401, lng: 13.6208, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "ber-689", city: "berlin", name: "Tiger Bar", address: "Adresse unbekannt", 
    lat: 52.5013, lng: 13.3654, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-690", city: "berlin", name: "BeachBar", address: "Helene-Weigel-Platz", 
    lat: 52.5282, lng: 13.5386, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-691", city: "berlin", name: "Treffpunkt Panne", address: "Adresse unbekannt", 
    lat: 52.5778, lng: 13.3157, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-692", city: "berlin", name: "MMB", address: "Herbert-Baum-Straße 5", 
    lat: 52.5486, lng: 13.4558, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-693", city: "berlin", name: "Cake", address: "Müllerstraße 54", district: "wedding",
    lat: 52.5535, lng: 13.347, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-694", city: "berlin", name: "Zart Daneben", address: "Hermannstraße 99", district: "neukölln",
    lat: 52.4697, lng: 13.4297, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-695", city: "berlin", name: "Incognito", address: "Hohenstaufenstraße 53", 
    lat: 52.4942, lng: 13.345, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-696", city: "berlin", name: "Bademeister", address: "Bizetstraße 143", 
    lat: 52.5506, lng: 13.4661, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-697", city: "berlin", name: "Champions Café M Lounge", address: "Adresse unbekannt", 
    lat: 52.5611, lng: 13.3879, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-698", city: "berlin", name: "Die Darterei", address: "Berliner Allee 106", 
    lat: 52.55, lng: 13.4593, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-699", city: "berlin", name: "KICK INN", address: "Adresse unbekannt", 
    lat: 52.4524, lng: 13.5352, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ber-700", city: "berlin", name: "Cafe 54", address: "Adresse unbekannt", 
    lat: 52.5728, lng: 13.3593, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-701", city: "berlin", name: "Ruby", address: "Adresse unbekannt", 
    lat: 52.4977, lng: 13.3121, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-702", city: "berlin", name: "Sportsbar Twentyone", address: "Reinickendorfer Straße 9", 
    lat: 52.5415, lng: 13.3702, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ber-703", city: "berlin", name: "ZweiMalVier", address: "Saalestraße 29", 
    lat: 52.4711, lng: 13.4518, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-704", city: "berlin", name: "KROM", address: "Winsstraße 9", 
    lat: 52.5322, lng: 13.424, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-705", city: "berlin", name: "time out", address: "Adresse unbekannt", 
    lat: 52.5667, lng: 13.3637, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-706", city: "berlin", name: "Galaxy Bar", address: "Schnellerstraße 35", district: "niederschöneweide",
    lat: 52.4545, lng: 13.5161, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-707", city: "berlin", name: "Arkadasch", address: "Schnellerstraße 115", district: "niederschöneweide",
    lat: 52.4548, lng: 13.5155, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-708", city: "berlin", name: "Operlounge", address: "Bismarckstraße 88", 
    lat: 52.5114, lng: 13.308, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-709", city: "berlin", name: "La Gano", address: "Adresse unbekannt", 
    lat: 52.4485, lng: 13.3569, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-710", city: "berlin", name: "Fly", address: "Adresse unbekannt", 
    lat: 52.5625, lng: 13.3533, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-711", city: "berlin", name: "Bar Santana", address: "Adresse unbekannt", 
    lat: 52.5515, lng: 13.3818, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-712", city: "berlin", name: "Zum Kaiser Bierbar", address: "Adresse unbekannt", 
    lat: 52.5141, lng: 13.3008, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-713", city: "berlin", name: "Café Asya", address: "Pankstraße 80", 
    lat: 52.547, lng: 13.3725, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-714", city: "berlin", name: "Wodessa Lounge", address: "Adresse unbekannt", 
    lat: 52.5104, lng: 13.2924, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-715", city: "berlin", name: "800A", address: "Stettiner Straße 19", 
    lat: 52.5538, lng: 13.3873, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "hausbrauerei"] },

  { id: "ber-716", city: "berlin", name: "uni keller", address: "Adresse unbekannt", 
    lat: 52.5206, lng: 13.2749, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-717", city: "berlin", name: "Zur Schmalzstulle", address: "Niederstraße 45", 
    lat: 52.6291, lng: 13.3112, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-718", city: "berlin", name: "Magic Bar", address: "Adresse unbekannt", 
    lat: 52.5592, lng: 13.3851, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-719", city: "berlin", name: "Möhrchen", address: "Adresse unbekannt", 
    lat: 52.5968, lng: 13.3394, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-720", city: "berlin", name: "Café Arda", address: "Beusselstraße 37", district: "moabit",
    lat: 52.5317, lng: 13.3287, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-721", city: "berlin", name: "Mono", address: "Prenzlauer Allee 88", 
    lat: 52.5449, lng: 13.4279, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-722", city: "berlin", name: "Matreshka Bar", address: "Reichenberger Straße 109", 
    lat: 52.4942, lng: 13.4357, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-723", city: "berlin", name: "NOOR Lounge", address: "Adresse unbekannt", 
    lat: 52.5402, lng: 13.4146, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor", "barrierefrei"] },

  { id: "ber-724", city: "berlin", name: "GEM Bar", address: "Fuggerstraße 34", 
    lat: 52.4993, lng: 13.342, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-725", city: "berlin", name: "Kleine Freiheit", address: "Nansenstraße 31", district: "neukölln",
    lat: 52.4905, lng: 13.4314, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-726", city: "berlin", name: "Paparazzi 63", address: "Stollberger Straße 31", 
    lat: 52.5309, lng: 13.6047, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-727", city: "berlin", name: "Wunder Bar", address: "Adresse unbekannt", 
    lat: 52.5232, lng: 13.1985, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-728", city: "berlin", name: "Royal Shisha Bar", address: "Adresse unbekannt", 
    lat: 52.5222, lng: 13.1976, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-729", city: "berlin", name: "Cafe Casino", address: "Adresse unbekannt", 
    lat: 52.6655, lng: 13.3786, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-730", city: "berlin", name: "Smoke", address: "Adresse unbekannt", 
    lat: 52.5049, lng: 13.3139, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-731", city: "berlin", name: "Bar 100 Gramm", address: "Weinbergsweg 25", 
    lat: 52.5306, lng: 13.4017, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-732", city: "berlin", name: "Majestic", address: "Karl-Marx-Straße 60", 
    lat: 52.4827, lng: 13.4319, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-733", city: "berlin", name: "Lounge 64", address: "Bundesallee 64", district: "friedenau",
    lat: 52.4763, lng: 13.3281, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-734", city: "berlin", name: "Black Wedding Bar", address: "Adresse unbekannt", 
    lat: 52.5534, lng: 13.3788, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-735", city: "berlin", name: "KnockOut by Franky", address: "Adresse unbekannt", 
    lat: 52.6097, lng: 13.3356, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-736", city: "berlin", name: "Mex Café", address: "Adresse unbekannt", 
    lat: 52.5507, lng: 13.3628, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-737", city: "berlin", name: "B10", address: "Großbeerenstraße 64", 
    lat: 52.4944, lng: 13.384, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-738", city: "berlin", name: "Elysium", address: "Berliner Straße 1", 
    lat: 52.6783, lng: 13.5918, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-739", city: "berlin", name: "Relax", address: "Adresse unbekannt", 
    lat: 52.424, lng: 13.4849, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-740", city: "berlin", name: "Bar im Luftschloss", address: "Adresse unbekannt", 
    lat: 52.4737, lng: 13.3885, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-741", city: "berlin", name: "Abgedreht", address: "Adresse unbekannt", 
    lat: 52.5157, lng: 13.452, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-742", city: "berlin", name: "Beans & Barley", address: "Adresse unbekannt", 
    lat: 52.3669, lng: 13.5085, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-743", city: "berlin", name: "Berlin Pub", address: "Adresse unbekannt", 
    lat: 52.3678, lng: 13.5103, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-744", city: "berlin", name: "THE ALCHEMIST", address: "Linkstraße 4", 
    lat: 52.5074, lng: 13.3749, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-745", city: "berlin", name: "Berlinos", address: "Hindenburgdamm 84", 
    lat: 52.4449, lng: 13.3152, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-746", city: "berlin", name: "Kästner Bar & Bistro", address: "Prager Straße", 
    lat: 52.4938, lng: 13.3332, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-747", city: "berlin", name: "Blauer Mond", address: "Müggelheimer Straße 21", 
    lat: 52.4417, lng: 13.5841, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-748", city: "berlin", name: "Stolpertreppe", address: "Adresse unbekannt", 
    lat: 52.4225, lng: 13.4374, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-749", city: "berlin", name: "Sports Laola Bar", address: "Adresse unbekannt", 
    lat: 52.4405, lng: 13.3877, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar", "outdoor"] },

  { id: "ber-750", city: "berlin", name: "Cafe Bar II", address: "Adresse unbekannt", 
    lat: 52.5319, lng: 13.3498, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-751", city: "berlin", name: "Beachbar Arkenberge", address: "Adresse unbekannt", 
    lat: 52.6387, lng: 13.4096, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-752", city: "berlin", name: "Meriam", address: "Adresse unbekannt", 
    lat: 52.4653, lng: 13.4424, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-753", city: "berlin", name: "P-two", address: "Adresse unbekannt", 
    lat: 52.5361, lng: 13.6019, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-754", city: "berlin", name: "Rodi", address: "Adresse unbekannt", 
    lat: 52.5534, lng: 13.4357, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-755", city: "berlin", name: "Bebo", address: "Mehringdamm 61", 
    lat: 52.4908, lng: 13.3873, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-756", city: "berlin", name: "Das Weinlokal", address: "Rupprechtstraße 31", 
    lat: 52.5035, lng: 13.4903, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-757", city: "berlin", name: "Kaia", address: "Adresse unbekannt", 
    lat: 52.5099, lng: 13.4552, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-758", city: "berlin", name: "Katzler Stuebchen", address: "Adresse unbekannt", 
    lat: 52.4926, lng: 13.3694, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-759", city: "berlin", name: "Pawn Dot Com", address: "Torstraße 164", 
    lat: 52.5288, lng: 13.3963, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-760", city: "berlin", name: "migas, a listening bar", address: "Lindower Straße 19", 
    lat: 52.5437, lng: 13.3677, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-761", city: "berlin", name: "M-Bar", address: "Adresse unbekannt", 
    lat: 52.4569, lng: 13.5084, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-762", city: "berlin", name: "Spina", address: "Seumestraße 2", 
    lat: 52.5077, lng: 13.461, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "italian"] },

  { id: "ber-763", city: "berlin", name: "Bar Neiro", address: "Ohmstraße 11", 
    lat: 52.5117, lng: 13.4179, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-764", city: "berlin", name: "Himitsu Speakeasy Bar", address: "Alte Potsdamer Straße 7 7", 
    lat: 52.5075, lng: 13.3736, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-765", city: "berlin", name: "Ficken3000", address: "Urbanstraße 70", 
    lat: 52.4886, lng: 13.4227, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-766", city: "berlin", name: "Bier-Bar", address: "Adresse unbekannt", 
    lat: 52.5105, lng: 13.4527, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-767", city: "berlin", name: "Freundschaft", address: "Mittelstraße 1", 
    lat: 52.5182, lng: 13.3903, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-768", city: "berlin", name: "Turn Up", address: "Adresse unbekannt", 
    lat: 52.5066, lng: 13.3031, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-769", city: "berlin", name: "BAR DaF", address: "Bouchéstraße 15", 
    lat: 52.4912, lng: 13.4497, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-770", city: "berlin", name: "Cafe All In Berlin", address: "Adresse unbekannt", 
    lat: 52.5098, lng: 13.2978, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-771", city: "berlin", name: "Hier wo du strahlst", address: "Rosa-Luxemburg-Straße 20", 
    lat: 52.5252, lng: 13.4107, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-772", city: "berlin", name: "F37 Berlin Weinbar & Kunstgalerie", address: "Fasanenstraße 37", 
    lat: 52.4989, lng: 13.3266, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-773", city: "berlin", name: "TATI goes underground", address: "Metzer Straße 2", 
    lat: 52.5321, lng: 13.4139, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-774", city: "berlin", name: "Küche Bar", address: "Tempelhofer Ufer 16", 
    lat: 52.4985, lng: 13.384, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-775", city: "berlin", name: "Lounge Fifty-Two", address: "Adresse unbekannt", 
    lat: 52.4354, lng: 13.5472, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-776", city: "berlin", name: "cafe bar", address: "Hermannstraße 57", 
    lat: 52.4766, lng: 13.4263, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "hausbrauerei"] },

  { id: "ber-777", city: "berlin", name: "Bata Bar & Billiards am Alex", address: "Adresse unbekannt", 
    lat: 52.5227, lng: 13.4079, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-778", city: "berlin", name: "Star", address: "Adresse unbekannt", 
    lat: 52.4864, lng: 13.4303, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-779", city: "berlin", name: "Café Allee", address: "Adresse unbekannt", 
    lat: 52.5135, lng: 13.4743, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-780", city: "berlin", name: "Sky Bar", address: "Adresse unbekannt", 
    lat: 52.5141, lng: 13.4686, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-781", city: "berlin", name: "Gartn", address: "Blockdammweg 1", district: "rummelsburg",
    lat: 52.4838, lng: 13.5015, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-782", city: "berlin", name: "Lieschen Mueller", address: "Panoramastraße 1A", 
    lat: 52.5207, lng: 13.4085, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-783", city: "berlin", name: "Sunset Beach", address: "Adresse unbekannt", 
    lat: 52.5325, lng: 13.1977, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-784", city: "berlin", name: "Stairs", address: "Adresse unbekannt", 
    lat: 52.4923, lng: 13.3236, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-785", city: "berlin", name: "HausElf", address: "Adresse unbekannt", 
    lat: 52.4324, lng: 13.5271, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-786", city: "berlin", name: "Phantom Bar", address: "Adresse unbekannt", 
    lat: 52.5271, lng: 13.3879, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-787", city: "berlin", name: "Watt ‘n ditt?!", address: "Wattstraße, 12459 Berlin 17", 
    lat: 52.4674, lng: 13.5091, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-788", city: "berlin", name: "Mauersegler", address: "Bernauer Straße 63", 
    lat: 52.5406, lng: 13.4032, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-789", city: "berlin", name: "Café Havanna Bar", address: "Adresse unbekannt", 
    lat: 52.557, lng: 13.4147, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-790", city: "berlin", name: "Weinbistro VesBar", address: "Adresse unbekannt", 
    lat: 52.3606, lng: 13.41, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-791", city: "berlin", name: "Schloss Frizzante", address: "Richardstraße 72", 
    lat: 52.4735, lng: 13.4457, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-792", city: "berlin", name: "Chill mal! Bar", address: "Adresse unbekannt", 
    lat: 52.5495, lng: 13.4473, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-793", city: "berlin", name: "Schnieke", address: "Adresse unbekannt", 
    lat: 52.5443, lng: 13.4421, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-794", city: "berlin", name: "Treffpunk Schillerpark", address: "Schöningstraße 15", 
    lat: 52.5576, lng: 13.3443, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-795", city: "berlin", name: "Attenzione", address: "Oderbruchstraße 9", 
    lat: 52.5302, lng: 13.461, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-796", city: "berlin", name: "The Beach Club", address: "Adresse unbekannt", 
    lat: 52.4697, lng: 13.4423, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-797", city: "berlin", name: "Sky Sportsbar", address: "Adresse unbekannt", 
    lat: 52.4613, lng: 13.5184, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ber-798", city: "berlin", name: "Zu Hell Café & Bar", address: "Wielandstraße 38", 
    lat: 52.504, lng: 13.3157, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-799", city: "berlin", name: "CocktailBar", address: "Adresse unbekannt", 
    lat: 52.5347, lng: 13.4952, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-800", city: "berlin", name: "Da Da Da", address: "Regattastraße 62", 
    lat: 52.4222, lng: 13.5765, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-801", city: "berlin", name: "Schinkel Bar", address: "Adresse unbekannt", 
    lat: 52.515, lng: 13.3944, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-802", city: "berlin", name: "Honey Lou Bar", address: "Anzengruberstraße 3", 
    lat: 52.4801, lng: 13.4381, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-803", city: "berlin", name: "Moe Greene", address: "Adresse unbekannt", 
    lat: 52.5042, lng: 13.3812, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-804", city: "berlin", name: "Fuchs & Hase", address: "Potsdamer Straße 3", 
    lat: 52.4357, lng: 13.2578, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-805", city: "berlin", name: "Slap'd", address: "Adresse unbekannt", 
    lat: 52.5074, lng: 13.4569, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-806", city: "berlin", name: "The Gibson Bar", address: "Adresse unbekannt", 
    lat: 52.5057, lng: 13.3803, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-807", city: "berlin", name: "The Knast Bar", address: "Söhtstraße 7", 
    lat: 52.4378, lng: 13.3087, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-808", city: "berlin", name: "Pluto", address: "Kastanienallee 27", 
    lat: 52.5374, lng: 13.4082, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-809", city: "berlin", name: "The Rad", address: "Adresse unbekannt", 
    lat: 52.4928, lng: 13.4283, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-810", city: "berlin", name: "Majestic II", address: "Adresse unbekannt", 
    lat: 52.4647, lng: 13.4326, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-811", city: "berlin", name: "PANÙ", address: "Karl-Marx-Straße 101", 
    lat: 52.4796, lng: 13.4374, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei", "italian"] },

  { id: "ber-812", city: "berlin", name: "Bar 7302", address: "Adresse unbekannt", 
    lat: 52.5695, lng: 13.568, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-813", city: "berlin", name: "Club Culture Houze", address: "Görlitzer Straße 71", 
    lat: 52.4987, lng: 13.4343, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ber-814", city: "berlin", name: "Truffle Pig Bar", address: "Reuterstraße 47", 
    lat: 52.4901, lng: 13.4287, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-815", city: "berlin", name: "Cheers XS", address: "Adresse unbekannt", 
    lat: 52.3577, lng: 13.4096, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-816", city: "berlin", name: "File Asto", address: "Kollwitzstraße 26", 
    lat: 52.5331, lng: 13.4149, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei", "greek"] },

  { id: "ber-817", city: "berlin", name: "U BAR", address: "Adresse unbekannt", 
    lat: 52.4894, lng: 13.4208, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-818", city: "berlin", name: "Agatabar", address: "Adresse unbekannt", 
    lat: 52.4858, lng: 13.4347, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-819", city: "berlin", name: "Beach Bar", address: "Adresse unbekannt", 
    lat: 52.5436, lng: 13.3288, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-820", city: "berlin", name: "WAU", address: "Hallesches Ufer 34", 
    lat: 52.4991, lng: 13.386, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-821", city: "berlin", name: "Nomi", address: "Adresse unbekannt", 
    lat: 52.5013, lng: 13.4283, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-822", city: "berlin", name: "Schreinerstraße 47", address: "Schreinerstraße 47", 
    lat: 52.5171, lng: 13.4673, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-823", city: "berlin", name: "Kerb Berlin", address: "Adresse unbekannt", 
    lat: 52.5099, lng: 13.373, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-824", city: "berlin", name: "Art and Soul", address: "Adresse unbekannt", 
    lat: 52.4823, lng: 13.436, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-825", city: "berlin", name: "PETERS", address: "Friedrichstraße 110A", 
    lat: 52.5251, lng: 13.3885, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-826", city: "berlin", name: "Silent Jazz Bar", address: "Naumannstraße 3", 
    lat: 52.4859, lng: 13.3637, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-827", city: "berlin", name: "The Bar", address: "Adresse unbekannt", 
    lat: 52.5244, lng: 13.3692, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-828", city: "berlin", name: "DES-PERADO", address: "Adresse unbekannt", 
    lat: 52.4057, lng: 13.4064, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-829", city: "berlin", name: "Night & Day", address: "Brüsseler Straße 3", 
    lat: 52.5489, lng: 13.353, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-830", city: "berlin", name: "Cafe Wild", address: "Adresse unbekannt", 
    lat: 52.4661, lng: 13.4319, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-831", city: "berlin", name: "SaBar", address: "Adresse unbekannt", 
    lat: 52.5011, lng: 13.4328, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-832", city: "berlin", name: "Taff", address: "Adresse unbekannt", 
    lat: 52.498, lng: 13.3225, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-833", city: "berlin", name: "Clara", address: "Oranienburger Straße 54", 
    lat: 52.5256, lng: 13.3894, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-834", city: "berlin", name: "Böse Buben", address: "Sachsendamm 76-77", 
    lat: 52.4773, lng: 13.3578, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-835", city: "berlin", name: "Rhinoçéros", address: "Rhinower Straße 3", 
    lat: 52.548, lng: 13.4101, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-836", city: "berlin", name: "Der kleine August", address: "Auguststraße 23", 
    lat: 52.5269, lng: 13.3966, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-837", city: "berlin", name: "ikii", address: "Herrfurthplatz 8", 
    lat: 52.4766, lng: 13.4215, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-838", city: "berlin", name: "Bredouille Bar", address: "Georgenstraße 199", 
    lat: 52.52, lng: 13.3898, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-839", city: "berlin", name: "Zero Stress", address: "Adresse unbekannt", 
    lat: 52.4877, lng: 13.3946, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-840", city: "berlin", name: "Sabon Weinbistro", address: "Adresse unbekannt", 
    lat: 52.5393, lng: 13.4071, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-841", city: "berlin", name: "Sportscafe", address: "Adresse unbekannt", 
    lat: 52.5153, lng: 13.2874, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ber-842", city: "berlin", name: "Misfit", address: "Leuschnerdamm 41", district: "kreuzberg",
    lat: 52.503, lng: 13.417, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-843", city: "berlin", name: "Zur Insel", address: "Adresse unbekannt", 
    lat: 52.4119, lng: 13.3615, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-844", city: "berlin", name: "Hasenstall", address: "Manteuffelstraße 11", district: "tempelhof",
    lat: 52.4635, lng: 13.3769, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-845", city: "berlin", name: "Vorstadtgeflüster", address: "Karl-Marx-Straße 52b", 
    lat: 52.4144, lng: 13.2237, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-846", city: "berlin", name: "Train", address: "Hauptstraße 162", district: "schöneberg",
    lat: 52.4905, lng: 13.3609, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-847", city: "berlin", name: "Fosca", address: "Sterndamm 85-87", district: "johannisthal",
    lat: 52.4446, lng: 13.5047, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-848", city: "berlin", name: "Paris-Rom-Erkner Sportsbar Diner", address: "Neu Zittauer Straße 15", 
    lat: 52.4136, lng: 13.7525, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ber-849", city: "berlin", name: "Alte Liebe Tempelhof", address: "Tempelhofer Damm 227", 
    lat: 52.4553, lng: 13.3873, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-850", city: "berlin", name: "Amano Dachterrasse", address: "Auguststraße 43", district: "mitte",
    lat: 52.5283, lng: 13.4028, drink: "Bier nach Wahl 0,5l", par: 5, type: "biergarten",
    tags: ["biergarten", "barrierefrei"] },

  { id: "ber-851", city: "berlin", name: "BDSM Lounge", address: "Kirchhofstraße 44", 
    lat: 52.4725, lng: 13.4437, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor"] },

  { id: "ber-852", city: "berlin", name: "Frieda Hagen", address: "Fürstenwalder Damm 462", 
    lat: 52.4562, lng: 13.6226, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-853", city: "berlin", name: "Generator Bar", address: "Adresse unbekannt", 
    lat: 52.5299, lng: 13.4552, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "hausbrauerei"] },

  { id: "ber-854", city: "berlin", name: "Cocktail Oase Eck", address: "Adresse unbekannt", 
    lat: 52.5374, lng: 13.5909, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-855", city: "berlin", name: "Berlinoss", address: "Adresse unbekannt", 
    lat: 52.4126, lng: 13.3495, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "barrierefrei"] },

  { id: "ber-856", city: "berlin", name: "Club der Visionaere", address: "Am Flutgraben 1", 
    lat: 52.4968, lng: 13.4505, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "outdoor"] },

  { id: "ber-857", city: "berlin", name: "Zosse", address: "Richardstraße 37", district: "neukölln",
    lat: 52.4749, lng: 13.4436, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-858", city: "berlin", name: "Rodi LOUNGE", address: "Zechliner Straße 4", district: "alt-hohenschönhausen",
    lat: 52.5358, lng: 13.4921, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ber-859", city: "berlin", name: "Parkcafé Bar", address: "Fehrbelliner Platz 8", district: "wilmersdorf",
    lat: 52.4913, lng: 13.3141, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor", "barrierefrei"] },

  { id: "ber-860", city: "berlin", name: "Latino Bsr", address: "Berliner Straße 45a", district: "zehlendorf",
    lat: 52.4387, lng: 13.2717, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },

  { id: "ber-861", city: "berlin", name: "Badebar", address: "Am Dämeritzsee 2", 
    lat: 52.4251, lng: 13.7425, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-862", city: "berlin", name: "Schirmbar", address: "Adresse unbekannt", 
    lat: 52.5292, lng: 13.4168, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar"] },

  { id: "ber-863", city: "berlin", name: "Beach 61 Bar", address: "Adresse unbekannt", 
    lat: 52.4962, lng: 13.372, drink: "Bier nach Wahl 0,5l", par: 3, type: "bar",
    tags: ["bar", "outdoor"] },


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
    lat: 50.102, lng: 8.687, drink: "Apfelwein 0,3l Geripptes", par: 3, type: "brauhaus",
    tags: ["sachsenhausen", "apfelwein", "lokal", "gemütlich"] },

  { id: "fra-006", city: "frankfurt", name: "Klapper 33", address: "Klappergasse 33", district: "sachsenhausen",
    lat: 50.1013, lng: 8.682, drink: "Pils vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["sachsenhausen", "kopfsteinpflaster", "eintracht", "dart", "rock"] },

  { id: "fra-007", city: "frankfurt", name: "Alte Liebe", address: "Darmstädter Landstraße 23", district: "sachsenhausen",
    lat: 50.0976, lng: 8.6872, drink: "Bier 0,5l oder Apfelwein", par: 3, type: "kneipe",
    tags: ["sachsenhausen", "wohnzimmer-feeling", "tatort", "konzerte", "lokal"] },

  { id: "fra-008", city: "frankfurt", name: "Depot 1899", address: "Textorstraße 33", district: "sachsenhausen",
    lat: 50.0997, lng: 8.691, drink: "Bier 0,5l", par: 4, type: "sportbar",
    tags: ["sachsenhausen", "depot", "sport", "eintracht", "events"] },

  { id: "fra-009", city: "frankfurt", name: "Stevedoo Sportsbar", address: "Kleine Rittergasse 28", district: "sachsenhausen",
    lat: 50.1, lng: 8.682, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sachsenhausen", "sport", "abends", "gemütlich"] },

  { id: "fra-010", city: "frankfurt", name: "Zur kleinen Glocke", address: "Paradiesgasse 61", district: "sachsenhausen",
    lat: 50.103, lng: 8.68, drink: "Apfelwein 0,3l Geripptes", par: 3, type: "brauhaus",
    tags: ["sachsenhausen", "kult", "apfelwein", "charme"] },

  { id: "fra-011", city: "frankfurt", name: "Ha-Ka", address: "Habsburgerallee 21", district: "bornheim",
    lat: 50.1235, lng: 8.7068, drink: "Bier 0,5l + Cocktail", par: 3, type: "kneipe",
    tags: ["bornheim", "terrasse", "gemütlich", "abends", "stammkneipe"] },

  { id: "fra-012", city: "frankfurt", name: "Zum Alten Schlagbaum", address: "Berger Straße 248", district: "bornheim",
    lat: 50.123, lng: 8.7062, drink: "Schoppen oder Pils 0,5l", par: 3, type: "kneipe",
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
    lat: 50.129, lng: 8.6928, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["nordend", "alternativ", "musik", "nacht-noch-was-los"] },

  { id: "fra-018", city: "frankfurt", name: "Chlodwig-Eck", address: "Klappergasse 35", district: "sachsenhausen",
    lat: 50.1013, lng: 8.6819, drink: "Apfelwein 0,3l", par: 3, type: "kneipe",
    tags: ["sachsenhausen", "kultlokal", "sport-leinwand", "gemütlich"] },

  { id: "fra-019", city: "frankfurt", name: "Drinksmith", address: "Fahrgasse 91", district: "altstadt",
    lat: 50.1107, lng: 8.682, drink: "Craft Cocktail", par: 4, type: "cocktailbar",
    tags: ["altstadt", "nachbarschaftsbar", "cocktails", "handwerkskunst"] },

  { id: "fra-020", city: "frankfurt", name: "White Rabbit Bar", address: "Untermainkai 23", district: "altstadt",
    lat: 50.1083, lng: 8.6741, drink: "Alice Cocktail", par: 4, type: "cocktailbar",
    tags: ["altstadt", "maintor", "wunderland-thema", "first-class-cocktails"] },

  { id: "fra-021", city: "frankfurt", name: "Seven Swans Bar", address: "Mainkai 9", district: "altstadt",
    lat: 50.1096, lng: 8.681, drink: "Ausgezeichneter Cocktail", par: 4, type: "cocktailbar",
    tags: ["altstadt", "award-winning", "szene", "mainufer"] },

  { id: "fra-022", city: "frankfurt", name: "Hunky Dory", address: "Stiftstraße 18", district: "innenstadt",
    lat: 50.1161, lng: 8.678, drink: "Hausgemixte Drinks + Retrotelefon", par: 4, type: "bar",
    tags: ["innenstadt", "retro", "phone-order", "szene", "cool"] },

  { id: "fra-023", city: "frankfurt", name: "Roomers Bar", address: "Gutleutstraße 85", district: "bahnhofsviertel",
    lat: 50.1042, lng: 8.6622, drink: "Hotel Signature Cocktail", par: 5, type: "cocktailbar",
    tags: ["bahnhofsviertel", "luxury", "award-winning", "hotelbar"] },

  { id: "fra-024", city: "frankfurt", name: "Freigraf", address: "Braubachstraße 34", district: "altstadt",
    lat: 50.1118, lng: 8.683, drink: "Hessisches Bier 0,5l", par: 4, type: "brauhaus",
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
    lat: 50.1227, lng: 8.706, drink: "Gin oder Cocktail", par: 4, type: "cocktailbar",
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
    lat: 50.1107, lng: 8.678, drink: "Bier oder Cocktail", par: 4, type: "bar",
    tags: ["innenstadt", "goethe-haus", "kulturell", "schick"] },

  { id: "fra-045", city: "frankfurt", name: "Alto Bar", address: "Konrad-Adenauer-Straße 17", district: "innenstadt",
    lat: 50.1163, lng: 8.683, drink: "Cocktail", par: 4, type: "cocktailbar",
    tags: ["innenstadt", "lounge", "abendessen", "szene"] },

  { id: "fra-046", city: "frankfurt", name: "Kiosk 11", address: "Elbinger Straße 11", district: "nordend",
    lat: 50.1325, lng: 8.6948, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["nordend", "kiez", "entspannt", "stammgäste"] },

  { id: "fra-047", city: "frankfurt", name: "Frankfurter Botschaft", address: "Berger Straße 68", district: "bornheim",
    lat: 50.1208, lng: 8.702, drink: "Binding Bier 0,5l", par: 3, type: "kneipe",
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
  // HAMBURG  🎵  (ham-001 bis ham-400)
  // ═══════════════════════════════════════════════════════════════

  { id: "ham-001", city: "hamburg", name: "Gretel & Alfons", address: "Große Freiheit 29", district: "st-pauli",
    lat: 53.5504, lng: 9.959, drink: "Astra 0,5l", par: 4, type: "kneipe",
    tags: ["kult", "st-pauli", "beatles-stammkneipe", "historisch", "kiez"] },

  { id: "ham-002", city: "hamburg", name: "Zum Silbersack", address: "Silbersackstraße 9", district: "st-pauli",
    lat: 53.5506, lng: 9.963, drink: "Astra 0,5l", par: 3, type: "kneipe",
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
    lat: 53.551, lng: 9.9618, drink: "Astra 0,5l", par: 3, type: "kneipe",
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
    lat: 53.5503, lng: 9.963, drink: "Buttermilch-Margarita", par: 4, type: "cocktailbar",
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
    lat: 53.558, lng: 9.9608, drink: "Jever vom Fass 0,5l", par: 3, type: "kneipe",
    tags: ["schanze", "stammkneipe", "souterrain", "seit-ewigkeiten", "herzlich"] },

  { id: "ham-019", city: "hamburg", name: "Berliner Betrüger", address: "Juliusstraße 25", district: "schanze",
    lat: 53.5604, lng: 9.9574, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["schanze", "dunkel", "gemütlich", "gemischt"] },

  { id: "ham-020", city: "hamburg", name: "Pony Bar", address: "Schulterblatt 112", district: "schanze",
    lat: 53.5634, lng: 9.966, drink: "Bier 0,5l", par: 3, type: "kneipe",
    tags: ["schanze", "konzerte", "open-mic", "café-tagsüber", "kultur"] },

  { id: "ham-021", city: "hamburg", name: "Bar Thier", address: "Max-Brauer-Allee 278", district: "schanze",
    lat: 53.56, lng: 9.958, drink: "Ratsherrn 0,5l + DJ", par: 4, type: "bar",
    tags: ["schanze", "queer", "drag", "weekend", "szene"] },

  { id: "ham-022", city: "hamburg", name: "Lilli Escher", address: "Max-Brauer-Allee 279", district: "altona",
    lat: 53.5599, lng: 9.9579, drink: "Cocktail + Billard", par: 4, type: "cocktailbar",
    tags: ["altona", "schanze-grenze", "cocktails", "billard", "szene"] },

  { id: "ham-023", city: "hamburg", name: "Aalhaus", address: "Zeiseweg 2", district: "altona",
    lat: 53.5542, lng: 9.943, drink: "Bier 0,5l", par: 3, type: "kneipe",
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
    lat: 53.55, lng: 9.9637, drink: "Funk-Cocktail", par: 4, type: "bar",
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
    lat: 53.552, lng: 9.9661, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["st-pauli", "urig", "fair", "echter-kiez", "muss-man-gewesen-sein"] },

  { id: "ham-035", city: "hamburg", name: "Kaiserkeller", address: "Große Freiheit 36", district: "st-pauli",
    lat: 53.5503, lng: 9.9592, drink: "Astra 0,5l", par: 4, type: "kneipe",
    tags: ["st-pauli", "beatles-keller", "historisch", "livemusik", "kult"] },

  { id: "ham-036", city: "hamburg", name: "ZWICK St. Pauli", address: "Schulterblatt 50", district: "schanze",
    lat: 53.5612, lng: 9.9632, drink: "Bier 0,5l + Livemusik", par: 3, type: "sportbar",
    tags: ["schanze", "bundesliga", "livemusik", "sport"] },

  { id: "ham-037", city: "hamburg", name: "Zur gemütlichen Ecke", address: "Bei den St. Pauli Landungsbrücken 3", district: "st-pauli",
    lat: 53.547, lng: 9.9682, drink: "Astra 0,5l", par: 3, type: "kneipe",
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
    lat: 53.55, lng: 9.9552, drink: "Überquell Craft Bier 0,3l", par: 4, type: "brauhaus",
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
    lat: 53.5509, lng: 9.962, drink: "Cocktail in Rot und Gold", par: 4, type: "cocktailbar",
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
    lat: 53.548, lng: 9.9601, drink: "Cocktail + Elbpanorama", par: 5, type: "cocktailbar",
    tags: ["st-pauli", "rooftop", "elbblick", "premium", "20-etage"] },

  { id: "ham-051", city: "hamburg", name: "Bar 380", address: "Finkenwerder Norderdeich 18a", 
    lat: 53.5338, lng: 9.866, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-052", city: "hamburg", name: "Tower Bar", address: "Adresse unbekannt", 
    lat: 53.5468, lng: 9.9695, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-053", city: "hamburg", name: "Reisebar", address: "Ottenser Hauptstraße 30", 
    lat: 53.5521, lng: 9.9295, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "hausbrauerei"] },

  { id: "ham-054", city: "hamburg", name: "Cafe Unter den Linden", address: "Juliusstraße 16", 
    lat: 53.5612, lng: 9.9603, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "breakfast", "cake", "coffee_shop"] },

  { id: "ham-055", city: "hamburg", name: "Kostbar", address: "Susannenstraße 36", 
    lat: 53.5623, lng: 9.9631, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-056", city: "hamburg", name: "Quer", address: "Bahrenfelder Straße 180", 
    lat: 53.5546, lng: 9.9288, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-057", city: "hamburg", name: "Reh-Bar", address: "Ottenser Hauptstraße 52", 
    lat: 53.5518, lng: 9.9272, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-058", city: "hamburg", name: "La Belle 2", address: "Fuhlsbüttler Straße 220", 
    lat: 53.5952, lng: 10.0441, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "barrierefrei"] },

  { id: "ham-059", city: "hamburg", name: "Haus 73", address: "Schulterblatt 73", 
    lat: 53.5624, lng: 9.9612, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-060", city: "hamburg", name: "StrandPauli", address: "St. Pauli Hafenstraße 89", 
    lat: 53.546, lng: 9.9621, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "regional"] },

  { id: "ham-061", city: "hamburg", name: "Im Tivoli", address: "Adresse unbekannt", 
    lat: 53.4469, lng: 9.9916, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-062", city: "hamburg", name: "Wilstorfer Hof", address: "Adresse unbekannt", 
    lat: 53.4455, lng: 9.9907, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-063", city: "hamburg", name: "Schnulze", address: "Adresse unbekannt", 
    lat: 53.4476, lng: 9.9897, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-064", city: "hamburg", name: "Le Fonque", address: "Juliusstraße 33", 
    lat: 53.5614, lng: 9.9615, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-065", city: "hamburg", name: "Bistro Europa", address: "Käkenflur 14 a", 
    lat: 53.6719, lng: 9.9996, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-066", city: "hamburg", name: "Eier Carl", address: "Fischmarkt 3", 
    lat: 53.5453, lng: 9.9522, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "regional", "fish", "hausbrauerei"] },

  { id: "ham-067", city: "hamburg", name: "Come In", address: "Hummelsbüttler Hauptstraße 55 e", 
    lat: 53.6413, lng: 10.0372, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-068", city: "hamburg", name: "Klimperkiste", address: "Adresse unbekannt", 
    lat: 53.5578, lng: 9.9905, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-069", city: "hamburg", name: "Antik", address: "Adresse unbekannt", 
    lat: 53.4635, lng: 9.9813, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-070", city: "hamburg", name: "The Old Dubliner - Irish Pub", address: "Adresse unbekannt", 
    lat: 53.4635, lng: 9.9805, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish", "outdoor"] },

  { id: "ham-071", city: "hamburg", name: "VielHarmonie", address: "Markusstraße 17", 
    lat: 53.5509, lng: 9.9795, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-072", city: "hamburg", name: "Mathilde Bar", address: "Bogenstraße 5", 
    lat: 53.5716, lng: 9.9767, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish", "outdoor", "coffee_shop", "hausbrauerei"] },

  { id: "ham-073", city: "hamburg", name: "Christiansen's", address: "Adresse unbekannt", 
    lat: 53.5464, lng: 9.9541, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-074", city: "hamburg", name: "Titanic Irish Pub", address: "Adresse unbekannt", 
    lat: 53.5633, lng: 9.929, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish", "outdoor"] },

  { id: "ham-075", city: "hamburg", name: "Goescheneck", address: "Marienstraße 37", 
    lat: 53.4579, lng: 9.9739, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-076", city: "hamburg", name: "Marien Eck", address: "Adresse unbekannt", 
    lat: 53.4586, lng: 9.9762, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-077", city: "hamburg", name: "Barsbütteler Bierstübchen", address: "Willinghusener Landstraße 11a", 
    lat: 53.569, lng: 10.1736, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-078", city: "hamburg", name: "scheene Perle", address: "Lornsenstraße 88", 
    lat: 53.6055, lng: 9.8431, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-079", city: "hamburg", name: "Rugen-Eck", address: "Blomkamp 2", 
    lat: 53.5759, lng: 9.8472, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "hausbrauerei"] },

  { id: "ham-080", city: "hamburg", name: "Janssen's", address: "Rugenbarg", 
    lat: 53.5881, lng: 9.8749, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-081", city: "hamburg", name: "Bertels", address: "Feldstraße 73", 
    lat: 53.5563, lng: 9.9681, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-082", city: "hamburg", name: "Zur Mühlenklause", address: "Adresse unbekannt", 
    lat: 53.5362, lng: 10.0331, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "regional"] },

  { id: "ham-083", city: "hamburg", name: "Robi's Island", address: "Adresse unbekannt", 
    lat: 53.534, lng: 10.0431, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-084", city: "hamburg", name: "Kamm In", address: "Adresse unbekannt", 
    lat: 53.5513, lng: 9.9823, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-085", city: "hamburg", name: "Marktschänke", address: "Adresse unbekannt", 
    lat: 53.4707, lng: 9.8534, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-086", city: "hamburg", name: "Holsten-Eck", address: "Luruper Hauptstraße 250a", 
    lat: 53.5979, lng: 9.8625, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-087", city: "hamburg", name: "Bei Mike", address: "Parkgrund 19", 
    lat: 53.6018, lng: 9.843, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-088", city: "hamburg", name: "1 & Dreißig", address: "Adresse unbekannt", 
    lat: 53.5726, lng: 9.951, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "barrierefrei"] },

  { id: "ham-089", city: "hamburg", name: "Metro Bar", address: "Dehnhaide 2", 
    lat: 53.5794, lng: 10.0413, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-090", city: "hamburg", name: "Cheers & Sasa", address: "Adresse unbekannt", 
    lat: 53.5337, lng: 10.0451, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-091", city: "hamburg", name: "Schramme 10", address: "Adresse unbekannt", 
    lat: 53.5907, lng: 9.9889, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-092", city: "hamburg", name: "Die Glocke", address: "Klosterallee 65", 
    lat: 53.5795, lng: 9.9795, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish", "outdoor", "hausbrauerei"] },

  { id: "ham-093", city: "hamburg", name: "Pavlos-Eck", address: "Oldachstraße 34", 
    lat: 53.5963, lng: 10.0405, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-094", city: "hamburg", name: "Onkel Otto", address: "Adresse unbekannt", 
    lat: 53.5467, lng: 9.96, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-095", city: "hamburg", name: "Croque Bistro am Pferdestall", address: "Am Gutshof 1", district: "hoisbüttel",
    lat: 53.6916, lng: 10.1659, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "barrierefrei"] },

  { id: "ham-096", city: "hamburg", name: "KytiVoo", address: "Adresse unbekannt", 
    lat: 53.5581, lng: 10.0126, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-097", city: "hamburg", name: "M&V Gaststätte", address: "Lange Reihe 22", 
    lat: 53.5559, lng: 10.0096, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-098", city: "hamburg", name: "Zum Schellfischposten", address: "Carsten-Rehder-Straße 62", 
    lat: 53.5446, lng: 9.9461, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-099", city: "hamburg", name: "Gaststätte Dreyer", address: "Martin-Luther-Straße 4", 
    lat: 53.5481, lng: 9.9821, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-100", city: "hamburg", name: "Café Borchers", address: "Geschwister-Scholl-Straße 1-3", 
    lat: 53.5943, lng: 9.987, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-101", city: "hamburg", name: "Zum Spritzenhaus", address: "Adresse unbekannt", 
    lat: 53.6151, lng: 10.1356, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-102", city: "hamburg", name: "Berner Marktschänke", address: "Kriegkamp 4", 
    lat: 53.6267, lng: 10.1404, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-103", city: "hamburg", name: "Café Miller", address: "Detlev-Bremer-Straße 16", 
    lat: 53.552, lng: 9.9652, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "breakfast", "cake", "coffee_shop"] },

  { id: "ham-104", city: "hamburg", name: "Max und Consorten", address: "Spadenteich 1", 
    lat: 53.556, lng: 10.0081, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-105", city: "hamburg", name: "Feierabend", address: "Adresse unbekannt", 
    lat: 53.5746, lng: 10.0709, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-106", city: "hamburg", name: "The Irish Rover", address: "Großneumarkt 8", 
    lat: 53.5507, lng: 9.9809, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish", "outdoor", "barrierefrei"] },

  { id: "ham-107", city: "hamburg", name: "SportsBar", address: "Adresse unbekannt", 
    lat: 53.4894, lng: 10.1581, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ham-108", city: "hamburg", name: "Dorotheen-Eck", address: "Adresse unbekannt", 
    lat: 53.5922, lng: 10.0024, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-109", city: "hamburg", name: "Kamphuis", address: "Kampstraße 57", 
    lat: 53.7295, lng: 9.913, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-110", city: "hamburg", name: "Gurke", address: "Adresse unbekannt", 
    lat: 53.5688, lng: 9.9951, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-111", city: "hamburg", name: "Tibarg Treff", address: "Adresse unbekannt", 
    lat: 53.6234, lng: 9.9544, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-112", city: "hamburg", name: "Louisiana", address: "Adresse unbekannt", 
    lat: 53.571, lng: 10.0278, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-113", city: "hamburg", name: "Schweizer Haus", address: "Hadermanns Weg 57", district: "niendorf",
    lat: 53.6258, lng: 9.9462, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-114", city: "hamburg", name: "Victor's Bratkartoffel Restaurant", address: "Quedlinburger Weg 84", district: "niendorf",
    lat: 53.6363, lng: 9.9443, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-115", city: "hamburg", name: "Monty's", address: "Adresse unbekannt", 
    lat: 53.5832, lng: 10.0123, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-116", city: "hamburg", name: "Kuhstall", address: "Adresse unbekannt", 
    lat: 53.5501, lng: 9.9664, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-117", city: "hamburg", name: "Shovel Road", address: "Gasstraße 2a", 
    lat: 53.561, lng: 9.917, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-118", city: "hamburg", name: "No Name", address: "Elligersweg 7", 
    lat: 53.6053, lng: 10.0407, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-119", city: "hamburg", name: "Drei Eichen", address: "Adresse unbekannt", 
    lat: 53.6134, lng: 9.9785, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-120", city: "hamburg", name: "Zum Wandsetaler", address: "Walddörferstraße 247", 
    lat: 53.5816, lng: 10.0987, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-121", city: "hamburg", name: "Die Narzisse", address: "Friedrich-Ebert-Damm 49", 
    lat: 53.5856, lng: 10.0813, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-122", city: "hamburg", name: "Gazoline", address: "Bahrenfelder Straße 132", 
    lat: 53.553, lng: 9.9298, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-123", city: "hamburg", name: "Zur letzten Minute", address: "Adresse unbekannt", 
    lat: 53.5168, lng: 10.097, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-124", city: "hamburg", name: "Zum Lohhof", address: "Moorende 27", 
    lat: 53.5596, lng: 10.0536, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-125", city: "hamburg", name: "Sunset Billard", address: "Walddörferstraße 110", 
    lat: 53.5796, lng: 10.077, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-126", city: "hamburg", name: "Imstedt 4", address: "Adresse unbekannt", 
    lat: 53.5799, lng: 10.0297, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-127", city: "hamburg", name: "Holzmühlen Eck", address: "Adresse unbekannt", 
    lat: 53.58, lng: 10.0815, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-128", city: "hamburg", name: "Zum alten Bahnhof", address: "Adresse unbekannt", 
    lat: 53.4484, lng: 10.2215, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-129", city: "hamburg", name: "Zum Wilhelmsburger", address: "Adresse unbekannt", 
    lat: 53.5155, lng: 9.9884, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-130", city: "hamburg", name: "Ilohh, Bar am Ende der Welt", address: "Adresse unbekannt", 
    lat: 53.5486, lng: 10.0131, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-131", city: "hamburg", name: "Ostria", address: "Peterskampweg 48", 
    lat: 53.5649, lng: 10.0512, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-132", city: "hamburg", name: "Holstenstübchen", address: "Adresse unbekannt", 
    lat: 53.5679, lng: 10.0488, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-133", city: "hamburg", name: "Gondel", address: "Adresse unbekannt", 
    lat: 53.5823, lng: 9.7587, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-134", city: "hamburg", name: "Rissener Dorfkrug", address: "Adresse unbekannt", 
    lat: 53.5815, lng: 9.7549, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-135", city: "hamburg", name: "Molly Malone", address: "Adresse unbekannt", 
    lat: 53.549, lng: 9.9611, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-136", city: "hamburg", name: "Roth", address: "Adresse unbekannt", 
    lat: 53.5491, lng: 9.9277, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "german"] },

  { id: "ham-137", city: "hamburg", name: "Café Treibeis", address: "Gaußstraße 25", 
    lat: 53.5562, lng: 9.933, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-138", city: "hamburg", name: "Zur Traube", address: "Karl-Theodor-Straße 4", 
    lat: 53.5486, lng: 9.9311, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-139", city: "hamburg", name: "wildfang pub", address: "Adresse unbekannt", 
    lat: 53.5351, lng: 10.0301, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-140", city: "hamburg", name: "Bavaria-Insel", address: "Adresse unbekannt", 
    lat: 53.6457, lng: 10.0119, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-141", city: "hamburg", name: "TREFF BEI MELODI", address: "Adresse unbekannt", 
    lat: 53.5528, lng: 10.0214, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-142", city: "hamburg", name: "Mittendrin", address: "Adresse unbekannt", 
    lat: 53.5557, lng: 10.1064, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-143", city: "hamburg", name: "Sander Treff", address: "Lohbrügger Landstraße 14", 
    lat: 53.4964, lng: 10.2049, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "hausbrauerei"] },

  { id: "ham-144", city: "hamburg", name: "Rosmarin", address: "Adresse unbekannt", 
    lat: 53.6385, lng: 9.8949, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-145", city: "hamburg", name: "Holstenquelle", address: "Poststraße", 
    lat: 53.6362, lng: 9.8404, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-146", city: "hamburg", name: "Capri-Stube", address: "Adresse unbekannt", 
    lat: 53.5749, lng: 10.0447, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-147", city: "hamburg", name: "Dock 3 Beachclub", address: "Adresse unbekannt", 
    lat: 53.546, lng: 9.9655, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "outdoor"] },

  { id: "ham-148", city: "hamburg", name: "Sonnendeck St.Pauli", address: "Bei den St. Pauli-Landungsbrücken", 
    lat: 53.546, lng: 9.9642, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-149", city: "hamburg", name: "TSV Tennis", address: "Adresse unbekannt", 
    lat: 53.5178, lng: 10.2395, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-150", city: "hamburg", name: "Die Kleine Kneipe", address: "Adresse unbekannt", 
    lat: 53.5159, lng: 10.2469, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-151", city: "hamburg", name: "Am Sportplatz", address: "Adresse unbekannt", 
    lat: 53.628, lng: 10.1258, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ham-152", city: "hamburg", name: "Notaufnahme", address: "Bramfelder Chaussee 329", 
    lat: 53.6189, lng: 10.0799, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-153", city: "hamburg", name: "Marias Ballroom", address: "Adresse unbekannt", 
    lat: 53.4551, lng: 9.9863, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-154", city: "hamburg", name: "Kanal 5", address: "Sievekingdamm 22", 
    lat: 53.5582, lng: 10.0473, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-155", city: "hamburg", name: "Jolly Roger", address: "Adresse unbekannt", 
    lat: 53.5551, lng: 9.9643, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-156", city: "hamburg", name: "Meisenfrei", address: "Eppendorfer Weg 75", 
    lat: 53.5721, lng: 9.9588, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-157", city: "hamburg", name: "Willy's Bier-Bar", address: "Adresse unbekannt", 
    lat: 53.5642, lng: 10.0565, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-158", city: "hamburg", name: "Anno 1960", address: "Stoeckhardtstraße 31", 
    lat: 53.5601, lng: 10.0503, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-159", city: "hamburg", name: "Velvet Billardcafe", address: "Eulenkrugstraße 66", 
    lat: 53.6473, lng: 10.1694, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-160", city: "hamburg", name: "Lokstedter Treff", address: "Adresse unbekannt", 
    lat: 53.593, lng: 9.9665, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-161", city: "hamburg", name: "Fasan", address: "Eichenstraße 10", 
    lat: 53.5749, lng: 9.9636, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-162", city: "hamburg", name: "NUTS", address: "Eppendorfer Weg 115", 
    lat: 53.5753, lng: 9.9621, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-163", city: "hamburg", name: "Café Geyer", address: "Adresse unbekannt", 
    lat: 53.5474, lng: 9.9571, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-164", city: "hamburg", name: "Locke", address: "St. Pauli Fischmarkt 27", 
    lat: 53.5462, lng: 9.9578, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-165", city: "hamburg", name: "Alt-Ottensen", address: "Holländische Reihe 2", 
    lat: 53.548, lng: 9.9317, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-166", city: "hamburg", name: "Tatort", address: "Bahrenfelder Straße 47", 
    lat: 53.5501, lng: 9.93, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-167", city: "hamburg", name: "Zum Seeteufel", address: "Elbchaussee 4", 
    lat: 53.5467, lng: 9.9317, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-168", city: "hamburg", name: "Augustiner-Stub'n", address: "Caspar-Voght-Straße 80", 
    lat: 53.5631, lng: 10.0597, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-169", city: "hamburg", name: "Rick's café", address: "Adresse unbekannt", 
    lat: 53.5166, lng: 9.9843, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-170", city: "hamburg", name: "Mini Bar", address: "Adresse unbekannt", 
    lat: 53.5712, lng: 10.0566, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-171", city: "hamburg", name: "Bahnhofsgaststätte", address: "Adresse unbekannt", 
    lat: 53.612, lng: 9.9025, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-172", city: "hamburg", name: "Zur Endstation", address: "Adresse unbekannt", 
    lat: 53.6317, lng: 9.9185, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-173", city: "hamburg", name: "Tannenkrug", address: "Adresse unbekannt", 
    lat: 53.5428, lng: 10.2011, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-174", city: "hamburg", name: "Hofweg Treff", address: "Adresse unbekannt", 
    lat: 53.5719, lng: 10.0155, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-175", city: "hamburg", name: "Heimfelder Berg", address: "Adresse unbekannt", 
    lat: 53.4636, lng: 9.9675, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-176", city: "hamburg", name: "Helle's Treff", address: "Adresse unbekannt", 
    lat: 53.5342, lng: 10.0462, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-177", city: "hamburg", name: "LSV Clubheimkneipe Petra + Harry", address: "Adresse unbekannt", 
    lat: 53.617, lng: 9.9761, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ham-178", city: "hamburg", name: "Barock Café Bar", address: "Adresse unbekannt", 
    lat: 53.5367, lng: 10.0335, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-179", city: "hamburg", name: "Der Kiebitz", address: "Kiebitzstraße 27", 
    lat: 53.5646, lng: 10.0423, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-180", city: "hamburg", name: "2 nach 4", address: "Adresse unbekannt", 
    lat: 53.4548, lng: 9.9847, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-181", city: "hamburg", name: "Ohnsorg", address: "Adresse unbekannt", 
    lat: 53.5545, lng: 10.007, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-182", city: "hamburg", name: "Kombüse", address: "Adresse unbekannt", 
    lat: 53.5498, lng: 10.0032, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-183", city: "hamburg", name: "MacFly", address: "Adresse unbekannt", 
    lat: 53.5655, lng: 10.0456, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-184", city: "hamburg", name: "Zum guten Tropfen", address: "Adresse unbekannt", 
    lat: 53.5779, lng: 10.0211, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-185", city: "hamburg", name: "Zum Uhlenhorster Bogen", address: "Adresse unbekannt", 
    lat: 53.5773, lng: 10.0193, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-186", city: "hamburg", name: "Hannes&Hanna Wohnzimmer", address: "Weidenallee 60", 
    lat: 53.5692, lng: 9.964, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "hausbrauerei"] },

  { id: "ham-187", city: "hamburg", name: "Gräbe's", address: "Adresse unbekannt", 
    lat: 53.5516, lng: 9.9801, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-188", city: "hamburg", name: "Barcode 23", address: "Bahnhofstraße 23", 
    lat: 53.6584, lng: 9.7995, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-189", city: "hamburg", name: "Heimbar", address: "Alsterkrugchaussee 213", 
    lat: 53.6083, lng: 9.9945, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-190", city: "hamburg", name: "Barmbek Express", address: "Pestalozzistraße 17a", 
    lat: 53.5876, lng: 10.047, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "hausbrauerei"] },

  { id: "ham-191", city: "hamburg", name: "Annie´s Bar", address: "Adresse unbekannt", 
    lat: 53.6022, lng: 9.8375, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-192", city: "hamburg", name: "Pub in the City", address: "Luruper Hauptstraße 181", 
    lat: 53.594, lng: 9.8693, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-193", city: "hamburg", name: "Irish Pub in the Fleetenkieker", address: "Börsenbrücke 10", 
    lat: 53.5487, lng: 9.9923, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish"] },

  { id: "ham-194", city: "hamburg", name: "Bei Bärbel & Willi in Billstedt", address: "Schiffbeker Weg 70", 
    lat: 53.5466, lng: 10.1067, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "hausbrauerei"] },

  { id: "ham-195", city: "hamburg", name: "Zum Alten Ritter von St. Georg", address: "Adresse unbekannt", 
    lat: 53.556, lng: 10.0072, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-196", city: "hamburg", name: "Zum Kreisel", address: "Horner Weg 278", 
    lat: 53.5546, lng: 10.0828, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-197", city: "hamburg", name: "Konoba", address: "Öjendorfer Höhe 69", 
    lat: 53.544, lng: 10.1384, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-198", city: "hamburg", name: "Hummel & Quiddje", address: "Adresse unbekannt", 
    lat: 53.556, lng: 9.9581, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-199", city: "hamburg", name: "Wald", address: "Großneumarkt 45", 
    lat: 53.5498, lng: 9.9802, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-200", city: "hamburg", name: "Lais", address: "Adresse unbekannt", 
    lat: 53.5516, lng: 9.9254, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "hausbrauerei"] },

  { id: "ham-201", city: "hamburg", name: "Zur gemütlichen Bierstube", address: "Adresse unbekannt", 
    lat: 53.5514, lng: 9.9814, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-202", city: "hamburg", name: "Altengammer Fährhaus", address: "Adresse unbekannt", 
    lat: 53.4333, lng: 10.2982, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-203", city: "hamburg", name: "Mäggi's Eck", address: "Adresse unbekannt", 
    lat: 53.5982, lng: 10.0022, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-204", city: "hamburg", name: "Zzzischer", address: "Sillemstraße 53", 
    lat: 53.5775, lng: 9.9445, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-205", city: "hamburg", name: "Alte runde Ecke", address: "Adresse unbekannt", 
    lat: 53.5931, lng: 10.0011, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-206", city: "hamburg", name: "Wandsbeker Bothe", address: "Adresse unbekannt", 
    lat: 53.5745, lng: 10.0689, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-207", city: "hamburg", name: "Frau Möller", address: "Lange Reihe 96", 
    lat: 53.5587, lng: 10.0132, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "german"] },

  { id: "ham-208", city: "hamburg", name: "Schäfer's", address: "Mittelstraße 74", 
    lat: 53.688, lng: 10.0392, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-209", city: "hamburg", name: "Rock Café", address: "Adresse unbekannt", 
    lat: 53.5484, lng: 9.9595, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-210", city: "hamburg", name: "Cafe Pishkash", address: "Adresse unbekannt", 
    lat: 53.4441, lng: 9.999, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-211", city: "hamburg", name: "Schanz-Elyseé", address: "Schanzenstraße 3", 
    lat: 53.5597, lng: 9.9643, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar", "french"] },

  { id: "ham-212", city: "hamburg", name: "Cantinho do Antonio", address: "Adresse unbekannt", 
    lat: 53.5456, lng: 9.976, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-213", city: "hamburg", name: "Meisennest", address: "Wachtelstraße 55", 
    lat: 53.5875, lng: 10.0555, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-214", city: "hamburg", name: "RamRob", address: "Hagener Allee 23", 
    lat: 53.6713, lng: 10.2392, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-215", city: "hamburg", name: "Bockel's-Bier-Bar", address: "Bahnhofstraße 68", 
    lat: 53.4699, lng: 9.7912, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-216", city: "hamburg", name: "Central Café Bar&Billard", address: "Offakamp 3", 
    lat: 53.5992, lng: 9.9713, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-217", city: "hamburg", name: "Bier-Kate", address: "Adresse unbekannt", 
    lat: 53.5742, lng: 9.9403, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-218", city: "hamburg", name: "Treffpunkt gemütliche Kneipe", address: "Adresse unbekannt", 
    lat: 53.6507, lng: 10.0973, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-219", city: "hamburg", name: "Harburger Stube", address: "Harburger Ring 20", 
    lat: 53.4608, lng: 9.9806, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-220", city: "hamburg", name: "Bei Angelika", address: "Oberschleems 13", 
    lat: 53.5369, lng: 10.1188, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "hausbrauerei"] },

  { id: "ham-221", city: "hamburg", name: "The Boilerman Bar", address: "Eppendorfer Weg 211", 
    lat: 53.5815, lng: 9.9705, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-222", city: "hamburg", name: "Gasthof Kücken", address: "Neuengammer Hinterdeich 54", 
    lat: 53.4287, lng: 10.2068, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-223", city: "hamburg", name: "Zum Anker", address: "Davidstraße 12", 
    lat: 53.548, lng: 9.9625, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-224", city: "hamburg", name: "Habicht 106", address: "Habichtstraße 106", 
    lat: 53.5947, lng: 10.0495, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "barrierefrei"] },

  { id: "ham-225", city: "hamburg", name: "Bodega", address: "Weidenallee 45", 
    lat: 53.5675, lng: 9.9645, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "barrierefrei"] },

  { id: "ham-226", city: "hamburg", name: "Asche", address: "Adresse unbekannt", 
    lat: 53.6711, lng: 10.2347, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-227", city: "hamburg", name: "Paddy's", address: "Schauenburgerstraße 40", 
    lat: 53.5496, lng: 9.994, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish", "outdoor"] },

  { id: "ham-228", city: "hamburg", name: "Behr", address: "Adresse unbekannt", 
    lat: 53.5798, lng: 9.9488, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-229", city: "hamburg", name: "Urknall", address: "Sartoriusstraße 14", 
    lat: 53.5793, lng: 9.9423, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-230", city: "hamburg", name: "Wolle&Toddy", address: "Brennerstraße 5", 
    lat: 53.5549, lng: 10.0133, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-231", city: "hamburg", name: "Ratsherrn Klause", address: "Adresse unbekannt", 
    lat: 53.5647, lng: 9.9767, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-232", city: "hamburg", name: "Holsten Quelle", address: "Neugrabener Bahnhofstraße 16", 
    lat: 53.4704, lng: 9.8541, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-233", city: "hamburg", name: "Samo's Cafe Bar", address: "Adresse unbekannt", 
    lat: 53.5808, lng: 9.9445, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-234", city: "hamburg", name: "Alster Pub", address: "Adresse unbekannt", 
    lat: 53.5673, lng: 10.0227, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-235", city: "hamburg", name: "Crazy Devil's", address: "Langenfelder Damm 86a", 
    lat: 53.5827, lng: 9.9359, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "barrierefrei"] },

  { id: "ham-236", city: "hamburg", name: "Joker's Bar", address: "Langenfelder Damm 50", 
    lat: 53.5814, lng: 9.9382, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "barrierefrei"] },

  { id: "ham-237", city: "hamburg", name: "Wilstorfer friends Bar", address: "Adresse unbekannt", 
    lat: 53.4415, lng: 9.993, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-238", city: "hamburg", name: "unabsteigBar", address: "Adresse unbekannt", 
    lat: 53.5898, lng: 9.919, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-239", city: "hamburg", name: "Deichklause", address: "Grüner Deich 27", 
    lat: 53.5426, lng: 10.0292, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-240", city: "hamburg", name: "Schwalben Eck", address: "Heidhörn 6", 
    lat: 53.5936, lng: 10.0465, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "barrierefrei"] },

  { id: "ham-241", city: "hamburg", name: "Libero", address: "Adresse unbekannt", 
    lat: 53.5575, lng: 9.9691, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-242", city: "hamburg", name: "DulsBar", address: "Adresse unbekannt", 
    lat: 53.5823, lng: 10.064, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-243", city: "hamburg", name: "Ellewitt", address: "Adresse unbekannt", 
    lat: 53.5912, lng: 10.039, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-244", city: "hamburg", name: "Bei Pavlos", address: "Adresse unbekannt", 
    lat: 53.5804, lng: 10.0687, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-245", city: "hamburg", name: "Bergkate", address: "Adresse unbekannt", 
    lat: 53.5524, lng: 9.9378, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-246", city: "hamburg", name: "Haak", address: "Adresse unbekannt", 
    lat: 53.5775, lng: 10.0594, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-247", city: "hamburg", name: "Crazy Angels", address: "Adresse unbekannt", 
    lat: 53.5782, lng: 9.942, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "barrierefrei"] },

  { id: "ham-248", city: "hamburg", name: "Aurora", address: "Adresse unbekannt", 
    lat: 53.5777, lng: 9.9421, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-249", city: "hamburg", name: "Frau Hiebel", address: "Sillemstraße 108", 
    lat: 53.5798, lng: 9.94, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "hausbrauerei"] },

  { id: "ham-250", city: "hamburg", name: "Kuddl", address: "Hellkamp 23", 
    lat: 53.578, lng: 9.9479, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "barrierefrei"] },

  { id: "ham-251", city: "hamburg", name: "Destille", address: "Adresse unbekannt", 
    lat: 53.5533, lng: 9.9989, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-252", city: "hamburg", name: "Chrissi's", address: "Adresse unbekannt", 
    lat: 53.578, lng: 9.951, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-253", city: "hamburg", name: "Bierkrug", address: "Adresse unbekannt", 
    lat: 53.5704, lng: 9.9957, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-254", city: "hamburg", name: "Arian's Pub", address: "Adresse unbekannt", 
    lat: 53.5791, lng: 9.95, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-255", city: "hamburg", name: "Sports Lounge", address: "Adresse unbekannt", 
    lat: 53.5828, lng: 9.9482, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "barrierefrei"] },

  { id: "ham-256", city: "hamburg", name: "Zar und Zimmermann", address: "Ellmenreichstraße 22a", 
    lat: 53.5543, lng: 10.0101, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-257", city: "hamburg", name: "Utspann", address: "Adresse unbekannt", 
    lat: 53.5506, lng: 9.96, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-258", city: "hamburg", name: "Hammer Eck", address: "Horner Weg 50", 
    lat: 53.5557, lng: 10.0619, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-259", city: "hamburg", name: "The Bohemian", address: "Deichstraße 36", 
    lat: 53.546, lng: 9.987, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-260", city: "hamburg", name: "Gaststätte Schröder", address: "Hegestraße 1", 
    lat: 53.5828, lng: 9.9807, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "hausbrauerei"] },

  { id: "ham-261", city: "hamburg", name: "Horner Marie", address: "Rennbahnstraße 32d", 
    lat: 53.5538, lng: 10.087, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-262", city: "hamburg", name: "Treffpunkt", address: "Adresse unbekannt", 
    lat: 53.5983, lng: 10.0928, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-263", city: "hamburg", name: "Clax", address: "Semperstraße 52", 
    lat: 53.5862, lng: 10.0171, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-264", city: "hamburg", name: "Breslauer Stube", address: "Breslauer Straße 17a", 
    lat: 53.6839, lng: 9.9963, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-265", city: "hamburg", name: "Wachtel Eck", address: "Adresse unbekannt", 
    lat: 53.589, lng: 10.0503, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-266", city: "hamburg", name: "Zum Goldenen Handschuh", address: "Hamburger Berg 2", 
    lat: 53.55, lng: 9.9611, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "hausbrauerei"] },

  { id: "ham-267", city: "hamburg", name: "Olivias Show Club", address: "Adresse unbekannt", 
    lat: 53.5509, lng: 9.9573, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ham-268", city: "hamburg", name: "Bla Bla", address: "Seevepassage 1", 
    lat: 53.4574, lng: 9.9856, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-269", city: "hamburg", name: "Sandzak Klub Hamburg", address: "Baererstraße 2a", 
    lat: 53.4537, lng: 9.9874, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-270", city: "hamburg", name: "Portugal Fanclub", address: "Wilstorfer Straße 70", 
    lat: 53.4553, lng: 9.987, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ham-271", city: "hamburg", name: "Corner", address: "Wilstorfer Straße 82", 
    lat: 53.4546, lng: 9.9873, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-272", city: "hamburg", name: "Kitty", address: "Feldstraße 47", 
    lat: 53.5572, lng: 9.9723, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-273", city: "hamburg", name: "Pils Börse", address: "Adresse unbekannt", 
    lat: 53.5486, lng: 9.9624, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-274", city: "hamburg", name: "Gießkanne", address: "Adresse unbekannt", 
    lat: 53.609, lng: 9.9039, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-275", city: "hamburg", name: "Kamin", address: "Hinter der Lieth 42a", 
    lat: 53.605, lng: 9.9493, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-276", city: "hamburg", name: "Marktstübchen", address: "Adresse unbekannt", 
    lat: 53.6481, lng: 10.0153, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-277", city: "hamburg", name: "Micky's Bier & Cocktailbar", address: "Adresse unbekannt", 
    lat: 53.5502, lng: 9.9808, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ham-278", city: "hamburg", name: "Köpi-Bar", address: "Adresse unbekannt", 
    lat: 53.5597, lng: 9.888, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-279", city: "hamburg", name: "Die Drossel", address: "Drosselstraße 26", 
    lat: 53.5888, lng: 10.0446, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-280", city: "hamburg", name: "Lomo", address: "Adresse unbekannt", 
    lat: 53.5608, lng: 9.9598, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "barrierefrei"] },

  { id: "ham-281", city: "hamburg", name: "Falkenstübchen", address: "Adresse unbekannt", 
    lat: 53.5825, lng: 9.9772, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-282", city: "hamburg", name: "Kemp's", address: "Mittelweg 27", 
    lat: 53.5682, lng: 9.9952, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "british"] },

  { id: "ham-283", city: "hamburg", name: "Zum Rettungsring", address: "Adresse unbekannt", 
    lat: 53.549, lng: 9.9598, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-284", city: "hamburg", name: "Tiefgang Bar", address: "Neuer Kamp 9", 
    lat: 53.5573, lng: 9.9657, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-285", city: "hamburg", name: "Büdel’s Bierdeckel", address: "Schulterblatt 121", 
    lat: 53.5647, lng: 9.9592, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-286", city: "hamburg", name: "Elbgau Pub", address: "Adresse unbekannt", 
    lat: 53.6063, lng: 9.9001, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-287", city: "hamburg", name: "Das kleine Phi", address: "Adresse unbekannt", 
    lat: 53.5573, lng: 9.9715, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-288", city: "hamburg", name: "Victoria Klause", address: "Adresse unbekannt", 
    lat: 53.5879, lng: 9.9692, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-289", city: "hamburg", name: "Bei Marina", address: "Adresse unbekannt", 
    lat: 53.5606, lng: 9.9669, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-290", city: "hamburg", name: "Tower 6", address: "Adresse unbekannt", 
    lat: 53.5551, lng: 9.9548, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-291", city: "hamburg", name: "Tunnelklause", address: "Siebentunnelweg", 
    lat: 53.6151, lng: 9.8649, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-292", city: "hamburg", name: "Café Zonck", address: "Veddeler Damm 10", 
    lat: 53.5243, lng: 10.0156, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "hausbrauerei"] },

  { id: "ham-293", city: "hamburg", name: "Pamukkale", address: "Adresse unbekannt", 
    lat: 53.5523, lng: 9.9629, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-294", city: "hamburg", name: "Engel", address: "Adresse unbekannt", 
    lat: 53.4902, lng: 10.208, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-295", city: "hamburg", name: "Das grüne Leuchten", address: "Adresse unbekannt", 
    lat: 53.5555, lng: 9.9831, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-296", city: "hamburg", name: "Tortuga Bar", address: "Bleicherstraße 27", 
    lat: 53.5539, lng: 9.9602, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-297", city: "hamburg", name: "Kleine Freiheit No. 3", address: "Kleine Freiheit 3", 
    lat: 53.5529, lng: 9.9566, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-298", city: "hamburg", name: "Rustikate", address: "Adresse unbekannt", 
    lat: 53.545, lng: 10.0977, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-299", city: "hamburg", name: "Holsten Stube", address: "Mendelstraße 26e", 
    lat: 53.5088, lng: 10.1864, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-300", city: "hamburg", name: "Zwergenstübchen", address: "Berner Weg 2a", 
    lat: 53.6529, lng: 10.1137, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-301", city: "hamburg", name: "Taub Trüb", address: "Seilerstraße 38a", 
    lat: 53.5506, lng: 9.9641, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-302", city: "hamburg", name: "Weideeck", address: "Adresse unbekannt", 
    lat: 53.5804, lng: 10.0389, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-303", city: "hamburg", name: "Herr Schmöll", address: "Paul-Roosen-Straße 19", 
    lat: 53.553, lng: 9.9585, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "hausbrauerei"] },

  { id: "ham-304", city: "hamburg", name: "Borseleck", address: "Adresse unbekannt", 
    lat: 53.5569, lng: 9.9252, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-305", city: "hamburg", name: "AstraEck", address: "Adresse unbekannt", 
    lat: 53.465, lng: 9.9622, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-306", city: "hamburg", name: "Fricke 46", address: "Adresse unbekannt", 
    lat: 53.595, lng: 9.9783, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-307", city: "hamburg", name: "Löschecke", address: "Marienstraße 82", 
    lat: 53.457, lng: 9.9685, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "hausbrauerei"] },

  { id: "ham-308", city: "hamburg", name: "Thomas Read Irish Pub", address: "Nobistor 10", 
    lat: 53.5501, lng: 9.9566, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish"] },

  { id: "ham-309", city: "hamburg", name: "Holsten Treff", address: "Adresse unbekannt", 
    lat: 53.5529, lng: 10.0979, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-310", city: "hamburg", name: "El Greco", address: "Adresse unbekannt", 
    lat: 53.4544, lng: 9.9851, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "greek"] },

  { id: "ham-311", city: "hamburg", name: "Niko's Treff", address: "Reetwerder 9", 
    lat: 53.4908, lng: 10.2093, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-312", city: "hamburg", name: "Vümpf", address: "Eppendorfer Weg 276", 
    lat: 53.5844, lng: 9.9798, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-313", city: "hamburg", name: "BrewDog St. Pauli", address: "Reeperbahn 1", 
    lat: 53.5498, lng: 9.9685, drink: "Craft Bier 0,5l", par: 3, type: "craft",
    tags: ["craft", "barrierefrei", "hausbrauerei"] },

  { id: "ham-314", city: "hamburg", name: "Mega’s", address: "Osterstraße 74", 
    lat: 53.5755, lng: 9.9552, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "steak"] },

  { id: "ham-315", city: "hamburg", name: "Stader Tor 01", address: "Adresse unbekannt", 
    lat: 53.4694, lng: 9.9626, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-316", city: "hamburg", name: "Queue Billiard Pub", address: "Fuhlsbüttler Straße 184", 
    lat: 53.594, lng: 10.0445, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-317", city: "hamburg", name: "Löwenbräu", address: "Adresse unbekannt", 
    lat: 53.5536, lng: 10.0062, drink: "Astra 0,5l", par: 4, type: "brauhaus",
    tags: ["brauhaus", "barrierefrei", "bavarian"] },

  { id: "ham-318", city: "hamburg", name: "John o' Groats", address: "Adresse unbekannt", 
    lat: 53.5093, lng: 10.2511, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-319", city: "hamburg", name: "Frohme Stübchen", address: "Adresse unbekannt", 
    lat: 53.6297, lng: 9.9278, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-320", city: "hamburg", name: "LaVanta", address: "Adresse unbekannt", 
    lat: 53.5406, lng: 10.2109, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-321", city: "hamburg", name: "Bramfelder Inn", address: "Adresse unbekannt", 
    lat: 53.6214, lng: 10.0823, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-322", city: "hamburg", name: "Hausbrucher Hof", address: "Adresse unbekannt", 
    lat: 53.4721, lng: 9.8887, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-323", city: "hamburg", name: "Bierapotheke", address: "Am Felde 18", district: "meckelfeld",
    lat: 53.4209, lng: 10.025, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-324", city: "hamburg", name: "Zille's Eck", address: "Adresse unbekannt", 
    lat: 53.58, lng: 9.939, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-325", city: "hamburg", name: "Zur Stumpfen Ecke", address: "Adresse unbekannt", 
    lat: 53.4579, lng: 9.9863, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-326", city: "hamburg", name: "Conny's Bierkiste", address: "Holstenstraße 191", 
    lat: 53.5606, lng: 9.9483, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-327", city: "hamburg", name: "Schnelsener 1", address: "Burgwedel 1", 
    lat: 53.6366, lng: 9.9173, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-328", city: "hamburg", name: "Bar Kunterbunt", address: "Bremer Reihe 20", 
    lat: 53.5538, lng: 10.0109, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-329", city: "hamburg", name: "Mausefalle", address: "Adresse unbekannt", 
    lat: 53.5499, lng: 9.9581, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-330", city: "hamburg", name: "Zum Baumacker", address: "Baumacker", 
    lat: 53.6138, lng: 9.8988, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-331", city: "hamburg", name: "The Island", address: "Adresse unbekannt", 
    lat: 53.5157, lng: 9.9931, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-332", city: "hamburg", name: "Cont(r)a Sportsbar", address: "Adresse unbekannt", 
    lat: 53.5794, lng: 9.9658, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar", "outdoor"] },

  { id: "ham-333", city: "hamburg", name: "Lobby No. 12", address: "Waldweg 12", 
    lat: 53.6535, lng: 10.1152, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-334", city: "hamburg", name: "Chafé - Choudrys cafe", address: "Furtweg 51", 
    lat: 53.6037, lng: 9.9002, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-335", city: "hamburg", name: "Apos Bistro", address: "Adresse unbekannt", 
    lat: 53.6175, lng: 10.1429, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-336", city: "hamburg", name: "The Pub Formerly Known As Froggys", address: "Adresse unbekannt", 
    lat: 53.567, lng: 9.957, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-337", city: "hamburg", name: "Angi's Pub", address: "Simon-von-Utrecht-Straße 20", 
    lat: 53.5512, lng: 9.9637, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish", "hausbrauerei"] },

  { id: "ham-338", city: "hamburg", name: "Baron", address: "Adresse unbekannt", 
    lat: 53.5167, lng: 9.983, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-339", city: "hamburg", name: "Zur Mausefalle", address: "Weg am Denkmal 4", 
    lat: 53.7165, lng: 10.0021, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-340", city: "hamburg", name: "Tonndorfer Burg", address: "Adresse unbekannt", 
    lat: 53.5861, lng: 10.124, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-341", city: "hamburg", name: "Papperlapapp", address: "Friedrich-Ebert-Straße 2", 
    lat: 53.6833, lng: 9.9784, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-342", city: "hamburg", name: "Queue Billard Pub", address: "Adresse unbekannt", 
    lat: 53.5579, lng: 9.9005, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-343", city: "hamburg", name: "Bier Reich", address: "Spitzbergenweg 36a", 
    lat: 53.6283, lng: 10.1683, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-344", city: "hamburg", name: "Halbzeit", address: "Adresse unbekannt", 
    lat: 53.5734, lng: 9.8928, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-345", city: "hamburg", name: "Holstenstube", address: "Schreyerring 51", 
    lat: 53.6108, lng: 10.0601, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-346", city: "hamburg", name: "Meier's Inn", address: "Adresse unbekannt", 
    lat: 53.5665, lng: 9.9098, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-347", city: "hamburg", name: "Bahrenfelder", address: "Adresse unbekannt", 
    lat: 53.5672, lng: 9.9068, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-348", city: "hamburg", name: "Bramfelder Bürgerstuben", address: "Adresse unbekannt", 
    lat: 53.6036, lng: 10.0525, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-349", city: "hamburg", name: "Köpi-Stube", address: "Rethwiese 2", 
    lat: 53.6515, lng: 9.7999, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-350", city: "hamburg", name: "Zum Bierstübchen", address: "Adresse unbekannt", 
    lat: 53.5166, lng: 9.9901, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-351", city: "hamburg", name: "Cafe Habibi", address: "Adresse unbekannt", 
    lat: 53.556, lng: 10.0374, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-352", city: "hamburg", name: "Zaubermaus", address: "August-Krogmann-Straße 18", 
    lat: 53.6078, lng: 10.1174, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-353", city: "hamburg", name: "Kult", address: "Hufnerstraße 92", 
    lat: 53.5883, lng: 10.0422, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-354", city: "hamburg", name: "Neuer Felsenkeller", address: "Adresse unbekannt", 
    lat: 53.5637, lng: 10.0326, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-355", city: "hamburg", name: "Abis Bar", address: "Möllner Landstraße 144", 
    lat: 53.5386, lng: 10.1271, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-356", city: "hamburg", name: "Te Vendi", address: "Adresse unbekannt", 
    lat: 53.518, lng: 9.9944, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-357", city: "hamburg", name: "Tünel", address: "Adresse unbekannt", 
    lat: 53.5555, lng: 9.934, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-358", city: "hamburg", name: "Condor", address: "Adresse unbekannt", 
    lat: 53.5543, lng: 9.9332, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-359", city: "hamburg", name: "Horner Corner", address: "Adresse unbekannt", 
    lat: 53.5488, lng: 10.0905, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-360", city: "hamburg", name: "Zum Zapfhahn", address: "Adresse unbekannt", 
    lat: 53.7291, lng: 10.2572, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-361", city: "hamburg", name: "Locksmith Brewing", address: "Adresse unbekannt", 
    lat: 53.6485, lng: 10.1651, drink: "Craft Bier 0,5l", par: 3, type: "craft",
    tags: ["craft", "barrierefrei"] },

  { id: "ham-362", city: "hamburg", name: "Bei Kalle", address: "Adresse unbekannt", 
    lat: 53.4798, lng: 10.2303, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-363", city: "hamburg", name: "Nobiskrug", address: "Adresse unbekannt", 
    lat: 53.5488, lng: 9.9573, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-364", city: "hamburg", name: "the Baby Goat House", address: "Grindelhof 85", 
    lat: 53.5712, lng: 9.9849, drink: "Craft Bier 0,5l", par: 3, type: "craft",
    tags: ["craft", "barrierefrei", "hausbrauerei"] },

  { id: "ham-365", city: "hamburg", name: "J's", address: "Adresse unbekannt", 
    lat: 53.7306, lng: 10.2625, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-366", city: "hamburg", name: "Paddy's Bar", address: "Adresse unbekannt", 
    lat: 53.605, lng: 10.0709, drink: "Guinness 0,5l", par: 4, type: "irish",
    tags: ["irish"] },

  { id: "ham-367", city: "hamburg", name: "Schneehuhn", address: "Meiendorfer Straße 56", 
    lat: 53.6197, lng: 10.1618, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-368", city: "hamburg", name: "Loke's Klönstuv", address: "Adresse unbekannt", 
    lat: 53.606, lng: 10.2208, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-369", city: "hamburg", name: "Les Pompettes", address: "Oldachstraße 21", 
    lat: 53.5949, lng: 10.0405, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-370", city: "hamburg", name: "Moin Moin", address: "Adresse unbekannt", 
    lat: 53.6777, lng: 10.2396, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-371", city: "hamburg", name: "Hafenbahnhof", address: "Große Elbstraße 276", 
    lat: 53.5448, lng: 9.9285, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-372", city: "hamburg", name: "Hütte", address: "Max-Brauer-Allee 121", 
    lat: 53.5571, lng: 9.9452, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-373", city: "hamburg", name: "Red Dog", address: "Krugkoppel 1", 
    lat: 53.579, lng: 9.9985, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-374", city: "hamburg", name: "Vereinsheim TuS Berne Tennis", address: "Alter Berner Weg 136", 
    lat: 53.6337, lng: 10.1239, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-375", city: "hamburg", name: "Wanderer", address: "Alte Dorfstraße 29", district: "ohlstedt",
    lat: 53.6964, lng: 10.143, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-376", city: "hamburg", name: "Tennis-Treff", address: "Adresse unbekannt", 
    lat: 53.5999, lng: 10.0799, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-377", city: "hamburg", name: "Chattahoochee", address: "Meiendorfer Straße 34", 
    lat: 53.618, lng: 10.1603, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-378", city: "hamburg", name: "Roxie", address: "Heubergredder 38", 
    lat: 53.607, lng: 10.0108, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "international", "hausbrauerei"] },

  { id: "ham-379", city: "hamburg", name: "Kick & Company", address: "Klausstraße 1", 
    lat: 53.5506, lng: 9.9303, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar", "outdoor"] },

  { id: "ham-380", city: "hamburg", name: "Max und Moritz", address: "Ebereschenweg 1", 
    lat: 53.6834, lng: 10.0065, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-381", city: "hamburg", name: "Bazille", address: "Sievekingdamm 56", 
    lat: 53.5594, lng: 10.0498, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor"] },

  { id: "ham-382", city: "hamburg", name: "WKND Sportsbar", address: "Furtweg 36", 
    lat: 53.6039, lng: 9.902, drink: "Bier 0,5l", par: 3, type: "sportbar",
    tags: ["sportbar"] },

  { id: "ham-383", city: "hamburg", name: "Navio Terraço", address: "Dampfschiffsweg 21", 
    lat: 53.4731, lng: 9.9835, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-384", city: "hamburg", name: "Bei Magdalena", address: "Bennigsenstraße 21", 
    lat: 53.4624, lng: 9.9724, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "hausbrauerei"] },

  { id: "ham-385", city: "hamburg", name: "Vegas Lounge & Sports Bar", address: "Eiffestraße 205", 
    lat: 53.5517, lng: 10.056, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar"] },

  { id: "ham-386", city: "hamburg", name: "Bramfelder Stübchen", address: "Bramfelder Drift 9d", 
    lat: 53.6289, lng: 10.0854, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-387", city: "hamburg", name: "Juki 42", address: "An der Reitbahn 2", 
    lat: 53.6722, lng: 10.2344, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-388", city: "hamburg", name: "SuS Clubheim", address: "Jappopweg 53", district: "waldenau-datum",
    lat: 53.6166, lng: 9.7962, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "ham-389", city: "hamburg", name: "Bunthaus Schankraum", address: "Kurdamm 24", 
    lat: 53.4955, lng: 9.9955, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "outdoor", "hausbrauerei"] },

  { id: "ham-390", city: "hamburg", name: "Stelli's", address: "Berner Heerweg 372", 
    lat: 53.6267, lng: 10.1389, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-391", city: "hamburg", name: "Spinner", address: "Beim Alten Schützenhof 47", 
    lat: 53.5766, lng: 10.0331, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-392", city: "hamburg", name: "Mayday", address: "Bahrenfelder Straße 247", 
    lat: 53.5574, lng: 9.928, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-393", city: "hamburg", name: "Bierstein", address: "Adresse unbekannt", 
    lat: 53.6407, lng: 10.2172, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-394", city: "hamburg", name: "Cult", address: "Langenhorner Chaussee 575", 
    lat: 53.6723, lng: 10.002, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-395", city: "hamburg", name: "goose pub", address: "Adresse unbekannt", 
    lat: 53.6043, lng: 10.0423, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-396", city: "hamburg", name: "Bahnhofsklause Coupe", address: "Bahnhofstraße 28", 
    lat: 53.6642, lng: 9.9099, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-397", city: "hamburg", name: "Kiki´s Lounge", address: "Adresse unbekannt", 
    lat: 53.4683, lng: 9.963, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "outdoor", "barrierefrei"] },

  { id: "ham-398", city: "hamburg", name: "small talk", address: "Adresse unbekannt", 
    lat: 53.5533, lng: 10.0068, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },

  { id: "ham-399", city: "hamburg", name: "Checkpoint", address: "Adresse unbekannt", 
    lat: 53.4597, lng: 9.9571, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe", "barrierefrei"] },

  { id: "ham-400", city: "hamburg", name: "Herz von Garstedt", address: "Tannenhofstraße 4", 
    lat: 53.6816, lng: 9.9813, drink: "Astra 0,5l", par: 3, type: "kneipe",
    tags: ["kneipe"] },


  // ═══════════════════════════════════════════════════════════════
  // KÖLN  🏛️  (koe-001 bis koe-093)
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
    lat: 50.9389, lng: 6.958, drink: "Sion Kölsch 0,2l Stange", par: 3, type: "brauhaus",
    tags: ["brauerei", "sion", "altstadt", "traditionsbrauerei", "gemütlich"] },

  { id: "koe-005", city: "köln", name: "Brauerei zur Linde", address: "Alteburger Straße 26", district: "altstadt-süd",
    lat: 50.9289, lng: 6.9519, drink: "Linde Kölsch 0,2l Stange", par: 3, type: "brauhaus",
    tags: ["brauerei", "südstadt", "gemütlich", "kult", "lokal"] },

  { id: "koe-006", city: "köln", name: "Chlodwig-Eck", address: "Annostraße 1-3", district: "altstadt-süd",
    lat: 50.9298, lng: 6.954, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
    tags: ["altstadt-süd", "bap-gründer", "promine", "sport-leinwand", "kult"] },

  { id: "koe-007", city: "köln", name: "Grünfeld", address: "Brüsseler Straße 63", district: "belgisches-viertel",
    lat: 50.942, lng: 6.94, drink: "Kölsch 0,2l + Kicker", par: 3, type: "kneipe",
    tags: ["belgisches-viertel", "kicker", "schach", "kult", "terrasse"] },

  { id: "koe-008", city: "köln", name: "Hallmackenreuther", address: "Brüsseler Platz 9", district: "belgisches-viertel",
    lat: 50.9425, lng: 6.9393, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
    tags: ["belgisches-viertel", "brüsseler-platz", "60s-look", "kult", "café-bar"] },

  { id: "koe-009", city: "köln", name: "Scheinbar", address: "Engelbertstraße 49", district: "belgisches-viertel",
    lat: 50.9418, lng: 6.9367, drink: "Kölsch 0,2l + Cocktail", par: 3, type: "bar",
    tags: ["belgisches-viertel", "roter-samt", "kultig", "flirtfaktor", "schummrig"] },

  { id: "koe-010", city: "köln", name: "Kölschbar (KB)", address: "Lindenstraße 28", district: "belgisches-viertel",
    lat: 50.941, lng: 6.936, drink: "Kölsch 0,2l Stange + Kicker", par: 3, type: "kneipe",
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
    lat: 50.949, lng: 6.9196, drink: "Kölsch vom Fass 0,2l + DJ", par: 3, type: "bar",
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
    lat: 50.9257, lng: 6.95, drink: "Kölsch 0,2l + Blues", par: 3, type: "kneipe",
    tags: ["südstadt", "blues-kneipe", "livemusik", "whiskey", "quiz"] },

  { id: "koe-022", city: "köln", name: "Ubierschänke", address: "Ubierring 11", district: "altstadt-süd",
    lat: 50.9257, lng: 6.9512, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
    tags: ["südstadt", "eckkneipe", "karneval", "bands-entdeckt", "fc-köln"] },

  { id: "koe-023", city: "köln", name: "Kleines Finanzamt", address: "Friedrichstraße 2", district: "neustadt-süd",
    lat: 50.9296, lng: 6.953, drink: "Kölsch 0,2l + Kegeln", par: 3, type: "kneipe",
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
    lat: 50.9491, lng: 6.924, drink: "Cocktail Klassiker oder Hauskreation", par: 4, type: "cocktailbar",
    tags: ["ehrenfeld", "roter-eingang", "cocktails", "warm", "romantisch"] },

  { id: "koe-028", city: "köln", name: "Monkeys Cocktail Culture", address: "Venloer Straße 33", district: "belgisches-viertel",
    lat: 50.943, lng: 6.9406, drink: "Cocktail oder Kölsch 0,2l", par: 4, type: "cocktailbar",
    tags: ["belgisches-viertel", "stadtgarten", "terrasse", "cocktails", "feierabend"] },

  { id: "koe-029", city: "köln", name: "Forelle Blau", address: "Pfeilstraße 31", district: "belgisches-viertel",
    lat: 50.9416, lng: 6.939, drink: "Johann Schäfer Craft Beer 0,33l", par: 4, type: "bar",
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
    lat: 50.9618, lng: 6.961, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
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
    lat: 50.944, lng: 6.944, drink: "Wein + Käseteller", par: 4, type: "bar",
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
    lat: 50.94, lng: 6.9577, drink: "Cocktail + Piano", par: 4, type: "cocktailbar",
    tags: ["altstadt", "afterwork", "livemusik", "piano", "cocktails"] },

  { id: "koe-048", city: "köln", name: "Wirtz", address: "Eigelstein 73", district: "altstadt-nord",
    lat: 50.9424, lng: 6.9611, drink: "Kölsch 0,2l Stange", par: 3, type: "kneipe",
    tags: ["altstadt", "seit-1889", "gute-stube", "kölsch-sprache", "historisch"] },

  { id: "koe-049", city: "köln", name: "Brauhaus Gaffel am Dom", address: "Bahnhofsvorplatz 1", district: "altstadt-nord",
    lat: 50.9401, lng: 6.9591, drink: "Gaffel Kölsch 0,2l Stange", par: 3, type: "brauhaus",
    tags: ["altstadt", "gaffel", "dom", "touristisch", "klassiker"] },

  { id: "koe-050", city: "köln", name: "Hopla", address: "Berliner Straße 4", district: "kalk",
    lat: 50.9274, lng: 7, drink: "Kölsch 0,2l + Cocktail", par: 3, type: "kneipe",
    tags: ["kalk", "günstig", "studenten", "kicker", "livemusik"] },

  { id: "kol-051", city: "köln", name: "Die Kantine", address: "Neusser Landstraße 2", 
    lat: 50.9983, lng: 6.937, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-052", city: "köln", name: "Castell", address: "Regentenstraße 11", 
    lat: 50.9641, lng: 7.0024, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-053", city: "köln", name: "Club Z", address: "Venloer Straße 39", 
    lat: 50.9422, lng: 6.9351, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-054", city: "köln", name: "Tivoli Cologne", address: "Hohe Straße 12", 
    lat: 50.9345, lng: 6.9563, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-055", city: "köln", name: "Gewölbe", address: "Hans-Böckler-Platz 2", 
    lat: 50.9438, lng: 6.9339, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-056", city: "köln", name: "Roonburg", address: "Roonstraße 33", 
    lat: 50.9307, lng: 6.9384, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-057", city: "köln", name: "The Cage", address: "Rathenauplatz 6", 
    lat: 50.9306, lng: 6.9373, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-058", city: "köln", name: "Gebäude 9", address: "Adresse unbekannt", 
    lat: 50.9492, lng: 6.9854, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-059", city: "köln", name: "Shadow", address: "Friedrich-Ebert-Platz 5o", 
    lat: 51.0316, lng: 6.9884, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-060", city: "köln", name: "Petit Prince", address: "Hohenzollernring", 
    lat: 50.9422, lng: 6.9407, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-061", city: "köln", name: "Le Carussel", address: "Adresse unbekannt", 
    lat: 50.9377, lng: 6.9598, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-062", city: "köln", name: "MTC", address: "Zülpicher Straße 10", 
    lat: 50.93, lng: 6.9386, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-063", city: "köln", name: "JAKI", address: "Venloer Straße 40", 
    lat: 50.9429, lng: 6.9351, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-064", city: "köln", name: "Klapsmühle", address: "Hohenzollernring 39-41", 
    lat: 50.9392, lng: 6.9394, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-065", city: "köln", name: "Club Bahnhof Ehrenfeld", address: "Bartholomäus-Schink-Straße 65-67", 
    lat: 50.9517, lng: 6.916, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "barrierefrei"] },

  { id: "kol-066", city: "köln", name: "Flamingo Royal", address: "Adresse unbekannt", 
    lat: 50.9395, lng: 6.9411, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-067", city: "köln", name: "Das Ding", address: "Hohenstaufenring 30-32", 
    lat: 50.9317, lng: 6.9408, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-068", city: "köln", name: "Saphir Club", address: "Adresse unbekannt", 
    lat: 50.9621, lng: 6.9587, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-069", city: "köln", name: "Vanity", address: "Adresse unbekannt", 
    lat: 50.9375, lng: 6.9395, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-070", city: "köln", name: "Trafic", address: "Venloer Straße 601-603", 
    lat: 50.9571, lng: 6.9003, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-071", city: "köln", name: "Tru Club", address: "Mittelstraße 12", 
    lat: 50.937, lng: 6.9441, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-072", city: "köln", name: "Reineke Fuchs", address: "Aachener Straße 50", 
    lat: 50.9366, lng: 6.935, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-073", city: "köln", name: "Die Halle Tor 2", address: "Adresse unbekannt", 
    lat: 50.9488, lng: 6.8801, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-074", city: "köln", name: "Electrum", address: "Adresse unbekannt", 
    lat: 50.9217, lng: 6.9979, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-075", city: "köln", name: "Klub Domhof", address: "Hohenzollernbrücke 11", 
    lat: 50.9417, lng: 6.9598, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-076", city: "köln", name: "Helios 37", address: "Adresse unbekannt", 
    lat: 50.9503, lng: 6.9134, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-077", city: "köln", name: "ABS Club", address: "Adresse unbekannt", 
    lat: 50.9141, lng: 6.9311, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-078", city: "köln", name: "ΙΧΩΡ Night Club", address: "Adresse unbekannt", 
    lat: 50.9417, lng: 6.9412, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-079", city: "köln", name: "Partyraum Köln", address: "Siegburger Straße 91", 
    lat: 50.9341, lng: 6.971, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "outdoor", "barrierefrei", "hausbrauerei"] },

  { id: "kol-080", city: "köln", name: "Odonien", address: "Hornstraße 85", 
    lat: 50.9549, lng: 6.94, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "barrierefrei"] },

  { id: "kol-081", city: "köln", name: "Veedel Club", address: "Adresse unbekannt", 
    lat: 50.9273, lng: 6.9399, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-082", city: "köln", name: "Beim Pitter", address: "Adresse unbekannt", 
    lat: 50.939, lng: 6.9604, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-083", city: "köln", name: "Bootshaus", address: "Auenweg 173", 
    lat: 50.9517, lng: 6.982, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-084", city: "köln", name: "Club Volta", address: "Schanzenstraße 6-20", 
    lat: 50.9653, lng: 7.0126, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-085", city: "köln", name: "Subway", address: "Adresse unbekannt", 
    lat: 50.9367, lng: 6.9316, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-086", city: "köln", name: "Hidden Club", address: "Brabanter Straße 15", 
    lat: 50.9377, lng: 6.9373, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-087", city: "köln", name: "Pullermanns", address: "Mathiasstraße 22", 
    lat: 50.9333, lng: 6.9594, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene", "barrierefrei"] },

  { id: "kol-088", city: "köln", name: "King Georg Jazz Club", address: "Adresse unbekannt", 
    lat: 50.951, lng: 6.9564, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-089", city: "köln", name: "Rollers Club", address: "Adresse unbekannt", 
    lat: 50.9534, lng: 6.8954, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-090", city: "köln", name: "Groove Bar & Lounge", address: "Frankfurter Straße 200", district: "wahn",
    lat: 50.8582, lng: 7.0859, drink: "Craft Bier 0,5l", par: 3, type: "cocktailbar",
    tags: ["cocktailbar", "barrierefrei"] },

  { id: "kol-091", city: "köln", name: "fi", address: "Widdersdorfer Straße 246", 
    lat: 50.9482, lng: 6.893, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-092", city: "köln", name: "Nota 3", address: "Wiesdorfer Platz 58", 
    lat: 51.032, lng: 6.9847, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

  { id: "kol-093", city: "köln", name: "Valhalla Metal Club", address: "Clevischer Ring 119", 
    lat: 50.9689, lng: 7.0064, drink: "Craft Bier 0,5l", par: 3, type: "szene",
    tags: ["szene"] },

];