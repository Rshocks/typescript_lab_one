let num1: number = 5;//exOne
console.log(num1);

let flag: boolean = false;//extwo
console.log(flag);

let color:string = "Hello";//exthree
console.log(color);

let list: string[] = ["Hi", "Hello", "Hey"]//exfour
for(let i=0; i < list.length; i++)
{
    console.log("StringList is " + list [i] + ".")
}

let notsure: any = 20;//exfive
console.log(notsure);

let listany: any[] = [2, false, "Test"];//exsix
for(let i=0; i < listany.length; i++)
{
    console.log("ListAll is " + listany [i] + ".")
}
