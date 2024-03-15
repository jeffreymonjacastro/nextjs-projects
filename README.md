# Nextjs-projects
Self-study of Next.js Full Stack Framework

## Next.js Basics

Here are the first steps for a newie in Next.js. 

**Important**
> Have installed the latest version of Node.js and npm

```bash
node -v # v20.11.1
npm -v # 10.5.0
```

**Optional**
> For some reason, I had to install Next locally

```bash
npm install next
```

### 1. Create a Next.js App
To create a new Next.js app, you can use the following command:
```bash
npx create-next-app@latest <name_project>
```
For my projects, I'll be using Typescript, EsLint, TailwindCSS, Route App, and the default foder names

### 2. Run the Development Server
To run the development server, you can use the following command:
```bash
npm run dev
```
The development server will be running on [http://localhost:3000](http://localhost:3000)


### 3. Routing System
Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory it's automatically available as a route.

- The name of the folder will be the route
- If the folder name is in brackets, it will be a dynamic route for ids
- If the folder name is in parentheses, it will be ignored by the router. Useful when you want to put some file anywhere without affecting the routing system

Example:
+ app   -------------------- localhost:3000/
  + about    ------------ localhost:3000/about
    + page.tsx
  + [id]   --------------- localhost:3000/1
    + page.tsx
  + (ignore)  --------- localhost:3000/????
    + page.tsx 
  + layout.tsx
  + page.tsx

### 4. Reserved names

Next.js has some reserved names that you can use to create special routes defaultly

- **page.tsx**: The main file of the route
