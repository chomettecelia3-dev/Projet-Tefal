/* =====================================================================
   APP.JS — petits automatismes de l'interface (aucune bibliothèque)
   1. Recopie les informations de config.js dans la page.
   2. Affiche la photo, ou l'emplacement vide.
   3. Construit le menu à partir des sections.
   4. Met en évidence la section en cours de lecture.
   Normalement, vous n'avez pas besoin de modifier ce fichier.
   ===================================================================== */
(function () {
  "use strict";
  var config = window.CONFIG || {};

  /* 1. Remplit chaque élément data-config="cle" avec la valeur correspondante */
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var cle = el.getAttribute("data-config");
    if (config[cle]) el.textContent = config[cle];
  });

  /* Titre de l'onglet du navigateur */
  if (config.titreDossier) {
    document.title = config.titreDossier + " — " + (config.prenom || "") + " " + (config.nom || "");
  }

  /* 2. Photo : affichée seulement si un fichier est indiqué dans config.js.
        Sinon, on affiche les initiales (ex. « CC »). */
  var photo = document.getElementById("photo");
  var vide = document.getElementById("photo-vide");
  if (vide) vide.textContent = ((config.prenom || " ")[0] + (config.nom || " ")[0]).toUpperCase();
  if (config.photo && photo) {
    photo.src = config.photo;
    photo.hidden = false;
    if (vide) vide.hidden = true;
    photo.onerror = function () { photo.hidden = true; if (vide) vide.hidden = false; };
  }

  /* Contact : liens affichés seulement s'ils sont renseignés */
  var contact = document.getElementById("contact");
  if (contact) {
    var liens = [];
    if (config.email) liens.push('<a href="mailto:' + config.email + '">' + config.email + "</a>");
    if (config.linkedin) liens.push('<a href="' + config.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>');
    contact.innerHTML = liens.join(" · ");
  }

  /* 3. Menu : un lien par <section id="..." data-titre="..."> */
  var menu = document.getElementById("menu");
  var sections = document.querySelectorAll("section[id][data-titre]");
  sections.forEach(function (s) {
    var a = document.createElement("a");
    a.href = "#" + s.id;
    a.textContent = s.getAttribute("data-titre");
    menu.appendChild(a);
  });

  /* 4. Section active : le lien du menu correspondant passe en rouge
        et défile pour rester visible sur petit écran */
  if ("IntersectionObserver" in window) {
    var liensMenu = menu.querySelectorAll("a");
    var observateur = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (entree) {
        if (!entree.isIntersecting) return;
        liensMenu.forEach(function (a) {
          var actif = a.getAttribute("href") === "#" + entree.target.id;
          a.classList.toggle("actif", actif);
          /* fait défiler le menu horizontalement (et lui seul) pour centrer le lien actif */
          if (actif) menu.scrollTo({ left: a.offsetLeft - menu.clientWidth / 2 + a.offsetWidth / 2, behavior: "smooth" });
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { observateur.observe(s); });
  }
})();
