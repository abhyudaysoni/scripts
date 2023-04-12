const path = require('path');
const fs = require('fs');

const folderPath = '../../temp/daredevil'; //set folder path here
const files = fs.readdirSync(folderPath); //reading files here

for (let index = 0; index < files.length; index++) {
	const file = files[index];
	const fileInfo = path.parse(file);

	// new file name
	const newName = `Episode - ${index + 1}`;
	// new file name

	const newFullName = `${newName}${fileInfo.ext}`;
	const oldPath = path.join(__dirname, folderPath, file);
	const newPath = path.join(__dirname, folderPath, newFullName);

	//rename function
	// fs.renameSync(oldPath, newPath);
}
