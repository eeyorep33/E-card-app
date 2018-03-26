
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('video_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('video_items').insert([
        { id: 1, name: 'Bithday Cake', source: "/Videos/cake.mp4", catagory: "birthday" },
        { id: 2, name: 'Birthday Bubbles', source: "/Videos/yellow.mp4", catagory: "birthday" },
        { id: 3, name: 'Fuzzy Duck', source: "/Videos/redhappy.mp4", catagory: "birthday" },
        { id: 4, name: 'Pink Flowers', source: "/Videos/stars.mp4", catagory: "birthday" },
        { id: 5, name: 'Love Birds', source: "/Videos/beating.mp4", catagory: "valentines" },
        { id: 6, name: 'Cloud Valentines', source: "/Videos/Love.mp4", catagory: "valentines" },
        { id: 7, name: 'Colorful Valentines', source: "/Videos/lovehearts.mp4", catagory: "valentines" },
        { id: 8, name: 'Cupid Valentnes', source: "/Videos/loveyou.mp4", catagory: "valentines" },
        { id: 9, name: 'Warm Valentines', source: "/Videos/movinghearts.mp4", catagory: "valentines" },
        { id: 10, name: 'Love You Always', source: "/Videos/moon.mp4", catagory: "valentines" },
        { id: 11, name: 'Bunny Dogs', source: "/Videos/openegg.mp4", catagory: "easter" },
        { id: 12, name: 'Bunny Ears', source: "/Videos/dancing.mp4", catagory: "easter" },
        { id: 13, name: 'Blue Christmas', source: "/Videos/darktree.mp4", catagory: "christmas" },
        { id: 14, name: 'Candle Flame', source: "/Videos/greentree.mp4", catagory: "christmas" },
        { id: 15, name: 'Cookie Christmas', source: "/Videos/growingtree.mp4", catagory: "christmas" },
        { id: 16, name: 'Purple Christmas', source: "/Videos/holidays.mp4", catagory: "christmas" },
        { id: 17, name: 'Deer and Bunny', source: "/Videos/reindeer.mp4", catagory: "christmas" },
        { id: 18, name: 'Rudolph', source: "/Videos/Reindeer2.mp4", catagory: "christmas" },
        { id: 19, name: 'Christmas Sweetheart', source: "/Videos/litTree.mp4", catagory: "christmas" },
        { id: 20, name: 'Ho, Ho, Ho', source: "/Videos/newyear.mp4", catagory: "christmas" },
        { id: 21, name: 'Christmas Tree', source: "/Videos/presents.mp4", catagory: "christmas" },
        { id: 22, name: 'Joined Hands', source: "/Videos/marclips.mp4", catagory: "wedding" },
        { id: 23, name: 'Dusk Wedding', source: "/Videos/rings.mp4", catagory: "wedding" },
        { id: 24, name: 'Pink Sneakers', source: "/Videos/mountain.mp4", catagory: "wedding" },
        { id: 25, name: 'Wedding Rings', source: "/Videos/Wedding.mp4", catagory: "wedding" },

      ]);
    });
};
