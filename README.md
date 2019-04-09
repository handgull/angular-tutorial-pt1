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

- La pagina di login deve sfruttare ngModule per salvare i valori delle input in typescript.<br>
l'event binding (click) sul bottone per verificare le credenziali,<br>
property binding [class.myClass] per cambiare il background delle input in caso di credenziali corrette e per nascondere la span che sfrutta la string interpolation tramite [style.display] se l'username è vuoto.<br>
La span affianco al bottone submit deve far vedere tramite string interpolation lo {{ username }}
Nella pagina di login infine deve comparire, in caso di successo una alert-success tramite un *ngIf (e questa alert bootstrap va messa dentro il componente alertSuccess, il componente alertSuccess è quindi chiamato dentro al componente login).

- La pagina home deve avere sopra una parte di inserimento dati:<br>
ngModel sulle input e un (click) sul bottone.<br>
e sotto una lista di persone, fatta tramite *ngFor, che stampi i dati relativi alla persona tramite {{ string interpolation }}, serve anche stampare l'index (vedere esempio)
