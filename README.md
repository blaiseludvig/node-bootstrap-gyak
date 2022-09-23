# Bootstrap használata Node-ban
> Az összes lépés commitokra van szedve, a repo-ban megtekinthető.

## **1. lépés**
Készíts egy git repo-t, klónozd a gépedre és lépj bele.

Ne felejtsd el a Node-os **``.gitignore``** fájlt opciót kiválasztani.

<br>

> terminál
```
$ git clone git@github.com:blaiseludvig/node-bootstrap-gyak.git
$ cd node node-bootstrap-gyak
```

## **2. lépés**
Futtasd le az **``npm init``** parancsot a mappában.

Csak a package nevét fontos megadni, minden más maradhat alapértelmezett.

<br>

> terminál
```
$ npm init
...
package name: (bootstrap-gyak) bootstrap-gyak
```

Ez létrehozza a package.json fájlt.

<br>

> terminál
```
$ ls
package.json
```

## **3.lépés**
Nyissuk meg a **``package.json``**-t.

Adjuk hozzá a **``"type": "module",``** sort. Ez a sor teszi lehetővé az **``import``** használatát.


> package.json előtte
```json
{
  "name": "bootstrap-gyak",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/blaiseludvig/node-bootstrap-gyak.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/blaiseludvig/node-bootstrap-gyak/issues"
  },
  "homepage": "https://github.com/blaiseludvig/node-bootstrap-gyak#readme"
}
```
<br>

> package.json utána
```json
{
  "name": "bootstrap-gyak",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/blaiseludvig/node-bootstrap-gyak.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/blaiseludvig/node-bootstrap-gyak/issues"
  },
  "homepage": "https://github.com/blaiseludvig/node-bootstrap-gyak#readme"
}
```

## **4. lépés**

Telepítsük a szükséges npm packageket.

> A **``--save-dev``** opció megadásával a parancs csak fejlesztéshez tölti le a packageket, ezzel megakadályozva azt hogy belekerülhessenek a kliens oldali kódunkba feleslegesen.

> terminál
```
$ npm install --save-dev bootstrap css-loader style-loader mini-css-extract-plugin webpack webpack-cli
```

Ez a parancs letölti a megadott packageket, és hozzáadja őket a **``"devDependencies"``** listához a **``package.json``**-ban.

Emellet létrehoz automatikus létrehoz egy **``package-lock.json``** fájlt, ami a packagek kompatibilitását biztosítja. Ezt kézzel soha nem kell szerkeszteni.

> package.json
```json
{
  "name": "bootstrap-gyak",
  "version": "1.0.0",
  ...
  "homepage": "https://github.com/blaiseludvig/node-bootstrap-gyak#readme",
  "devDependencies": {
    "bootstrap": "^5.2.1",
    "css-loader": "^6.7.1",
    "mini-css-extract-plugin": "^2.6.1",
    "style-loader": "^3.3.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  }
}

```

## **5. lépés**
Hozzunk létre egy **``index.html``** fájlt, és generáljuk le a HTML5 boilerplate kódot benne.

A **``body``**-hoz adjunk hozzá egy **``h1``** elemet, és adjuk hozzá az alul látható classokat.

```html
<body>
    <h1 class="display-1 text-center text-success">Teszt</h1>
</body>
```

Ezek Bootstrap classok, de még a Bootstrap nincs hozzáadva az **``index.html``**-hez, ezért még nem csinálnak semmit.

**Adjuk hozzá a Bootstrapet!**

## **6. lépés**
Van egy előre elkészített **``webpack.config.cjs``** fájl ebben a repo-ban, töltsd le, és helyezd el a projekt mappájában.

Ez a fájl a **``webpack``** konfigurációját tartalmazza, ehhez a feladathoz van előre beállítva, most nem kell módosítanunk.

## **7. lépés**
Hozzuk létre az **``src``** mappát. Ezen belül hozzuk létre az **``index.js``** fájlt.

Azért fontos, hogy az **``index.js``** az **``src``**-ben legyen, mert a **``webpack``** ebben a mappában fogja keresni, ha máshova rakjuk nem fogja megtalálni.

Írjunk az **``index.js``**-be néhány sort!

> src/index.js
```js
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'

console.log("javascript betöltve!");
```

Ez azt mondja a **``webpack``**-nek, hogy generálja le a Bootstrap **``.css``** és **``.js``** fájljait is.

Ha nem adjuk hozzá a **``console.log``**-ot, akkor nem fog működni.

A webpack ilyen esetben azt látja, hogy az **``index.js``** fájl nem végez el semmilyen művelet, ezért átugorja az **``import``** utasításokat, és nem generálja le a Bootstrap **``.css``** és **``.js``** fájljait sem.

<br>

Futtassuk le az **``npx webpack``** parancsot.

> terminál
```
$ npx webpack
```

Ez létrehozza a **``dist``** mappát, és generál egy **``main.js``** és **``main.css``** fájlt benne.

<br>

## **8. lépés**

Hivatkozzunk ezekre a fájlokra az **``index.html``**-ben.

> index.html
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="dist/main.css">
    <script src="dist/main.js" defer></script>

    <title>Document</title>
