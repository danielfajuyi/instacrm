# Netflix-Style Instagram CRM

A full-stack MERN application that provides a Netflix-style interface for managing your Instagram links (posts & reels). Save, organize, and browse your favorite Instagram content with smooth animations and a beautiful UI.

## 🚀 Features

- **Netflix-Style Interface**: Beautiful rows grouped by categories with smooth scroll animations
- **Instagram Embed Integration**: Official Instagram embed support with lazy loading
- **Smart Organization**: Tag-based categorization with predefined and custom tags
- **Advanced Filtering**: Search by caption, filter by tag, sort by date
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Real-time Updates**: Optimistic UI with toast notifications
- **Firebase Integration**: Ready for user uploads and authentication

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **Tailwind CSS** for styling with custom Netflix theme
- **Framer Motion** for smooth page transitions
- **GSAP** for advanced scroll animations
- **React Hook Form** for form handling
- **Axios** for API communication
- **React Hot Toast** for notifications

### Backend
- **Node.js** with Express framework
- **MongoDB** with Mongoose ODM
- **Express Validator** for input validation
- **Helmet** for security headers
- **CORS** for cross-origin requests
- **Rate limiting** for API protection

### Additional
- **Firebase** for file storage
- **Instagram oEmbed API** for embed data
- **Concurrently** for development workflow

## 📦 Installation

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### 1. Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd netflix-instagram-crm

# Install all dependencies
npm run install:all
```

### 2. Environment Setup

#### Server Environment (.env in `/server`)
```bash
# Copy example file
cp server/.env.example server/.env

# Edit with your values
MONGODB_URI=mongodb://localhost:27017/instagram-crm
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# Optional: Instagram oEmbed access token
INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token
```

#### Client Environment (.env in `/client`)
```bash
# Copy example file
cp client/.env.example client/.env

# Edit with your Firebase config
VITE_API_BASE_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Database Setup

```bash
# Start MongoDB (if running locally)
mongod

# Seed the database with sample data
npm run seed
```

### 4. Run the Application

```bash
# Development mode (runs both client and server)
npm run dev

# Or run individually:
npm run client:dev  # Client only (port 3000)
npm run server:dev  # Server only (port 5000)
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api

## 🎯 Usage

### Adding Instagram Links

1. Navigate to **Add Link** page
2. Paste an Instagram post or reel URL
3. Add an optional caption
4. Select or create a custom tag/category
5. Click "Add to Collection"

**Supported URL formats:**
- `https://www.instagram.com/p/ABC123...`
- `https://www.instagram.com/reel/XYZ789...`

### Browsing Your Collection

- **Home Page**: Netflix-style rows grouped by tags
- **Saved Links**: Grid view with advanced filtering options
- **Search**: Find links by caption content
- **Filter**: Show only specific categories
- **Sort**: By newest or oldest first

### Managing Links

- **Click any card** to open detailed modal
- **Edit**: Update caption or change category
- **Copy**: Copy Instagram URL to clipboard
- **Delete**: Remove from collection
- **External**: Open original Instagram post

## 🏗️ Project Structure

```
netflix-instagram-crm/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── lib/           # Utilities and API
│   │   └── index.css      # Tailwind styles
│   ├── public/
│   └── package.json
├── server/                 # Express backend
│   ├── src/
│   │   ├── controllers/    # Route handlers
│   │   ├── models/        # Mongoose schemas
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── scripts/       # Utility scripts
│   │   └── server.js      # Entry point
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🔌 API Endpoints

### Links
- `GET /api/links` - Get all links (with query params: `tag`, `q`, `sort`)
- `GET /api/links/grouped` - Get links grouped by tag
- `GET /api/links/tags` - Get unique tags
- `GET /api/links/:id` - Get single link
- `POST /api/links` - Create new link
- `PATCH /api/links/:id` - Update link
- `DELETE /api/links/:id` - Delete link

### Health Check
- `GET /api/health` - Server health status

## 🎨 Customization

### Default Categories
The app comes with these predefined categories:
- Hotel
- Clothing Brand
- Graphic Design
- Web Design
- Food
- Travel
- Fitness
- Inspiration

You can easily modify these in `/client/src/pages/AddLink.jsx`.

### Styling
The app uses a custom Netflix-inspired theme built on Tailwind CSS. Colors and styles can be customized in `/client/tailwind.config.js`.

### Instagram Embed
The app uses the official Instagram embed script for the best experience. Embeds are lazy-loaded and cached for performance.

## 🔒 Security Features

- **Rate Limiting**: Prevents API abuse
- **Input Validation**: Server-side validation with express-validator
- **CORS Configuration**: Restricts cross-origin requests
- **Helmet**: Security headers for Express
- **URL Sanitization**: Normalizes and validates Instagram URLs

## 📱 Mobile Support

The application is fully responsive and provides an excellent mobile experience:
- Touch-friendly interface
- Mobile-optimized modals
- Responsive grid layouts
- Touch scrolling for Netflix rows

## 🚀 Production Deployment

### Build for Production
```bash
# Build client
npm run client:build

# Start production server
npm run server:start
```

### Environment Variables for Production
- Update `CLIENT_URL` to your production domain
- Use MongoDB Atlas connection string
- Set `NODE_ENV=production`
- Configure Firebase for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Instagram for the embed API
- Netflix for design inspiration
- The amazing open-source community

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](../../issues) page
2. Review the environment setup
3. Ensure all dependencies are installed
4. Verify MongoDB is running

---

**Happy collecting! 🎬📸**