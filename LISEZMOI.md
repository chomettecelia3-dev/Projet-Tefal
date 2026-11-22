# Dossier en ligne + passeport à QR code — mode d’emploi

## Ce que contient le dossier

| Fichier | Rôle | À modifier ? |
| --- | --- | --- |
| `index.html` | **Le passeport produit** « Scanne ta poêle » : la page qui s’ouvre quand on scanne le QR au dos de la poêle | Non |
| `assets/fiches.js` | **Les textes des trois fiches** (antiadhésive, céramique, inox) : composition, science, bons gestes, fin de vie | **Oui, pour le contenu** |
| `passeport.html` | Les étiquettes à imprimer : une par modèle + la collerette pour le stock | Non |
| `passeport-A4.pdf` | Les mêmes étiquettes, prêtes à imprimer | — |
| `qr/` | Les QR codes seuls, en PNG et SVG, un par modèle | — |
| `config.js` | L’adresse du site (`urlInterface`) utilisée par les QR codes | Seulement si l’adresse change |
| `dossier.html` | L’ancienne interface de présentation de votre dossier (n’est plus liée au QR) | Facultatif, vous pouvez la supprimer |

**Comment ça marche :** chaque modèle a sa propre adresse.
- Antiadhésive : `https://chomettecelia3-dev.github.io/Projet-Tefal/`
- Céramique : `https://chomettecelia3-dev.github.io/Projet-Tefal/?m=ceramique`
- Inox : `https://chomettecelia3-dev.github.io/Projet-Tefal/?m=inox`

La date d’achat est saisie par le client et gardée uniquement sur son téléphone. Pour la pré-remplir (par exemple avec un QR imprimé sur le ticket de caisse), ajoutez `&achat=2027-02-02` à l’adresse (ou `?achat=2027-02-02` pour l’antiadhésive).

Tout fonctionne sans installation ni service extérieur. Un bandeau jaune indique en permanence qu’il s’agit d’une maquette étudiante non officielle : gardez-le.

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

- **Les textes d’une fiche** (composition, science, conseils, fin de vie) : ouvrez `assets/fiches.js` (sur GitHub, cliquez sur le fichier puis sur l’icône crayon). Chaque modèle a son bloc : `antiadhesive`, `ceramique`, `inox`. Modifiez uniquement le texte entre guillemets, puis cliquez sur **Commit changes**.
- **Les emplacements entre crochets** `[ … ]` (taux d’aluminium recyclé, lieu de fabrication, résultats d’analyse…) sont des données que seule la marque peut fournir. Laissez-les tels quels pour la maquette : ils montrent au jury ce que Tefal devra publier.
- **Le comparatif « Je prends laquelle ? »** se modifie directement dans `index.html` (cherchez « Je prends laquelle »).
- **Les sources** de l’onglet Science sont en bas de `assets/fiches.js`.

**Le QR code ne change pas tant que l’adresse reste la même** : des étiquettes déjà imprimées restent valables après chaque modification.

## Mettre à jour le site existant

Les nouveaux fichiers remplacent les anciens.

### Mise en ligne sur le dépôt Projet-Tefal

1. Décompressez `dossier-oral.zip` sur votre ordinateur, puis ouvrez le dossier `dossier-oral`.
2. Ouvrez https://github.com/chomettecelia3-dev/Projet-Tefal/upload/main (connecté·e à votre compte).
3. Sélectionnez **tout ce qu’il y a dans** `dossier-oral` (`index.html`, `config.js`, `passeport.html`, `assets`, `qr`…) et glissez-le dans la page. `index.html` doit se retrouver à la racine du dépôt, pas dans un sous-dossier.
4. Cliquez sur **Commit changes**.
5. Allez dans **Settings → Pages**. Dans « Build and deployment », choisissez **Deploy from a branch**, puis la branche **main** et le dossier **/(root)**, et cliquez sur **Save**.
6. Après une à deux minutes, ouvrez `https://chomettecelia3-dev.github.io/Projet-Tefal/` : le passeport produit doit s’afficher (rechargez la page si l’ancienne version apparaît encore). Scannez ensuite le passeport imprimé avec deux téléphones, dont un en 4G.

## Crédits

Le QR code est généré par la bibliothèque libre « QR Code Generator » de Kazuhiko Arase (licence MIT), incluse dans `assets/qrcode.js`. « QR Code » est une marque déposée de DENSO WAVE.
