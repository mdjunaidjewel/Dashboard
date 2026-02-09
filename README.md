# Admin Analytics Dashboard

A **responsive, production-ready Admin Analytics Dashboard** built with **Next.js** and **React**. This dashboard visualizes business data using charts and reusable UI components. It includes dynamic KPIs, user and order analytics, and modern UI with skeleton loading for a smooth user experience.

**Live Demo:** [https://dashboards121.netlify.app/](https://dashboards121.netlify.app/)

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup Instructions](#setup-instructions)  
- [Architecture Decisions](#architecture-decisions)  
- [Assumptions Made](#assumptions-made)  

---

## 🏗️ Project Overview

This project is a modern Admin Dashboard that allows users to visualize key business metrics, including:

- **Total Revenue**
- **Total Users**
- **Orders**
- **Conversion Rate**
- Revenue & Orders charts
- User Distribution pie chart

It features **reusable UI components**, **dynamic charts**, **skeleton loading states**, and **responsive layouts** for a smooth user experience.

---

## 🛠️ Features

### 1. Layout & Structure
- Responsive sidebar (collapsible on tablet & mobile)
- Top header with notifications and user profile dropdown
- Main content area with KPI cards, charts, and tables

### 2. Dashboard Overview
- **4 KPI cards**: Total Revenue, Total Users, Orders, Conversion Rate
- Dynamic values with percentage change indicators
- Responsive grid layout

### 3. Charts Section
- **Revenue Over Time** (Line Chart)
- **Orders Per Month** (Bar Chart)
- **User Distribution** (Pie Chart)
- Interactive tooltips with smooth transitions

### 4. Filters & Interactions
- Date range selector: Last 7 days, Last 30 days, Last 12 months
- Filter dynamically updates KPI and chart data
- Skeleton loading states during data fetch

### 5. Modern UI
- Tailwind CSS for styling
- Smooth hover effects, shadows, and rounded corners
- Fully responsive across mobile, tablet, and desktop

---

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 13+ (React 18)  
- **Language:** JavaScript  
- **Styling:** Tailwind CSS  
- **Charts:** Recharts  
- **Icons:** React Icons  
- **State Management:** Zustand  
- **Loading & Skeletons:** Custom skeleton components  
- **Deployment:** Netlify  

---

## ⚙️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/your-username/dashboard-project.git
cd dashboard-project
