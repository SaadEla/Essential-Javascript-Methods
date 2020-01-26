const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //forEach

  companies.forEach((company)=>console.table([company]));



  /////////////GA3 HAD LES METHODES HOMA KI TKELFO I BOUCLIW 3LA ARR OLA OBJET DYALNA
  
  /*Filter take ages > 20
  filter() crée et retourne un nouveau tableau 
  contenant tous les éléments du tableau d'origine 
  qui remplissent une condition déterminée par la fonction callback.*/

  const canDrink = ages.filter((age)=> age > 20);

  /*La méthode map() crée un nouveau tableau avec les 
  résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.*/

  const comapnyNames = companies.map((company)=> company.name);


  /*La méthode sort() trie les éléments d'un tableau, 
  dans ce même tableau, et renvoie le tableau*/

  //on a classe les companies par ordre de debut croissant
  //Alors ici f sort si le resultat est 1 c1 vient avant c2 si c'est negatif 
  //c'est le contraire si 0 l'ordre reste inchange

  const sortedCompanies =companies.sort((c1,c2)=> c1.start > c2.start ? 1:-1)


/*La méthode reduce() applique une fonction qui est un « accumulateur »
 et qui traite chaque valeur d'une liste (de la gauche vers la droite) 
 afin de la réduire à une seule valeur.*/

 /*Premiere parametre est le resultat de la somme de ton array 
 le deuxieme parametre est la valeur ajoute a la somme de ton parametre*/

 const ageSum=ages.reduce((total, age)=>total+age,0);

 /* slice nous aide a decouper un sous array d'un array initial
 le premier parametre c'est tu veux decouper a partir de quel index
 le deuxieme parametre c'est tu veux arreter a quel index*/

 let slice=ages.slice(9,10);

 console.log(slice);

 /*Split nous permet de diviser un string en mots en choisissant 
 la limite entre ses mots avec quoi on veut les diviser ze3ma par espace virgule...*/
 let str="Hello budy"
 var words = str.split(' ');
 console.log(words);



 /*JavaScript offers the splice method for this, which takes arguments for 
 the index of where to start removing items, then the number of items to remove*/
 var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
 cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]

/*Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way.*/
[1, 2, 3].concat([4, 5, 6]);
// Returns a new array [1, 2, 3, 4, 5, 6]

