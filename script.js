function signup(){
let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="" || pass===""){
document.getElementById("loginError").innerText="Enter details";
return;
}

localStorage.setItem("user",user);
localStorage.setItem("pass",pass);
document.getElementById("loginError").innerText="Signup successful! Now login";
}

function login(){
let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

let savedUser=localStorage.getItem("user");
let savedPass=localStorage.getItem("pass");

if(user===savedUser && pass===savedPass){
document.getElementById("loginSection").style.display="none";
document.getElementById("mainContent").classList.remove("hidden");

document.getElementById("welcomeUser").innerText="Welcome, "+user+" 👋";
}else{
document.getElementById("loginError").innerText="Invalid Login";
}
}



const recipes = {

"Indian":[
{name:"Chicken Biryani",image:"https://tse2.mm.bing.net/th/id/OIP.0csI89pXHQSxumqiZz_tIwHaE8?pid=Api&P=0&h=180",ingredients:["Rice - 2 cups","Chicken - 500 g","Onion - 2","Yogurt - 1/2 cup","Biryani masala - 2 tbsp","Oil - 3 tbsp"],instructions:["Wash rice","Marinate chicken","Cook chicken","Layer rice","Cook 20 minutes","Serve hot"]},
{name:"Mutton Biryani",image:"https://tse4.mm.bing.net/th/id/OIP.tLau1RR1QQr5doV22q9dFgHaE8?pid=Api&P=0&h=180",ingredients:["Rice - 2 cups","Mutton - 500 g","Onion - 2","Yogurt - 1/2 cup","Biryani masala - 2 tbsp","Oil - 3 tbsp"],instructions:["Marinate mutton","Cook rice","Prepare masala","Cook mutton","Layer rice","Add saffron","Cook on dum","Serve"]},
{name:"Veg Biryani",image:"https://tse1.mm.bing.net/th/id/OIP.ykV2FMl7mad_nTNaJ2_LygHaDt?pid=Api&P=0&h=180",ingredients:["Rice - 2 cups","Mixed vegetables - 2 cups","Onion - 1","Yogurt - 1/2 cup","Biryani masala - 2 tbsp","Oil - 3 tbsp"],instructions:["Chop vegetables","Cook rice","Prepare masala","Add vegetables","Cook","Layer rice","Cook on dum","Serve"]},
{name:"Butter Chicken",image:"https://tse4.mm.bing.net/th/id/OIP.JR56U2K2x2RNpRPb7nMfZQHaE7?pid=Api&P=0&h=180",ingredients:["Chicken - 500 g","Butter - 3 tbsp","Tomato puree - 1 cup","Cream - 1/2 cup","Garam masala - 1 tsp","Oil - 1 tbsp"],instructions:["Marinate chicken","Cook chicken","Prepare gravy","Add butter","Add cream","Mix chicken","Simmer","Serve"]},
{name:"Paneer Butter Masala",image:"https://tse2.mm.bing.net/th/id/OIP.mPJ1DbUKdLCahJ48qUDC6AHaEK?pid=Api&P=0&h=180",ingredients:["Paneer - 250 g","Butter - 2 tbsp","Tomato puree - 1 cup","Cream - 1/2 cup","Spices - 1 tsp","Oil - 1 tbsp"],instructions:["Fry paneer","Prepare gravy","Add butter","Add spices","Add paneer","Add cream","Simmer","Serve"]},
{name:"Dal Tadka",image:"https://tse1.mm.bing.net/th/id/OIP.NSdDO0l813qHf4vjBjPgmAHaEJ?pid=Api&P=0&h=180",ingredients:["Toor dal - 1 cup","Onion - 1","Tomato - 1","Garlic - 1 tsp","Cumin seeds - 1 tsp","Oil - 2 tbsp"],instructions:["Cook dal","Mash dal","Heat oil","Add spices","Add garlic","Pour tempering","Simmer","Serve"]},
{name:"Chole Bhature",image:"https://tse3.mm.bing.net/th/id/OIP.pUmQnkIngDk7X1QkX7FycwHaEK?pid=Api&P=0&h=180",ingredients:["Chickpeas - 1 cup","Onion - 1","Tomato - 1","Spices - 1 tbsp","Flour - 2 cups","Oil - for frying"],instructions:["Soak chickpeas","Cook chickpeas","Prepare masala","Add chickpeas","Simmer","Fry bhature","Serve"]},
{name:"Rajma",image:"https://tse1.mm.bing.net/th/id/OIP.t3eLJYj-AmjaXKd07kw6GgHaEK?pid=Api&P=0&h=180",ingredients:["Rajma - 1 cup","Onion - 1","Tomato - 1","Garlic - 1 tsp","Spices - 1 tbsp","Oil - 2 tbsp"],instructions:["Soak beans","Cook beans","Prepare masala","Add beans","Simmer","Mash lightly","Serve"]},
{name:"Palak Paneer",image:"https://tse3.mm.bing.net/th/id/OIP.4YZgXy7Xho5Bwho2gmgFCQHaDt?pid=Api&P=0&h=180",ingredients:["Spinach - 2 cups","Paneer - 200 g","Onion - 1","Garlic - 1 tsp","Spices - 1 tsp","Oil - 2 tbsp"],instructions:["Blanch spinach","Grind paste","Fry paneer","Prepare masala","Add spinach","Add paneer","Simmer","Serve"]},
{name:"Aloo Gobi",image:"https://tse3.mm.bing.net/th/id/OIP.pw5wepouu1ol2hQC3OtRlQHaE8?pid=Api&P=0&h=180",ingredients:["Potato - 2","Cauliflower - 2 cups","Onion - 1","Tomato - 1","Spices - 1 tsp","Oil - 2 tbsp"],instructions:["Chop vegetables","Heat oil","Add spices","Add potatoes","Add cauliflower","Cook covered","Stir","Serve"]}
],

"Chinese":[
{name:"Fried Rice",image:"https://tse2.mm.bing.net/th/id/OIP.aQNKX5ng8FbFM2Vd2ADPZAHaE7?pid=Api&P=0&h=180",ingredients:["Rice - 2 cups","Mixed vegetables - 1 cup","Soy sauce - 1 tbsp","Garlic - 1 tsp","Oil - 2 tbsp"],instructions:["Cook rice","Heat oil","Add garlic","Add vegetables","Add rice","Add sauces","Stir fry","Serve"]},
{name:"Hakka Noodles",image:"https://tse4.mm.bing.net/th/id/OIP.-7fZNuASijnagAP_tFcFvQHaEK?pid=Api&P=0&h=180",ingredients:["Noodles - 200 g","Mixed vegetables - 1 cup","Soy sauce - 1 tbsp","Garlic - 1 tsp","Oil - 2 tbsp"],instructions:["Boil noodles","Drain","Heat oil","Add vegetables","Add noodles","Add sauces","Toss well","Serve"]},
{name:"Manchurian",image:"https://tse4.mm.bing.net/th/id/OIP.SobpB7aC18jjWMn08dgRrAHaFj?pid=Api&P=0&h=180",ingredients:["Cabbage - 1 cup","Carrot - 1/2 cup","Flour - 1/2 cup","Soy sauce - 1 tbsp","Garlic - 1 tsp"],instructions:["Prepare balls","Fry balls","Heat oil","Add garlic","Add sauces","Add balls","Cook","Serve"]},
{name:"Spring Rolls",image:"https://tse4.mm.bing.net/th/id/OIP.k14ICh_56BnTrelydq8OdQHaFC?pid=Api&P=0&h=180",ingredients:["Spring roll wrappers - 10","Vegetables - 1 cup","Soy sauce - 1 tbsp","Garlic - 1 tsp","Oil - for frying"],instructions:["Prepare filling","Fill wrappers","Roll tightly","Heat oil","Fry","Drain","Serve"]},
{name:"Chilli Paneer",image:"https://tse2.mm.bing.net/th/id/OIP.ap9yax7MjhrVb99Ch4E5mwHaE8?pid=Api&P=0&h=180",ingredients:["Paneer - 200 g","Capsicum - 1 cup","Soy sauce - 1 tbsp","Garlic - 1 tsp","Chilli sauce - 1 tbsp"],instructions:["Fry paneer","Heat oil","Add garlic","Add vegetables","Add sauces","Add paneer","Toss","Serve"]},
{name:"Hot Sour Soup",image:"https://tse1.mm.bing.net/th/id/OIP.ehL9nmMs7vu2T4NDwYTaaQHaE8?pid=Api&P=0&h=180",ingredients:["Vegetables - 1 cup","Soy sauce - 1 tbsp","Vinegar - 1 tbsp","Pepper - 1/2 tsp","Cornflour - 1 tbsp"],instructions:["Boil broth","Add vegetables","Add sauces","Add tofu","Simmer","Add cornflour","Serve"]},
{name:"Schezwan Rice",image:"https://tse3.mm.bing.net/th/id/OIP.ld7xjlxTzt-5R40Y9F-obwHaE8?pid=Api&P=0&h=180",ingredients:["Rice - 2 cups","Vegetables - 1 cup","Schezwan sauce - 2 tbsp","Garlic - 1 tsp","Oil - 2 tbsp"],instructions:["Cook rice","Heat oil","Add garlic","Add vegetables","Add schezwan sauce","Add rice","Stir fry","Serve"]},
{name:"Chow Mein",image:"https://tse3.mm.bing.net/th/id/OIP._uIenb_s6motC3J5XD949gHaE8?pid=Api&P=0&h=180",ingredients:["Noodles - 200 g","Vegetables - 1 cup","Soy sauce - 1 tbsp","Garlic - 1 tsp","Oil - 2 tbsp"],instructions:["Boil noodles","Drain","Heat oil","Add vegetables","Add noodles","Add sauces","Toss","Serve"]},
{name:"Kung Pao Chicken",image:"https://tse1.mm.bing.net/th/id/OIP.jW4J2dAcv8u2H1pflZn0EAHaE5?pid=Api&P=0&h=180",ingredients:["Chicken - 250 g","Peanuts - 1/4 cup","Soy sauce - 1 tbsp","Garlic - 1 tsp","Chilli - 2"],instructions:["Marinate chicken","Fry chicken","Heat oil","Add garlic","Add sauce","Add peanuts","Toss","Serve"]},
{name:"Dim Sum",image:"https://tse3.mm.bing.net/th/id/OIP.z2-f4AC7nauzqrrSWs83uQHaEK?pid=Api&P=0&h=180",ingredients:["Flour - 1 cup","Vegetables - 1 cup","Soy sauce - 1 tbsp","Garlic - 1 tsp","Oil - 1 tbsp"],instructions:["Prepare filling","Fill wrappers","Shape dumplings","Steam","Cook till done","Serve"]}
],

"Italian":[
{name:"Pizza",image:"https://tse1.mm.bing.net/th/id/OIP.SaVecD189AneGewTe-yIVQHaEx?pid=Api&P=0&h=180",ingredients:["Pizza base - 1","Pizza sauce - 1/2 cup","Cheese - 1 cup","Vegetables - 1 cup","Olive oil - 1 tbsp"],instructions:["Prepare dough","Roll base","Spread sauce","Add toppings","Add cheese","Preheat oven","Bake","Slice","Serve"]},
{name:"Pasta",image:"https://tse3.mm.bing.net/th/id/OIP.f5PXQ16uXUQDjyOoB6Q8qwHaE6?pid=Api&P=0&h=180",ingredients:["Pasta - 200 g","Tomato sauce - 1 cup","Garlic - 1 tsp","Olive oil - 1 tbsp","Cheese - 1/2 cup"],instructions:["Boil pasta","Drain water","Heat sauce","Add pasta","Mix well","Add seasoning","Cook briefly","Serve"]},
{name:"Lasagna",image:"https://tse3.mm.bing.net/th/id/OIP.tbJBSe3V6vzxiX9jUd2ulwHaEJ?pid=Api&P=0&h=180",ingredients:["Lasagna sheets - 8","Tomato sauce - 1 cup","Cheese - 1 cup","Vegetables - 1 cup","Olive oil - 1 tbsp"],instructions:["Prepare sheets","Cook filling","Layer sheets","Add sauce","Add cheese","Repeat layers","Bake","Cool slightly","Serve"]},
{name:"Risotto",image:"https://tse4.mm.bing.net/th/id/OIP.-vJex8t6fchamP2MvPvJagHaFP?pid=Api&P=0&h=180",ingredients:["Arborio rice - 1 cup","Broth - 3 cups","Butter - 2 tbsp","Onion - 1","Cheese - 1/2 cup"],instructions:["Heat pan","Add butter","Add rice","Stir","Add broth gradually","Cook till creamy","Add cheese","Serve"]},
{name:"Spaghetti",image:"https://tse1.mm.bing.net/th/id/OIP.KpJjRFOs93XB-z_ae4pGXwHaFD?pid=Api&P=0&h=180",ingredients:["Spaghetti - 200 g","Tomato sauce - 1 cup","Garlic - 1 tsp","Olive oil - 1 tbsp","Herbs - 1 tsp"],instructions:["Boil spaghetti","Drain water","Heat sauce","Add spaghetti","Mix well","Add herbs","Serve"]},
{name:"Bruschetta",image:"https://tse3.mm.bing.net/th/id/OIP.UaGsNSDOcKHNU2kPA6FUCgHaEJ?pid=Api&P=0&h=180",ingredients:["Bread - 6 slices","Tomato - 2","Garlic - 1 tsp","Olive oil - 1 tbsp","Basil - 1 tsp"],instructions:["Toast bread","Chop tomatoes","Add garlic","Add olive oil","Mix topping","Spread on bread","Serve"]},
{name:"Fettuccine",image:"https://tse2.mm.bing.net/th/id/OIP.N9QiJp5a9wYhF0B3nYgwkQHaFj?pid=Api&P=0&h=180",ingredients:["Fettuccine - 200 g","Cream - 1 cup","Butter - 1 tbsp","Garlic - 1 tsp","Cheese - 1/2 cup"],instructions:["Boil pasta","Drain","Prepare sauce","Add pasta","Mix","Add cheese","Serve"]},
{name:"Gnocchi",image:"https://tse1.mm.bing.net/th/id/OIP.xJR0w9TCjjyu88Zv2bnFDgHaE8?pid=Api&P=0&h=180",ingredients:["Potatoes - 3","Flour - 1 cup","Egg - 1","Salt - 1 tsp","Sauce - 1 cup"],instructions:["Boil potatoes","Mash","Add flour","Shape pieces","Boil","Drain","Add sauce","Serve"]},
{name:"Ravioli",image:"https://tse3.mm.bing.net/th/id/OIP.OBvJSRgLHp3GEjRXsI2eRQHaEP?pid=Api&P=0&h=180",ingredients:["Ravioli sheets - 12","Cheese - 1 cup","Spinach - 1 cup","Tomato sauce - 1 cup","Olive oil - 1 tbsp"],instructions:["Prepare filling","Roll dough","Fill pieces","Seal edges","Boil","Drain","Add sauce","Serve"]},
{name:"Tiramisu",image:"https://tse2.mm.bing.net/th/id/OIP.ulCEO_VIAXHaMjPN6xAgHQHaEK?pid=Api&P=0&h=180",ingredients:["Ladyfingers - 12","Coffee - 1 cup","Mascarpone - 1 cup","Sugar - 1/4 cup","Cocoa powder - 1 tbsp"],instructions:["Brew coffee","Dip biscuits","Layer biscuits","Add cream","Repeat layers","Chill","Dust cocoa","Serve"]}
],

"Mexican":[
{name:"Tacos",image:"https://tse2.mm.bing.net/th/id/OIP.mt4MNoFJ2NjCKnV64m59PgHaFk?pid=Api&P=0&h=180",ingredients:["Taco shells - 6","Filling - 1 cup","Lettuce - 1 cup","Cheese - 1/2 cup","Sauce - 2 tbsp"],instructions:["Prepare filling","Heat tortillas","Add filling","Add vegetables","Add sauce","Fold","Serve"]},
{name:"Nachos",image:"https://tse4.mm.bing.net/th/id/OIP.TF0ViK3sTT5Z_FAl7cMYMwHaFS?pid=Api&P=0&h=180",ingredients:["Nacho chips - 2 cups","Cheese - 1 cup","Beans - 1 cup","Jalapenos - 2 tbsp","Salsa - 1/2 cup"],instructions:["Arrange chips","Add cheese","Add toppings","Bake","Add sauce","Serve"]},
{name:"Burrito",image:"https://tse2.mm.bing.net/th/id/OIP.JYxFBML-2o9paFoCSU_QSgHaFj?pid=Api&P=0&h=180",ingredients:["Tortilla - 2","Rice - 1 cup","Beans - 1 cup","Cheese - 1/2 cup","Sauce - 2 tbsp"],instructions:["Heat tortilla","Add rice","Add beans","Add filling","Add sauce","Roll tightly","Serve"]},
{name:"Quesadilla",image:"https://tse3.mm.bing.net/th/id/OIP.v9MmyfR5-Cgte_t21zEAxwHaE8?pid=Api&P=0&h=180",ingredients:["Tortilla - 2","Cheese - 1 cup","Vegetables - 1 cup","Butter - 1 tbsp","Sauce - 2 tbsp"],instructions:["Heat pan","Place tortilla","Add cheese","Add filling","Cover tortilla","Cook","Cut","Serve"]},
{name:"Enchiladas",image:"https://tse4.mm.bing.net/th/id/OIP.O2QlpbRNgxtx6T_EbUQ6_wHaE8?pid=Api&P=0&h=180",ingredients:["Tortillas - 4","Filling - 1 cup","Enchilada sauce - 1 cup","Cheese - 1 cup","Oil - 1 tbsp"],instructions:["Prepare filling","Fill tortillas","Roll","Place in tray","Add sauce","Add cheese","Bake","Serve"]},
{name:"Guacamole",image:"https://tse1.mm.bing.net/th/id/OIP.jzz0JcNg3-EW3ZxLjvGsZQHaEJ?pid=Api&P=0&h=180",ingredients:["Avocado - 2","Onion - 1/2","Tomato - 1","Lime - 1","Salt - 1 tsp"],instructions:["Mash avocado","Add onion","Add tomato","Add lime","Add salt","Mix","Serve"]},
{name:"Fajitas",image:"https://tse1.mm.bing.net/th/id/OIP.1LmqHlQxqnwvlvHbVoG5_QHaEo?pid=Api&P=0&h=180",ingredients:["Chicken - 250 g","Capsicum - 1 cup","Onion - 1","Spices - 1 tsp","Oil - 1 tbsp"],instructions:["Slice vegetables","Cook meat","Add vegetables","Season","Cook","Serve with tortillas"]},
{name:"Churros",image:"https://tse3.mm.bing.net/th/id/OIP.EGV07IvqLNnTDXoip0DjfAHaFq?pid=Api&P=0&h=180",ingredients:["Flour - 1 cup","Water - 1 cup","Sugar - 1/2 cup","Butter - 1 tbsp","Oil - for frying"],instructions:["Prepare dough","Heat oil","Pipe dough","Fry","Drain","Coat sugar","Serve"]},
{name:"Mexican Rice",image:"https://tse4.mm.bing.net/th/id/OIP.J-GUA-I5Hckq8VXUodUitgHaHa?pid=Api&P=0&h=180",ingredients:["Rice - 1 cup","Tomato sauce - 1/2 cup","Broth - 2 cups","Garlic - 1 tsp","Oil - 1 tbsp"],instructions:["Heat oil","Add rice","Toast rice","Add broth","Add seasoning","Cook","Fluff","Serve"]},
{name:"Elote",image:"https://tse2.mm.bing.net/th/id/OIP.OaINgpb_vDf4PYXcWAfgIgHaE5?pid=Api&P=0&h=180",ingredients:["Corn - 2","Mayonnaise - 2 tbsp","Cheese - 1/2 cup","Chili powder - 1 tsp","Lime - 1"],instructions:["Boil corn","Grill corn","Spread mayo","Add cheese","Add chili powder","Serve"]}
],

"Japanese":[
{name:"Sushi",image:"https://tse4.mm.bing.net/th/id/OIP.WX_mwHKUYX5ddH1b447VzwHaE8?pid=Api&P=0&h=180",ingredients:["Sushi rice - 2 cups","Nori sheets - 5","Fish/vegetables - 1 cup","Rice vinegar - 2 tbsp","Soy sauce - 2 tbsp"],instructions:["Cook rice","Season rice","Prepare fillings","Place nori","Spread rice","Add filling","Roll tightly","Slice","Serve"]},
{name:"Ramen",image:"https://tse4.mm.bing.net/th/id/OIP.8mhqQ-dTeNYzcMNC5k_SQAHaEJ?pid=Api&P=0&h=180",ingredients:["Ramen noodles - 200 g","Broth - 3 cups","Soy sauce - 1 tbsp","Egg - 2","Vegetables - 1 cup"],instructions:["Boil broth","Cook noodles","Prepare toppings","Place noodles","Pour broth","Add toppings","Serve hot"]},
{name:"Tempura",image:"https://tse4.mm.bing.net/th/id/OIP.PmRramQuZ1n7-WcRjIVhrQHaE7?pid=Api&P=0&h=180",ingredients:["Vegetables - 2 cups","Flour - 1 cup","Cold water - 1 cup","Egg - 1","Oil - for frying"],instructions:["Prepare batter","Heat oil","Dip vegetables","Fry","Drain oil","Serve"]},
{name:"Udon",image:"https://tse4.mm.bing.net/th/id/OIP.Yd0Q8yjGXZCGqcWPpj_3WgHaEJ?pid=Api&P=0&h=180",ingredients:["Udon noodles - 200 g","Broth - 3 cups","Soy sauce - 1 tbsp","Green onion - 2 tbsp","Tofu - 1 cup"],instructions:["Boil noodles","Prepare broth","Drain noodles","Add noodles to bowl","Pour broth","Add toppings","Serve"]},
{name:"Sashimi",image:"https://tse1.mm.bing.net/th/id/OIP.9JOC82Zqr25JSrgvZ9nWfwHaEJ?pid=Api&P=0&h=180",ingredients:["Fresh fish - 300 g","Soy sauce - 2 tbsp","Wasabi - 1 tsp","Pickled ginger - 2 tbsp"],instructions:["Select fresh fish","Slice thinly","Arrange plate","Add garnish","Serve"]},
{name:"Onigiri",image:"https://tse4.mm.bing.net/th/id/OIP.wAVopaweT6abTDAZtMf7SgHaEK?pid=Api&P=0&h=180",ingredients:["Rice - 2 cups","Nori strips - 4","Salt - 1 tsp","Filling - 1/2 cup"],instructions:["Cook rice","Season lightly","Shape rice","Add filling","Wrap nori","Serve"]},
{name:"Takoyaki",image:"https://tse1.mm.bing.net/th/id/OIP.V8I0G278fTkmnOpKj9PuBAHaE8?pid=Api&P=0&h=180",ingredients:["Takoyaki flour - 1 cup","Octopus - 1 cup","Egg - 1","Green onion - 2 tbsp","Oil - 2 tbsp"],instructions:["Prepare batter","Heat pan","Pour batter","Add octopus","Flip balls","Cook evenly","Add sauce","Serve"]},
{name:"Teriyaki Chicken",image:"https://tse2.mm.bing.net/th/id/OIP.31Gvt6Q1WQN90uSQdjcDogHaEQ?pid=Api&P=0&h=180",ingredients:["Chicken - 500 g","Soy sauce - 2 tbsp","Sugar - 1 tbsp","Mirin - 2 tbsp","Oil - 1 tbsp"],instructions:["Season chicken","Heat pan","Cook chicken","Add teriyaki sauce","Simmer","Turn chicken","Serve"]},
{name:"Miso Soup",image:"https://tse4.mm.bing.net/th/id/OIP.TYLiBYwo8zVVtZqr8pZPcwHaFN?pid=Api&P=0&h=180",ingredients:["Miso paste - 2 tbsp","Dashi - 3 cups","Tofu - 1 cup","Seaweed - 2 tbsp","Green onion - 2 tbsp"],instructions:["Boil water","Add dashi","Add tofu","Add seaweed","Mix miso paste","Simmer","Serve"]},
{name:"Okonomiyaki",image:"https://tse4.mm.bing.net/th/id/OIP.s5mVrCAY4_rhqF-UgIVc8wHaE7?pid=Api&P=0&h=180",ingredients:["Flour - 1 cup","Cabbage - 2 cups","Egg - 2","Sauce - 2 tbsp","Oil - 1 tbsp"],instructions:["Mix batter","Add cabbage","Heat pan","Pour mixture","Cook one side","Flip","Add sauce","Serve"]}
],

"South Indian":[
{name:"Dosa",image:"https://tse3.mm.bing.net/th/id/OIP.byUOFpj1tJCvqsLBrD48AgHaEK?pid=Api&P=0&h=180",ingredients:["Rice - 2 cups","Urad dal - 1/2 cup","Fenugreek seeds - 1 tsp","Salt - 1 tsp","Oil - 2 tbsp"],instructions:["Soak rice and urad dal","Grind batter","Add salt","Ferment overnight","Heat tawa","Pour batter","Spread","Drizzle oil","Cook and serve"]},
{name:"Idli",image:"https://tse3.mm.bing.net/th/id/OIP.Rsi3VmFbjWES4z2llGWckgHaE8?pid=Api&P=0&h=180",ingredients:["Rice - 2 cups","Urad dal - 1/2 cup","Salt - 1 tsp","Water - as needed"],instructions:["Soak rice and urad dal","Grind batter","Add salt","Ferment overnight","Grease plates","Pour batter","Steam","Remove","Serve hot"]},
{name:"Vada",image:"https://tse3.mm.bing.net/th/id/OIP.yzVFMWm1TcBZMWeb4e6mwQHaFj?pid=Api&P=0&h=180",ingredients:["Urad dal - 1 cup","Onion - 1","Green chilli - 2","Salt - 1 tsp","Oil - for frying"],instructions:["Soak urad dal","Grind batter","Add salt","Mix","Heat oil","Shape batter","Drop in oil","Fry","Serve"]},
{name:"Upma",image:"https://tse4.mm.bing.net/th/id/OIP.lJ609kN6Uz0ROhgOnyzEHAHaHa?pid=Api&P=0&h=180",ingredients:["Rava - 1 cup","Onion - 1","Green chilli - 2","Mustard seeds - 1 tsp","Oil - 2 tbsp"],instructions:["Roast rava","Boil water","Add salt","Add vegetables","Add roasted rava","Stir continuously","Cook till soft","Add ghee","Serve hot"]},
{name:"Pongal",image:"https://tse2.mm.bing.net/th/id/OIP.Opu2VIf48uoVZJg1rZMYwQHaE8?pid=Api&P=0&h=180",ingredients:["Rice - 1 cup","Moong dal - 1/2 cup","Pepper - 1 tsp","Ghee - 2 tbsp","Cashew nuts - 2 tbsp"],instructions:["Wash rice and dal","Cook with water","Mash softly","Add salt","Heat ghee","Add pepper and cumin","Add curry leaves","Mix tempering","Serve hot"]},
{name:"Sambar",image:"https://tse3.mm.bing.net/th/id/OIP.O6LB8LHw88U9scAQGwrFfgHaE3?pid=Api&P=0&h=180",ingredients:["Toor dal - 1 cup","Mixed vegetables - 2 cups","Tamarind - 1 tbsp","Sambar powder - 2 tbsp","Oil - 2 tbsp"],instructions:["Cook toor dal","Mash dal","Boil vegetables","Add tamarind","Add sambar powder","Mix dal","Boil","Tempering","Serve"]},
{name:"Rasam",image:"https://tse4.mm.bing.net/th/id/OIP.p9DjcrHJxRWYYTRAolGGtAHaEI?pid=Api&P=0&h=180",ingredients:["Tamarind - 1 tbsp","Tomato - 2","Rasam powder - 1 tbsp","Garlic - 3 cloves","Cumin seeds - 1 tsp"],instructions:["Extract tamarind","Add tomato","Add rasam powder","Boil","Add dal water","Tempering","Add coriander","Serve"]},
{name:"Appam",image:"https://tse1.mm.bing.net/th/id/OIP.hlgRawrp2snVp2RUbUrdCAAAAA?pid=Api&P=0&h=180",ingredients:["Rice - 2 cups","Coconut milk - 1 cup","Sugar - 1 tsp","Yeast - 1/2 tsp","Salt - 1 tsp"],instructions:["Soak rice","Grind with coconut","Add yeast","Ferment batter","Heat appam pan","Pour batter","Swirl pan","Cover and cook","Serve hot"]},
{name:"Puttu",image:"https://tse1.mm.bing.net/th/id/OIP.X3MQP5fmxASIeHgHGv8xyAHaEK?pid=Api&P=0&h=180",ingredients:["Rice flour - 2 cups","Grated coconut - 1 cup","Salt - 1 tsp","Water - as needed"],instructions:["Moisten rice flour","Add salt","Layer flour and coconut","Fill puttu maker","Steam","Cook till done","Remove carefully","Serve hot"]},
{name:"Payasam",image:"https://tse4.mm.bing.net/th/id/OIP.sEDIX5YxZJs0RkFACJigUQHaE8?pid=Api&P=0&h=180",ingredients:["Vermicelli - 1 cup","Milk - 3 cups","Sugar - 1/2 cup","Cardamom - 1 tsp","Cashew nuts - 2 tbsp"],instructions:["Boil milk","Add roasted vermicelli","Cook till soft","Add sugar","Add cardamom","Fry cashews in ghee","Add to payasam","Mix well","Serve hot"]}
],

"Continental":[
{name:"Grilled Chicken",image:"https://tse4.mm.bing.net/th/id/OIP.TNzTFV3-97B5sF5jnTpPRQHaEK?pid=Api&P=0&h=180",ingredients:["Chicken - 500 g","Olive oil - 2 tbsp","Garlic - 1 tsp","Lemon juice - 1 tbsp","Spices - 1 tsp"],instructions:["Marinate chicken","Preheat grill","Place chicken","Cook both sides","Brush oil","Check doneness","Remove","Rest","Serve"]},
{name:"Steak",image:"https://tse3.mm.bing.net/th/id/OIP.uDzia-LK6V9Yc3LyJ9rJOAHaEK?pid=Api&P=0&h=180",ingredients:["Beef steak - 300 g","Butter - 2 tbsp","Garlic - 1 tsp","Salt - 1 tsp","Pepper - 1 tsp"],instructions:["Season steak","Heat pan","Add butter","Place steak","Cook both sides","Baste with butter","Rest meat","Slice","Serve"]},
{name:"Mashed Potatoes",image:"https://tse1.mm.bing.net/th/id/OIP.cgeIXySc7VsuxH2mDeUeywHaEJ?pid=Api&P=0&h=180",ingredients:["Potatoes - 4","Butter - 2 tbsp","Milk - 1/2 cup","Salt - 1 tsp","Pepper - 1/2 tsp"],instructions:["Boil potatoes","Drain water","Mash potatoes","Add butter","Add milk","Add salt","Mix smooth","Adjust texture","Serve"]},
{name:"Roasted Vegetables",image:"https://tse2.mm.bing.net/th/id/OIP.spBu8PiJP-WFRoUZphwXAAHaE7?pid=Api&P=0&h=180",ingredients:["Mixed vegetables - 3 cups","Olive oil - 2 tbsp","Salt - 1 tsp","Pepper - 1/2 tsp","Herbs - 1 tsp"],instructions:["Chop vegetables","Preheat oven","Add oil","Add salt","Spread on tray","Roast","Flip halfway","Cook till tender","Serve"]},
{name:"Caesar Salad",image:"https://tse2.mm.bing.net/th/id/OIP.91VI1_SmVd_oAN1t2NFqygHaFj?pid=Api&P=0&h=180",ingredients:["Lettuce - 2 cups","Croutons - 1 cup","Parmesan - 1/2 cup","Caesar dressing - 1/4 cup","Olive oil - 1 tbsp"],instructions:["Wash lettuce","Chop lettuce","Add croutons","Add dressing","Add cheese","Toss well","Adjust seasoning","Plate","Serve"]},
{name:"Garlic Bread",image:"https://tse1.mm.bing.net/th/id/OIP.i9u8_2nTpv6xBYlCaxJlZwHaEJ?pid=Api&P=0&h=180",ingredients:["Bread - 6 slices","Butter - 3 tbsp","Garlic - 1 tsp","Parsley - 1 tsp","Cheese - 1/2 cup"],instructions:["Slice bread","Mix butter and garlic","Spread mixture","Preheat oven","Place bread","Bake","Cook till golden","Remove","Serve"]},
{name:"Fish and Chips",image:"https://tse1.mm.bing.net/th/id/OIP.UFcsAh36WFpNSwBglKMHbwHaEJ?pid=Api&P=0&h=180",ingredients:["Fish fillet - 300 g","Potatoes - 3","Flour - 1 cup","Oil - for frying","Salt - 1 tsp"],instructions:["Cut potatoes","Heat oil","Fry potatoes","Prepare batter","Dip fish","Fry fish","Drain oil","Season","Serve"]},
{name:"Pancakes",image:"https://tse4.mm.bing.net/th/id/OIP.bunARgDdhEAgrCsicoG6uwHaFL?pid=Api&P=0&h=180",ingredients:["Flour - 1 cup","Milk - 1 cup","Egg - 1","Sugar - 2 tbsp","Butter - 1 tbsp"],instructions:["Mix flour","Add milk","Add egg","Whisk batter","Heat pan","Pour batter","Flip pancake","Cook golden","Serve"]},
{name:"Omelette",image:"https://tse3.mm.bing.net/th/id/OIP.xtLLjzBh_pCt4nMQmvdLbgHaEJ?pid=Api&P=0&h=180",ingredients:["Eggs - 3","Milk - 2 tbsp","Salt - 1/2 tsp","Pepper - 1/2 tsp","Butter - 1 tbsp"],instructions:["Crack eggs","Whisk eggs","Add salt","Heat pan","Pour eggs","Add fillings","Fold","Cook","Serve"]},
{name:"Baked Chicken",image:"https://tse4.mm.bing.net/th/id/OIP.fAhtTdwQ71GkKRnA708IcgHaE8?pid=Api&P=0&h=180",ingredients:["Chicken - 600 g","Olive oil - 2 tbsp","Garlic - 1 tsp","Spices - 1 tsp","Salt - 1 tsp"],instructions:["Season chicken","Preheat oven","Place in tray","Brush oil","Bake","Turn halfway","Check doneness","Rest","Serve"]}
],

"Coffees":[
{name:"Cappuccino",image:"https://tse3.mm.bing.net/th/id/OIP.J4o65Qht_Qi0DjR3q4RLsQHaEJ?pid=Api&P=0&h=180",ingredients:["Espresso - 1 shot","Steamed milk - 1/2 cup","Milk foam - 1/4 cup","Sugar - 1 tsp"],instructions:["Brew espresso","Steam milk","Froth milk","Pour espresso","Add steamed milk","Add foam","Dust cocoa","Serve"]},
{name:"Latte",image:"https://tse2.mm.bing.net/th/id/OIP.pa0J1kyu8ZmYYugUl_OPdwHaEK?pid=Api&P=0&h=180",ingredients:["Espresso - 1 shot","Steamed milk - 3/4 cup","Milk foam - 2 tbsp","Sugar - 1 tsp"],instructions:["Brew espresso","Steam milk","Pour espresso","Add steamed milk","Add thin foam","Stir lightly","Serve"]},
{name:"Mocha",image:"https://tse4.mm.bing.net/th/id/OIP.Ea6FMoYpjTOQK6MJY7NBCwHaEJ?pid=Api&P=0&h=180",ingredients:["Espresso - 1 shot","Milk - 3/4 cup","Chocolate syrup - 2 tbsp","Whipped cream - 2 tbsp"],instructions:["Brew espresso","Add chocolate","Mix well","Steam milk","Pour milk","Add foam","Top cream","Serve"]},
{name:"Espresso",image:"https://tse2.mm.bing.net/th/id/OIP.weAQWiKdxwYo9meyYysFyAHaE8?pid=Api&P=0&h=180",ingredients:["Coffee powder - 2 tsp","Water - 30 ml","Sugar - optional"],instructions:["Grind coffee","Fill portafilter","Tamp coffee","Lock machine","Start extraction","Collect shot","Serve"]},
{name:"Americano",image:"https://tse3.mm.bing.net/th/id/OIP.vgtRBe4oZ_WvQv6jU_EW3QHaFE?pid=Api&P=0&h=180",ingredients:["Espresso - 1 shot","Hot water - 1 cup","Sugar - optional"],instructions:["Boil water","Brew espresso","Pour hot water","Add espresso","Mix lightly","Serve"]},
{name:"Flat White",image:"https://tse4.mm.bing.net/th/id/OIP.xjkjjKk6IeJeNXg_bSQtPwHaEJ?pid=Api&P=0&h=180",ingredients:["Espresso - 1 shot","Steamed milk - 1/2 cup","Milk foam - 1 tbsp"],instructions:["Brew espresso","Steam milk","Pour espresso","Add microfoam","Mix smoothly","Serve"]},
{name:"Macchiato",image:"https://tse1.mm.bing.net/th/id/OIP.QF0fDISrAGQ4_DxvyEoUtAHaE8?pid=Api&P=0&h=180",ingredients:["Espresso - 1 shot","Milk foam - 1 tbsp","Sugar - optional"],instructions:["Brew espresso","Steam milk","Add small foam","Top espresso","Serve"]},
{name:"Irish Coffee",image:"https://tse4.mm.bing.net/th/id/OIP.ugbR3-WNMmsK5UtAPsKZ0wHaEJ?pid=Api&P=0&h=180",ingredients:["Hot coffee - 1 cup","Sugar - 1 tsp","Whipped cream - 2 tbsp","Irish whiskey - 30 ml"],instructions:["Brew coffee","Add sugar","Pour whiskey","Stir","Add cream","Float cream","Serve"]},
{name:"Cold Brew",image:"https://tse4.mm.bing.net/th/id/OIP.Ury2QEvfenMHUQwe_J6BoQHaFS?pid=Api&P=0&h=180",ingredients:["Coffee grounds - 1 cup","Cold water - 4 cups","Ice cubes - 1 cup","Sugar - optional"],instructions:["Grind coffee","Add cold water","Steep overnight","Strain coffee","Add ice","Serve"]},
{name:"Iced Latte",image:"https://tse1.mm.bing.net/th/id/OIP.bPZzxdXqP_YkShZ5rpjLmwHaE8?pid=Api&P=0&h=180",ingredients:["Espresso - 1 shot","Milk - 1 cup","Ice cubes - 1 cup","Sugar syrup - 1 tbsp"],instructions:["Add ice","Brew espresso","Pour milk","Add espresso","Stir","Serve"]}
]

};

