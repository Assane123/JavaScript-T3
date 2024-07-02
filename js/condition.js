//Condition IF

let age = prompt('Saisir votre age');

if (age  >=0  && age <=14) {
    alert('vous etes Mineurs');
} 
else if (age >=15  && age <=25) {
    alert('vous etes Adolescents');
} 
 else if (age >=26  && age <=64) {
    alert('vous etes Adultes');
} 
 else if (age >=65 ) {
    alert('vous etes Ainés');
}