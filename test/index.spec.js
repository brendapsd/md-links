import { mdLinks } from '../src/index.js';
const path = require('path');

const output = [
  { href: 'https://es.wikipediaXX.org/wiki/Markdown',
    text: 'Markdown',
    file:
   path.resolve('./test/testPrueba/file6.md') },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
    path.resolve('./test/testPrueba/file6.md') },
  { href: 'https://semver.org/',
    text: 'Semver',
    file:
    path.resolve('./test/testPrueba/file6.md') },
  { href: 'https://nodejs.org/en/',
    text: 'Node.js',
    file:
    path.resolve('./test/testPrueba/file6.md') },
  { href: 'https://nodejs.org/api/fs.html',
    text: 'File System',
    file:
    path.resolve('./test/testPrueba/file6.md') },
  { href: 'https://daringfireball.net/projects/markdown/synx',
    text: 'Markdown',
    file:
    path.resolve('./test/testPrueba/file6.md') } 
];

const output1 = [
  { href: 'https://es.wikipediaXX.org/wiki/Markdown',
    text: 'Markdown',
    file:
    path.resolve('./test/testPrueba/file6.md'),
    status: '',
    message: 'Not Found' },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
    path.resolve('./test/testPrueba/file6.md'),
    status: 200,
    message: 'OK' },
  { href: 'https://semver.org/',
    text: 'Semver',
    file:
    path.resolve('./test/testPrueba/file6.md'),
    status: 200,
    message: 'OK' },
  { href: 'https://nodejs.org/en/',
    text: 'Node.js',
    file:
    path.resolve('./test/testPrueba/file6.md'),
    status: 200,
    message: 'OK' },
  { href: 'https://nodejs.org/api/fs.html',
    text: 'File System',
    file:
    path.resolve('./test/testPrueba/file6.md'),
    status: 200,
    message: 'OK' },
  { href: 'https://daringfireball.net/projects/markdown/synx',
    text: 'Markdown',
    file:
    path.resolve('./test/testPrueba/file6.md'),
    status: 404,
    message: 'Fail' } 
];

describe('Funcion mdLinks', () => {
  it('Deberia retornar el array de objetos con las propiedades href, text, file', (done) => {
    mdLinks(path.resolve('./test/testPrueba/file6.md'), { validate: false }).then((resolve) => {
      expect(resolve).toEqual(output); 
      done(); 
    });
  });
  it('Deberia retornar el array de objetos con las propiedades href, text, file, status, message', (done) => {
    mdLinks(path.resolve('./test/testPrueba/file6.md'), { validate: true }).then((resolve) => {
      expect(resolve).toEqual(output1); 
      done(); 
    });
  });
  it('Deberia retornar el array de objetos con las propiedades href, text, file, status, message', (done) => {
    mdLinks(path.resolve('./test/testPrueba/file6.md'), { validate: true }).then((resolve) => {
      expect(resolve).toEqual(output1); 
      done(); 
    });
  });
});  

// jest.setTimeout(30000);