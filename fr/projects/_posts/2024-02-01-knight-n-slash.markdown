---
layout: post
title: "Knight 'n Slash"
date: 2024-02-01
categories: ["personal-project"]
project-type: "Projet Personnel"
image-path: "/assets/images/projects/KnS_SirGrognon.png"
image-alt: "Knight 'n slash character"
tags: ["Godot engine", "GDScript", "Game Design"]
description: |
  Je co-développe un jeu d’action-RPG en vue du dessus en 3D avec une petite équipe d’amis sur le moteur Godot Engine. J’ai rédigé le Game Design Document et mis en place le système d’effets de statut (Status Effects) du jeu, permettant de gérer dynamiquement les bonus, malus et autres altérations des personnages.
---

L'artwork du chevalier (Sir Grognon) a été réalisé par Sacha Mollet. Vous pouvez trouver plus de ses réalisations [ici](https://www.artstation.com/sachamollet){:target="\_blank"}.

# Le Jeu

_Knight ’n Slash_ est un **jeu d’action-RPG multijoueur en 3D, vu de dessus**, développé avec le **moteur Godot Engine**. Les joueurs y incarnent **cinq héros**, chacun doté de compétences uniques.

Le **Maître du Mal** menace de conquérir le monde, et les héros doivent entreprendre un **voyage épique à travers le continent** pour l’en empêcher. En chemin, ils affronteront de nombreux ennemis et croiseront des alliés prêts à leur prêter main-forte... moyennant récompense.

Pendant la **journée**, les héros combattent des hordes de monstres dans des environnements variés. La **nuit**, ils se reposent, se soignent et s’entraînent afin d’améliorer leurs compétences avant de poursuivre leur quête.

# Processus de Développement

La création de ce jeu demande du temps : notre équipe doit jongler entre ce projet, les études et leur vie personnelle. La majorité des avancées se font donc pendant les vacances, lorsque nous pouvons nous y consacrer pleinement.

# Ma Contribution à ce Jour

## Document de Conception du Jeu (Game Design Document)

J’ai rédigé le **Game Design Document (GDD)**, en me concentrant principalement sur la définition de la **boucle de gameplay principale** et sur la structure générale du jeu.

En résumé :

- Durant la **journée**, les joueurs explorent de vastes zones ouvertes peuplées de monstres, de quêtes secondaires et d’un donjon caché.
- La **nuit**, ils montent leur campement pour gérer leurs personnages : améliorer leurs statistiques, gérer de l’équipement, monter en niveau et apprendre de nouvelles compétences.
- Ce cycle jour-nuit se répète sur un total de **100 niveaux**, avec un **boss** et un **village** tous les 10 niveaux. Les villages offrent de nouvelles interactions et des opportunités d’amélioration.
- Chaque région propose un **environnement unique** (forêt, désert, montagne, etc.) accompagné de **mécaniques spécifiques** liées à son terrain.

## Système de Statistiques

J’ai mis en place un **système de statistiques flexible** qui définit des attributs tels que la santé, les dégâts et la vitesse.
Ce système, conçu de manière **modulaire et extensible**, permet d’ajouter facilement de nouveaux paramètres et de faire évoluer les statistiques en temps réel pour refléter les effets de bonus, malus ou conditions environnementales.

## Système d’Effets de Statut

J’ai conçu et implémenté le **système d’effets de statut**, qui constitue la base de tous les effets du jeu : amélioration de statistiques, invulnérabilité, résistances ou dégâts progressifs (comme un poison).

Chaque effet peut :

- Durer pendant une période définie ou indéfiniment.
- Être appliqué à plusieurs entités (personnages ou ennemis).
- Être créé directement dans l’éditeur Godot via les **Resources** (ressources internes), ce qui permet d’ajouter de nouveaux effets sans modifier le code.

Chaque effet de statut appartient à l’une des catégories suivantes, ce qui facilite leur ciblage, leur gestion et leur filtrage en cours de jeu :

- **BUFF :** Renforce les attributs d’une entité (ex. : bonus de dégâts, invincibilité).
- **DEBUFF :** Affaiblit une entité (ex. : baisse de dégâts, empoisonnement).
- **SKILL :** Appliqué par une compétence d’un personnage ou d’un boss (ex. : _la provocation de Sir Grognon_, qui réduit les dégâts subis mais abaisse la vitesse à 0).
- **PENALTY :** Effet négatif persistant, ne pouvant être supprimé durant la journée sauf à l’aide d’objets spécifiques (ex. : malédiction, épuisement).
- **ENVIRONMENT :** Causé par le terrain ou l’environnement (ex. : ralentissement dans la neige ou la boue, brûlure sur la lave).

Ce système constitue une **base solide** et servira de socle aux futures mécaniques de compétences et de combat.
