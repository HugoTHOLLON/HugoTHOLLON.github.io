---
layout: post
title: "E-Commerce website for BuildMyPC"
date: 2024-11-04
end: 2025-01-21
categories: jekyll update best-project
project-type: "IUT project"
image-path: "/assets/images/projects/home_page_buildMyPC.png"
image-alt: "Website home page"
tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Figma", "Scrum", "UML"]
description: "Developed an e-commerce website for a fictional PC builder with PHP/MySQL backend and HTML/CSS/JS front end, featuring login, browsing, cart, and a simulated checkout, plus an admin dashboard. I served as Scrum Master coordinating a 5-person team."
---

# Context

This Website is part of a **3 months graded project** at the IUT. In this project, **groups of 4-5 students** first had to create a fictional company in need for an E-Commerce Website and make a **call for tenders**. Each group then selected another group to execute their call for tenders. For this project, it was mandatory to use PHP (without a framework), HTML and CSS. Using JavaScript was optional and not evaluated. CSS frameworks (like bootstrap) were allowed but my group used none.

My group was selected by **BuildMyPC**, a fictional PC building company that wanted to expand its market to online sales.

# E-Commerce Website

The Website, only available in french, sells fully mounted **computer towers** for both Gaming and Desktop use, as well as separate **PC components**. It features:

