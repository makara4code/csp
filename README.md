<!-- Help Help write me about CSP -->
# Content Security Policy (CSP)
## How to run the project?:
- Clone the repository
- Run the following command to install the dependencies:
    ```bash
    npm install
    ```
- Run the following command to start the server:
    ```bash
    npm run dev
    ```
- Open the browser and navigate to `http://localhost:8000`

Note: Make change to cspConfig inside `server.js` to see the changes in CSP.

## What is CSP?
Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement to distribution of malware.

## Why CSP?
- Prevents Cross Site Scripting (XSS) attacks
- Prevents data injection attacks
- Prevents clickjacking attacks
- Prevents plugin attacks
- Prevents mixed content attacks


## How to implement CSP?
CSP is implemented using the `Content-Security-Policy` header. The `Content-Security-Policy` header allows you to restrict how resources such as JavaScript, CSS, or pretty much anything that the browser loads on your website.

## Directives:
- `default-src`: The default-src directive serves as a fallback for the other CSP fetch directives. For each of the following directives that are not defined in the policy, the user agent will look for the default-src directive and will use this value for it.
- `script-src`: The `script-src` directive restricts the sources from which JavaScript can be executed.
- `style-src`: The `style-src` directive restricts the sources from which CSS can be loaded.
- `img-src`: The `img-src` directive restricts the sources from which images can be loaded.
- `connect-src`: The `connect-src` directive restricts the sources to which the protected resource can send requests.
- `font-src`: The `font-src` directive restricts the sources from which fonts can be loaded.
- `object-src`: The `object-src` directive restricts the sources from which plugins can be embedded.
- `media-src`: The `media-src` directive restricts the sources from which media elements can be loaded.
- `frame-src`: The `frame-src` directive restricts the sources from which the protected resource can embed frames.
- `sandbox`: The `sandbox` directive enables a sandbox for the requested resource similar to the iframe sandbox attribute. It applies restrictions to a page's actions including preventing popups, preventing the execution of plugins and scripts, and enforcing a same-origin policy.
- `report-uri`: The `report-uri` directive instructs the user agent to report attempts to violate the Content Security Policy. These violation reports consist of JSON documents sent via an HTTP POST request to the specified URI.
