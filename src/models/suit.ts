import { IGrade } from './grade';

export interface ISuit {
  name: string;
  code: string;
  manufacturer: string;
  battery: number;
  emergencyAir: number;
  capacities: { goods: number; assets: number; data: number };
  weaponSlots: { primary: number; secondary: number };
  consumables: {
    grenades: {
      frag: number;
      disruptor: number;
      shield: number;
    };
    medkits: number;
    energyCells: number;
    ebreachs: number;
  };
  health: number;
  mass: number;
  grades: ISuitGrade[];
  tools: string[];
}

interface ISuitGrade extends IGrade {
  shield: number;
  shieldRegen: number;
  resistances: {
    kinetic: number;
    thermal: number;
    plasma: number;
    explosive: number;
  };
}
