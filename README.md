# Countries

Installation:

```bash
npm install countries --save
```


Usage example:

```javascript
import countriesData from 'countries'; // warning: files size with all locales ~3Mb

function getLang () { // browser
    if (navigator.languages !== undefined && navigator.languages.length) {
        return navigator.languages[0];
    } 
    return navigator.userLanguage || navigator.language || navigator.browserLanguage || navigator.systemLanguage;    
}

let countries = countriesData[getLang()]

console.log( countries );

```
or for single locale:

```javascript
function getLang () { // browser
    if (navigator.languages !== undefined && navigator.languages.length) {
        return navigator.languages[0];
    } 
    return navigator.userLanguage || navigator.language || navigator.browserLanguage || navigator.systemLanguage;    
}

let countries = require('countries/data/' + getLang()); // load countries only for single locale

console.log( countries );

```

This project using [SemVer](http://semver.org) for versioning. For the versions available, see the [tags on this repository](https://github.com/koalex/countries/tags). 

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
