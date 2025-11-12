---
layout: post
title: "Knight 'n Slash"
date: 2024-02-01
categories: ["personal-project"]
project-type: "projet Personnel"
image-path: "/assets/images/projects/KnS_SirGrognon.png"
image-alt: "Knight 'n slash character"
tags: ["Godot engine", "GDScript", "Game Design"]
description: |
  Co-developing a 3D top-down action RPG in Godot Engine with a small team of friends. I created the Game Design Document and implemented the game’s status effect system, allowing dynamic buffs, debuffs, and other effects.
---

The art for the knight (Sir Grognon) was made by Sacha Mollet. You can find more of his work [here](https://www.artstation.com/sachamollet){:target="\_blank"}.

# The Game

_Knight ’n Slash_ is a **3D top-down action RPG multiplayer game** developed in **Godot Engine**, where players embody **five heroes**, each with unique abilities.

The Master of Evil threatens to conquer the world, and the heroes must embark on an epic journey across the continent to stop him. Along the way, they will encounter numerous enemies to defeat and allies willing to help... for the right price.

During the **day**, the heroes battle hordes of monsters across diverse environments. At **night**, they rest, heal, and train to improve their skills before continuing their quest.

# Development Process

Creating this game takes time, as our team must balance the project with schoolwork and personal life. Most development progress happens during holidays when we can dedicate more time to the project.

# My Contribution So Far

## Game Design Document

I created the **Game Design Document (GDD)**, focusing mainly on defining the **core gameplay loop** and the game’s overall structure.

To summarize:

- During the **day**, players explore large open areas filled with monsters, side quests, and a hidden dungeon.
- At **night**, they set up camp to manage their characters: upgrading stats and equipment, leveling up, and learning new skills.
- This day-night cycle repeats across **100 levels**, with a **boss** and a **village** every 10 levels. Villages provide new interactions and opportunities for upgrades.
- Each region introduces a **unique environment** (forest, desert, mountains, etc.) with special mechanics tied to its terrain.

## Stat System

I implemented a **flexible stat system** that defines attributes such as health, damage, and speed.  
The system is modular and designed to be easily expanded, allowing stats to dynamically change during gameplay to reflect buffs, debuffs, or environmental effects.

## Status Effect System

I designed and implemented the **status effect system**, which serves as the foundation for all effects such as stat boosts, invulnerability, resistances, or damage over time (e.g., poison).

Each effect can:

- Last for a defined duration or indefinitely.
- Be applied to multiple entities (player characters or enemies).
- Be created directly in the Godot editor using **Resources**, allowing new effects to be added without modifying code.

Every status effect belongs to one of the following categories, making it easy to target, manage, or filter effects during gameplay:

- **BUFF:** Enhances an entity’s attributes (e.g., damage boost, invincibility).
- **DEBUFF:** Weakens an entity (e.g., reduced damage, poison).
- **SKILL:** Applied through a skill from a character or boss (e.g., _Sir Grognon’s taunt_, which grants damage reduction but reduces speed to 0).
- **PENALTY:** Persistent negative effect that cannot be cleansed during the day unless specific items allow it (e.g., curse, exhaustion).
- **ENVIRONMENT:** Caused by terrain or surroundings (e.g., movement slowdown in snow or mud, burn effect on lava).

This system provides a strong foundation for gameplay variety and will support future skill and combat mechanics.
