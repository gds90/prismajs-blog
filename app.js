const {
    createCategory,
    createCategories
} = require('./utils/crud-category.js');

const {
    createTag,
    createTags
} = require('./utils/crud-tag.js');

const { createPost,
    readPostBySlug,
    readAllPosts,
    updatePost,
    deletePost
} = require('./utils/crud-post.js');

// Creazione post
// createPost({
//     title: 'Post di prova 5',
//     slug: 'post-di-prova-5',
//     image: 'https://photo/prova5',
//     content: 'Contenuto del post di prova 5',
//     published: true,
//     tags: {
//         connect: [
//             { id: 5 },
//             { id: 6 }
//         ]
//     },
//     category: {
//         connect: { id: 4 },
//     }
// }, newPost => console.log(newPost));

// Lettura post tramite slug 
// readPostBySlug('post-di-prova-4', post => console.log(post));

// Lettura di tutti i post 
// readAllPosts(posts => console.log(posts));

// Aggiornamento di un post (aggiunta di categoria e tags)
// updatePost('post-di-prova-3', {
//     category: {
//         set: [
//             { id: 1 }
//         ]
//     },
//     tags: {
//         set: [
//             { id: 2 }
//         ]
//     }
// }, updatedPost => console.log('Post aggiornato correttamente: ', updatedPost));

// ELiminazione di un post
// deletePost('post-di-prova-3');

// Creazione categorie
// createCategories(['Cucina', 'Sport', 'Tecnologia'], count => console.log(count));
// createCategory({ name: 'Musica' }, newCategory => console.log('Nuova categoria inserita: ', newCategory));

// Creazione tag
// createTags(['Pasta', 'Torta', 'Gelato', 'Calcio', 'Basket', 'Tennis', 'Pallavolo', 'Smartphone', 'Computer', 'Programmazione', 'Concerto', 'Spettacolo']), count => console.log(count);
// createTag({ name: 'Fitness' }, newTag => console.log('Nuovo tag inserito: ', newTag));