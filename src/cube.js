const THREE = require('three');

let geometry = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({color: 0x137137});
module.exports = function () {
	return new THREE.Mesh(geometry, material);
}
