# Woza - Long Distance Ride Sharing

A modern web application for long-distance ride sharing across South Africa. Connect verified drivers with passengers for safe, affordable travel.

## Features

- 🚗 Long-distance ride sharing platform
- ✅ Verified drivers and secure payments
- 📅 Organized schedules
- 💰 Split costs with other passengers
- 🔒 Safe and reliable transportation

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd woza-website-main

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Technologies Used

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library for building components
- **shadcn-ui** - Beautiful, accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Images and static assets
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service.

## License

All rights reserved.
