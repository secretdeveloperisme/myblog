function readTextFile(number)
{   
    var text='{'+
    '"person":['+
    '{' +
        '"name":"Nguyen Hoang Linh",' +    
        '"date_of_birth":"25/11/2000",'  +   
        '"gender":"male"'   +      
     '},'  +
     '{'+   
            
         '"name":"Bui Thuy Lieu",'+     
         ' "date_of_birth":"16/11/2000",'+  
         '"gender":"female"'+   
    '},'+
    ' {'   +
        '"name":"Le thi Kim Y",' +    
        '"date_of_birth":"18/09/2000",'  +   
        '"gender":"female"'+    
            
    '},'+
    '{'+     
         '"name":"Nguyen Thi Bich Lien",'+     
         ' "date_of_birth":"20/02/2000",'+  
         '"gender":"female"'+   
    '}'+
']'+
'}';
var person=JSON.parse(text);
    switch(number){
        case 0:
            var linh=person.person[0];
            window.alert("name:"+linh.name+"\n"+"date_of_birth:"+linh.date_of_birth+"\n"+"gender:"+linh.gender);
            break;
        case 1: 
        var lieu=person.person[1];
            window.alert("name:"+lieu.name+"\n"+"date_of_birth:"+lieu.date_of_birth+"\n"+"gender:"+lieu.gender);
            break;
        case 2: 
        var y=person.person[2];
            window.alert("name:"+y.name+"\n"+"date_of_birth:"+y.date_of_birth+"\n"+"gender:"+y.gender);
            break;
        case 3: 
        var lien=person.person[3];
            window.alert("name:"+lien.name+"\n"+"date_of_birth:"+lien.date_of_birth+"\n"+"gender:"+lien.gender);
            break;
        default: 
            alert("hello world")
            break;
    }
console.log(person);
}