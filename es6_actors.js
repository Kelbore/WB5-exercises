"use strict";

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

   //film with id of 187
   const id = academyMembers.find((item) => item.memID === 187);
   if(id) {
    console.log(`Academy member with id of 187 is ${id.name}`);
   }
   else {
    console.log("Result is not found");
   }

   //number of films 
   const numberOfFilms = academyMembers.filter((item) => item.films.length >= 3);
   numberOfFilms.forEach((item) => {
    console.log(`${item.name} has been in at least three films`);
   })


   //name starts with Bob
   const actorWhoStartsWithBob = academyMembers.filter((memeber) => memeber.name.startsWith('Bob'));
   actorWhoStartsWithBob.forEach((member) => console.log(`Member ${member.name} starts with Bob`));

   //film that starts with A
   console.log('');
   console.log('Actors who have been in a film starting with "A"');
   const actorsInFilmsThatStartWithA = academyMembers.filter((member) =>
   member.films.find((film) => film.startsWith('A')));
   actorsInFilmsThatStartWithA.forEach((actor) => console.log('-', actor.name));