function showRecipes(cuisine){
document.getElementById("cuisineSection").classList.add("hidden");
document.getElementById("recipeSection").classList.remove("hidden");
document.getElementById("recipeTitle").innerText=cuisine+" Recipes";

let list=document.getElementById("recipeList");
list.innerHTML="";

recipes[cuisine].forEach(recipe=>{
let card=document.createElement("div");
card.className="recipe-card";
card.onclick=()=>showDetails(recipe);

let heart = favorites.includes(recipe.name) ? "❤️" : "🤍";

card.innerHTML=`
<img src="${recipe.image}">
<h4>${recipe.name}</h4>
<button class="fav-btn">${heart}</button>
`;

card.querySelector(".fav-btn").onclick=(e)=>{
e.stopPropagation();
toggleFavorite(recipe.name);
};

list.appendChild(card);
});
}

function showDetails(recipe){
document.getElementById("recipeSection").classList.add("hidden");
document.getElementById("detailSection").classList.remove("hidden");

document.getElementById("dishName").innerText=recipe.name;
document.getElementById("dishImage").src=recipe.image;

let ing=document.getElementById("ingredientsList");
ing.innerHTML="";
recipe.ingredients.forEach(i=>{
let li=document.createElement("li");
li.innerText=i;
ing.appendChild(li);
});

let steps=document.getElementById("instructionsText");
steps.innerHTML="";
recipe.instructions.forEach(step=>{
let li=document.createElement("li");
li.innerText=step;
steps.appendChild(li);
});
}

