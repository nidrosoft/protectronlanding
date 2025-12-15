import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Protectron.ai - EU AI Act Compliance Platform';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                    position: 'relative',
                }}
            >
                {/* Background pattern */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
                        display: 'flex',
                    }}
                />

                {/* Content container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '60px',
                        textAlign: 'center',
                        zIndex: 10,
                    }}
                >
                    {/* Badge */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(124, 58, 237, 0.2)',
                            border: '1px solid rgba(124, 58, 237, 0.4)',
                            borderRadius: '9999px',
                            padding: '8px 20px',
                            marginBottom: '24px',
                        }}
                    >
                        <span style={{ fontSize: '18px' }}>🇪🇺</span>
                        <span
                            style={{
                                color: '#a78bfa',
                                fontSize: '16px',
                                fontWeight: 600,
                            }}
                        >
                            EU AI Act Compliance
                        </span>
                    </div>

                    {/* Logo/Brand */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '20px',
                        }}
                    >
                        <div
                            style={{
                                width: '48px',
                                height: '48px',
                                background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <span style={{ fontSize: '28px', color: 'white', fontWeight: 700 }}>P</span>
                        </div>
                        <span
                            style={{
                                fontSize: '36px',
                                fontWeight: 700,
                                color: 'white',
                            }}
                        >
                            Protectron.ai
                        </span>
                    </div>

                    {/* Main headline */}
                    <h1
                        style={{
                            fontSize: '56px',
                            fontWeight: 700,
                            color: 'white',
                            lineHeight: 1.2,
                            margin: 0,
                            marginBottom: '16px',
                            maxWidth: '900px',
                        }}
                    >
                        EU AI Act Compliance
                        <br />
                        <span style={{ color: '#a78bfa' }}>in Weeks, Not Months</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        style={{
                            fontSize: '24px',
                            color: '#94a3b8',
                            margin: 0,
                            maxWidth: '700px',
                            lineHeight: 1.5,
                        }}
                    >
                        Automated risk classification, documentation generation, and compliance tracking. 10x cheaper than consultants.
                    </p>

                    {/* CTA hint */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '32px',
                            background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                            borderRadius: '9999px',
                            padding: '12px 28px',
                        }}
                    >
                        <span
                            style={{
                                color: 'white',
                                fontSize: '18px',
                                fontWeight: 600,
                            }}
                        >
                            Start Free Assessment →
                        </span>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60px',
                        background: 'rgba(124, 58, 237, 0.1)',
                        borderTop: '1px solid rgba(124, 58, 237, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '40px',
                    }}
                >
                    <span style={{ color: '#64748b', fontSize: '14px' }}>🔒 SOC 2 Compliant</span>
                    <span style={{ color: '#64748b', fontSize: '14px' }}>🇪🇺 EU Data Hosting</span>
                    <span style={{ color: '#64748b', fontSize: '14px' }}>⚡ Setup in Minutes</span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
