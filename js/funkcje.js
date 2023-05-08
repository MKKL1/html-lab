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
    tresc+='<article class="srodek" ><form action="mailto:b.panczyk@pollub.pl" method="post" onsubmit="return pokazDane();">'+ 'Twój email:<br /> <input type="email" name="email" id="email" required /><br />'+
// dodaj kolejne 2 pola formularza
    'Komentarz: <br /><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea>'+
    '<br /> <input type="submit" name="wyslij" value="Wyślij" />'+
    '</form></article>';
    return tresc;
}
function pokazDane()
{
//Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
//typu confirm do zatwierdzenia przez użytkownika:
    var dane="Następujące dane zostaną wysłane:\n";
    dane+="Email: "+document.getElementById('email').value+"\n";
// uzupełnij dane ...
    if (window.confirm(dane)) return true;
    else return false;
}