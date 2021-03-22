(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(5),l=a.n(r),c=(a(13),a(2)),m=(a(14),a(15),a(16),function(e){var t=e.title,a=e.description,i=void 0===a?"":a,r=e.imgUrl,l=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:r,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},i,n.a.createElement("br",null),n.a.createElement("a",{href:l},"IMDB"))))}),o=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.filter((function(e,t,a){return t===a.findIndex((function(t){return t.imdbId===e.imdbId}))})).map((function(e){return n.a.createElement(m,Object.assign({key:e.imdbId},e))})))},s=a(3),d=a.n(s),u=a(1),h=a(6),b=(a(18),function(e){var t=e.handleAdd,a=Object(i.useState)({movie:{},title:"",errorTitle:!1,errorMovie:!1}),r=Object(c.a)(a,2),l=r[0],o=r[1],s=Object(i.useCallback)((function(e){var t=e.target.value;o({movie:{},title:t,errorTitle:!1,errorMovie:!1})}),[]),b=Object(i.useCallback)(Object(h.a)(d.a.mark((function e(){var t,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/?apikey=de242cb8&t=").concat(l.title));case 2:return t=e.sent,e.next=5,t.json();case 5:if("False"!==(a=e.sent).Response){e.next=9;break}return o(Object(u.a)(Object(u.a)({},l),{},{errorTitle:!0})),e.abrupt("return");case 9:i=[a].map((function(e){return{title:e.Title,imdbId:e.imdbID,description:e.Plot,imgUrl:e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID)}})),o(Object(u.a)(Object(u.a)({},l),{},{movie:i}));case 11:case"end":return e.stop()}}),e)}))),[l]),p=Object(i.useCallback)((function(){l.movie&&0===Object.keys(l.movie).length?o(Object(u.a)(Object(u.a)({},l),{},{errorMovie:!0})):(t(l.movie),o(Object(u.a)(Object(u.a)({},l),{},{titel:"",errorMovie:!1,errorTitle:!1})))}),[l,t]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{type:"text",id:"movie-title",value:l.title,onChange:s,placeholder:"Enter a title to search",className:"input is-danger"})),l.errorTitle&&n.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title"),l.errorMovie&&n.a.createElement("p",{className:"help is-danger"},"Can't add undefined movie")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",onClick:b,className:"button is-light"},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",onClick:p,className:"button is-primary"},"Add to the list")))),n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),l.movie.length>0&&n.a.createElement(m,l.movie[0])))}),p=a(7),v=function(){var e=Object(i.useState)(p),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(i.useCallback)((function(e){r((function(t){return t.concat(e)}))}),[]);return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(o,{movies:a})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(b,{handleAdd:l})))};l.a.render(n.a.createElement(v,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.d91a578a.chunk.js.map