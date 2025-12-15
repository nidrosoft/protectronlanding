import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Compare EU AI Act Compliance Solutions - Protectron.ai';
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
                            background: 'rgba(16, 185, 129, 0.2)',
                            border: '1px solid rgba(16, 185, 129, 0.4)',
                            borderRadius: '9999px',
                            padding: '8px 20px',
                            marginBottom: '24px',
                        }}
                    >
                        <span
                            style={{
                                color: '#34d399',
                                fontSize: '16px',
                                fontWeight: 600,
                            }}
                        >
                            Comparison Guide
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
                            fontSize: '52px',
                            fontWeight: 700,
                            color: 'white',
                            lineHeight: 1.2,
                            margin: 0,
                            marginBottom: '16px',
                            maxWidth: '900px',
                        }}
                    >
                        Compare EU AI Act
                        <br />
                        <span style={{ color: '#a78bfa' }}>Compliance Solutions</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        style={{
                            fontSize: '22px',
                            color: '#94a3b8',
                            margin: 0,
                            maxWidth: '700px',
                            lineHeight: 1.5,
                        }}
                    >
                        Protectron.ai vs Credo AI vs Holistic AI vs Vanta vs Consultants
                    </p>

                    {/* Comparison boxes */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '16px',
                            marginTop: '32px',
                        }}
                    >
                        <div style={{ background: 'rgba(124, 58, 237, 0.3)', borderRadius: '12px', padding: '12px 20px', color: 'white', fontSize: '14px', fontWeight: 600 }}>
                            10x Cheaper
                        </div>
                        <div style={{ background: 'rgba(124, 58, 237, 0.3)', borderRadius: '12px', padding: '12px 20px', color: 'white', fontSize: '14px', fontWeight: 600 }}>
                            Self-Service
                        </div>
                        <div style={{ background: 'rgba(124, 58, 237, 0.3)', borderRadius: '12px', padding: '12px 20px', color: 'white', fontSize: '14px', fontWeight: 600 }}>
                            Days Not Months
                        </div>
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
                    }}
                >
                    <span style={{ color: '#64748b', fontSize: '16px' }}>protectron.ai/compare</span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
