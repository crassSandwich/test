const THREE = require('three');
const assert = require('assert');
const Cube = require('../src/cube.js');

describe('Cube', () => {
	let cube = Cube();
	it('should have the color #137137', () => {
		assert.deepStrictEqual(cube.material.color, new THREE.Color(0x137137));
	});
});
