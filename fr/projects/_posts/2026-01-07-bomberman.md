---
layout: post
title: "Bomberman"
date: 2026-01-07
end: 2026-01-25
categories: ["iut-project"]
project-type: "projet IUT"
image-path: "/assets/images/projects/bomberman/home_bomberman.webp"
image-alt: "Game home page"
tags: ["Godot engine", "GDScript", "Kanban"]
description: |
  J’ai conçu un jeu de Bomberman à partir de spécifications fonctionnelles (user stories) en intégrant des mécaniques de bombes, des éléments destructibles, un système de bonus, une IA pour les ennemis, plusieurs niveaux, ainsi qu’un mode multijoueur local.
---

# Contexte

Ce projet a été réalisé sur trois semaines dans le cadre d’un module de "programmation multimédia" à l'IUT consacré à la découverte du moteur de jeu Godot Engine et au développement de jeux vidéo.

Ce projet était un travail de groupe à 4. À partir d’un ensemble de user stories décrivant les fonctionnalités et les mécaniques attendues nous avons développé le jeu. Plutôt que de suivre un guide détaillé, nous avons dû transformer ces besoins en solutions techniques concrètes ce qui nous a laissé une grande liberté créative.

Pour gérer efficacement la charge de travail, nous avons organisé le projet à l’aide d’un tableau Kanban. Chaque user story passait par différentes étapes (TODO, EN COURS, TERMINÉ), ce qui nous a permis de répartir les tâches, d’éviter les conflits et de maintenir une progression constante tout au long du développement.

# Le jeu

Le projet est un jeu d’action inspiré de Bomberman. Le joueur incarne un personnage qui évolue dans des niveaux cadrillés composés de blocs destructibles, d’ennemis et de bonus cachés.

Le principe du gameplay principal repose sur le placement stratégique de bombes pour détruire les obstacles et éliminer les ennemis, tout en évitant les explosions et le contact avec les ennemis. Les déflagrations se propagent en ligne droite, créant à la fois des opportunités tactiques et des situations à risque. Certains blocs détruits révèlent des bonus qui améliorent les capacités du joueur, comme la portée des explosions ou le nombre de bombes posables.

Le jeu comprend deux niveaux ainsi qu’un mode multijoueur local en écran splitté.

{% include place-figure.html src="/assets/images/projects/bomberman/level1_bomberman.webp" alt="Gameplay bomberman" figure-nb="1" figure-text="Gameplay sur le niveau 1" %}

{% include place-figure.html src="/assets/images/projects/bomberman/level2_multi_bomberman.webp" alt="Multijoueur écran splitté" figure-nb="2" figure-text="L'écran en mode multijoueur" %}

# Mes contributions

J'ai développé le personnage bomberman et d’une grande partie des systèmes d’interaction principaux. Mon travail s’est concentré sur la logique de gameplay, les interactions entre entités et l’intégration des différents systèmes.

Mes principales contributions :

- Implémentation du personnage jouable et de ses mécaniques principales (ex : movement, placement de bombes...).
- Développement des interactions entre entités, notamment :
  - le placement des bombes et le comportement des explosions.
  - la gestion des dégâts entre le joueur, les ennemis, les bombes et les murs destructibles.
  - les règles de collision et d’interaction entre les éléments de jeu.

- Conception et implémentation d’une partie des interactions entre l'environnement et les entités.
- Contribution au système de bonus
- Refactorisation de la création des niveaux afin de simplifier la construction des cartes, d'éviter les copier-coller infernaux qui amènent à des bugs et de fluidifier le processus général.
- Contribution à l’IA et le déplacement des ennemis.
- Participation au polissage de plusieurs systèmes de gameplay.

Mon rôle visait à garantir la fiabilité des interactions entre les différents éléments du jeu et leur extensibilité, afin de faciliter des évolutions futures sans avoir à multiplier les corrections de bugs.

{% include place-figure.html src="/assets/images/projects/bomberman/level2_bonus_pickup_bomberman.webp" alt="Effet ramassage bonus" figure-nb="3" figure-text="Effet lors du ramassage d'un bonus (réalisé par moi)" %}

# Demo

Le jeu est jouable en anglais sur [itch.io ici](https://hugothollon.itch.io/bomberman?secret=bQlxeKk8rU9e9VjkXvqbHFDRn00){:target="\_blank"}.  
**Avant de jouer :** le jeu va se figer pendant quelques secondes lorsque la première bombe que vous posez explosera. Ne vous inquiétez, c'est normal : votre navigateur est en train de charger les shaders et particules sur votre processeur. Il ne le fait pas au démarrage car il n'en a pas besoin avant.  
Gardez aussi à l'esprit que le jeu en lui même pourra prendre du temps à charger en fonction de la qualité de votre connexion.

# Crédits

**Mon groupe**:

- Raphaël Lamothe: [LinkedIn](https://www.linkedin.com/in/rapha%C3%ABl-lamothe/){:target="\_blank"}
- Nicolas Ho: [LinkedIn](https://www.linkedin.com/in/nicodeh/){:target="\_blank"}
- Naria Savary: [GitHub](https://github.com/NariaReynhard){:target="\_blank"}

**Les assets**:

- Bomberman (skin et animations) : [KayKit - Character Animations](https://kaylousberg.itch.io/kaykit-character-animations){:target="\_blank"}
- Les blocs et ennemis : [Kenney - Platformer Kit](https://kenney.nl/assets/platformer-kit){:target="\_blank"}
- Effets sonores : [SubspaceAudio - 512 Sound Effects (8-bit style)](https://opengameart.org/content/512-sound-effects-8-bit-style){:target="\_blank"}
- Musiques : [SubspaceAudio - 5 Chiptunes (Action)](https://opengameart.org/content/5-chiptunes-action){:target="\_blank"}
