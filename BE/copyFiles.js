const fs = require('fs');
const path = require('path');

// Function to filter files based on extensions
function filterFiles(files, extensions) {
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return extensions.includes(ext);
  });
}

// Function to copy files from source to target directory
function copyFiles(sourceDir, targetDir, extensions) {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error('Error reading source directory:', err.message);
      return;
    }

    const filteredFiles = filterFiles(files, extensions);

    filteredFiles.forEach(file => {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);

      fs.copyFile(sourcePath, targetPath, err => {
        if (err) {
          console.error(`Error copying ${file}:`, err.message);
        } else {
          console.log(`Copied: ${file}`);
        }
      });
    });

    console.log('Copy operation completed successfully.');
  });
}

// Check for command-line arguments
if (process.argv.length !== 4) {
  console.error('Usage: node copyFiles.js <source_directory> <target_directory>');
  process.exit(1);
}

// Get source and target directory paths from command-line arguments
const sourceDirectory = process.argv[2];
const targetDirectory = process.argv[3];

const allowedExtensions = ['.txt', '.jpg'];
copyFiles(sourceDirectory, targetDirectory, allowedExtensions);
