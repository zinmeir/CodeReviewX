<div align="center">
  <h1>🔍 CodeReviewX</h1>
  <p><b>AI-Powered Automated Pull Request Reviewer & CI/CD Assistant</b></p>
  
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
  ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
  ![GitHub API](https://img.shields.io/badge/GitHub_API-100000?style=for-the-badge&logo=github&logoColor=white)
  ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
</div>

---

## 🚀 Overview

**CodeReviewX** is an LLM-based automated tool designed to act as a seamless CI/CD pipeline assistant. It integrates directly with GitHub to automatically analyze pull requests, combining traditional static analysis with deep semantic insights powered by the OpenAI API.

### ✨ Core Features
* **Automated PR Reviews:** Listens to GitHub webhooks and triggers an automated analysis the moment a new Pull Request is opened.
* **Deep Code Analysis:** Evaluates code for security vulnerabilities, performance bottlenecks, and clean code best practices.
* **GitHub Bot Integration:** Automatically posts context-aware, inline review comments directly on GitHub PRs.
* **Containerized Architecture:** Fully Dockerized for seamless, reproducible environments across the frontend dashboard and backend API.

---

## 🏗️ Architecture & Tech Stack

| Component | Technology | Description |
|-----------|------------|-------------|
| **Frontend** | React (Vite) | Client-side dashboard for manual PR submission and review history. |
| **Backend** | Python (Flask) | Lightweight API handling webhook ingestion, static analysis, and LLM orchestration. |
| **AI Engine** | OpenAI API (GPT) | Generates semantic analysis and code improvement suggestions. |
| **Integration** | GitHub API | Fetches PR diffs and posts automated inline code comments. |
| **DevOps** | Docker | Multi-container setup to spin up the full stack effortlessly. |

---

## 🚦 Getting Started

Follow these steps to run the complete full-stack environment locally on your machine.

### Prerequisites
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/zinmeir/codereviewx.git](https://github.com/zinmeir/codereviewx.git)
   cd codereviewx
   ```

2. **Build and spin up the Docker containers:**
   ```bash
   docker compose up --build
   ```

3. **Access the application:**
   * **Frontend Dashboard:** Navigate to `http://localhost:3000`
   * **Backend API Health Check:** Navigate to `http://localhost:5000/api/health`

---

## 🔮 Future Roadmap

The next phase of development focuses on replacing the mock API data with live production endpoints:
* **Live Webhooks:** Configuring `ngrok` to expose the local Flask backend to receive live GitHub Webhook events.
* **OpenAI Integration:** Writing the dynamic prompt engineering pipeline to feed actual `.diff` files to the GPT-4 models.
* **Automated Commenting:** Utilizing the PyGithub library to post the LLM's feedback as structured inline comments on the user's PR.

---

<div align="center">
  <i>Built by <a href="https://github.com/zinmeir">Muhammad Shaheer Akhtar</a></i>
</div>
