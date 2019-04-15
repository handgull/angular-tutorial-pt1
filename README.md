# AngularTutorialPt1
- ## Installazione di bootstrap tramite npm
> NOTA: aggiungere anche il path in angular.json
- ## Creazione dei componenti tramite CLI
```bash
ng serve # Per accendere il server locale
ng g c login
ng g c home # Modificare il selettore del componente per averlo by attribute
ng g c login/alertSuccess # Modificare il selettore del componente per averlo by class
```
- ## Importare FormsModule per poter usare ngModel nel progetto
- Le pagine sono fatte grazie agli *ngIf, nell'app-component creo una variabile che può assumere valori di tipo string, e chiamo i componenti con un *ngif su quel valore, vanno messi a disposizione dell'utente due bottoni che facciano cambiare il valore della variabile, in modo da visualizzare solo uno dei due componenti (login o home)

- La pagina di login deve sfruttare ngModel per salvare i valori delle input in typescript.<br>
l'event binding (click) sul bottone per verificare le credenziali,<br>
property binding [class.myClass] per cambiare il background delle input in caso di credenziali corrette e per nascondere la span che sfrutta la string interpolation tramite [style.display] se l'username è vuoto.<br>
La span affianco al bottone submit deve far vedere tramite string interpolation lo {{ username }}
Nella pagina di login infine deve comparire, in caso di successo una alert-success tramite un *ngIf (e questa alert bootstrap va messa dentro il componente alertSuccess, il componente alertSuccess è quindi chiamato dentro al componente login).

- La pagina home deve avere sopra una parte di inserimento dati:<br>
ngModel sulle input e un (click) sul bottone.<br>
e sotto una lista di persone, fatta tramite *ngFor, che stampi i dati relativi alla persona tramite {{ string interpolation }}, serve anche stampare l'index (vedere esempio)

# AngularTutorialPt2
## Creazione dei nuovi component:
```bash
ng g c home/home-list --spec=false
ng g c home/home-list/home-row --spec=false
```
## Richiamo *ngFor e *ngIf
- Fare un array di stringhe in app.component.ts e metterci le stringhe del routing, poi fare i bottoni dell'header usando un ciclo *ngFor
- Far diventare il bottone di un altro colore se la route attiva è quella del bottone, tramite property binding.
- Fare un messaggio di benvenuto nell'header che compae solo nella pagina home, tramite *ngIf
## Login component
- Fare in modo che la variabile username sia settabile tramite app-component (usando @Input()) e dare 'username' come valore da app-component.
- Creare un emitter di tipo boolean (@Output()) che in checkLogin() notifichi l'app-component dell'esito del login. Svuotare il metodo checkLogin() di ogni altra logica all'infuori del boolean e dell'emitter.
- Creare il metodo in app-component.ts, azionato alla ricezione dell'evento, che in caso di errore manda un messaggio, in caso di successo dopo 1 secondo setta la pagina ad 'home'
# Home component
- Spostare tutto tranne la form di inserimento dati in un componente app-home-list, e dare in @Input a questo componente la lista di persone.
- app-home-row deve avere dentro il tag <li> una div con string interpolation che mostra l'index (passato con @Input() nell'*ngFor) e un <ng-content>, il resto dei dati verrà quindi scritto normalmente tra i tag <app-home-row></app-home-row>
