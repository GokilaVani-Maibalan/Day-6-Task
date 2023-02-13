class Person{
 
    constructor(fn,ln,age,address,nat,lang,mail){
        this.first_name = fn;
        this.las_name=ln;
        this.age = age;
        this.address=address;
        this.nationality=nat;
        this.lang=lang;
        this.mail=mail;
    }

}
class address{
    constructor(dn,street,pin)
    {
      this.door_no = dn;
      this.street = street;
      this.pincode = pin;
    }
}

let person1=new Person("Gokila","Maibalan",22,new address("10","abc","12345"),"Indian","tamil","dkflsdh@dfd.com");
console.log(person1);
