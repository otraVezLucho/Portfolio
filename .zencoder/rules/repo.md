---
description: Repository Information Overview
alwaysApply: true
---

# Repository Information Overview

## Repository Summary
This repository is a personal web development portfolio and learning workspace for **Luis Alonso Villada Vega**. It showcases a main portfolio landing page, several integrated frontend mini-projects, and educational resources about web technologies like the DOM.

## Repository Structure
The repository follows a clean separation of concerns for a static web project, organizing resources by their type and function.

- **[./home.html](./home.html)**: The main entry point for the portfolio. It serves as the container for all integrated projects and information.
- **[./js/](./js/)**: Centralized directory for JavaScript logic.
    - `scriptMain.js`: Orchestrates the main portfolio interactions and project switching.
    - `toDoscript.js`: Contains logic for the Task List feature (add, delete, toggle).
    - `pokeApi.js`: Placeholder for Pokemon API integration logic.
    - `scriptVarios.js`: Experimental scripts for various tests.
- **[./css/](./css/)**: Contains styles.
    - `home.css`: Main styling for the portfolio landing page.
    - `styleMain.css`: General styles used across multiple HTML pages.
- **[./assets/](./assets/)**: Houses all visual resources, including profile images (`Lv.jpeg`), technology icons (Java, JS, CSS, MySQL), and background images.
- **[./pagesHtml/](./pagesHtml/)**: A collection of HTML fragments and standalone educational pages.
    - `jsDom.html`: A detailed tutorial on the Document Object Model.
    - `varios.html`, `pokeApi.html`, `jsDom.html`, `css.html`: Specific views for different portfolio sections.
- **[./EmuladorLikes/](./EmuladorLikes/)**: A self-contained project folder demonstrating simple DOM state management (likes counter).

### Main Repository Components
- **Portfolio Home**: A responsive landing page showcasing skills (Java, Spring Boot, MySQL, HTML/CSS/JS), professional background (Generation, Oracle/Alura), and an interactive project selector.
- **Task List (Integrated)**: A dynamic to-do application allowing users to add and remove tasks, demonstrating DOM manipulation and event handling.
- **Educational Guides**: Interactive documents designed to explain web development concepts, specifically targeting the DOM and CSS.
- **Mini-Projects Hub**: A UI component in the home page that dynamically switches between different demonstration sections like Poke API, Nasa API, and Store Catalog (under development).

## Main Entry Points
- **Primary Interface**: [./home.html](./home.html) - Orchestrates the entire portfolio experience.
- **Sub-Project Entry**: [./EmuladorLikes/index.html](./EmuladorLikes/index.html) - Standalone interactive component.
- **Educational Entry**: [./pagesHtml/jsDom.html](./pagesHtml/jsDom.html) - Main documentation resource.

## Projects

### Luis Villada Portfolio (Main)
**Configuration File**: Static HTML/JS/CSS (No package manager)

#### Language & Runtime
**Language**: HTML5, CSS3, JavaScript (ES6 Modules)  
**Version**: Modern Browser compatible  
**Build System**: None (Static files)  
**Package Manager**: None (Native JS modules)

#### Dependencies
**Main Dependencies**:
- Native Web APIs (DOM, Fetch)
- Local JS Modules

#### Build & Installation
No build process is required. To run:
1. Open `home.html` in any modern web browser.

#### Testing
No automated testing framework is currently implemented.

---

### Emulador Likes
**Type**: Standalone Mini-Project

#### Specification & Tools
**Type**: Static Web Page  
**Required Tools**: Web Browser

#### Key Resources
**Main Files**:
- [./EmuladorLikes/index.html](./EmuladorLikes/index.html): Entry point.
- [./EmuladorLikes/style.css](./EmuladorLikes/style.css): Component styles.
- [./EmuladorLikes/scritptIndex.js](./EmuladorLikes/scritptIndex.js): Interactive logic.

#### Usage & Operations
**Key Commands**:
- Open `index.html` to interact with the like button.

#### Validation
**Testing Approach**: Manual validation of the counter increment functionality.

---

### Educational Pages & Utilities
**Type**: Documentation & Learning Resources

#### Key Resources
**Main Files**:
- [./pagesHtml/jsDom.html](./pagesHtml/jsDom.html): Comprehensive guide on DOM manipulation.
- [./pagesHtml/css.html](./pagesHtml/css.html): CSS-related educational content.
- [./js/scriptVarios.js](./js/scriptVarios.js): Utility scripts for miscellaneous tests.

#### Usage & Operations
These files serve as reference material or are loaded into the main portfolio via JS modules or direct navigation.
