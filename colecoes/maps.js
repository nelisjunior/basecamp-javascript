const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const getMods = (map) => {
	let mods = [];

	for ([key, value] of map) {
		if (value === 'MOD') {
			mods.push(key);
		}
	}

	return mods;
};

const userRoles = new Map();

userRoles.set('Nelis', 'SUDO');
userRoles.set('Darly', 'ADMIN');
userRoles.set('Gaspar', 'MOD');
userRoles.set('Guilherme', 'USER');
userRoles.set('Natasha', 'USER');
userRoles.set('Alice', 'USER');

console.log("Administradores: " + getAdmins(userRoles));
console.log("Moderadores: " + getMods(userRoles));
