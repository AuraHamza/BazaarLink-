# 🛒 BazaarLink

### A Geo-Based Online Marketplace for Local Markets

BazaarLink is a full-stack, geo-based online marketplace designed to digitally connect customers with local shops and physical markets.

The platform provides an interactive way for users to discover markets, explore shops, browse products, and manage purchases through a structured digital marketplace experience.

Instead of treating an online marketplace as a simple product catalog, BazaarLink organizes commerce around a **real-world geographic hierarchy**:

**City → Market → Shop → Product**

The project combines **frontend development, backend APIs, authentication, database management, role-based access control, and interactive map-based navigation** into one integrated system.

---

## 📌 Project Overview

Local markets contain thousands of shops and products, but customers often have difficulty determining:

* Which market contains a particular product
* Which shop sells a particular item
* Where a shop is physically located
* What products are available in a specific market
* How to digitally interact with traditional physical marketplaces

BazaarLink addresses this problem by providing a centralized digital marketplace where physical markets can be represented as an organized online ecosystem.

The system initially focuses on major Karachi markets such as:

* **Haideri Market**
* **Tariq Road**
* **Rex Centre**
* **Gul Plaza**

Users can navigate through the marketplace geographically and logically, moving from a market to its shops and then to individual products.

---

## 🎯 Objectives

The main objectives of BazaarLink are to:

* Digitize traditional local marketplaces.
* Connect customers with nearby physical shops.
* Provide an organized market → shop → product structure.
* Make local product discovery easier.
* Provide shop owners with a digital presence.
* Implement secure authentication and authorization.
* Provide role-specific functionality.
* Maintain marketplace data through a centralized relational database.
* Demonstrate a complete full-stack software engineering workflow.

---

## ✨ Key Features

### 🗺️ Interactive Market Exploration

BazaarLink uses an interactive map-oriented interface to allow customers to explore markets.

Users can move through the hierarchy:

```text
City
  │
  ├── Haideri Market
  │      ├── Shop A
  │      ├── Shop B
  │      └── Shop C
  │
  ├── Tariq Road
  │      ├── Shop A
  │      └── Shop B
  │
  ├── Rex Centre
  │
  └── Gul Plaza
```

The frontend includes a dedicated map exploration page for navigating marketplace locations. The React application also contains dedicated pages for shop details and customer interaction.

---

### 🏪 Shop Discovery

Customers can explore individual shops after selecting a market.

A shop can provide information such as:

* Shop identity
* Market association
* Products
* Availability
* Shop-related information

This creates a digital representation of the physical marketplace.

---

### 🛍️ Product & Shopping Flow

BazaarLink provides a customer-oriented shopping experience that includes:

* Product exploration
* Shop details
* Customer dashboard
* Cart management
* Checkout flow

The frontend currently contains dedicated React pages including `CustomerDashboard`, `ExploreMap`, `ShopDetail`, and `CartCheckout`.

---

### 🔐 Authentication

BazaarLink implements authentication using:

* JSON Web Tokens (JWT)
* Password hashing with bcrypt
* Protected backend routes
* Authentication middleware

The backend includes login and registration endpoints, while the `/profile` endpoint is protected using JWT authentication middleware.

---

### 👥 Role-Based Access

The system is designed around multiple user roles:

| Role               | Responsibility                                                        |
| ------------------ | --------------------------------------------------------------------- |
| **Customer**       | Explore markets, shops and products and interact with the marketplace |
| **Shop Admin**     | Manage shop-related information and products                          |
| **Market Admin**   | Manage marketplace/shop-level operations                              |
| **Platform Admin** | Manage and oversee the overall platform                               |

Role separation is an important part of the system architecture and allows different users to perform only the operations relevant to their responsibilities.

---

## 🏗️ System Architecture

BazaarLink follows a client-server architecture.

```text
                    ┌─────────────────────┐
                    │      Customer       │
                    │   / Shop Admin      │
                    │ / Market / Platform │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │ TypeScript + Vite   │
                    │ Tailwind CSS        │
                    └──────────┬──────────┘
                               │
                         HTTP / REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express Backend   │
                    │    Node.js Server   │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┴─────────────┐
                 │                           │
                 ▼                           ▼
        ┌─────────────────┐        ┌─────────────────┐
        │ Authentication  │        │ PostgreSQL      │
        │ JWT + bcrypt    │        │ Relational DB   │
        └─────────────────┘        └─────────────────┘
```

---

## 🧰 Technology Stack

### Frontend

| Technology       | Purpose                                      |
| ---------------- | -------------------------------------------- |
| **React**        | Component-based UI development               |
| **TypeScript**   | Static typing and maintainable frontend code |
| **Vite**         | Development server and build tooling         |
| **React Router** | Client-side routing                          |
| **Tailwind CSS** | Utility-first styling                        |
| **Lucide React** | UI icons                                     |
| **ESLint**       | Code quality and linting                     |

The current frontend configuration uses React, TypeScript, Vite, React Router, Tailwind CSS and Lucide React.

### Backend

| Technology  | Purpose |
| ----------- | ------- |
| **Node.js** | Ja      |
