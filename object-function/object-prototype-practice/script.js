/*
    Demo : Creating Objects

    ** Dışarıdan name ve salary bilgilerini alan Employee constructor'i tanımlayınız.
    ** Yıl içinde o ana kadar alınan toplam maaş ve alınan toplam vergi tutarını hesaplayan fonksiyonu oluşturun.
      Vergi dilimleri
        ** 20.000 'e kadar %20 vergi
        ** 30.000 'e kadar %25 vergi
        ** 30.000 'den sonra %27 vergi
    ** 
*/

function Employee(name, salary){
    if (!(this instanceof Employee)){
        return new Employee(name,salary);
    }
    this.name = name;
    this.salary = salary;
}

Employee.prototype.calculateSalary = function(){
    var month = new Date().getMonth() + 1;
    var totalSalary = month * this.salary;
    var tax = 0;
    if(totalSalary<20000){
        tax = totalSalary/5;
    }else if(totalSalary<30000){
        tax = totalSalary/4;
    }else{
        tax = totalSalary*0.27;
    }
    return {
        taxx : tax,
        paid : totalSalary - tax
    }
}
var emp1 = Employee('Yiğit',3000);
var emp1_salary = emp1.calculateSalary();

console.log(`${emp1.name} isimli personel toplam ${emp1_salary.taxx} TL vergi kesintisi ile ${emp1_salary.paid} TL maaş almıştır`)

var emp2 = new Employee('Can',4000);
var emp2_salary = emp2.calculateSalary();