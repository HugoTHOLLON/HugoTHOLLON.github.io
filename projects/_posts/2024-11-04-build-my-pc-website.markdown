---
layout: post
title: "E-Commerce website for BuildMyPC"
date: 2024-11-04
end: 2025-01-21
categories: iut-project best-project
project-type: "IUT project"
image-path: "/assets/images/projects/home_page_buildMyPC.webp"
image-alt: "Website home page"
tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Figma", "Scrum", "UML"]
description: "Developed an e-commerce website for a fictional PC builder with PHP/MySQL backend and HTML/CSS/JS front end, featuring login, browsing, cart, and a simulated checkout, plus an admin dashboard. I served as Scrum Master coordinating a 5-person team."
---

# Context

This website was developed as part of a **3-month graded project** at the IUT.  
Groups of **4-5 students** first created a fictional company in need of an E-Commerce solution and wrote a **call for tenders**. Each group then selected another group to execute their tender.

The project requirements were:

- **PHP (without a framework)**
- **HTML & CSS** (JavaScript optional, not graded)
- Optional use of CSS frameworks (e.g. Bootstrap), but our group used none.

My group was selected by **BuildMyPC**, a fictional PC-building company wanting to expand its market into online sales.

# E-Commerce Website

The website (in French) sells fully mounted **computer towers** (Gaming and Desktop) as well as **PC components**.  
It includes the following features:

