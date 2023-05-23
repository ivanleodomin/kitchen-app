import Ingredient from './Ingredient';

export default interface Reciepe {
	id: string;
	name: string;
	ingredients: Ingredient[];
}
