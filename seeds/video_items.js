
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('video_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('video_items').insert([
        { id: 1, name: 'Bithday Cake', source: "/Videos/cake.mp4", catagory: "birthday" },
        { id: 2, name: 'Yellow Exploding Birthday', source: "/Videos/yellow.mp4", catagory: "birthday" },
        { id: 3, name: 'Red Exploding Birthday', source: "/Videos/redhappy.mp4", catagory: "birthday" },
        { id: 4, name: 'Sparkling Stars', source: "/Videos/stars.mp4", catagory: "birthday" },
        { id: 5, name: 'Beating Hearts', source: "/Videos/beating.mp4", catagory: "valentines" },
        { id: 6, name: 'Flaming Hearts', source: "/Videos/Love.mp4", catagory: "valentines" },
        { id: 7, name: 'Floating Hearts', source: "/Videos/lovehearts.mp4", catagory: "valentines" },
        { id: 8, name: 'Exploding Hearts', source: "/Videos/loveyou.mp4", catagory: "valentines" },
        { id: 9, name: 'Spinning Hearts', source: "/Videos/movinghearts.mp4", catagory: "valentines" },
        { id: 10, name: 'Full Moon Valentine', source: "/Videos/moon.mp4", catagory: "valentines" },
        { id: 11, name: 'Surprise Inside', source: "/Videos/openegg.mp4", catagory: "easter" },
        { id: 12, name: 'Dancing Eggs', source: "/Videos/dancing.mp4", catagory: "easter" },
        { id: 13, name: 'Illuminated Tree', source: "/Videos/darktree.mp4", catagory: "christmas" },
        { id: 14, name: 'Sparkling Tree', source: "/Videos/greentree.mp4", catagory: "christmas" },
        { id: 15, name: 'Growing Tree', source: "/Videos/growingtree.mp4", catagory: "christmas" },
        { id: 16, name: 'Happy Holidays', source: "/Videos/holidays.mp4", catagory: "christmas" },
        { id: 17, name: 'Santa and Reindeer', source: "/Videos/reindeer.mp4", catagory: "christmas" },
        { id: 18, name: 'Excited Reindeer', source: "/Videos/Reindeer2.mp4", catagory: "christmas" },
        { id: 19, name: 'Tree and Snowflakes', source: "/Videos/litTree.mp4", catagory: "christmas" },
        { id: 20, name: 'Excited For Santa', source: "/Videos/newyear.mp4", catagory: "christmas" },
        { id: 21, name: 'Tis the Season', source: "/Videos/presents.mp4", catagory: "christmas" },
        { id: 22, name: 'Montage', source: "/Videos/marclips.mp4", catagory: "wedding" },
        { id: 23, name: 'Wedding Rings', source: "/Videos/rings.mp4", catagory: "wedding" },
        { id: 24, name: 'Mountain Top', source: "/Videos/mountain.mp4", catagory: "wedding" },
        { id: 25, name: 'Wedding Dreams', source: "/Videos/wedding.mp4", catagory: "wedding" },

      ]);
    });
};