- **User authentication:** account creation and a login system.
- **Account management:** change account informations like the mail, password, delivery address or payment informations. Access the order and article browsing history as well as the loyalty program. See [figure 9](#fig9).
- **Product catalog:** browse articles with a menu or a search bar and filter them by category, brand, price and promotion. Articles can also be sorted by name, price, popularity or relevance (if using the search bar). See [figure 6](#fig6).
- **Product detail:** see details about a product (price, categorie, availability, description...). See [figure 7](#fig7).
- **Review system:** leave a comment and a grade on a bought product. If connected, an employee can answer these comments. See [figures 7 and 8](#fig7).
- **Product suggestion:** each product details proposes a selection of similar products that could interest the user. See [figure 8](#fig8).
- **Shopping cart:** add, remove, and update selected items. See [figure 10](#fig10).
- **Checkout system:** simulated payment process (no real transactions). Buying items grants loyalty points usable to get reductions. See [figure 11](#fig11).
- **Admin dashboard:** accessible with the right credentials, enabling product, promotion, employee and user management. See [figures 13 to 17](#admin-pages).

The website is responsive and adapts well to the screen size. Using Javascript, some menus shrinks when the screen is too small and can be opened by the user. See [figure 12](#fig12).

Go to the [Website screenshots](#website-screenshots) section to see what the above features look like.

# My Contribution

## Management

During this project, I was both **Scrum Master** and **Project manager** of my group.

## Design

With the client's approval, I remade the website's design using **Figma** to improve it's look. For the new design, I based the colors on the newly made logo and the layout on the one given by the client. I went for dark and green color to give a futuristic vibe similar to the Gaming PC's style.

{% include place-figure.html src="/assets/images/projects/previous_design_buildMyPC.png" alt="Previous website's design" figure-nb="1" figure-text="Website's previous design" %}

{% include place-figure.html src="/assets/images/projects/logo_buildMyPC.webp" alt="buildMyPC's logo" figure-nb="2" figure-text="BuildMyPC's new logo" %}

{% include place-figure.html src="/assets/images/projects/figma_design_buildMyPC.png" alt="My website's design" figure-nb="3" figure-text="Website's new design made on figma" %}

## Code

### Product catalog page

I entierly made the **Product catalog page**, from the style to the PHP logic. This pages displays a sorted list of products based on different filters and sorting options. See [figure 6](#fig6).

### Search bar algorithm

I also made the **search bar algorithm** and made it work with the "relevance" sort mode. The algorithm is a **scoring system** used to sort search results so that the most relevant products appear first.

Each product is given a weight (or score) depending on how well it matches the search terms. The higher the score, the more relevant the product is.

The weight depends on how close the match is:

- **Perfect match (10–12 points):** The product text contains exactly the same words as the search.
- **All words in the right order (7–9 points):** The product contains all the search words in the same sequence, but not as an exact match.
- **All words, but in a different order (4–6 points):** The product contains all the words, but shuffled around.
- **Some words match (1–3 points):** At least one search word appears, but not all of them.

Extra weight is added depending on where the words are found:

- If the match is in the **product name/description**, +2 points are added.
- If the match is in the **category name**, +1 point is added.
- If the match is in the **brand name**, no extra points are added.

**Finally**, the results are sorted by score. Products with the highest score appear at the top, because they are considered the most relevant to what the user typed.

**In short:** _The system assigns points to each product based on how well the search terms fit, and then it sorts the products so that the best matches show up first._

### Administation pages

I designed and made half of the employee and administrator dashboard. I took care of the admin employee and client management pages See [figures 13 to 15](#fig13)..

An employee can:

- **Manage promotions:** create and remove promotions. Add and remove products from a promotion. Change the reduction applied to a product. See [figure 16](#fig16).
- **Manage products:** create, update and delete products. See [figure 17](#fig17).

An administator can do all of the above and:

- **Manage employees account:** add a new employee, remove an employee or change an employee's informations. An administrator can create another administrator account. See [figure 13](#fig13).
- **Manage a client account:** change some of the client informations (name, mail, address...). Activate or disable the account (to prevent the client from connecting). Access the client's order history. See [figures 14 and 15](#fig14).

### Database creation

I participated in the database architecture creation. I mostly contributed to the database's **UML class diagram**. _Some small parts of this diagram are now obsolete but haven't been updated._

{% include place-figure.html src="/assets/images/projects/db_class_diagram_buildMyPC.png" alt="Database class diagram" figure-nb="4" figure-text="The database's class diagram" %}

# Impact

This project was well received by the teachers (graded 16/20) as they asked our group if they could use it as an example for next year projects.

# Demo

The project website is available [here](http://193.54.227.208/~R2024SAE3007/){:target="\_blank"}. Since it is hosted on the IUT’s servers, long-term availability is not guaranteed.
You can also explore the full project repository on [GitHub](https://github.com/IUT-Blagnac/sae-3-01-devapp-G1A-1){:target="\_blank"}.

# Website screenshots {#website-screenshots}

## Home page, product catalog

{% include place-figure.html src="/assets/images/projects/home_page_wide_buildMyPC.png" alt="Home page" figure-nb="5" figure-text="Home page" %}

{% include place-figure.html src="/assets/images/projects/product_catalog_buildMyPC.png" alt="Product catalog page" figure-nb="6" figure-text="Product catalog page when selecting 'Components'" %}

## Product details

{% include place-figure.html src="/assets/images/projects/product_details1_buildMyPC.png" alt="Product detail page screenshot 1" figure-nb="7" figure-text="Product detail page with it's informations and client review" %}

{% include place-figure.html src="/assets/images/projects/product_details2_buildMyPC.png" alt="Product detail page screenshot 2" figure-nb="8" figure-text="Product detail page with it's informations and client review" %}

## Account informations, shopping cart, payment

{% include place-figure.html src="/assets/images/projects/account_management_buildMyPC.png" alt="Account management page" figure-nb="9" figure-text="Client's account management page" %}

{% include place-figure.html src="/assets/images/projects/cart_buildMyPC.png" alt="Account management page" figure-nb="10" figure-text="A client's shopping cart" %}

{% include place-figure.html src="/assets/images/projects/checkout_system_buildMyPC.png" alt="Checkout system" figure-nb="11" figure-text="Checkout system with prefilled informations" %}

## Responsiveness

{% include place-figure.html src="/assets/images/projects/responsive_buildMyPC.png" alt="Responsive screenshot" figure-nb="12" figure-text="Home page on mobile phone with menu opened and closed" %}

## Admin and employee's pages {#admin-pages}

{% include place-figure.html src="/assets/images/projects/admin_employee_manage_buildMyPC.png" alt="Employee management page" figure-nb="13" figure-text="Administrator's employee management page" %}

{% include place-figure.html src="/assets/images/projects/admin_client_manage_buildMyPC.png" alt="Clients management page" figure-nb="14" figure-text="Administrator's client management page" %}

{% include place-figure.html src="/assets/images/projects/admin_client_infos_buildMyPC.png" alt="Admin clients informations page" figure-nb="15" figure-text="Administrator's client details page" %}

{% include place-figure.html src="/assets/images/projects/promotion_management_buildMyPC.png" alt="Promotion management page" figure-nb="16" figure-text="Administrator's and employee's promotions management page" %}

{% include place-figure.html src="/assets/images/projects/product_creation_management_buildMyPC.png" alt="Product creation page" figure-nb="17" figure-text="Administrator's and employee's product creation page (with product management page in background)" %}
