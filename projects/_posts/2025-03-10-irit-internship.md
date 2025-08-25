---
layout: post
title: "Communicating Android and Python apps for IRIT"
date: 2025-03-10
end: 2025-05-02
categories: internship best-project
project-type: "Internship"
image-path: "/assets/images/projects/city_model_irit.png"
image-alt: "City model"
tags:
  [
    "Android",
    "Python",
    "Bluetooth Low Energy",
    "Raspberry Pi",
    "Android Studio",
  ]
description: "Built an Android app in Java and a Python app on Raspberry Pi. The apps communicated over BLE to simulate and control smart city streetlights, with my Python code bridging BLE communication and hardware control (simulated)."
---

# Context

I completed an internship at **IRIT** (Computer Science Research Institute of Toulouse), where I worked on an **IEEE** (Institute of Electrical and Electronics Engineers) project called **"My Smart Lighting"**. This project was led by my internship supervisor, a research engineer at IRIT.

The goal of the project was to study and optimize the **energy consumption** of smart city streetlights.  
To achieve this, a **smart city model** was built to simulate streetlight behavior, controlled by a **Python application** running on a **Raspberry Pi**.

As part of my work, I developed two applications:

- An **Android app** that allows users to visualize simulated energy consumption and send control commands (e.g., dimming lights, enabling lights only when a car passes).
- A **Python app** on the Raspberry Pi, which I designed as an interface between **Bluetooth Low Energy (BLE) communication** and the **electronic control system** of the model. Since the electronic layer was to be developed later, I implemented a **simulation** of the hardware control to test and validate the communication flow.

The two applications communicate using **Bluetooth Low Energy (BLE)**.  
BLE is a wireless communication protocol, similar to Wi-Fi or classic Bluetooth, but optimized for very low power usage. Devices communicate through **services** that expose specific **data** or **actions**. In this project, the Python app exposes a custom BLE Service (containing the simulation data and control modes), and the Android app connects to it to exchange information.

# The Apps

## Android App

The Android app, built with Android Studio in **Java**, uses Android’s built-in support for **Bluetooth Low Energy (BLE)** to search for and connect to the Raspberry Pi.

In practice, the app scans for any nearby device that provides a specific **BLE Service** (a unique identifier for the smart lighting simulation). This service is implemented by the Python app running on the Raspberry Pi.

The Android app is structured into three main states:

- **Connection state:** the app searches for a device that provides the target BLE Service. Once found, it attempts to connect. If the connection fails, it retries multiple times before going back to scanning.
- **Data reception state:** once connected, the app requests the device’s data (such as energy consumption values). The data is then displayed to the user. If the values are updated, the Raspberry Pi notifies the app automatically.
- **Data editing state:** while connected, the user can change the streetlight operating mode (e.g., reducing brightness). When they do, the app sends a command to the Raspberry Pi, which updates the simulation accordingly.

{% include place-figure.html src="/assets/images/projects/android_connection_screens_irit.png" alt="Android app connection screens" figure-nb="1" figure-text="The Android app screens when connecting to the Raspberry Pi" %}

{% include place-figure.html src="/assets/images/projects/android_data_received_irit.png" alt="Android app data reading screens" figure-nb="2" figure-text="The Android app screens when receiving and displaying simulation data from the Raspberry Pi" %}

{% include place-figure.html src="/assets/images/projects/android_editor_irit.png" alt="Android app data edition screens" figure-nb="3" figure-text="The Android app screens when editing the streetlights operating mode (sending control commands)" %}

## Python App

The Python app acts as the **bridge** between BLE communication and the electronic control system of the model.

It uses the **BlueZ API** (the official Linux Bluetooth stack) to create a custom **BLE Service**. This Service exposes two things:

- **Simulation data** (consumption, power usage, etc.)
- **An editable operating mode** (which can be changed remotely by the Android app)

To interact with BlueZ, the Python app uses **D-Bus**, an inter-process communication (IPC) system that allows applications on Linux to talk to each other. In this case, D-Bus lets Python manage BLE devices through BlueZ.

While I focused on the communication layer, I also designed the **software structure** for the electronic control system. I implemented different classes simulating the streetlight operating modes and a controller to manage switching between them. This way, the next developer will only need to expand these classes to connect to the real hardware.

Below is the Python app class diagram. The **top section** shows the BLE-related classes, while the **bottom section** represents the (currently simulated) electronic control classes.

{% include place-figure.html src="/assets/images/projects/python_class_diagram_irit.png" alt="Python app class diagram" figure-nb="4" figure-text="Python app class diagram" %}

# Development Process

_(To be completed later)_

# Impact

_(To be completed later)_
