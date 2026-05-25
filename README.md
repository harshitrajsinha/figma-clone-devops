This project is forked from [JavaScript-Mastery-Pro/figma-ts](https://github.com/JavaScript-Mastery-Pro/figma-ts), to containerize the application, implement CI/CD pipeline for automatic testing, and building, and finally deploying the app onto Kubernetes cluster 👍<br>

<div align="center">
  <br />
    <a href="https://youtu.be/IxqC6I0U64s" target="_blank">
      <img src="https://github.com/JavaScript-Mastery-Pro/figma-ts/assets/151519281/e03dc22d-0f45-464b-9dc3-f01f07906bee" alt="Project Banner">
    </a>
  <br />
</div>

# <a name="">Devopsifying the project</a>

### 🐳 Learnings from Dockerizing this nextjs-based application
1. [I learnt how to create an optimized NextJS app with additional configuration (without configuration, we get larger size docker image even with multi-stage build process.)](#learning-1)
2. [I learnt how to add env var at build time, as required for this application.](#learning-2)




<a name="learning-1">Default un-optimized behaviour of NextJS app</a> => <br>
Unlike Vite, NextJS on `npm run build` does not generate static HTML, CSS, JS files to serve directly, rather the build created in `.next` directory depends on package.json and node modules to serve the app => Even if Dockerfile is layered with minimal base image, node modules would still add significant weight to the docker image.Reducing docker image by x%<br>
<a name="learning-2">Passing env at build time</a> => <br>
    

## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

A minimalistic Figma clone to show how to add real-world features like live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using fabric.js.

## <a name="tech-stack">Tech Stack</a>

- Next.js
- TypeScript
- Liveblocks
- Fabric.js
- Shadcn
- Tailwind CSS

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/JavaScript-Mastery-Pro/figma-ts.git
cd figma-ts
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
```

Replace the placeholder values with your actual Liveblocks credentials. You can obtain these credentials by signing up on the [Liveblocks website](https://liveblocks.io).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
