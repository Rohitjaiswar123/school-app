# Setup Guide for School Management System

## 🚀 Quick Setup

### 1. Environment Configuration

Create a `.env.local` file in the root directory with the following content:

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

### 2. Database Setup

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

### 3. Run the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Popular Database Hosting Options

### PlanetScale (Recommended for production)
- Free tier available
- MySQL compatible
- Automatic scaling
- Built-in connection pooling

### Railway
- Easy deployment
- MySQL support
- Good for development and small projects

### Supabase
- PostgreSQL (requires schema modification)
- Free tier available
- Built-in authentication

### Local MySQL
- Good for development
- Requires MySQL installation
- Use XAMPP or MAMP for easy setup

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify your DATABASE_URL format
   - Check if MySQL service is running
   - Ensure database exists

2. **Prisma Client Error**
   - Run `npm run db:generate` after schema changes
   - Restart development server

3. **Image Upload Issues**
   - Ensure `public/schools` directory exists
   - Check file permissions
   - Verify image file format

### Getting Help

- Check the [README.md](README.md) for detailed documentation
- Review the Prisma schema in `prisma/schema.prisma`
- Check the API routes in `app/api/` directory
