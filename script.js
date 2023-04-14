/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

// Funzione di ricerca basata su due parametri di ingresso
function JobSearch(title, location) {
  let resultjobs = []; // Inizializzo l'array che conterra i risultati trovati
  let x = "";// Variabile d'appoggio 
  let y = "";// Variabile d'appoggio 
  jobs.forEach(function (value, key) { // Ciclo tutte le mie posizioni
    x = value.title.toLowerCase(); // Trasformo in lower case per comparare i valori 
    y = value.location.toLowerCase(); // Trasformo in lower case per comparare i valori 
    if (x.includes(title.toLowerCase()) && y.includes(location.toLowerCase())) { // Controllo se ci sono match con l'array
      resultjobs.push(value); // Condizione soddisfatta, pusho nell'array
    }
  });
  return { // Ritorno risultati
    result: resultjobs,
    count: resultjobs.length
  };
}

// Identificazione del bottone di ricerca 
let searchbutton = document.getElementById("search");

// Funzione che esegue la ricerca
searchbutton.onclick = function () {
  let title = document.getElementById("title"); // Recupero elemento title
  let location = document.getElementById("location"); // Recupero elemento location

  if (title.value != "" && location.value != "") { // Controllo se entrambi i valori non sono vuoti
    let result = JobSearch(title.value, location.value); // Assegna alla variabile result cio che la funzione JobSearch mi ritorna

    let ulElement = document.getElementById("result"); // Elemento predisposto a contenere i miei result
    let countElement = document.getElementById("count"); // Elemento predisposto a contenere il mio count
    let liString = ""; // Variabile d'appoggio per ancorare il mio HTML

    countElement.innerHTML = "<li>" + result.count + "<h5>Risultati</h5>"; // Contenuto count

    result.result.forEach(function (value, key) {
      liString += "<li>" + "<h5>Posizione:</h5>" + value.title + "</br>" + "<h5>Luogo:</h5>" + value.location + "</li>" + "<br>" + "<button>Candidati Ora</button>"+"<hr>"+"<br>"; // Contenuto result 
    });
    ulElement.innerHTML = liString; // Ancoro il mio HTML 
  }
}


// Recupero elemento
let X = document.getElementById("clear");
// Funzione per pulire il mio contenuto
X.onclick = function (){

  let ulElement = document.getElementById("result"); // Richiamo del mio result
  let countElement = document.getElementById("count"); // Richiamo del mio count

  ulElement.innerHTML = '<li><img src="assets/JobSearch_girl.png" alt="girl looking for job"></li>'; // Sostituzione di elemento
  countElement.innerHTML = '<li><h2>Trova il <br> lavoro perfetto! <br><br> Filtra le offerte!</h2><i class="fa-solid fa-magnifying-glass"></i></li>'; // Sostituzione di elemento
}