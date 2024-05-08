function towerBuilder(nFloors) {
    const tower = [];
     const maxWidth = 2 * nFloors - 1;
     
     for (let i = 0; i < nFloors; i++) {
       const spaces = ' '.repeat((maxWidth - (2 * i + 1)) / 2);
       const blocks = '*'.repeat(2 * i + 1);
       tower.push(spaces + blocks + spaces);
     }
     
     return tower;
   }