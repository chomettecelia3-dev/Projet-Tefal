/* =====================================================================
   CONFIG.JS — LE SEUL FICHIER À MODIFIER EN PRIORITÉ
   ---------------------------------------------------------------------
   Ces informations sont reprises automatiquement :
   - dans l'interface (index.html) : en-tête, pied de page ;
   - dans le passeport imprimable (passeport.html) : nom, titre, QR code.

   Règles simples pour ne rien casser :
   - ne modifiez que le texte ENTRE les guillemets "..." ;
   - gardez la virgule à la fin de chaque ligne ;
   - pour une apostrophe, utilisez ’ (apostrophe typographique) ou \'.
   ===================================================================== */

window.CONFIG = {

  /* ① ADRESSE DE L'INTERFACE EN LIGNE — À REMPLACER APRÈS L'HÉBERGEMENT
     Exemple GitHub Pages : "https://votre-pseudo.github.io/dossier-tefal/"
     Exemple Netlify      : "https://dossier-tefal.netlify.app/"
     Le QR code du passeport est recalculé automatiquement à partir de cette adresse. */
  urlInterface: "https://chomettecelia3-dev.github.io/Projet-Tefal/",

  /* ② VOUS */
  prenom: "Célia",
  nom: "Chomette",
  formation: "Chargé·e de communication — CCOM 3",
  ecole: "SUP’DE COM",
  annee: "2026-2027",
  bloc: "Bloc de compétences 1 — Plan de communication 360°",

  /* ③ LE DOSSIER */
  titreDossier: "Tefal — N’attache jamais. Ne cache rien.",
  sousTitre: "Recommandation de communication 360° pour reconquérir la confiance des 20-30 ans",
  dateOral: "jeudi 26 novembre 2026",

  /* ④ PHOTO (facultatif)
     Déposez votre photo dans assets/img/ puis indiquez son nom, ex. "assets/img/photo.jpg".
     Laissez "" pour afficher vos initiales à la place (choix actuel : pas de photo). */
  photo: "",

  /* ⑤ CONTACT (facultatif — laissez "" pour masquer) */
  email: "",
  linkedin: ""
};
