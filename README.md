# Task Force Pro

**Task Force Pro** is a web application designed to help users manage their finances by tracking transactions, setting budgets, categorizing expenses, and visualizing financial data. The platform ensures that all actions require user authentication, providing a secure and personalized experience.

---

## Features

### 1. **User Authentication**

- **Registration**: Users can create an account by providing their name, email, and password.
- **Login**: Users can log in using their email and password to receive a JWT token for accessing protected routes.

### 2. **Account Management**

- Users can create and manage multiple accounts (e.g., Bank, Mobile Money, Cash).
- Each account has a balance that is updated based on transactions.

### 3. **Transaction Tracking**

- Users can track all income and expense transactions.
- Transactions are linked to specific accounts and categories.

### 4. **Budget Management**

- Users can set budgets for specific periods.
- The platform notifies users when their expenses exceed the budget.

### 5. **Expense Categorization**

- Users can create categories and subcategories for expenses.
- Expenses are linked to specific categories for better organization.

### 6. **Visualization**

- Users can view transaction summaries in a visualized way (e.g., charts, graphs).

### 7. **Secure Access**

- All actions on the platform require the user to be logged in.
- JWT tokens are used for secure authentication.

---

## Technologies Used

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL, Prisma (ORM)
- **Authentication**: JSON Web Tokens (JWT)
- **API Documentation**: Swagger/OpenAPI
- **Testing**: Jest, Supertest
- **Logging**: Winston
- **Deployment**: Render, Fly, Netlify, etc.

---

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **PostgreSQL** (or any other database supported by Prisma)
- **Prisma CLI** (installed globally via `npm install -g prisma`)

---

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mbarndouka/taskforce-challenge
   cd taskforce-pro
   ```
