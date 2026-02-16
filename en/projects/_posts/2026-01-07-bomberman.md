---
layout: post
title: "Bomberman"
date: 2026-01-07
end: 2026-01-25
categories: ["iut-project", "produce", "lead", "collaborate"]
project-type: "IUT project"
image-path: "/assets/images/projects/bomberman/home_bomberman.webp"
image-alt: "Game home page"
tags: ["Godot engine", "GDScript", "Kanban"]
description: |
  Developed a Bomberman-style game from user story specifications, including bomb mechanics, destructible objects, power-up systems, enemy AI, multiple levels and local multiplayer support.
---

# Context

This project was developed over three weeks as part of an IUT course focused on discovering Godot Engine and game development.

We worked in a team of 4 students and were given a set of user stories defining the required features and gameplay mechanics. Instead of a fixed implementation guide, we had to translate these user stories into concrete technical solutions and a working game.

To manage the workload efficiently within the short schedule, we organized the project using a Kanban board. Each user story moved across stages (TODO, IN PROGESS, DONE), allowing us to coordinate tasks, avoid conflicts, and maintain a steady progress throughout development.

# The Game

The project consists of a Bomberman-style action game. The player controls a character who navigates grid-based levels filled with destructible blocks, enemies, and hidden power-ups.

The core gameplay loop revolves around placing bombs strategically to clear obstacles and eliminate enemies while avoiding explosions and enemy contact. Bomb blasts propagate in straight lines, creating both opportunities and risks for the player. Destroyed blocks can reveal bonuses that enhance his abilities by improving the explosion range or bomb capacity.

The game features 2 levels and and a local multiplayer mode with split screen.

{% include place-figure.html src="/assets/images/projects/bomberman/level1_bomberman.webp" alt="Bomberman gameplay" figure-nb="1" figure-text="Gameplay on the level 1" %}

{% include place-figure.html src="/assets/images/projects/bomberman/level2_multi_bomberman.webp" alt="Multiplayer split screen" figure-nb="2" figure-text="Multiplayer screen" %}

# My Contributions

I was primarily responsible for the player character and most of the core interaction systems. My work focused on gameplay logic, entity interactions, and system integration.

My main contributions include:

- Implemented the Bomberman player character and its core mechanics
- Developed entity interactions, including:
  - Bomb placement and explosion behavior.
  - Damage handling between player, enemies, bombs, and destructible walls.
  - Collision and interaction rules between gameplay elements.

- Designed and implemented parts of the system interactions between the world and entities.
- Contributed to the bonus system.
- Refactored level creation to simplify map building, avoid painful and bug-proned copy pasting and facilitate the overall process.
- Contributed to enemy AI behavior.
- Helped polish and stabilize multiple gameplay systems.

My role centered on making sure gameplay elements worked together reliably and were extensible, to ensure that future updates go smoothly and don't need extensive bug solving.

{% include place-figure.html src="/assets/images/projects/bomberman/level2_bonus_pickup_bomberman.webp" alt="Bonus pickup" figure-nb="3" figure-text="Effect on bonus pickup (made by me)" %}

# Demo

The game is available to play on itch.io [here](https://hugothollon.itch.io/bomberman?secret=bQlxeKk8rU9e9VjkXvqbHFDRn00){:target="\_blank"}.  
**Warning:** while playing, the game might freeze for a few seconds after the first bomb explode. Don't panic, it is expected behaviour as the browser needs to load the shaders and particules on the GPU and it doesn't do it on start. Keep in mind that the game might take some time to load too.

# Credits

**My team**:

- Raphaël Lamothe: [LinkedIn](https://www.linkedin.com/in/rapha%C3%ABl-lamothe/){:target="\_blank"}
- Nicolas Ho: [LinkedIn](https://www.linkedin.com/in/nicodeh/){:target="\_blank"}
- Naria Savary: [GitHub](https://github.com/NariaReynhard){:target="\_blank"}

**The assets**:

- Character skin and animations : [KayKit - Character Animations](https://kaylousberg.itch.io/kaykit-character-animations){:target="\_blank"}
- Game blocks and enemies : [Kenney - Platformer Kit](https://kenney.nl/assets/platformer-kit){:target="\_blank"}
- Sound effects : [SubspaceAudio - 512 Sound Effects (8-bit style)](https://opengameart.org/content/512-sound-effects-8-bit-style){:target="\_blank"}
- Music : [SubspaceAudio - 5 Chiptunes (Action)](https://opengameart.org/content/5-chiptunes-action){:target="\_blank"}
