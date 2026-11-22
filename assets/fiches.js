/* =====================================================================
   FICHES.JS — LE CONTENU DES PASSEPORTS PRODUIT (un par matériau)
   ---------------------------------------------------------------------
   C'est ici que vous modifiez les textes affichés quand on scanne la poêle.
   Trois fiches : "antiadhesive", "ceramique", "inox".
   L'adresse choisit la fiche : …/Projet-Tefal/?m=ceramique
   (sans ?m=… c'est la fiche "antiadhesive" qui s'affiche).

   Règles simples :
   - modifiez seulement le texte entre guillemets "…" ;
   - gardez les virgules en fin de ligne ;
   - « badge » = petite pastille colorée ; « ton » : "rouge", "vert" ou "neutre".

   ATTENTION : maquette pédagogique. Toute donnée chiffrée réelle
   (composition exacte, taux de recyclé, résultats d'analyse) doit être
   fournie et validée par Tefal (juridique, R&D, réglementaire).
   ===================================================================== */

window.FICHES = {

  /* ------------------------------------------------------------------ */
  antiadhesive: {
    nom: "Poêle antiadhésive 28 cm",
    reference: "Réf. de démonstration · fabriquée à Rumilly (74)",

    composition: [
      { titre: "Revêtement", badge: "Contient du PTFE · famille PFAS", ton: "rouge",
        texte: "Le PTFE est un polymère fluoré. Il fait partie de la famille des PFAS visée par le projet de restriction européen en cours d’examen." },
      { titre: "Corps", badge: "Aluminium", ton: "neutre",
        texte: "Corps en aluminium. Part d’aluminium recyclé : [donnée vérifiée à afficher]." },
      { titre: "Fond", badge: "Tous feux", ton: "neutre",
        texte: "[Compatibilité des feux à confirmer pour ce modèle : gaz, électrique, vitrocéramique, induction.]" }
    ],

    science: {
      autorites: "Pas de risque identifié en usage normal (EFSA, BfR, FDA). Le PTFE se dégrade au-delà d’environ 360 °C : c’est pour cela qu’on ne chauffe jamais la poêle à vide à feu vif.",
      vigilance: "La fabrication et la fin de vie restent débattues. Les particules libérées par un revêtement rayé font l’objet d’études en cours. Des ONG critiquent l’usage des PFAS.",
      inconnu: "Les effets à long terme d’une exposition faible et répétée aux particules de revêtement ne sont pas encore établis."
    },

    gestes: [
      "Feu doux à moyen : l’antiadhésif n’a pas besoin de feu vif.",
      "Ne la chauffez jamais à vide à feu vif.",
      "Spatule en bois ou en silicone, jamais d’ustensile en métal.",
      "Laissez-la refroidir avant de la laver, avec une éponge non abrasive."
    ],
    cuisiner: [
      "Idéale pour les œufs, les crêpes, le poisson et les cuissons délicates.",
      "Un filet d’huile suffit : inutile d’en mettre beaucoup.",
      "Pour une belle coloration, préchauffez 1 à 2 minutes à feu moyen avec la matière grasse."
    ],
    quandChanger: "Dès que le revêtement est rayé ou s’écaille.",
    finDeVie: [
      { titre: "Rayée ?", badge: "À rapporter", ton: "rouge",
        texte: "Rapportez-la en magasin partenaire, toutes marques acceptées : elle sera recyclée. Ne la jetez pas avec les ordures ménagères." },
      { titre: "Une poignée cassée ?", badge: "Réparable", ton: "vert",
        texte: "Tefal s’engage sur la réparabilité pendant 15 ans : pièces détachées à prix juste, auprès d’un réparateur agréé." }
    ]
  },

  /* ------------------------------------------------------------------ */
  ceramique: {
    nom: "Poêle céramique 28 cm",
    reference: "Réf. de démonstration · [lieu de fabrication à afficher]",

    composition: [
      { titre: "Revêtement", badge: "Sans PTFE", ton: "vert",
        texte: "Revêtement céramique, sans PTFE. Des tests consommateurs ont relevé des traces de PFAS dans certaines poêles céramiques du marché : résultats d’analyse de ce modèle [à afficher]." },
      { titre: "Corps", badge: "Alu recyclé", ton: "vert",
        texte: "Corps en aluminium recyclé (gamme Renew). Part exacte : [donnée vérifiée à afficher]." },
      { titre: "Fond", badge: "Tous feux", ton: "neutre",
        texte: "[Compatibilité des feux à confirmer pour ce modèle.]" }
    ],

    science: {
      autorites: "Pas de PTFE dans ce revêtement. [Avis des autorités sanitaires sur les revêtements céramiques à afficher, avec leurs sources.]",
      vigilance: "Les résultats des tests varient d’un produit à l’autre : seule une analyse publiée par modèle permet de savoir ce qu’il contient.",
      inconnu: "Le recul sur l’usure à long terme des revêtements céramiques reste plus court que pour l’antiadhésif classique."
    },

    gestes: [
      "Feu doux à moyen, toujours avec un peu de matière grasse.",
      "Évitez les chocs thermiques : jamais d’eau froide sur une poêle chaude.",
      "Spatule en bois ou en silicone.",
      "Lavage à la main avec une éponge douce : le revêtement dure plus longtemps."
    ],
    cuisiner: [
      "Parfaite pour les légumes, les viandes blanches et les cuissons du quotidien.",
      "Préchauffez doucement avec un peu d’huile avant d’ajouter les aliments.",
      "Si ça commence à accrocher, baissez le feu : la céramique n’aime pas la surchauffe."
    ],
    quandChanger: "Quand le revêtement perd son antiadhérence ou s’abîme.",
    finDeVie: [
      { titre: "Usée ?", badge: "À rapporter", ton: "rouge",
        texte: "Rapportez-la en magasin partenaire, toutes marques acceptées : elle sera recyclée." },
      { titre: "Une pièce cassée ?", badge: "Réparable", ton: "vert",
        texte: "Réparabilité 15 ans : pièces détachées à prix juste, auprès d’un réparateur agréé." }
    ]
  },

  /* ------------------------------------------------------------------ */
  inox: {
    nom: "Poêle inox 28 cm",
    reference: "Réf. de démonstration · [lieu de fabrication à afficher]",

    composition: [
      { titre: "Matériau", badge: "Sans revêtement", ton: "vert",
        texte: "Acier inoxydable, sans revêtement : pas de PTFE ni de PFAS ajoutés." },
      { titre: "Fond", badge: "Induction", ton: "neutre",
        texte: "[Composition du fond et compatibilité des feux à confirmer pour ce modèle.]" }
    ],

    science: {
      autorites: "Matériau éprouvé, conseillé par les pouvoirs publics avec la fonte.",
      vigilance: "L’inox demande un peu de technique : les aliments accrochent si la poêle n’est pas assez chaude.",
      inconnu: "Rien de particulier à signaler : c’est l’un des matériaux les mieux connus en cuisine."
    },

    gestes: [
      "Préchauffez bien la poêle avant d’ajouter la matière grasse.",
      "Le test de la goutte d’eau : si les gouttes perlent et roulent, la poêle est prête.",
      "Traces blanches ou irisées : un peu de vinaigre blanc suffit.",
      "Lave-vaisselle possible selon le modèle (vérifiez la notice)."
    ],
    cuisiner: [
      "Idéale pour saisir, dorer, faire des sucs et des sauces.",
      "Ton œuf colle ? Normal : ta poêle n’est pas assez chaude. Refais le test de la goutte d’eau.",
      "Laissez l’aliment se décoller tout seul avant de le retourner."
    ],
    quandChanger: "Rarement : bien entretenue, elle se garde des années.",
    finDeVie: [
      { titre: "Plus utilisée ?", badge: "À rapporter", ton: "neutre",
        texte: "Rapportez-la en magasin partenaire : le métal sera recyclé." },
      { titre: "Une poignée desserrée ?", badge: "Réparable", ton: "vert",
        texte: "Réparabilité 15 ans : pièces détachées à prix juste, auprès d’un réparateur agréé." }
    ]
  }
};

/* Sources affichées dans l'onglet « Science » (pages d'accueil officielles) */
window.SOURCES = [
  { nom: "EFSA — Autorité européenne de sécurité des aliments", url: "https://www.efsa.europa.eu" },
  { nom: "BfR — Institut fédéral allemand d’évaluation des risques", url: "https://www.bfr.bund.de" },
  { nom: "ECHA — Agence européenne des produits chimiques (restriction PFAS)", url: "https://echa.europa.eu" },
  { nom: "ANSES — Agence nationale de sécurité sanitaire", url: "https://www.anses.fr" },
  { nom: "UFC-Que Choisir — tests de poêles", url: "https://www.quechoisir.org" }
];
