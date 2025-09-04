import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const address = formData.get('address') as string;
    const city = formData.get('city') as string;
    const state = formData.get('state') as string;
    const contact = formData.get('contact') as string;
    const email = formData.get('email') as string;
    const imageFile = formData.get('image') as File;

    // Validation
    if (!name || !address || !city || !state || !contact || !email) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    let imagePath = '';
    
    if (imageFile) {
      // Create schools directory if it doesn't exist
      const schoolsDir = join(process.cwd(), 'public', 'schools');
      await mkdir(schoolsDir, { recursive: true });

      // Generate unique filename
      const timestamp = Date.now();
      const fileExtension = imageFile.name.split('.').pop();
      const fileName = `school_${timestamp}.${fileExtension}`;
      imagePath = `/schools/${fileName}`;

      // Save file
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(join(schoolsDir, fileName), buffer);
    }

    // Save to database
    const school = await prisma.school.create({
      data: {
        name,
        address,
        city,
        state,
        contact,
        email,
        image: imagePath,
      },
    });

    return NextResponse.json(
      { message: 'School added successfully', school },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding school:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
