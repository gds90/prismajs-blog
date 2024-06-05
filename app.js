const {
    createCategory,
    createCategories
} = require('./utils/crud-category.js');

const {
    createTag,
    createTags
} = require('./utils/crud-tag.js');

// Creazione categorie
// createCategories(['Cucina', 'Sport', 'Tecnologia'], count => console.log(count));
// createCategory({ name: 'Musica' }, newCategory => console.log('Nuova categoria inserita: ', newCategory));

// Creazione tag
// createTags(['Pasta', 'Torta', 'Gelato', 'Calcio', 'Basket', 'Tennis', 'Pallavolo', 'Smartphone', 'Computer', 'Programmazione', 'Concerto', 'Spettacolo']), count => console.log(count);
// createTag({ name: 'Fitness' }, newTag => console.log('Nuovo tag inserito: ', newTag));