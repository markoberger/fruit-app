import { Banana } from './banana';
import { Apple } from './apple';

export interface FruitSalad {
    bowl: Layers[];
    name: string; 
}

export interface Layers {
    ingredients: Ingredient[];
}

export interface Ingredient {
    fruit: (Banana | Apple); 
}