import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            );
        }

        // TODO: Integrate with your email service (SendGrid, Resend, etc.)
        // For now, we'll log the email and send a notification
        // You can replace this with actual email sending logic
        
        console.log(`New subscriber: ${email}`);

        // Send notification email to company
        // Example with a future email service:
        // await sendEmail({
        //     to: 'hello@protectron.ai',
        //     subject: 'New Assessment Request',
        //     body: `New user signed up for assessment: ${email}`
        // });

        return NextResponse.json({ 
            success: true, 
            message: 'Email submitted successfully',
            redirectUrl: 'https://app.protectron.ai'
        });
    } catch (error) {
        console.error('Subscribe error:', error);
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
