const path = require('path');
const fs = require('fs');

//set full folder path here
const folderPath = 'M:/videos/series/Daredevil/Season - 1';

const files = fs.readdirSync(folderPath); //reading files here

try {
	for (let index = 0; index < files.length; index++) {
		const file = files[index];
		const fileInfo = path.parse(file);

		// new file name
		const newName = `${index}`;
		// new file name

		const newFullName = `${newName}${fileInfo.ext}`;
		const oldPath = path.join(folderPath, file);
		const newPath = path.join(folderPath, newFullName);

		console.log('oldPath', oldPath);
		console.log('newPath', newPath);

		//rename function
		// fs.renameSync(oldPath, newPath);
	}
} catch (e) {
	console.log(e);
}
