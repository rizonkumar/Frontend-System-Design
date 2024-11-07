# localStorage in JavaScript - Complete Guide

## What is localStorage?
localStorage is a web storage solution that allows websites to store key-value pairs in a web browser with no expiration date. The stored data persists even after the browser window is closed.

## Key Features
- Data stored in localStorage remains until explicitly removed
- Storage limit of about 5-10 MB (varies by browser)
- Data is stored as strings only
- Data is specific to the protocol of the page (HTTP/HTTPS)
- Works on same-origin policy

## Basic Operations

### 1. Storing Data
```javascript
// Basic syntax
localStorage.setItem('key', 'value');

// Examples
localStorage.setItem('username', 'John');
localStorage.setItem('mode', 'dark');

// Alternative syntax
localStorage.key = 'value';
```

### 2. Retrieving Data
```javascript
// Basic syntax
const value = localStorage.getItem('key');

// Examples
const username = localStorage.getItem('username');
const mode = localStorage.getItem('mode');

// Alternative syntax
const value = localStorage.key;
```

### 3. Removing Data
```javascript
// Remove specific item
localStorage.removeItem('key');

// Clear all data
localStorage.clear();
```

### 4. Checking if Key Exists
```javascript
if (localStorage.getItem('key') !== null) {
    // Key exists
}
```

## Working with Complex Data Types

### Storing Objects
```javascript
const user = {
    name: 'John',
    age: 30,
    preferences: {
        theme: 'dark'
    }
};

// Converting to string before storing
localStorage.setItem('user', JSON.stringify(user));

// Retrieving and parsing back to object
const storedUser = JSON.parse(localStorage.getItem('user'));
```

## Error Handling
```javascript
try {
    localStorage.setItem('key', 'value');
} catch (e) {
    if (e.name === 'QuotaExceededError') {
        alert('Storage limit exceeded!');
    }
}
```

## Best Practices

1. **Error Checking**
```javascript
function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (e) {
        console.error('localStorage error:', e);
        return false;
    }
}
```

2. **Default Values**
```javascript
function getLocalStorage(key, defaultValue) {
    const value = localStorage.getItem(key);
    return value !== null ? value : defaultValue;
}
```

3. **Namespace Your Keys**
```javascript
const APP_PREFIX = 'myApp_';
localStorage.setItem(`${APP_PREFIX}setting`, 'value');
```

## Example: Theme Switcher Implementation
```javascript
// Save theme preference
function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

// Load theme preference
function loadTheme() {
    return localStorage.getItem('theme') || 'light'; // Default to light
}

// Apply theme
function applyTheme() {
    const theme = loadTheme();
    document.body.className = theme;
}

// Usage
document.getElementById('themeToggle').addEventListener('click', () => {
    const currentTheme = loadTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    saveTheme(newTheme);
    applyTheme();
});
```

## Browser Support
- All modern browsers support localStorage
- Available in IE8+
- Some private browsing modes may restrict localStorage

## Security Considerations
- Don't store sensitive information
- Data is stored in plaintext
- Vulnerable to XSS attacks
- Clear sensitive data when user logs out

## Limitations
- Storage capacity varies by browser
- Synchronous API (can block main thread)
- String-only storage
- Domain-specific storage
