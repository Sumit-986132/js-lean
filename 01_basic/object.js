let myspl = "key-1";

let Userid = {
    name: "sumeet singh",
    myspl: "key-1",
    email: "mr.sumeet@gmail.com",
    inLoggin: false
}
console.log(Userid);
console.log(Userid["email"]);
Object.freeze(Userid);
Userid.email = "sumit@gmail.com" ;

let user =[
    {
        name: "sumeet",
        last: "singh",
    }
    
]
console.log(user.length);
user[1].name = "sumit";
console.log(user);