- **User authentication:** account creation and login system.
- **Account management:** update personal information (email, password, delivery address, payment details), access order history, browsing history, and loyalty program. See [figure 9](#fig9).
- **Product catalog:** browse products with a menu or search bar. Filter by category, brand, price, promotion. Sort by name, price, popularity, or relevance. See [figure 6](#fig6).
- **Product details:** view price, category, availability, description, etc. See [figure 7](#fig7).
- **Review system:** leave comments and ratings on purchased products. Employees can respond. See [figures 7-8](#fig7).
- **Product suggestions:** related products are recommended on detail pages. See [figure 8](#fig8).
- **Shopping cart:** add, remove, and update selected items. See [figure 10](#fig10).
- **Checkout system:** simulated payment (no real transactions). Purchases grant loyalty points for future discounts. See [figure 11](#fig11).
- **Admin dashboard:** with proper credentials, employees and admins can manage products, promotions, users, and employees. See [figures 13-17](#admin-pages).

The website is fully **responsive**. With JavaScript, menus adapt to smaller screens by collapsing into a mobile-friendly format. See [figure 12](#fig12).

For examples of these features, see the [Website screenshots](#website-screenshots) section.

# My Contribution

## Management

I served as both **Scrum Master** and **Project Manager** for my group.  
I organized sprints, facilitated meetings, and ensured progress stayed on track.

## Design

With client approval, I redesigned the website in **Figma** to improve its visual identity.  
I based the color palette on the new logo and chose a **dark + green theme** to give the site a modern, gaming-inspired look.

{% include place-figure.html src="/assets/images/projects/previous_design_buildMyPC.png" alt="Previous website's design" figure-nb="1" figure-text="Previous website design" %}

{% include place-figure.html src="/assets/images/projects/logo_buildMyPC.webp" alt="BuildMyPC logo" figure-nb="2" figure-text="New BuildMyPC logo" %}

{% include place-figure.html src="/assets/images/projects/figma_design_buildMyPC.png" alt="New website design in Figma" figure-nb="3" figure-text="New design made with Figma" %}

## Code

### Product Catalog Page

I entirely developed the **Product Catalog page**, including both front-end style and back-end PHP logic.  
The page dynamically displays products based on filters and sorting options. See [figure 6](#fig6).

### Search Bar Algorithm

I implemented the **search bar algorithm** with a custom **scoring system** for relevance sorting:

- **Perfect match (10 pts):** exact match of search terms.
- **Full phrase, correct order (7 pts):** all words match in sequence.
- **Full phrase, different order (4 pts):** all words present but shuffled.
- **Partial match (1 pts):** at least one word matches.

Additional weighting:

- Match in **product name/description**: +2 pts
- Match in **category name**: +1 pt
- Match in **brand name**: +0 pt

Products are then sorted by score so that the most relevant results appear first.

### Administration Pages

I designed and implemented the **Administrator tools** of the employee and admin dashboard. This dashboard contains the following tools:

- **Administrator tools**
  - Manage employees (add/remove accounts, edit employee info, assign admin rights). See [figure 13](#admin-pages).
  - Manage clients (edit personal info, enable/disable accounts, view order history). See [figures 14-15](#fig14).

- **Employee tools**
  - Manage promotions (create/remove, assign products, adjust discounts). See [figure 16](#fig16).
  - Manage products (create, update, delete). See [figure 17](#fig17).

_(Note: the Administrator can use the Employee's tools.)_

### Database Creation

I contributed to the database architecture, especially the **UML class diagram**.  
(Some elements in the diagram are now outdated, but it represents our initial design.)

{% include place-figure.html src="/assets/images/projects/db_class_diagram_buildMyPC.png" alt="Database class diagram" figure-nb="4" figure-text="Database class diagram" %}

# Impact

This project received a grade of **16/20** and was **highlighted by teachers as a model for future classes**.  
It strengthened my skills in **project management, full-stack development with raw PHP/MySQL, and collaborative software engineering**.

# Demo

The project website is available [here](http://193.54.227.208/~R2024SAE3007/){:target="\_blank"}.  
_(Note: hosted on IUT servers, long-term availability not guaranteed.)_

Full project repository available on [GitHub](https://github.com/IUT-Blagnac/sae-3-01-devapp-G1A-1){:target="\_blank"}.

# Website Screenshots {#website-screenshots}

## Home page & product catalog

{% include place-figure.html src="/assets/images/projects/home_page_wide_buildMyPC.png" alt="Home page" figure-nb="5" figure-text="Home page" %}

{% include place-figure.html src="/assets/images/projects/product_catalog_buildMyPC.png" alt="Product catalog page" figure-nb="6" figure-text="Product catalog page (components category)" %}

## Product details

{% include place-figure.html src="/assets/images/projects/product_details1_buildMyPC.png" alt="Product detail page" figure-nb="7" figure-text="Product detail page with information and client review" %}

{% include place-figure.html src="/assets/images/projects/product_details2_buildMyPC.png" alt="Product detail page" figure-nb="8" figure-text="Product detail page with information and client review" %}

## Account, cart & checkout

{% include place-figure.html src="/assets/images/projects/account_management_buildMyPC.png" alt="Account management" figure-nb="9" figure-text="Client account management" %}

{% include place-figure.html src="/assets/images/projects/cart_buildMyPC.png" alt="Shopping cart" figure-nb="10" figure-text="Client shopping cart" %}

{% include place-figure.html src="/assets/images/projects/checkout_system_buildMyPC.png" alt="Checkout system" figure-nb="11" figure-text="Checkout system with prefilled details" %}

## Responsiveness

{% include place-figure.html src="/assets/images/projects/responsive_buildMyPC.png" alt="Responsive menu" figure-nb="12" figure-text="Home page on mobile with menu opened and closed" %}

## Admin & employee dashboards {#admin-pages}

{% include place-figure.html src="/assets/images/projects/admin_employee_manage_buildMyPC.png" alt="Employee management page" figure-nb="13" figure-text="Administrator: employee management" %}

{% include place-figure.html src="/assets/images/projects/admin_client_manage_buildMyPC.png" alt="Client management page" figure-nb="14" figure-text="Administrator: client management" %}

{% include place-figure.html src="/assets/images/projects/admin_client_infos_buildMyPC.png" alt="Client information page" figure-nb="15" figure-text="Administrator: client details" %}

{% include place-figure.html src="/assets/images/projects/promotion_management_buildMyPC.png" alt="Promotion management" figure-nb="16" figure-text="Promotion management (administrator/employee)" %}

{% include place-figure.html src="/assets/images/projects/product_creation_management_buildMyPC.png" alt="Product creation" figure-nb="17" figure-text="Product creation page (with product management in background)" %}
