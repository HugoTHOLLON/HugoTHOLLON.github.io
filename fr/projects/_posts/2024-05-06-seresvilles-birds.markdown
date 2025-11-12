---
layout: post
title: "Les oiseaux de Seresville"
date: 2024-05-06
end: 2024-08-03
categories: ["personal-project", "best-project"]
project-type: "Projet Personnel"
image-path: "/assets/images/projects/home_oiseaux_de_seresville.webp"
image-alt: "Page d'accueil du jeu"
tags: ["Godot engine", "GDScript"]
description: |
  J'ai développé un jeu de quiz avec Godot Engine pour une exposition sur les oiseaux. L'objectif est d'identifier l'espèce d'un oiseau à partir d'une photo ou de son chant. J'ai designé et programmé l'entièreté du jeu qui été disponible lors de exposition. Les visiteurs ont pu, à cette occasion, tester leur connaissances des oiseaux de la région.
---

# Le Jeu

Ce projet est un **quiz interactif sur les oiseaux** de Seresville, un hameau situé près de Chartres, en France.  
Le principe est simple : les joueurs doivent reconnaître différentes espèces d’oiseaux à partir de leur **photo** ou de leur **chant**, selon le mode de jeu choisi. Le jeu propose **14 espèces à identifier**, ainsi qu’un **mode enfant** limité aux 5 espèces les plus courantes dans les bois environnants.

Pour que le jeu soit rejouable, **l’ordre des oiseaux** ainsi que **la position des bonnes réponses** changent à chaque partie.  
En plus du quiz, un **mode "liste des oiseaux"** permet d’explorer librement les photos et chants des oiseaux.

{% include place-figure.html src="/assets/images/projects/gameplay_oiseaux_de_seresville.webp" alt="Seresville's birds gameplay" figure-nb="1" figure-text="Gameplay – mode photo" %}

{% include place-figure.html src="/assets/images/projects/bird_list_seresville_birds.webp" alt="Seresville's birds bird list" figure-nb="2" figure-text="Mode liste des oiseaux" %}

# Processus de Développement

Il s’agit de mon **tout premier projet personnel**, et la première fois que j'utilisait le **moteur de jeu Godot Engine**. Ce fut aussi ma première expérience en **conception UI/UX** (interface et expérience utilisateur).

J’ai travaillé de manière autonome sur tout le projet, de la logique du jeu à son interface.  
Mes travaux les plus importants sur ce projet sont les suivants :

- Conception et implémentation de l’interface utilisateur (boutons, menus, navigation).
- Création d’une **base de données légère** sous forme de **fichier texte**, gérée en **GDScript** (le langage de script de Godot), pour organiser les images et les fichiers audio.
- Mise en place d’un **système de gestion de l'audio** permettant de lire, mettre en pause et manipuler les chants d’oiseaux de façon fluide.
- Ajout d’aléatoire dans les questions et position des réponses, afin d’assurer la rejouabilité.

Pour le design de l’interface, j’ai combiné mes propres éléments avec les [assets graphiques "Flower UI" de Wenrexa](https://wenrexa.itch.io/assets-ui-flowers){:target="\_blank"} (utilisées pour le fond et les éléments décoratifs).
Les **photographies d’oiseaux** ont été gracieusement fournies par **Michel Brugière**, et les **enregistrements sonores** par **Jacques Ménétrier**.

{% include place-figure.html src="/assets/images/projects/parameters_seresvilles_birds.webp" alt="Seresville's birds parameters" figure-nb="3" figure-text="Menu des paramètres avec options audio" %}

# Présentation & Impact

Le jeu a été présenté lors d’une **exposition à Mainvilliers**, organisée en partenariat avec l’[Association Eure-et-Loir Nature](https://www.eln28.org/){:target="\_blank"}. Il a été **testé par des enfants comme par des adultes**, permettant à chacun de découvrir les oiseaux locaux tout en testant leurs connaissances de manière ludique et interactive.

# Démo

Le jeu est actuellement disponible pour **Windows** et **navigateur Web**.
Vous pouvez essayer la version en ligne [ici](/projects/demos/les-oiseaux-de-seresville/game.html){:target="\_blank"}.
