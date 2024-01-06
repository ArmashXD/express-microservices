const data = [
  {
    name: "Russia",

    link: "0",

    sub: [
      { name: "Moscow", link: "11" },

      { name: "Saint Petersburg", link: "98" },
    ],
  },

  {
    name: "England",

    link: "1",

    sub: [
      { name: "Arsenal", link: "0-0" },

      { name: "Liverpool", link: "0-1" },

      { name: "Manchester United", link: "0-2" },
    ],
  },

  {
    name: "Spain",

    link: "2",

    sub: [
      {
        name: "Barcelona",

        link: "2-0",

        sub: [
          { name: "Figueres", link: "3-1" },

          { name: "Rupit", link: "3-2" },
        ],
      },

      { name: "Real Madrid", link: "2-1" },
    ],
  },

  {
    name: "Germany",

    link: "3",

    sub: [
      {
        name: "Bayern Munich",

        link: "3-1",

        sub: [
          { name: "Alzenau", link: "3-1" },

          { name: "Illertissen", link: "3-2" },
        ],
      },

      { name: "Borrusia Dortmund", link: "3-2" },
    ],
  },
];

// Make a function which takes a string and it searches all arrays and subarray and matches with property name,and returns the most parent object

// e.g if i pass moscow to the function it should search all array and return the main object

// {

//   name: "Russia",

//   link: "0",

//   sub: [

//     { name: "Moscow", link: "11" },

//     { name: "Saint Petersburg", link: "98" },

//   ],

// },

const findName = (name) => {
  if (name === "") {
    return;
  }
  // first case
  // data.find((x) => x.name === name)

  // second case
  data.map((x) => {
    if (x.name === name) {
      return x;
    } else {
      x.sub.map((y) => {
        if (y.name === name) {
          return y;
        }
      });
    }
  });
};

console.log(findName(""));
