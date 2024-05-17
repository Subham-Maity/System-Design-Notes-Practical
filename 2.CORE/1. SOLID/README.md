1. **Initialize the project**:
    - Open your terminal or command prompt and navigate to the directory where you want to create your project.
    - Run the following command to initialize a new Node.js project and create a `package.json` file:

      ```
      npm init -y
      ```

2. **Install TypeScript**:
    - Install TypeScript as a development dependency in your project by running the following command:

      ```
      npm install --save-dev typescript
      ```

3. **Configure TypeScript**:
    - Create a `tsconfig.json` file in your project root directory. You can generate a basic `tsconfig.json` file by running the following command:

      ```
      npx tsc --init
      ```

    - Open the `tsconfig.json` file and make sure the `"outDir"` property is set to the directory where you want TypeScript to output the compiled JavaScript files (e.g., `"outDir": "dist"`).

4. **Create your TypeScript file**:
    - Create a new directory for your TypeScript source files (e.g., `src`).
    - In the `src` directory, create a new file with a `.ts` extension (e.g., `Order.ts`) and paste your TypeScript code into it.

5. **Install additional dependencies (if needed)**:
    - If your TypeScript code depends on any external libraries or packages, you'll need to install them as well. For example, if you're using a library named `my-library`, you can install it by running:

      ```
      npm install my-library
      ```

6. **Compile your TypeScript code**:
    - Open your terminal or command prompt and navigate to your project root directory.
    - Run the following command to compile your TypeScript code into JavaScript:

      ```
      npx tsc
      ```

    - This command will generate the corresponding JavaScript files in the `outDir` directory specified in your `tsconfig.json` file (e.g., `dist`).

7. **Run your JavaScript code**:
    - If your TypeScript code is the entry point of your application (e.g., a Node.js script), you can run the compiled JavaScript file using Node.js:

      ```
      node dist/Order.js
      ```

    - If your TypeScript code is intended to run in a web browser, you'll need to create an HTML file, include the compiled JavaScript file(s) in the HTML file, and open the HTML file in a web browser.



