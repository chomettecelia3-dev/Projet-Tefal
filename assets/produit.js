/* =====================================================================
   PRODUIT.JS — fait fonctionner le passeport produit
   1. Choisit la fiche selon l'adresse (?m=antiadhesive|ceramique|inox).
   2. Remplit les onglets à partir de assets/fiches.js.
   3. Gère la date d'achat (gardée uniquement sur le téléphone).
   4. Gère les onglets et le comparateur.
   Normalement, vous n'avez pas besoin de modifier ce fichier.
   ===================================================================== */
(function () {
  "use strict";

  var params = new URLSearchParams(window.location.search);
  var modele = params.get("m");
  if (!window.FICHES[modele]) modele = "antiadhesive";   /* fiche par défaut */
  var f = window.FICHES[modele];

  /* Protège le texte avant de l'insérer dans la page */
  function esc(t) {
    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function carte(titre, badge, ton, texte) {
    return '<article class="carte"><div class="ligne-titre"><h3>' + esc(titre) + '</h3>' +
      (badge ? '<span class="badge ' + (ton || "neutre") + '">' + esc(badge) + "</span>" : "") +
      "</div><p>" + esc(texte) + "</p></article>";
  }
  function liste(items) {
    return '<ul class="conseils">' + items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
  }

  /* ---------- 1. En-tête ---------- */
  document.getElementById("nom").textContent = f.nom;
  document.getElementById("reference").textContent = f.reference;
  document.title = "Passeport — " + f.nom + " (maquette)";
  document.querySelectorAll(".modeles a").forEach(function (a) {
    if (a.getAttribute("data-m") === modele) a.classList.add("actif");
  });

  /* ---------- 2. Onglets ---------- */
  document.getElementById("composition").innerHTML =
    f.composition.map(function (c) { return carte(c.titre, c.badge, c.ton, c.texte); }).join("");

  document.getElementById("science").innerHTML =
    '<article class="carte"><h3>Ce que dit la science</h3><div class="deux">' +
      "<div><b>Autorités sanitaires</b>" + esc(f.science.autorites) + "</div>" +
      "<div><b>Points de vigilance</b>" + esc(f.science.vigilance) + "</div></div></article>" +
    carte("Ce que la science ne sait pas encore", "", "", f.science.inconnu) +
    '<article class="carte sources"><h3>Sources</h3><ul>' +
      window.SOURCES.map(function (s) {
        return '<li><a href="' + s.url + '" target="_blank" rel="noopener">' + esc(s.nom) + "</a></li>";
      }).join("") + "</ul></article>";

  document.getElementById("gestes").innerHTML =
    '<article class="carte"><h3>Bien l’utiliser</h3>' + liste(f.gestes) + "</article>" +
    '<article class="carte"><div class="ligne-titre"><h3>Bien cuisiner avec</h3><span class="badge neutre">L’École de la poêle</span></div>' + liste(f.cuisiner) + "</article>" +
    carte("Quand la changer ?", "", "", f.quandChanger);

  document.getElementById("fin").innerHTML =
    f.finDeVie.map(function (c) { return carte(c.titre, c.badge, c.ton, c.texte); }).join("");

  /* ---------- 3. Date d'achat ---------- */
  var champ = document.getElementById("achat");
  var resume = document.getElementById("resume-achat");
  var badgeAge = document.getElementById("badge-age");
  var cle = "tefal-achat-" + modele;

  /* Lecture / écriture sur le téléphone (peut être bloqué en navigation privée) */
  function lire() { try { return localStorage.getItem(cle); } catch (e) { return null; } }
  function ecrire(v) { try { localStorage.setItem(cle, v); } catch (e) {} }

  function afficher(valeur) {
    if (!valeur) return;
    var achat = new Date(valeur + "T12:00:00");
    if (isNaN(achat)) return;
    var maintenant = new Date();
    var mois = (maintenant.getFullYear() - achat.getFullYear()) * 12 + (maintenant.getMonth() - achat.getMonth());
    if (maintenant.getDate() < achat.getDate()) mois--;
    mois = Math.max(0, mois);
    var age = mois < 12 ? mois + " mois" : Math.floor(mois / 12) + " an" + (mois >= 24 ? "s" : "") + (mois % 12 ? " et " + (mois % 12) + " mois" : "");
    var reparable = achat.getFullYear() + 15;

    badgeAge.textContent = "Achetée il y a " + age;
    resume.innerHTML =
      '<span class="infos-achat">' +
        "<div><b>" + achat.toLocaleDateString("fr-FR") + "</b><span>date d’achat</span></div>" +
        "<div><b>" + reparable + "</b><span>réparable jusqu’en (15 ans)</span></div>" +
      "</span>" +
      "<p><b>Quand la changer ?</b> " + esc(f.quandChanger) + "</p>" +
      '<p class="petit">Date gardée uniquement sur ce téléphone.</p>';
  }

  var depart = params.get("achat") || lire();      /* ?achat=AAAA-MM-JJ dans l'adresse, ou date déjà saisie */
  if (depart) { champ.value = depart; ecrire(depart); afficher(depart); }
  champ.addEventListener("change", function () { ecrire(champ.value); afficher(champ.value); });

  /* ---------- 4. Onglets et comparateur ---------- */
  var boutons = document.querySelectorAll(".onglets button");
  boutons.forEach(function (b) {
    b.addEventListener("click", function () {
      boutons.forEach(function (x) {
        var actif = x === b;
        x.setAttribute("aria-selected", actif ? "true" : "false");
        document.getElementById(x.getAttribute("data-onglet")).hidden = !actif;
      });
    });
  });

  var comparer = document.getElementById("comparer");
  var btn = document.getElementById("btn-comparer");
  btn.addEventListener("click", function () {
    comparer.hidden = !comparer.hidden;
    btn.textContent = comparer.hidden ? "Comparer les 3 matériaux →" : "Fermer le comparatif";
    if (!comparer.hidden) comparer.scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
