import { addInputs, subtractInputs, fetchRandomNumber } from '../actions/calculatorActions';
import '../setUpTests';
describe('ACTIONS - Test calculatorActions', () => {
	it('actionCreator addInputs', () => {
		const add = addInputs(50);
		//Créer le expect
		expect(add.type).toEqual('ADD_INPUTS');
		expect(add.output).toEqual(50);
	});

	it('actionCreator subtractInputs', () => {
		const subtract = subtractInputs(-50);
		//Créer le expect
		expect(subtract.type).toEqual('SUBTRACT_INPUTS');
		expect(subtract.output).toEqual(-50);
	});
});
