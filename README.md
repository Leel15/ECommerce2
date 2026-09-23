# Shopping World

"Shopping World" is a fully functional e-commerce platform developed using **PHP Laravel** during an intensive web development program. It provides robust backend components, full CRUD management, category and product browsing, session-based cart functionality, and seamless checkout flows.

---

## 🛠️ Tech Stack & Architecture
* **Framework:** PHP / Laravel
* **Database & ORM:** Laravel Eloquent ORM & Query Builder (`DB`)
* **Authentication:** Laravel built-in Auth & Middleware protection
* **File Management:** Laravel Storage (for product image uploads)

---

## 📂 Core Features & Controllers Structure

The application is structured around several modular controllers handling different parts of the platform:

### 1. Categories Management (`CategoriesController`)
* Handles full CRUD operations for product categories.
* Features validation for category names and descriptions.
* Manages viewing, creating, editing, and deleting categories dynamically.

### 2. Products Management (`ProductsController`)
* Implements complete product lifecycle management (Create, Read, Update, Delete).
* Integrates image upload handling using Laravel Storage (`public` disk).
* Manages relationships between products and their respective categories (`products::with('categoy')`).

### 3. Shopping & E-Commerce Flow (`Shooping` Controller)
* **Catalog Browsing:** Lists products filtered by category and provides detailed views for individual items (`Details`).
* **Session-Based Cart:** Manages cart items and counters dynamically using Laravel sessions (`Add_to_cart`).
* **Checkout & Payment:** Handles customer details input, stores customer and cart records in the database via query builders, and generates invoices (`pay`).

### 4. Admin & Dashboard (`Dashboard` & `HomeController`)
* Secures administrative routes using authentication middleware (`auth`).
* Serves the main admin dashboard and control panels.

---

## 🚀 Getting Started & Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Shopping-World
