# SessionStorage Guide 📝

## 1. Basic Concepts 🔍
* SessionStorage is part of Web Storage API.
* Temporary storage solution (persists only for session).
* Available per tab/window.
* Typical storage limit: 5-10MB (browser dependent).
* Same-origin policy applies.

## 2. Session Behavior and Context 🚪

* Whenever a document is loaded in a particular tab in the browser, a unique page session is created and assigned to that particular tab. This page session is valid only for that specific tab.
* A page session lasts as long as the tab or the browser is open, and survives over page reloads and restores.
* **Opening a page in a new tab or window creates a new session** with the value of the top-level browsing context, differing from how session cookies work.
* Opening multiple tabs/windows with the same URL creates separate `sessionStorage` instances for each tab/window.
* Duplicating a tab copies the tab's `sessionStorage` into the new tab.
* **Closing a tab/window ends the session and clears objects in `sessionStorage`**.

## 3. Core Methods 🛠️

### Basic Operations
```javascript
// Store data
sessionStorage.setItem("key", "value");

// Retrieve data
const data = sessionStorage.getItem("key");

// Remove specific item
sessionStorage.removeItem("key");

// Clear all data
sessionStorage.clear();

// Get number of items
const count = sessionStorage.length;
```

### Working with Objects/Arrays
```javascript
// Storing objects/arrays
const user = {name: "John", age: 30};
sessionStorage.setItem("user", JSON.stringify(user));

// Retrieving objects/arrays
const userData = JSON.parse(sessionStorage.getItem("user"));
```

### Notes on Data Structure Storage 🗒️

1. **Storing Numbers**
   ```javascript
   // Save a number
   const score = 100;
   sessionStorage.setItem("score", score.toString());

   // Retrieve and convert back to a number
   const savedScore = parseInt(sessionStorage.getItem("score"), 10);
   ```

2. **Storing Booleans**
   ```javascript
   // Save a boolean value
   const isAuthenticated = true;
   sessionStorage.setItem("auth", JSON.stringify(isAuthenticated));

   // Retrieve and parse to boolean
   const savedAuth = JSON.parse(sessionStorage.getItem("auth"));
   ```

3. **Storing Arrays**
   ```javascript
   // Save an array
   const fruits = ["apple", "banana", "cherry"];
   sessionStorage.setItem("fruits", JSON.stringify(fruits));

   // Retrieve and parse back to array
   const savedFruits = JSON.parse(sessionStorage.getItem("fruits"));
   ```

4. **Storing Objects**
   ```javascript
   // Save an object
   const settings = { theme: "dark", notifications: true };
   sessionStorage.setItem("settings", JSON.stringify(settings));

   // Retrieve and parse back to object
   const savedSettings = JSON.parse(sessionStorage.getItem("settings"));
   ```

5. **Handling Nested Structures**
   ```javascript
   // Save a nested structure
   const profile = {
       name: "Jane",
       age: 28,
       preferences: {
           theme: "light",
           notifications: false
       }
   };
   sessionStorage.setItem("profile", JSON.stringify(profile));

   // Retrieve and parse back to object
   const savedProfile = JSON.parse(sessionStorage.getItem("profile"));
   console.log(savedProfile.preferences.theme); // Outputs: "light"
   ```

## 4. Key Features 🌟

* **Scope**: Per tab/window only.
* **Lifetime**: Until tab/window closes.
* **Storage**: String data only.
* **Size**: ~5-10MB.
* **Access**: JavaScript (client-side only).
* **Protocol Specific**: Separate storage for HTTP/HTTPS.

## 5. SessionStorage vs localStorage 🔄

| Feature | SessionStorage | localStorage |
|---------|---------------|--------------|
| Lifetime | Tab session | Permanent |
| Scope | Single tab | All tabs/windows |
| Persistence | Lost on tab close | Survives browser close |
| API | Same methods | Same methods |

## 6. Common Use Cases 💡

1. Form data backup.
2. Single page app state.
3. Temporary user preferences.
4. Session-based shopping carts.
5. Wizard/multi-step forms.

## 7. Best Practices ✅

### Error Handling
```javascript
try {
    sessionStorage.setItem("key", value);
} catch (e) {
    if (e.name === 'QuotaExceededError') {
        // Handle storage full
    }
}
```

### Data Validation
```javascript
const getData = (key, defaultValue = null) => {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}
```

## 8. Security Considerations 🔒

* Not for sensitive data.
* Vulnerable to XSS attacks.
* Cleared by privacy settings.
* No built-in encryption.
* Same-origin restricted.

## 9. Common Pitfalls ⚠️

1. Not handling JSON parsing errors.
2. Assuming cross-tab persistence.
3. Not checking storage limits.
4. String-only storage limitations.
5. Not handling quota exceeded.

## 10. Browser Support Check 🌐

```javascript
if (typeof(Storage) !== "undefined") {
    // SessionStorage supported
} else {
    // SessionStorage not supported
}
```

## 11. SessionStorage vs Cookies 🍪

### SessionStorage Advantages
* Larger storage (5-10MB).
* Never sent to server.
* Easier API.
* No expiration handling needed.

### Cookie Advantages
* Server-side access.
* Better browser support.
* Can set expiration.
* Automatic server sync.

