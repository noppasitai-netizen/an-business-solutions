const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

const terms = [
  'ภ.พ.30',
  'ภ.ง.ด.',
  'PND',
  'VAT filing',
  'CPA',
  'certified',
  'ผู้สอบบัญชี',
  '100%',
  'รับประกัน'
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

let output = 'Auditing terminology in src directory...\n\n';

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    let fileLogged = false;

    lines.forEach((line, index) => {
      terms.forEach(term => {
        if (line.includes(term)) {
          if (!fileLogged) {
            output += `\nFile: ${path.relative(srcDir, filePath)}\n`;
            fileLogged = true;
          }
          output += `  Line ${index + 1}: ${line.trim()}\n`;
        }
      });
    });
  }
});

fs.writeFileSync(path.join(__dirname, 'audit_results.txt'), output, 'utf8');
console.log('Audit completed. Written to scratch/audit_results.txt');
