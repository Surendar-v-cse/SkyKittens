export interface FighterJet {
  id: string;
  name: string;
  origin: string;
  description: string;
  imageUrl: string;
  meowPower: number; // 1-100
  fluffiness: string; // "High", "Extreme", "Cloud-like"
  // Real-world specs
  maxSpeed: string;
  range: string;
  armament: string;
}

export const JETS: FighterJet[] = [
  {
    id: "f22-raptor",
    name: "F-22 Raptor (Kitten Edition)",
    origin: "USA",
    description: "The world's premier air dominance fighter, now featuring custom retractable cat ears and paw-print stealth coating.",
    imageUrl: ,
    meowPower: 98,
    fluffiness: "Cloud-like",
    maxSpeed: "Mach 2.25",
    range: "1,600 nmi",
    armament: "6x AIM-120 AMRAAM, 2x AIM-9 Sidewinder"
  },
  {
    id: "su57-felon",
    name: "Su-57 Felon (Purr-suit)",
    origin: "Russia",
    description: "A stealthy multirole fighter that purrs like a kitten at supersonic speeds. Equipped with tail-fin whiskers for better stability.",
    imageUrl: "https://picsum.photos/seed/su57-cat/800/600",
    meowPower: 95,
    fluffiness: "High",
    maxSpeed: "Mach 2.0",
    range: "1,860 nmi",
    armament: "1x 30mm GSh-30-1, 6x Internal Hardpoints"
  },
  {
    id: "f35-lightning",
    name: "F-35 Lightning II (Thunder-Cat)",
    origin: "USA",
    description: "Advanced sensors and stealth capabilities. The cockpit is lined with premium faux-fur for maximum comfort during long patrols.",
    imageUrl: "https://picsum.photos/seed/f35-cat/800/600",
    meowPower: 92,
    fluffiness: "Extreme",
    maxSpeed: "Mach 1.6",
    range: "1,200 nmi",
    armament: "4x Internal AIM-120, 2x External Hardpoints"
  },
  {
    id: "eurofighter-typhoon",
    name: "Eurofighter Typhoon (Laser-Chaser)",
    origin: "Europe",
    description: "Agile, powerful, and perfect for chasing laser pointers in the sky. Features a unique 'yarn-ball' countermeasure system.",
    imageUrl: "https://picsum.photos/seed/typhoon-cat/800/600",
    meowPower: 89,
    fluffiness: "High",
    maxSpeed: "Mach 2.0",
    range: "1,550 nmi",
    armament: "1x 27mm Mauser BK-27, 13x Hardpoints"
  },
  {
    id: "rafale",
    name: "Dassault Rafale (Le Meow)",
    origin: "France",
    description: "Elegant French design with a sophisticated meow. The wings are shaped like feline ears for superior aerodynamic grace.",
    imageUrl: "https://picsum.photos/seed/rafale-cat/800/600",
    meowPower: 91,
    fluffiness: "Cloud-like",
    maxSpeed: "Mach 1.8",
    range: "2,000 nmi",
    armament: "1x 30mm GIAT 30, 14x Hardpoints"
  },
  {
    id: "j20-mighty-dragon",
    name: "Chengdu J-20 (Dragon-Kitten)",
    origin: "China",
    description: "A mighty dragon that loves a good chin scratch. Its stealth skin is textured like soft kitten fur to absorb radar waves.",
    imageUrl: "https://picsum.photos/seed/j20-cat/800/600",
    meowPower: 94,
    fluffiness: "Extreme",
    maxSpeed: "Mach 2.0+",
    range: "1,100 nmi",
    armament: "4x PL-15, 2x PL-10"
  }
];
