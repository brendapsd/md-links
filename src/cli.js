#!/usr/bin/env node

import { mdLinks } from './index.js';
import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from './controller/stats.js';

const validateOption = {
  validate: false
};

const showConsole = (path, firstOption, secondOption) => {

  path = process.argv[2];
  firstOption = process.argv[3];
  secondOption = process.argv[4];

  return new Promise((resolve) => {
    if (firstOption === '--validate' && secondOption === '--stats' || firstOption === '--stats' && secondOption === '--validate') {
      validateOption.validate = true;
      mdLinks(path, validateOption)
        .then(res => console.log(`Total:${totalLinksStats(res)}\nUnique:${uniqueLinksStats(res)}\nBroken:${brokenLinksStats(res)}`));
    } else if (firstOption === '--validate') {
      validateOption.validate = true;
      mdLinks(path, validateOption)
        .then(res => {
          res.forEach((objLinks) => {
            console.log(`File: ${path}\nhref: ${objLinks.href}\nmessage: ${objLinks.message}\nstatus: ${objLinks.status}\ntext: ${objLinks.text}\n`);
          });  
        }); 
    } else if (firstOption === '--stats') {
      mdLinks(path, validateOption)
        .then(res => console.log(`Total:${totalLinksStats(res)}\nUnique:${uniqueLinksStats(res)}`));
    } else {
      mdLinks(path, validateOption)
        .then(res => res.forEach((objLinks) => { 
          console.log(`File: ${path}\nhref: ${objLinks.href}\nText: ${objLinks.text}\n`);
        })); 
    }
  });  
}; 


