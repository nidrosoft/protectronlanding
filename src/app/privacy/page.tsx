import { Header } from "@/components/marketing/header-navigation/header";
import { Footer } from "@/components/shared/footer";

async function getPrivacyPolicy() {
    const res = await fetch("https://www.iubenda.com/api/privacy-policy/55338690", {
        next: { revalidate: 86400 }
    });
    if (!res.ok) return null;
    return res.json();
}

export default async function PrivacyPolicyPage() {
    const data = await getPrivacyPolicy();

    return (
        <div className="bg-primary min-h-screen flex flex-col">
            <Header />
            
            <main className="flex-1 py-16 md:py-24">
                <div className="mx-auto max-w-4xl px-4 md:px-8">
                    {data?.content ? (
                        <div 
                            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-primary prose-p:text-tertiary prose-li:text-tertiary prose-a:text-brand-600"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    ) : (
                        <div className="text-center">
                            <h1 className="text-display-sm font-semibold text-primary md:text-display-md">Privacy Policy</h1>
                            <p className="mt-4 text-tertiary">
                                View our privacy policy at{" "}
                                <a 
                                    href="https://www.iubenda.com/privacy-policy/55338690" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-brand-600 hover:underline"
                                >
                                    iubenda
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
