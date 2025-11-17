---
layout: post
title: "Site d'e-commerce pour BuildMyPC"
date: 2024-11-04
end: 2025-01-21
categories: iut-project best-project
project-type: "Projet IUT"
image-path: "/assets/images/projects/home_page_buildMyPC.webp"
image-alt: "Page d'accueil du site"
tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Figma", "Scrum", "UML"]
description: "J’ai développé un site e-commerce pour une entreprise fictive de fabrication de PC, avec un back-end en PHP/MySQL et un front-end en HTML/CSS/JS. Le site intègre l’authentification, la recherche de produits, le panier, une simulation de paiement et un tableau de bord administrateur. En tant que Scrum Master, j’ai encadré une équipe de 5 personnes."
---

# Contexte

Ce site web a été développé dans le cadre d’un **projet noté sur 3 mois** à l’IUT.  
Des groupes de **4 à 5 étudiants** devaient d’abord créer une entreprise fictive nécessitant une solution informatique (site de vente en ligne), puis rédiger un **appel d’offres**.
Chaque groupe choisissait ensuite un autre groupe pour réaliser cet appel d’offres.

Les exigences techniques du projet étaient les suivantes :

- **PHP (sans framework)**
- **HTML & CSS** (JavaScript facultatif, non noté)
- Possibilité d'utiliser un framework CSS (comme Bootstrap), **notre groupe a choisi de ne pas le faire**.

Notre groupe a été sélectionné par **BuildMyPC**, une entreprise fictive spécialisée dans la vente d'ordinateurs pré-montés et de composants informatiques qui souhaitait étendre son activité à la vente en ligne.

# Site E-Commerce

Le site propose à la vente des **ordinateurs de bureau prémontés** (gaming et bureautique) ainsi que des **composants informatiques**.  
Il intègre les fonctionnalités suivantes :

