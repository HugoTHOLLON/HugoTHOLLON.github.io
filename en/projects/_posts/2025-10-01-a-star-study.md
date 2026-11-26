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

- [Project 1: algorithms comparison](https://github.com/HugoTHOLLON/pathfinding-algorithm-project){:target="\_blank"}.
- [Project 2: in depth study of Dijkstra and A\*](https://github.com/HugoTHOLLON/A-Star-Algorithm-Study){:target="\_blank"}.

The first project was a comparison between Dijkstra and A\* algorithms performances.  
The second was a presentation of the algorithms with in depth maths examples, a visual implementation and an opening to another more performant algorithm: HPA\*.

This article will try not to jump too much into math details. You can view the [full report of the second project](https://github.com/HugoTHOLLON/A-Star-Algorithm-Study/blob/main/rapport_a_star_HugoT_NariaS_NicolasH.ipynb){:target="\_blank"} for that.

# Introduction

Pathfinding algorithms are used to determine the shortest path (or one of the shortest) between 2 points. Many algorithms exist to solve this problem but we'll focus on two in particular: Dijkstra and A\*.

# Dijkstra

## Presentation

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

To find the shortest path, Dijkstra's algorithm will start at a vertice (in our example **A**) and assign each of it's neighbour a value **g(n)** where n is the neighbour vertice. This value will be equal to the **edge's weight** so:  
**g(B)** = 15  
**g(C)** = 30  
**g(E)** = 26

The algorithm will then choose the smallest value and rule out the vertice so it doesn't get chosen again. Here the smallest vertice is **g(B)**. The algorithm then calculate **B**'s neighbours values like so:  
**g(F)** = 13 + **g(B)**

After that, the algorithm will choose the next smallest value and repeat the process until the chosen vertice is the goal.

Here is how it looks on our example graph:

The colours represent:

- <span style="color:#7bfc03">Light green</span> : Start vertice.
- <span style="color:#03adfc">Blue</span> : Discovered vertices (i.e. that the algorithm can choose) that haven't been chosen yet.
- <span style="color:#fc0345">Pinky red</span>/<span style="color:#f803fc">Pink-violet</span> : Goal vertice before and after being discovered.
- <span style="color:#fce703">Jaune</span> : The currently chosen vertice.
- <span style="color:#03fc14">Vert</span> : Final shortest path between **A** and **J**.

{% include place-figure.html src="/assets/images/projects/pathfinding_study/dijkstra_steps.gif" alt="Dijkstra steps example" figure-nb="2" figure-text="Execution of Dijkstra's algorithm on the example graph" %}

## Limits

Although Dijkstra’s algorithm is very useful for finding the shortest path, it has several limitations, the most significant being its execution speed.
In practice, the algorithm explores all possible directions to determine the shortest path, which leads it to examine many unnecessary paths, for example, those that go away from the goal.  
Processing these irrelevant paths increases the number of operations made and therefore the overall running time.

A\* algorithm solves this problem by introducing an heuristic value to each vertice.

See below an example of how Dijkstra behave in a huge graph.

{% include place-figure.html src="/assets/images/projects/pathfinding_study/dijkstra_execution.gif" alt="Dijkstra excution example on a huge map" figure-nb="2" figure-text="Execution of Dijkstra's algorithm on the Haute-Garonne map" %}

---

<div class="work-in-progress">Work in progress...</div>
