
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('card_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('card_items').insert([
        { id: 1, name: 'bison', source: "/images/bison.jpg", catagory: "birthday" },
        { id: 2, name: 'sheep', source: "/images/sheep.jpg", catagory: "birthday" },
        { id: 3, name: 'cat', source: "/images/cat.jpg", catagory: "birthday" },
        { id: 4, name: 'chicken', source: "/images/chicken.jpg", catagory: "christmas" },
        { id: 5, name: 'dog', source: "/images/dog.jpg", catagory: "christmas" },
        { id: 6, name: 'dog2', source: "/images/dog2.jpg", catagory: "christmas" },
        { id: 7, name: 'elephants', source: "/images/elephants.jpg", catagory: "get_well" },
        { id: 8, name: 'fox', source: "/images/fox.jpg", catagory: "get_well" },
        { id: 9, name: 'giraffe', source: "/images/giraffe.jpg", catagory: "get_well" },
        { id: 10, name: 'horse', source: "/images/horse.jpg", catagory: "anniversary" },
        { id: 11, name: 'husky', source: "/images/husky.jpg", catagory: "anniversary" },
        { id: 12, name: 'koala', source: "/images/koala.jpg", catagory: "anniversary" },
        { id: 13, name: 'monkey', source: "/images/monkey.jpg", catagory: "valentines" },
        { id: 14, name: 'owl', source: "/images/owl.jpg", catagory: "valentines" },
        { id: 15, name: 'pigs', source: "/images/pigs.jpg", catagory: "valentines" },
        { id: 16, name: 'puffin', source: "/images/puffin.jpg", catagory: "wedding" },
        { id: 17, name: 'pug', source: "/images/pug.jpg", catagory: "wedding" },
        { id: 18, name: 'squirrel', source: "/images/squirrel.jpg", catagory: "wedding" },
        { id: 19, name: 'tiger', source: "/images/tiger.jpg", catagory: "easter" },
        { id: 20, name: 'trooper', source: "/images/trooper.jpg", catagory: "easter" },
        { id: 21, name: 'wolf', source: "/images/wolf.jpg", catagory: "easter" },
        { id: 22, name: 'bison', source: "/images/bison.jpg", catagory: "birthday" },
        { id: 23, name: 'sheep', source: "/images/sheep.jpg", catagory: "birthday" },
        { id: 24, name: 'cat', source: "/images/cat.jpg", catagory: "birthday" },
        { id: 25, name: 'chicken', source: "/images/chicken.jpg", catagory: "christmas" },
        { id: 26, name: 'dog', source: "/images/dog.jpg", catagory: "christmas" },
        { id: 27, name: 'dog2', source: "/images/dog2.jpg", catagory: "christmas" },
        { id: 28, name: 'elephants', source: "/images/elephants.jpg", catagory: "get_well" },
        { id: 29, name: 'fox', source: "/images/fox.jpg", catagory: "get_well" },
        { id: 30, name: 'horse', source: "/images/horse.jpg", catagory: "anniversary" },
        { id: 31, name: 'giraffe', source: "/images/giraffe.jpg", catagory: "get_well" },
        { id: 32, name: 'husky', source: "/images/husky.jpg", catagory: "anniversary" },
        { id: 33, name: 'koala', source: "/images/koala.jpg", catagory: "anniversary" },
        { id: 34, name: 'monkey', source: "/images/monkey.jpg", catagory: "valentines" },
        { id: 35, name: 'owl', source: "/images/owl.jpg", catagory: "valentines" },
        { id: 36, name: 'pigs', source: "/images/pigs.jpg", catagory: "valentines" },
        { id: 37, name: 'puffin', source: "/images/puffin.jpg", catagory: "wedding" },
        { id: 38, name: 'squirrel', source: "/images/squirrel.jpg", catagory: "wedding" },
        { id: 39, name: 'pug', source: "/images/pug.jpg", catagory: "wedding" },
        { id: 40, name: 'tiger', source: "/images/tiger.jpg", catagory: "easter" },
        { id: 41, name: 'trooper', source: "/images/trooper.jpg", catagory: "easter" },
        { id: 42, name: 'wolf', source: "/images/wolf.jpg", catagory: "easter" }
      ]);
    });
};
