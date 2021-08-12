import { IGrade } from './grade';

export interface IWeapon {
  name: string;
  type: 'primary' | 'secondary';
  weaponType: 'pistol';
  damageType: 'kinetic' | 'thermal' | 'plasma' | 'explosive';
  grades: IWeaponGrade[];
}

interface IWeaponGrade extends IGrade {
  damage: number;
  rate: number;
  clip: number;
  headshot: number;
  range: number;
}
