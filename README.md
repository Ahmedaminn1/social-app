# Social Media Application

A modern React-based social media application with user authentication, news feed, and profile management features.

## Features

- **User Authentication**: Secure login and registration system
- **News Feed**: Browse and interact with posts
- **User Profiles**: View and manage user profiles
- **Post Details**: Detailed view for individual posts
- **Protected Routes**: Route protection for authenticated and non-authenticated users
- **Responsive Design**: Built with Tailwind CSS and HeroUI components
- **Dark Mode Support**: Customizable theme with dark mode

## Tech Stack

- **React 18**: Modern React with hooks
- **React Router v6**: Client-side routing with protected routes
- **HeroUI**: Beautiful UI component library
- **Tailwind CSS**: Utility-first CSS framework
- **TanStack Query (React Query)**: Server state management
- **React Toastify**: Toast notifications
- **Context API**: Global state management

## Project Structure

```
├── src/
│   ├── components/
│   │   └── ProtectedRoutes/
│   │       ├── AppProtectedRoutes.jsx
│   │       └── AuthProtectedRoutes.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CounterContext.jsx
│   ├── Layouts/
│   │   ├── MainLayout/
│   │   └── AuthLayout/
│   ├── pages/
│   │   ├── NewsFeed/
│   │   ├── UserProfile/
│   │   ├── PostDetails/
│   │   ├── NotFound/
│   │   └── auth/
│   │       ├── Login/
│   │       └── Register/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── hero.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Routes

### Public Routes
- `/login` - User login page
- `/register` - User registration page

### Protected Routes (require authentication)
- `/home` - News feed page
- `/profile` - User profile page
- `/post-details/:id` - Individual post details page

## Key Dependencies

```json
{
  "@heroui/react": "UI component library",
  "react-router-dom": "Client-side routing",
  "@tanstack/react-query": "Data fetching and caching",
  "react-toastify": "Toast notifications",
  "tailwindcss": "CSS framework"
}
```

## Configuration

### Tailwind CSS + HeroUI

The project uses Tailwind CSS v4 with HeroUI plugin configuration:

- **Plugin**: HeroUI components via `hero.js`
- **Dark Mode**: Configured with custom variant
- **Container**: Centered container utility

### React Query

- DevTools enabled in development mode
- Query client configured in `main.jsx`

## Context Providers

The application uses React Context for global state management:

- **AuthContext**: Manages authentication state and user data
- **CounterContext**: Manages counter/notification state

## Protected Routes

The application implements two types of route protection:

1. **AppProtectedRoutes**: Protects routes that require authentication (redirects to login if not authenticated)
2. **AuthProtectedRoutes**: Protects auth routes (redirects to home if already authenticated)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- React components use functional components with hooks
- Strict mode enabled for development
- Protected routes pattern for security

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

## Acknowledgments

- HeroUI for the beautiful component library
- React Router for seamless routing
- TanStack Query for efficient data management
