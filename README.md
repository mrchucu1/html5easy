# HTML5-EZ Engine (html5e.js)

**Version:** 0.1.0 (Alpha)
**Author:** [Diego Navarro]
**License:** MIT

> [!WARNING]
> ### Proof of Concept: Not For Production Use
>
> This codebase should be considered a **Proof of Concept (POC)** and is **not recommended for production use**. 
>
> The script was developed as an early prototype to explore declarative UI rendering with jQuery. As a result, it has significant architectural issues that impact its security, stability, and **maintainability**.
>
> Key issues include:
> -   **Critical Security Risk:** Use of `eval()` on a DOM attribute creates a severe Cross-Site Scripting (XSS) vulnerability.
> -   **Lack of Maintainability:** The code consists of a single, long procedural function with deeply intertwined logic, making it extremely difficult to debug, modify, or extend.
> -   **Hardcoded Values:** Asset paths and configuration settings are hardcoded directly into the script, making it inflexible.
> -   **Incomplete Plugin Architecture:** The plugin pattern (`html5e2`) is defined but not functionally implemented.
>
> This documentation is provided to analyze the original concept and demonstrate how it was intended to work. Do not deploy this code in a live environment.

`HTML5-EZ Engine` is a lightweight jQuery plugin for declaratively building and styling common website components like headers, navigation bars, and galleries directly from your HTML.

The engine works by reading `data-*` attributes on your semantic HTML5 tags (`<header>`, `<nav>`, etc.) and automatically applying styles and generating necessary sub-elements. This allows for rapid prototyping and clean separation of configuration from scripting.

## Features

-   **Declarative Setup:** Configure your layout by adding attributes to your HTML, not by writing complex JavaScript.
-   **Themable Components:** Apply consistent themes to the body, header, and navigation.
-   **Responsive Header:** Automatically generates mobile navigation icons and adjusts layout.
-   **Dynamic Navigation:** Build a complex navigation menu from a single JavaScript object embedded in an attribute.
-   **Simple Image Gallery:** A basic click-to-expand image gallery.

## Prerequisites

-   [jQuery](https://jquery.com/) (version 1.9+ recommended)

## Installation

1.  Include jQuery in your project.
2.  Include the `html5e.js` script after jQuery.
3.  Include the corresponding `html5e.css` stylesheet in your `<head>`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Awesome Site</title>
    <!-- Add the stylesheet -->
    <link rel="stylesheet" href="path/to/html5e.css">
</head>
<body>
    <!-- Your HTML structure -->
    <header id="header" data-text="My Website" data-logo-src="img/logo.png"></header>
    <nav data-config="navConfig"></nav>
    
    <!-- Add jQuery and the plugin script -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="path/to/html5e.js"></script>
    <script>
        // Initialize the engine
        $(document).ready(function() {
            html5e();
        });
    </script>
</body>
</html>
```

---

## Usage & Configuration

The engine configures elements based on the `data-*` attributes you provide. Below are the available options for each major element.

### `<body>` Element

| Attribute      | Type    | Default   | Description                                                                 |
| -------------- | ------- | --------- | --------------------------------------------------------------------------- |
| `data-theme`   | String  | `"html5e"`  | The CSS class name to apply as the main theme for the page.               |
| `data-movil`   | Boolean | `true`    | If `true`, enables mobile-specific classes and behaviors across components. |

**Example:**
```html
<body data-theme="dark-mode" data-movil="true">
  ...
</body>
```

### `<header>` Element

The header is the most configurable component.

| Attribute               | Type    | Default | Description                                                                                             |
| ----------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `data-theme`            | String  | `html5e`  | The CSS class to apply as the theme for the header.                                                     |
| `data-max-width`        | String  | `(none)`  | Sets the `max-width` CSS property of the header (e.g., `"1200px"`).                                        |
| `data-padding`          | String  | `(none)`  | Sets the `padding` CSS property (e.g., `"10px 20px"`).                                                   |
| `data-logo-src`         | String  | `(none)`  | Path to the logo image file. If omitted, no logo is displayed.                                          |
| `data-logo-align`       | String  | `left`    | Sets the alignment of the header content. Can be `left`, `center`, or `right`.                        |
| `data-logo-max-size`    | String  | `(none)`  | Sets the `max-width` and `max-height` for the logo image (e.g., `"150px"`).                               |
| `data-logo-shape`       | String  | `circle`  | If set to `"rect"`, it applies a class to prevent circular styling of the logo.                         |
| `data-text`             | String  | `(none)`  | The main heading text (`<h1>`) to display in the header.                                                |
| `data-text-align`       | String  | `(none)`  | Floats the heading text. Can be `left` or `right`.                                                    |
| `data-movil-nav`        | Boolean | `true`    | If `true`, shows a mobile navigation icon (hamburger menu) on small screens.                            |
| `data-rightbar`         | Boolean | `false`   | If `true`, shows a generic right-bar icon (e.g., for search or a side panel) on small screens.        |

**Example:**
```html
<header id="header"
    data-theme="dark-header"
    data-max-width="1140px"
    data-logo-src="assets/images/logo-white.png"
    data-logo-align="left"
    data-logo-max-size="120px"
    data-text="My Application"
    data-text-align="left"
    data-movil-nav="true">
</header>
```

### `<nav>` Element

The navigation menu is configured via a single `data-config` attribute, which should point to a JavaScript object. **Note:** For security, the value should be a valid JSON string.

| Attribute      | Type   | Default | Description                                                                 |
| -------------- | ------ | ------- | --------------------------------------------------------------------------- |
| `data-config`  | String | `(none)`| A **JSON string** representing the navigation configuration object.         |

#### Navigation `data-config` Object Structure:

```javascript
// This JavaScript object should be converted to a JSON string 
// before being placed in the data-config attribute.
const navConfig = {
    "theme": "html5e", // CSS theme class
    "landscape": "horizontal", // "horizontal" or "vertical"
    "align": "center", // "left", "center", or "right"
    "maxWidth": "800px", // Max width of the nav container
    "padding": "10px 0", // Padding for the nav container
    "nav": {
        "text": ["Home", "About", "Products", "Contact"],
        "link": ["/", "/about.html", "/products.html", "/contact.html"],
        "class": ["", "", "cta-button", ""],
        "submenu": false // Submenu functionality is not yet fully implemented
    }
};

// Example of placing it in HTML (as a string):
// <nav data-config='{"theme":"html5e", "landscape":"horizontal", ...}'></nav>
```

**Example:**
```html
<!-- You must define the navConfig object in a <script> tag -->
<script>
    const navConfig = { /* ... as defined above ... */ };
</script>

<!-- Then set the attribute, stringifying the object -->
<nav id="nav"></nav>
<script>
    document.getElementById('nav').setAttribute('data-config', JSON.stringify(navConfig));
</script>
```
*Note: The original code's use of `eval()` is a security risk. A production-ready version should use `JSON.parse()` as shown in the recommended usage above.*

### Gallery (`#galeria`)

The gallery functionality is basic. It targets a container with the ID `#galeria` and makes its direct children clickable to open a full-screen view.

**HTML Structure:**
```html
<div id="galeria">
    <div class="gallery-item">
        <img src="path/to/thumbnail1.jpg" alt="Description 1">
    </div>
    <div class="gallery-item">
        <img src="path/to/thumbnail2.jpg" alt="Description 2">
    </div>
</div>
```
When a `.gallery-item` is clicked, it opens a modal overlay displaying the image found within it.