function goBack(){
document.getElementById("cuisineSection").classList.remove("hidden");
document.getElementById("recipeSection").classList.add("hidden");
document.getElementById("detailSection").classList.add("hidden");
document.getElementById("favoritesSection").classList.add("hidden");
}

function goBackToRecipes(){
document.getElementById("detailSection").classList.add("hidden");
document.getElementById("recipeSection").classList.remove("hidden");
}

// FAVORITES
let favorites=JSON.parse(localStorage.getItem("favorites")) || [];

function toggleFavorite(name){

if(favorites.includes(name)){
favorites = favorites.filter(f=>f!==name);
}else{
favorites.push(name);
}

localStorage.setItem("favorites", JSON.stringify(favorites));

showRecipes(document.getElementById("recipeTitle").innerText.replace(" Recipes",""));

}




function showFavorites(){

document.getElementById("cuisineSection").classList.add("hidden");
document.getElementById("recipeSection").classList.add("hidden");
document.getElementById("detailSection").classList.add("hidden");

document.getElementById("favoritesSection").classList.remove("hidden");

let list=document.getElementById("favoritesList");
list.innerHTML="";

favorites.forEach(name=>{

Object.values(recipes).flat().forEach(recipe=>{

if(recipe.name===name){

let card=document.createElement("div");
card.className="recipe-card";
card.onclick=()=>showDetails(recipe);

card.innerHTML=`
<img src="${recipe.image}">
<h4>${recipe.name}</h4>
`;

list.appendChild(card);

}

});

});
}




function logout(){
location.reload();
}