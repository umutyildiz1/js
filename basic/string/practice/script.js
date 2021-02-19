var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";

// cümle kaç karakterlidir ?
console.log(sentence.length)
// kaç kelimeden oluşuyor ?
sentence = sentence.trim();
let val = sentence.split(" ");
console.log(val.length)
// Tüm cümleyi küçük harfe çevirin.
sentence = sentence.toLowerCase();
console.log(sentence)
// Cümlenin başındaki ve sonundaki boşlukları siliniz.
sentence = sentence.trim();
// '-' karakterini silin.
sentence = sentence.replace("-","");
console.log(sentence);
// url'nin içinden str kısmını çıkarınız.
var str = 'http://';
console.log(url.substr(str.length));
console.log(url.slice(str.length));
// url hangi protocol'u kullanmaktadır ? (http,https)
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));
// url, '.com' ifadesini içeriyor mu?
console.log(url.indexOf('.com'));
console.log(url.includes('.com'));
// url string ifadesini geçerli bir url olarak düzenleyiniz.
console.log(url.toLowerCase()
               .replace(/ /g,'-') 
               .replace(/ı/g,'i')
               .replace(/ü/g,'u')
               .replace(/ö/g,'o')
               .replace(/ş/g,'s')
               .replace(/ç/g,'c')
);