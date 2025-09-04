---
layout: post
title: "Seresville's birds"
date: 2024-05-06
end: 2024-08-03
categories: ["personal-project", "best-project"]
project-type: "Personal project"
image-path: "/assets/images/projects/home_oiseaux_de_seresville_cropped.png"
image-alt: "Game home page"
tags: ["Godot engine", "GDScript"]
description: |
  Developed an interactive quiz game in Godot Engine for a bird exhibition. Players identify bird species by either their picture or song. I designed and programmed the game mechanics using GDScript, created the user interface, and integrated audio/image assets. The game was showcased at the exhibition and used by visitors to test their knowledge of local birds.
---

# The Game

This project is an interactive **French quiz game** about birds found in Seresville, a hamlet near Chartres, France.  
Players must identify bird species by either their **picture** or **song**, depending on the chosen game mode. The game features **14 birds to identify**, with a **child mode** limited to the 5 most common species in the local woods.

To ensure replayability, both the order in which birds are presented and the placement of the correct answers are randomized. In addition to the quiz, a **bird list mode** allows players to freely explore the birds’ pictures and songs without the need to guess correctly.

{% include place-figure.html src="/assets/images/projects/gameplay_oiseaux_de_seresville.png" alt="Seresville's birds gameplay" figure-nb="1" figure-text="Gameplay, picture mode" %}

{% include place-figure.html src="/assets/images/projects/bird_list_seresville_birds.png" alt="Seresville's birds bird list" figure-nb="2" figure-text="Bird list mode" %}

# Development Process

This was my **first personal project**, and an introduction to both **Godot Engine** and **game development**. It was also my first experience with **UI/UX design**.

I worked independently on every aspect of the game logic and interface. My main contributions include:

- Designing and implementing the user interface (buttons, menus, and navigation).
- Building a lightweight **text-file database** in **GDScript** to manage images and audio files.
- Implementing an **audio management system** to play, pause, and handle bird songs seamlessly.
- Ensuring replayability through randomized question order and button placement.

For the UI design, I combined my own interface elements with [Wenrexa’s Flower UI assets](https://wenrexa.itch.io/assets-ui-flowers){:target="\_blank"} (used for background and decorative elements).  
Bird photographs were kindly provided by **Michel Brugière**, and the bird songs by **Jacques Ménétrier**.

{% include place-figure.html src="/assets/images/projects/parameters_seresvilles_birds.png" alt="Seresville's birds parameters" figure-nb="3" figure-text="Parameters menu with audio settings" %}

# Exhibition & Impact

The game was showcased at a **nature exhibition in Mainvilliers**, organized in partnership with the [Eure-et-Loir Nature Association](https://www.eln28.org/){:target="\_blank"}.  
It was played by **both children and adults**, helping visitors discover and test their knowledge of local bird species in an engaging, interactive way.

# Demo

Currently, the game is available for **Windows** and **Web**. You can play the online version [here](/projects/demos/les-oiseaux-de-seresville/game.html){:target="\_blank"}.
