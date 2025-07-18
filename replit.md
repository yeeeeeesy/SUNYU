# Personal Portfolio Website - Replit Documentation

## Overview

This is a modern, responsive single-page personal portfolio website for Sunyu Ye, an Economics undergraduate at Zhejiang University. The application showcases academic background, research focus, projects, and professional experience with an integrated AI chatbot for visitor interaction.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom theme provider with light/dark mode support
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Design**: RESTful endpoints with JSON responses
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Session Storage**: connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement via Vite middleware integration

### UI Component System
- **Base Library**: Radix UI primitives for accessibility
- **Design System**: shadcn/ui component library with "new-york" style
- **Responsive Design**: Mobile-first approach with breakpoint-aware components
- **Theming**: CSS custom properties for consistent color schemes

## Key Components

### Core Application Structure
- **Single Page Application**: All content sections on one scrollable page
- **Fixed Navigation**: Top navigation bar with smooth scroll-to-section functionality
- **Fixed Sidebar**: Left sidebar containing profile information and contact links
- **Content Sections**: Introduction, Research Focus, Resume, Education, Experience, Projects, Awards, Skills, Contact
- **Floating Chatbot**: AI-powered assistant for answering questions about the profile

### Navigation System
- **Top Navigation**: Fixed header with theme toggle and section links
- **Smooth Scrolling**: JavaScript-based section navigation
- **Mobile Responsive**: Collapsed navigation on mobile devices
- **Theme Toggle**: Light/dark mode switcher with system preference detection

### Content Management
- **Static Content**: Profile information stored in React components
- **Asset Management**: Images and documents served from attached_assets directory
- **Downloadable Resume**: PDF resume file with download functionality
- **SEO Optimization**: Meta tags and Open Graph properties for social sharing

### AI Integration
- **OpenAI ChatGPT**: Integration with OpenAI API for conversational responses
- **Context-Aware**: Pre-configured with comprehensive profile information
- **Real-time Chat**: Instant messaging interface with loading states
- **Error Handling**: Graceful fallbacks for API failures

## Data Flow

### Client-Side State Management
1. **Theme State**: Managed via React Context with localStorage persistence
2. **Chat State**: Local component state for message history and input
3. **Navigation State**: Intersection Observer for active section highlighting
4. **Mobile State**: Window resize listeners for responsive behavior

### Server Communication
1. **Chat Endpoint**: POST /api/chat for AI conversation
2. **Static Assets**: Direct file serving for images and documents
3. **Error Handling**: Centralized error middleware with status code management
4. **Request Logging**: Development-mode request/response logging

### Database Schema
- **Users Table**: Basic user authentication structure (currently using memory storage)
- **PostgreSQL Ready**: Drizzle configuration for production database deployment
- **Migration Support**: Database migration system via drizzle-kit

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem with TypeScript support
- **Styling**: Tailwind CSS and PostCSS for styling pipeline
- **Database**: Drizzle ORM with Neon Database serverless PostgreSQL
- **AI Service**: OpenAI API for chatbot functionality
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation and formatting

### Development Tools
- **Build System**: Vite with React plugin and runtime error overlay
- **TypeScript**: Full type safety across client and server
- **ESBuild**: Fast JavaScript bundling for production builds
- **Development Server**: Express with Vite middleware for hot reloading

### Third-Party Services
- **OpenAI API**: GPT-4o model for natural language processing
- **Neon Database**: Serverless PostgreSQL for production data storage
- **Replit Integration**: Development environment optimizations and banners

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React application to dist/public
2. **Server Build**: ESBuild bundles Express server to dist/index.js
3. **Static Assets**: Attached assets copied to build output
4. **Environment Variables**: DATABASE_URL and OPENAI_API_KEY required

### Production Configuration
- **Node.js Environment**: ES modules with production optimizations
- **Database Connection**: PostgreSQL via connection string
- **Static File Serving**: Express serves built React application
- **API Routes**: Express routes handle backend functionality

### Development Workflow
- **Local Development**: tsx for TypeScript execution with hot reloading
- **Database Management**: Drizzle migrations via npm scripts
- **Type Checking**: TypeScript compilation checking without emission
- **Asset Management**: Direct file serving from attached_assets directory

### Scalability Considerations
- **Serverless Ready**: Compatible with serverless deployment platforms
- **Database Scaling**: PostgreSQL connection pooling support
- **CDN Integration**: Static assets can be served via CDN
- **Caching Strategy**: Client-side caching via TanStack Query configuration