</head>
```

> Ne hagyd le a **``defer``**-t a **``<script>``** tagről!

<br>

Amikor megváltoztatjuk az **``src``** mappában lévő fájlokat, újra kell futtatnunk az **``npx webpack``** parancsot, hogy újragenerálja a **``dist``** mappában a fájlokat.

Ha lefutattjuk az **``npx webpack watch``** parancsot, akkor folyamatosan figyelni fogja az **``src``** mappában a fájlokat, és változásnál újragenerálja őket, hasonlóan mint a LiveServer a **`html`**-el. **Ctrl + C**-vel lehet leállítani.

Meghatározhatunk egy saját build scriptet is a **``package.json``**-ban.

> package.json előtte
```
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```


> package.json utána
```
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx webpack"
  },
...
```

Most, ha az **``npm run build``** parancsot kiadjuk, akkor az lefuttatja a jobb oldalt megadott **``npx webpack``** parancsot.

<br>

> terminál
```
$ npm run build
```

A **``package.json``**-ban ha így meghatározunk egy scriptet, akkor azt az **``npm run``** parancsal tudjuk futtatni. Ez hasznos akkor, ha nem szeretnéd ugyanazt sokszor legépelni.

Példa:

> package.json
```
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx webpack",
    "amongus": "echo 'amongus amongus amongerfnwuzfnwef'"
  },
...
```

> terminál
```
$ npm run amongus
amongus amongus amongerfnwuzfnwef
```

## **9. lépés**

Ha mindent helyesen csináltunk eddig, akkor most az **``index.html``**-ben
a "Teszt" szöveg középen van és zöld, ami azt jelenti, hogy működik a Bootstrap.

Próbáljunk meg saját **``css``**-t hozzáadni!

Hozzunk létre egy elemet, amin leteszteljük!

> index.html
```html
<body>
    <h1 class="display-1 text-center text-success">Teszt</h1>
    <p class="sajat-teszt">Ha működik, akkor ez piros!</p>
</body>
```

Hozzunk létre egy **``style.css``** fájlt az **``src``** mappában, és írjunk bele egy kis saját **``css``**-t!

> src/style.css
```css
.sajat-teszt {
    color: red;
}
```

Az utolsó lépés, az, hogy importáljuk a **``style.css``**-t is az **``index.js``**-be, hogy a **``webpack``** majd magától belerakja a generált **``dist/main.css``** fájlba.

> src/index.js
```js
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

console.log("javascript betöltve!");
```

Az elérési út formátuma fontos, hogy helyes legyen.

Itt azért **``'./style.css'``**, mert az **``index.js``** amibe importáljuk, és a **``style.css``** ugyanabban a mappában van. A **``.``** (pont karakter) a jelenlegi mappát jelképezi.

Ha simán **``'style.css'``**-ként adjuk meg, akkor a letöltött packagek között fogja keresni, és nem találja meg a saját fájlunkat.

Ne felejtsd el lefuttatni az **``npx webpack``** parancsot a **``style.css``** módosítása után!

## **10. lépés**
Gyakoroljunk egy kicsit!

Hozzuk létre ezt a szerkezetet az **``index.html``**-ben.

> index.html
```html
<body>
    <h1 class="display-1 text-center text-success">Teszt</h1>
    <p class="sajat-teszt">Ha működik, akkor ez piros!</p>

    <button id="gomb-kattints">
        Kattints ide!
    </button>

    <div id="gratulalok">
        <p>Gratulálok!</p>
        <p>Nyertél egy IPhone 12 Pro Max telefont!</p>
        <button id="gomb-bezar">
            Bezárás
        </button>
    </div>

</body>
```

Adjunk hozzá egy pár Bootstrap classot:

> index.html
```html
<body>
    <h1 class="display-1 text-center text-success">Teszt</h1>
    <p class="sajat-teszt">Ha működik, akkor ez piros!</p>

    <button id="gomb-kattints" class="btn btn-primary btn-lg">
        Kattints ide!
    </button>

    <div id="gratulalok" class="alert alert-success d-none">
        <p>Gratulálok!</p>
        <p>Nyertél egy IPhone 12 Pro Max telefont!</p>
        <button id="gomb-bezar" class="btn btn-danger">
            Bezárás
        </button>
    </div>

</body>
```

A **``d-none``**  egy Bootstrap class, ami beállítja a **``display``**-t **``none``**-ra állítja az elemen, és ezzel eltünteti azt.

Adjunk hozzá egy kis javascriptet!

> index.js
```js
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

console.log("javascript betöltve!");

let gomb_kattints = document.getElementById("gomb-kattints");
let gratulalok = document.getElementById("gratulalok");
let gomb_bezar = document.getElementById("gomb-bezar");

gomb_kattints.addEventListener("click", function () {
    gratulalok.classList.remove("d-none");
})

gomb_bezar.addEventListener("click", function () {
    gratulalok.classList.add("d-none");
})

```

Az **``index.js``** módosítása után ne felejtsd el lefuttatni az **``npx webpack``** parancsot!

A gombok a **``d-none``** osztályt kapcsolgatják az elemen.

Amikor leveszik a **``d-none``**-t, akkor megjelenik, amikor visszarakják akkor eltűnik.
