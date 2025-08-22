# 🛍️ Next.js Product App

A simple product management application built with **Next.js 15 (App Router)** and **NextAuth.js**.  
This app demonstrates public and protected routes, authentication, and CRUD functionality with products.

---

## 🚀 Features

### Public Pages
- **Landing Page (`/`)**
  - Includes Navbar, Hero, Product Highlights, and Footer.
  - Navigation links to **Login** and **Products**.
- **Login (`/login`)**
  - Authentication using **NextAuth.js** (Google or credentials).
  - Redirects to `/products` after successful login.
- **Product List (`/products`)**
  - Displays a list of products fetched from a mock backend/file.
  - Each product shows name, description, price, and a **Details** button.
- **Product Details (`/products/[id]`)**
  - Displays full details of a single product.

### Protected Pages
- **Add Product (`/dashboard/add-product`)**
  - Accessible only to logged-in users.
  - Form to add a new product and save it to the backend/database.
  - Redirects unauthenticated users to `/login`.

### 🔥 Optional Enhancements
- Loading spinner when submitting forms.
- Toast message on successful product add.
- Theme toggle (Light/Dark mode).

---

## 🛠️ Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/) for authentication
- Route Handlers (`/api`) for backend endpoints
- (Optional) Express.js server for data fetching/creating
- Tailwind CSS (if styling used)

---

## 📂 Routes Summary

| Route                     | Type        | Description                          |
|----------------------------|-------------|--------------------------------------|
| `/`                        | Public      | Landing page (Navbar, Hero, Products, Footer) |
| `/login`                   | Public      | User login via NextAuth (Google/Credentials) |
| `/products`                | Public      | Product list page                    |
| `/products/[id]`           | Public      | Product details page                 |
| `/dashboard/add-product`   | Protected   | Add new product (requires login)     |
| `/api/products`            | API         | Fetch or create products             |

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/nextjs-product-app.git
cd nextjs-product-app
