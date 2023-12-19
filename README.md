#Algemene informatie


##PROJECT LATEN WERKEN DOOR
- npm run serve

##SCSS WIJZIGINGEN
npx node-sass -o ../taakwebadvanced1/src/css src/scss/main.scss

###INLOGGEGEVENS
mail: 
school@mail.be 
wachtwoord: 
test

of 

naam: 
esat
wachtwoord: 
test

# Headset Webshop

- Dit project is een eenvoudige webshop voor headsets, opgezet als onderdeel van een schoolopdracht.
- Het bevat  **momenteel** 5 statische web-pagina's.

## Inhoud


1. [**Startpagina**]
2. [**Overzichtspagina**]
3. [**Productinfo Pagina**]
4. [**Login Pagina**]
5. [**Winkelwagen Pagina**]

## Startpagina

- Algemene omschrijving van de te verkopen producten.
- Onderdeel met 3 producten in de kijker.
- Wat informatie van het 'bedrijf'.
- Contactgegevens van het 'bedrijf'.

## Overzichtspagina
- 20 producten in deze overzichtspagina
- Paginatie werkend 8 producten per pagina
- Filter werkend
    - Prijs
    - Gebruik
-Paginatie en filter werken samen.

## Productinfo Pagina

- Werkende breadcrumb
- Gedetailleerde informatie van een geselecteerd product wordt weergegeven.
- Functionaliteit om producten aan een winkelmandje toe te voegen.
- Als product op is, een melding dat het niet meer beschikbaar is bij 0 producten of nadat alle producten in winkelmand zijn.
- Headset vergelijken met soortgelijke headsets.

## Login Pagina

- Formulier voor gebruikers om in te loggen met e-mailadres/naam en wachtwoord.
- Mogelijkheid om een nieuw wachtwoord aan te vragen of te registreren.
- Als ik uitlog gaat het alles van me localstorage verwijderen nadat ik refresh. 
Dit zodat mensen niet iets in de winkelmand kunnen doen of hebben na het refreshen van de pagina
nadat ze zijn uitgelogd.

## Winkelwagen Pagina

- Pagina waar gebruiker producten heeft gezet, hier kan ze deze verwijderen of verder gaan met een aankoop.
- volgende pagina, heb je een invoice die automatisch is ingevuld op basis van ingelogde gebruiker. 
- volgende pagina, de besteloverzicht.

## Responsive Design

- De pagina's zijn ontworpen om op een breed scala van apparaten te kunnen worden bekeken, waaronder desktops, tablets en mobiele telefoons.

## Opmerkingen

- Het project is opgezet met HTML, SCSS, VueJS, JSON, en JavaScript.