- **Authentification :** création d'un compte client et système de connexion.
- **Gestion du compte :** modification des informations personnelles (email, mot de passe, adresse de livraison, moyen de paiement), consultation de l’historique des commandes, de la navigation et du programme de fidélité. Voir [figure 9](#fig9).
- **Catalogue de produits :** recherche de produits par menu ou avec la barre de recherche. Possibilité de filter par catégorie, marque, prix ou promotion. Il est aussi possible de trier les produits par nom, prix, popularité ou pertinence. Voir [figure 6](#fig6).
- **Fiche produit :** affichage détaillé d'un produit avec son prix, sa catégorie, sa disponibilité, sa description, etc. Voir [figure 7](#fig7).
- **Système d’avis :** possibilité pour les clients de laisser un commentaire et une note sur les produits achetés. Les employés peuvent y répondre. Voir [figures 7-8](#fig7).
- **Suggestions de produits :** affichage de produits similaires ou qui pourraient interesser l'utilisateur sur la page détaillant un produit. Voir [figure 8](#fig8).
- **Panier d’achat :** ajout, suppression et mise à jour des produits sélectionnés. Voir [figure 10](#fig10).
- **Système de commande :** paiement simulé (aucune transaction réelle). Chaque achat rapporte des points de fidélité pour bénéficier de réductions futures. Voir [figure 11](#fig11).
- **Tableau de bord administrateur :** accessible avec des identifiants spécifiques, permettant aux employés et administrateurs de gérer les produits, promotions, utilisateurs et employés. Voir [figures 13-17](#admin-pages).

Le site est entièrement **responsive** (adapté au format PC et mobile). Avec JavaScript, les menus s’adaptent aux petits écrans, en se transformant en menu déroulant. Voir [figure 12](#fig12).

Les exemples de ces fonctionnalités sont présentés dans la section [Captures du site](#website-screenshots).

# Ma contribution

## Gestion de projet

J’ai assuré les rôles de **Scrum Master** et de **chef de projet** pour notre groupe. J’ai organisé les sprints, animé les réunions et veillé au respect du planning.

## Design

Avec l’accord du client, j’ai entièrement repensé le design du site sur **Figma** afin d’améliorer son identité visuelle.  
J’ai élaboré la palette de couleurs à partir du nouveau logo et choisi un **thème sombre et vert** pour donner au site une esthétique moderne, inspirée du monde du gaming.

{% include place-figure.html src="/assets/images/projects/previous_design_buildMyPC.png" alt="Ancien design du site web" figure-nb="1" figure-text="Ancien design du site" %}

{% include place-figure.html src="/assets/images/projects/logo_buildMyPC.webp" alt="Logo BuildMyPC" figure-nb="2" figure-text="Nouveau logo BuildMyPC" %}

{% include place-figure.html src="/assets/images/projects/figma_design_buildMyPC.png" alt="Nouveau design du site sur Figma" figure-nb="3" figure-text="Nouveau design réalisé sur Figma" %}

## Développement

### Page du catalogue produits

J’ai développé **intégralement la page du catalogue produits**, en prenant en charge à la fois le style côté front-end et la logique PHP côté back-end.
Cette page affiche dynamiquement les produits selon les filtres et options de tri. Voir [figure 6](#fig6).

### Algorithme de la barre de recherche

J’ai conçu l’**algorithme de recherche** avec un **système de scoring personnalisé** pour classer les résultats par pertinence :

- **Correspondance parfaite (10 pts)** : le terme recherché correspond exactement.
- **Phrase complète, ordre correct (7 pts)** : tous les mots correspondent et sont dans le bon ordre.
- **Phrase complète, ordre différent (4 pts)** : tous les mots sont présents, mais dans le désordre.
- **Correspondance partielle (1 pt)** : au moins un mot correspond.

Pondération supplémentaire :

- Correspondance dans le **nom ou la description du produit** : +2 pts
- Correspondance dans le **nom de la catégorie** : +1 pt
- Correspondance dans le **nom de la marque** : +0 pt

Les produits sont ensuite triés selon leur score pour afficher en premier les résultats les plus pertinents.

### Pages d’administration

J’ai conçu et implémenté les **outils administrateur** du tableau de bord des employés et administrateurs, comprenant :

- **Outils administrateur (ce que j'ai développé) :**
  - Gestion des employés : création/suppression de comptes, modification des informations, attribution des droits administrateur. Voir [figure 13](#admin-pages).
  - Gestion des clients : modification des données personnelles, activation/désactivation de comptes, consultation de l’historique des commandes. Voir [figures 14-15](#fig14).

- **Outils employés :**
  - Gestion des promotions : création/suppression, affectation de produits, ajustement des réductions. Voir [figure 16](#fig16).
  - Gestion des produits : création, mise à jour, suppression. Voir [figure 17](#fig17).

_(Remarque : un administrateur peut également utiliser les outils réservés aux employés.)_

### Conception de la base de données

J’ai participé à la conception de l’architecture de la base de données, notamment au **diagramme de classes UML**.
(Certains éléments ne correspondent plus exactement à la version finale, mais le schéma reflète notre conception initiale.)

{% include place-figure.html src="/assets/images/projects/db_class_diagram_buildMyPC.png" alt="Diagramme de classes de la base de données" figure-nb="4" figure-text="Diagramme de classes de la base de données" %}

# Résultats

Le projet a obtenu la note de **16/20** et a été **cité par les enseignants comme exemple de référence** pour les promotions suivantes.
Cette expérience m’a permis de consolider mes compétences en **gestion de projet**, en **développement full-stack avec PHP/MySQL natif**, ainsi qu’en **travail collaboratif sur un projet logiciel complet**.

# Démonstration

Le site du projet est accessible [ici](http://193.54.227.208/~R2024SAE3007/){:target="\_blank"}.
_(Remarque : il est hébergé sur les serveurs de l’IUT et je ne peux pas garantir qu'il soit accessible.)_

L’intégralité du code source est disponible sur [GitHub](https://github.com/IUT-Blagnac/sae-3-01-devapp-G1A-1){:target="\_blank"}.

# Captures du site {#website-screenshots}

## Accueil et catalogue produits

{% include place-figure.html src="/assets/images/projects/home_page_wide_buildMyPC.png" alt="Page d’accueil" figure-nb="5" figure-text="Page d’accueil" %}

{% include place-figure.html src="/assets/images/projects/product_catalog_buildMyPC.png" alt="Page du catalogue produits" figure-nb="6" figure-text="Page du catalogue produits (catégorie composants)" %}

## Fiche produit

{% include place-figure.html src="/assets/images/projects/product_details1_buildMyPC.png" alt="Page de détails produit" figure-nb="7" figure-text="Page de détails produit avec informations et avis client" %}

{% include place-figure.html src="/assets/images/projects/product_details2_buildMyPC.png" alt="Page de détails produit" figure-nb="8" figure-text="Page de détails produit avec informations et avis client" %}

## Compte, panier et commande

{% include place-figure.html src="/assets/images/projects/account_management_buildMyPC.png" alt="Gestion du compte" figure-nb="9" figure-text="Gestion du compte client" %}

{% include place-figure.html src="/assets/images/projects/cart_buildMyPC.png" alt="Panier d’achat" figure-nb="10" figure-text="Panier du client" %}

{% include place-figure.html src="/assets/images/projects/checkout_system_buildMyPC.png" alt="Système de commande" figure-nb="11" figure-text="Système de commande avec informations préremplies" %}

## Adaptation mobile (Responsive)

{% include place-figure.html src="/assets/images/projects/responsive_buildMyPC.png" alt="Menu responsive" figure-nb="12" figure-text="Page d’accueil sur mobile, menu ouvert et fermé" %}

## Tableaux de bord administrateur et employé {#admin-pages}

{% include place-figure.html src="/assets/images/projects/admin_employee_manage_buildMyPC.png" alt="Page de gestion des employés" figure-nb="13" figure-text="Administrateur : gestion des employés" %}

{% include place-figure.html src="/assets/images/projects/admin_client_manage_buildMyPC.png" alt="Page de gestion des clients" figure-nb="14" figure-text="Administrateur : gestion des clients" %}

{% include place-figure.html src="/assets/images/projects/admin_client_infos_buildMyPC.png" alt="Page d’informations client" figure-nb="15" figure-text="Administrateur : détails d’un client" %}

{% include place-figure.html src="/assets/images/projects/promotion_management_buildMyPC.png" alt="Gestion des promotions" figure-nb="16" figure-text="Gestion des promotions (administrateur/employé)" %}

{% include place-figure.html src="/assets/images/projects/product_creation_management_buildMyPC.png" alt="Création de produit" figure-nb="17" figure-text="Page de création de produit (avec la gestion en arrière-plan)" %}
