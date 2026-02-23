import { Hole } from '@/types/game';

export const biergolfHoles: Hole[] = [
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

export const biergartenHoles: Hole[] = [
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

export function getTotalPar(holes: Hole[]): number {
  return holes.reduce((sum, h) => sum + h.par, 0);
}
