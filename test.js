let names=["Ciara","John","Nikol","Sandy","George"];
let verbs=["loves","knows","fears","is passionate for","likes"];
let objs=["buritos","dogs","mosquitoes","cakes","hookers"];

let random_name_ind=Math.floor(Math.random()*5);
let random_verb_ind=Math.floor(Math.random()*5);
let random_verb_obj=Math.floor(Math.random()*5);

const name=names[random_name_ind];
const verb=verbs[random_verb_ind];
const obj=objs[random_verb_obj];

console.log(name+" "+verb+" "+obj);