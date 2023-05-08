function pokaz(id)
{
    var tresc="";
    switch (id)
    { case 2: tresc += pokazGalerie();break;
        case 3: tresc += pokazPost(); break;
        case 4: tresc += pokazKontakt();break;
        default: tresc += pokazO();
    }
//pobierz element o wskazanym id i ustaw jego nową zawartość:
    document.getElementById('blok').innerHTML = tresc;
}
function pokazO() {
    var tresc = '<h2><br />Pierwsze kroki</h2> ';
//operator += uzupełnia łańcuch kolejną porcją znaków:
    tresc += '<p> Projektowanie responsywne (RWD od ang. Responsive Web Design) to metoda, która\n' +
        '            dostosowuje się do środowiska wyświetlania. Użytkownik może swobodnie poruszać się po\n' +
        '            stronach internetowych korzystając z różnych urządzeń, także mobilnych. Rozmiar strony, jej\n' +
        '            rozdzielczość oraz orientacja ekranu dopasowują się do urządzenia, na którym aktualnie jest\n' +
        '            wyświetlana.</p>' +
        '<p class="srodek"><img src="baner.jpeg" alt="Zdjęcie" /></p>' +
        '<article><h2>Wady SPA</h2><p>' +
        ' Czas wytworzenia oraz nakład pracy ... </p></article>';
//przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
    return tresc;
}

function pokazGalerie()
{
    var tresc='<h2><br />Moja galeria</h2>';
    tresc+=' <div class="galeria">';
//wygeneruj kod HTML z obrazami za pomocą pętli for:
    for(i=1;i<=10;i++)
    {
        tresc+='<div class="slajd"> <img src="miniaturki/obraz' + i + '.jpg" alt="zdjecie"/></div>';
    }
    return tresc+'</div>';
}
function pokazKontakt()
{
    var tresc='<h2><br />Kontakt</h2>';
//uzupełnij treść:
// tresc+= ...
    return tresc;
}
function pokazPost()
{
//funkcja generuje kod formularza – dane wpisane w odpowiednie pola przez
//użytkownika zostaną przekazane mailem na wskazany adres, ale najpierw po
//zajściu zdarzenia submit (wyślij) – zostanie wywołana funkcja pokazDane()
    tresc='<h2><br />Dodaj post</h2>';
    tresc+='<article class="srodek" ><form action="mailto:b.panczyk@pollub.pl" method="post" onsubmit="return pokazDane();">' +
// dodaj kolejne 2 pola formularza
    'Twój email: <br /><input type="email" name="email" id="email" required="required" pattern="[a-zA-Z0-9_]+@[a-zA-Z0-9\\-]+\\.[a-zA-Z0-9\\-\\.]+"/>' +
    '<br />Nazwisko i Imie <br /><input type="text" name="imienazwisko" id="imienazwisko" required="required"/>' +
    '<br />Nr telefonu: <br /><input type="text" name="nrtelefonu" id="nrtelefonu" pattern="([1-9]{1,1}[0-9]{1,1}(-)?[1-9]{1,1}[0-9]{6,6})|([1-9]{1,1}[0-9]{8,8})"/>' +
    '<br />Zainteresowania<br /> <input type="checkbox" id="zainSport" name="Sport" value="Sport">' +
    '<label for="zainSport">Sport</label>' +
    '<input type="checkbox" id="zainMuzyka" name="Muzyka" value="Muzyka">' +
    '<label for="zainMuzyka">Muzyka</label>' +
    '<input type="checkbox" id="zainFilm" name="Film" value="Film">' +
    '<label for="zainFilm">Film</label>' +
    '<input type="checkbox" id="zainInne" name="Inne" value="Inne">' +
    '<label for="zainInne">Inne</label>' +
    '<br />Wiek<br />\n' +
    '<input type="radio" name="wiek" value="m10" /> Mniej niz 10\n' +
    '<input type="radio" name="wiek" value="10do20" /> 10-20\n' +
    '<input type="radio" name="wiek" value="21do30" /> 21-30\n' +
    '<input type="radio" name="wiek" value="31do40" /> 31-40\n' +
    '<input type="radio" name="wiek" value="41do50" /> 41-50\n' +
    '<input type="radio" name="wiek" value="w50" /> Wiecej niz 50\n <br />' +
    'Komentarz: <br /><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea>'+
    '<br />' +
    '<br /> <input type="submit" name="wyslij" value="Wyślij" onsubmit="pokazDane()" />'+
    '</form></article>';
    return tresc;
}
function pokazDane()
{
//Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
//typu confirm do zatwierdzenia przez użytkownika:
    var dane="Następujące dane zostaną wysłane:\n";
    dane+="Email: "+document.getElementById('email').value+"\n";
    dane+="Nazwisko i Imie: "+document.getElementById('imienazwisko').value+"\n";
    dane+="Nr Telefonu: "+document.getElementById('nrtelefonu').value+"\n";
    dane+="Wiadomosc: "+document.getElementById('wiadomosc').value+"\n";
// uzupełnij dane ...
    return window.confirm(dane);
}