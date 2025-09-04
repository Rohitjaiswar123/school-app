# School Management System

A comprehensive school management platform built with Next.js 15, Prisma ORM, MySQL, and Tailwind CSS. This application allows users to add schools with detailed information and view them in an e-commerce style grid layout.

## 🚀 Features

- **Add Schools**: Comprehensive form with validation for school information
- **Image Upload**: Store school images in the public/schools folder
- **View Schools**: E-commerce style grid display of all schools
- **Responsive Design**: Works perfectly on both mobile and desktop
- **Modern UI**: Beautiful interface built with Tailwind CSS
- **Form Validation**: Client-side validation using react-hook-form
- **Database Integration**: MySQL database with Prisma ORM

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS v4
- **Database**: MySQL
- **ORM**: Prisma
- **Form Handling**: React Hook Form
- **TypeScript**: Full type safety

## 📋 Requirements

- Node.js 18+ 
- MySQL database
- npm or yarn package manager

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd school-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="mysql://username:password@localhost:3306/school_db"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

**Replace the following:**
- `username`: Your MySQL username
- `password`: Your MySQL password
- `localhost`: Your MySQL host (use localhost if running locally)
- `3306`: Your MySQL port (default is 3306)
- `school_db`: Your database name

### 4. Database Setup

#### Option A: Using Prisma CLI (Recommended)

```bash
# Generate Prisma client
npm run db:generate

# Push the schema to your database
npm run db:push

# (Optional) Open Prisma Studio to view/edit data
npm run db:studio
```

#### Option B: Manual MySQL Setup

1. Create a MySQL database named `school_db`
2. Run the following SQL to create the schools table:

```sql
CREATE TABLE `schools` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `city` text NOT NULL,
  `state` text NOT NULL,
  `contact` text NOT NULL,
  `image` text,
  `email` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages

### 1. Home Page (`/`)
- Landing page with feature overview
- Call-to-action buttons
- Navigation to other pages

### 2. Add School (`/addSchool`)
- Form to add new schools
- Fields: Name, Address, City, State, Contact, Email, Image
- Form validation
- Image upload functionality

### 3. View Schools (`/showSchools`)
- Grid display of all schools
- Shows: Name, Address, City, Image
- Responsive design for mobile and desktop
- E-commerce style layout

## 🗄️ Database Schema

The application uses a single `schools` table with the following structure:

```sql
schools {
  id        Int      @id @default(autoincrement())
  name      String   @db.Text
  address   String   @db.Text
  city      String   @db.Text
  state     String   @db.Text
  contact   String   @db.Text
  image     String   @db.Text
  email     String   @db.Text
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔧 API Endpoints

### POST `/api/addSchool`
Adds a new school to the database.

**Request Body (FormData):**
- `name` (required): School name
- `address` (required): School address
- `city` (required): City
- `state` (required): State
- `contact` (required): Contact number
- `email` (required): Email address
- `image` (optional): School image file

**Response:**
```json
{
  "message": "School added successfully",
  "school": { ... }
}
```

### GET `/api/getSchools`
Retrieves all schools from the database.

**Response:**
```json
[
  {
    "id": 1,
    "name": "School Name",
    "address": "School Address",
    "city": "City",
    "image": "/schools/image.jpg"
  }
]
```

## 🎨 Styling

The application uses Tailwind CSS v4 with:
- Responsive design
- Modern gradient backgrounds
- Hover effects and transitions
- Mobile-first approach
- Beautiful color scheme

## 📱 Responsive Design

- **Mobile**: Single column layout with optimized spacing
- **Tablet**: Two-column grid layout
- **Desktop**: Four-column grid layout
- **All devices**: Touch-friendly buttons and forms

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security Features

- Input validation and sanitization
- File type restrictions for image uploads
- SQL injection prevention through Prisma ORM
- Environment variable protection

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/yourusername/school-app/issues) page
2. Create a new issue with detailed information
3. Ensure your environment variables are correctly set
4. Verify your MySQL connection

## 🎯 Future Enhancements

- [ ] User authentication and authorization
- [ ] School search and filtering
- [ ] Admin dashboard
- [ ] School ratings and reviews
- [ ] Advanced image management
- [ ] Export functionality
- [ ] API rate limiting
- [ ] Caching layer

---

**Built with ❤️ using Next.js, Prisma, and Tailwind CSS**
