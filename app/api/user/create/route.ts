import { NextRequest, NextResponse } from "next/server";

// This is the function for interacting with the user API endpoint 
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const response = await fetch('https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(await req.json()),
        });

        if (!response.ok) {
            console.error('Failed to create user:', response.statusText);
            return NextResponse.json({ message: 'Failed to create user', status: response.status, statusText: response.statusText });
        }

        const data = await response.json();
        return NextResponse.json({ message: 'User created successfully', data: data });

    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ message: 'Failed to create user', error: error });
    };
}