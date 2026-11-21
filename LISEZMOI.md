# Dossier en ligne + passeport à QR code — mode d’emploi

## Ce que contient le dossier

| Fichier | Rôle | À modifier ? |
| --- | --- | --- |
| `config.js` | Vos informations (nom, formation, photo) et **l’adresse du site** | **Oui, en premier** |
| `index.html` | L’interface que voit le jury après avoir scanné le QR code | Oui, pour le contenu |
| `passeport.html` | Le passeport imprimable : étiquette pour la poêle, carte A6, carte bancaire | Rarement |
| `passeport-A4.pdf` | Le passeport déjà prêt à imprimer, mais avec l’adresse d’exemple | À refaire après l’hébergement |
| `qr/` | Le QR code en PNG et SVG, avec l’adresse d’exemple | À refaire après l’hébergement |
| `assets/` | Style, script, images, générateur de QR | Non (sauf pour changer une image) |

Tout fonctionne sans installation ni connexion à un service extérieur : aucune police ni bibliothèque n’est téléchargée.

## Étape 1 : héberger l’interface gratuitement

### Option A : GitHub Pages (recommandée, adresse permanente)

1. Créez un compte gratuit sur github.com.
2. Cliquez sur **New repository**. Nommez-le par exemple `dossier-tefal`, cochez **Public**, puis **Create repository**.
3. Cliquez sur **uploading an existing file**. Glissez **le contenu** du dossier (pas le dossier lui-même) : `index.html`, `config.js`, `passeport.html`, `assets`, `qr`… Puis cliquez sur **Commit changes**.
4. Allez dans **Settings → Pages**. Dans « Branch », choisissez **main** et **/(root)**, puis **Save**.
5. Après une à deux minutes, votre adresse s’affiche, par exemple : `https://votre-pseudo.github.io/dossier-tefal/`.

### Option B : Netlify Drop (le plus rapide)

1. Allez sur app.netlify.com/drop et glissez le dossier entier.
2. **Créez un compte gratuit et réclamez le site (« claim »).** Sans cela, le site reste protégé par un mot de passe temporaire, puis il est supprimé.
3. Netlify vous donne une adresse du type `https://nom-au-hasard.netlify.app`, que vous pouvez renommer dans les réglages.

### Et un dossier partagé (Google Drive, OneDrive, ENT) ?

Ces services téléchargent la page au lieu de l’afficher, et le jury verrait du code. Ils ne conviennent donc pas pour le QR code. Ils restent utiles pour garder une copie de sauvegarde.

## Étape 2 : mettre la bonne adresse dans le QR code

1. Ouvrez `config.js` avec un éditeur de texte (Bloc-notes, TextEdit, ou directement sur GitHub avec l’icône crayon).
2. Remplacez `https://VOTRE-PSEUDO.github.io/dossier-tefal/` par votre vraie adresse. Gardez les guillemets.
3. Enregistrez et renvoyez le fichier sur GitHub (ou glissez à nouveau le dossier sur Netlify).
4. Ouvrez `passeport.html` dans votre navigateur. Le QR code est recalculé tout seul, et le bandeau jaune d’alerte disparaît.
5. Cliquez sur **Imprimer**, en couleur et à 100 % (« taille réelle »). Les boutons **Télécharger le QR** vous donnent le QR seul, en PNG ou en SVG, à la nouvelle adresse.

**Avant l’oral :** scannez le QR imprimé avec deux téléphones différents, et testez aussi en 4G (sans le wifi de l’école).

## Étape 3 : modifier le contenu sans compétences techniques

- **Votre nom, votre formation, la date de l’oral, votre photo :** dans `config.js` uniquement. Pour la photo, déposez `photo.jpg` dans `assets/img/` et écrivez `photo: "assets/img/photo.jpg",`.
- **Un texte du dossier :** dans `index.html`, cherchez la phrase (Ctrl+F ou Cmd+F) et remplacez-la. Ne touchez pas aux balises entre `< >`.
- **Les emplacements à compléter** sont entre crochets `[ … ]` et surlignés en jaune sur la page. Remplacez le texte, puis supprimez `class="a-completer"` pour retirer le surlignage.
- **Une image :** remplacez le fichier dans `assets/img/` en gardant exactement le même nom.
- **Une nouvelle section :** copiez un bloc `<section id="…" data-titre="…">` … `</section>` et changez `id` et `data-titre`. Le menu s’ajoute tout seul.

Après chaque modification, renvoyez le fichier modifié sur GitHub (ou glissez à nouveau le dossier sur Netlify). **Le QR code ne change pas tant que l’adresse reste la même** : un passeport déjà imprimé reste valable.

## État actuel (21 novembre 2026)

- **Adresse configurée :** `https://chomettecelia3-dev.github.io/Projet-Tefal/`. Le QR code, `passeport-A4.pdf` et le dossier `qr/` pointent déjà vers cette adresse.
- **Date de l’oral :** jeudi 26 novembre 2026.
- **Compétences :** les n° 4 et 8 reprennent les intitulés cités dans le dossier (annexe P). Les autres sont décrites comme des savoir-faire, sans numéro officiel.
- **Pas de photo ni de contact :** les initiales « CC » s’affichent à la place de la photo. La page demande aux moteurs de recherche de ne pas la référencer.

### Mise en ligne sur le dépôt Projet-Tefal

1. Décompressez `dossier-oral.zip` sur votre ordinateur, puis ouvrez le dossier `dossier-oral`.
2. Sur github.com/chomettecelia3-dev/Projet-Tefal, cliquez sur **uploading an existing file** (ou **Add file → Upload files**).
3. Sélectionnez **tout ce qu’il y a dans** `dossier-oral` (`index.html`, `config.js`, `passeport.html`, `assets`, `qr`…) et glissez-le dans la page. `index.html` doit se retrouver à la racine du dépôt, pas dans un sous-dossier.
4. Cliquez sur **Commit changes**.
5. Allez dans **Settings → Pages**. Dans « Build and deployment », choisissez **Deploy from a branch**, puis la branche **main** et le dossier **/(root)**, et cliquez sur **Save**.
6. Après une à deux minutes, ouvrez `https://chomettecelia3-dev.github.io/Projet-Tefal/` : le dossier doit s’afficher. Scannez ensuite le passeport imprimé avec deux téléphones, dont un en 4G.

## Crédits

Le QR code est généré par la bibliothèque libre « QR Code Generator » de Kazuhiko Arase (licence MIT), incluse dans `assets/qrcode.js`. « QR Code » est une marque déposée de DENSO WAVE.
