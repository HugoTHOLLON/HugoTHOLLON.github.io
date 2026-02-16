---
layout: post
title: "Pathfinding algorithm study"
date: 2025-10-01
end: 2025-12-11
categories: iut-project produce optimize collaborate
project-type: "IUT project"
image-path: "/assets/images/projects/pathfinding_study/dijkstra_vs_astar.png"
image-alt: "City model"
tags: ["Python", "OpenStreetMap", "A*", "Dijkstra"]
description: "Conducted a comparative study of  Dijkstra and A* pathfinding algorithms, using real-world OpenStreetMap (OSM) data to compare their performance and understand their use in real-world navigation systems like Google Maps or Waze."
---

# Context

During my third year at the IUT I had the opportunity to work on 2 projects related to pathfinding algorithms with 2 classmates. This article is a summary of both projects. You can view the full projects in their respective GitHub repositories:

- [Project 1 repository](https://github.com/HugoTHOLLON/pathfinding-algorithm-project){:target="\_blank"}.
- [Project 2 repository](https://github.com/HugoTHOLLON/A-Star-Algorithm-Study){:target="\_blank"}.

The first project was a comparison between Dijkstra and A\* algorithms performances.  
The second was a presentation of the algorithms with in depth maths examples, a visual implementation and an opening to another more performant algorithm: HPA\*.

This article will try not to jump too much into math details. You can view the [full report of the second project](https://github.com/HugoTHOLLON/A-Star-Algorithm-Study/blob/main/rapport_a_star_HugoT_NariaS_NicolasH.ipynb){:target="\_blank"} for that.

# Introduction

Pathfinding algorithms are used to determine the shortest path (or one of the shortest) between 2 points. Many algorithms exist to solve this problem but we'll focus on two in particular: Dijkstra and A\*.

# Dijkstra

To quote Wikipedia, _"Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a weighted graph, which may represent, for example, a road network."_

A weighted graph is a graph in which vertices and/or edges, are assigned numerical values known as weights like the example below.

{% include place-figure.html src="/assets/images/projects/pathfinding_study/weighted_graph_example.png" alt="Weighted graph example image" figure-nb="1" figure-text="A weighted graph example with weighted edges." %}

In a weighted graph, the weight of an edge represents the "cost" of passing between 2 vertices. That cost can be many things depending on the context:

- a distance (in meters, kilometers...),
- a travel time,
- energy consumption,
- a price,
- a difficulty.

Dijkstra's algorithm's goal is to minimize that cost. In other words, choosing what this cost represents will depend on what we'll try to optimize.

---

<div class="work-in-progress">Work in progress...</div>

<!-- Nous allons utiliser le terme g(n) pour parler de la somme des poids des arêtes entre le nœud de départ D et n un nœud du graphe. Il peut exister plusieurs chemins entre D et n. g(n) fait réference au chemin avec le plus petit poids découvert pour l'instant.

Dans l'algorithme de Dijkstra, les poids sont forcément positifs. Pour des poids négatifs il est préferable d'utiliser l'algorithme de Bellman-Ford dont nous ne parlerons pas ici.

Dans nos implémentations et pour cette présentation, nous considèrerons que les graphes sont non-orientés et que les poids représentent la distance en mètre entre 2 nœuds. -->
