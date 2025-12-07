import { Metadata } from 'next'

export const metadata = {
    title: 'MetaLab - Məxfilik Siyasəti',
    description: 'MetaLab məxfilik siyasəti. Şəxsi məlumatların toplanması, istifadəsi və qorunması haqqında məlumat.',
    keywords: 'məxfilik siyasəti, şəxsi məlumatlar, GDPR, data protection, metalab məxfilik',
    openGraph: {
        title: 'MetaLab - Məxfilik Siyasəti',
        description: 'MetaLab məxfilik siyasəti',
        url: 'https://metalab.az/privacy-policy',
        images: [
            {
                url: 'https://metalab.az/assets/img/og.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MetaLab - Məxfilik Siyasəti',
        description: 'MetaLab məxfilik siyasəti',
        images: ['https://metalab.az/assets/img/og.png'],
    },
}

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Məxfilik Siyasəti</h1>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Giriş</h2>
                    <p className="mb-4">
                        MetaLab olaraq, ziyarətçilərimizin və müştərilərimizin məxfiliyinə böyük əhəmiyyət veririk.
                        Bu məxfilik siyasəti, şəxsi məlumatlarınızın necə toplandığını, istifadə edildiyini və qorunduğunu izah edir.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Toplanan Məlumatlar</h2>
                    <p className="mb-4">
                        Biz aşağıdakı məlumatları toplaya bilərik:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Ad və soyad</li>
                        <li>E-poçt ünvanı</li>
                        <li>Telefon nömrəsi</li>
                        <li>Şirkət məlumatları</li>
                        <li>IP ünvanı və brauzer məlumatları</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. Məlumatların İstifadəsi</h2>
                    <p className="mb-4">
                        Toplanan məlumatlar aşağıdakı məqsədlər üçün istifadə olunur:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Xidmətlərimizin təqdim edilməsi</li>
                        <li>Əlaqə və dəstək xidmətləri</li>
                        <li>Vebsaytın təkmilləşdirilməsi</li>
                        <li>Hüquqi öhdəliklərin yerinə yetirilməsi</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">4. Məlumatların Qorunması</h2>
                    <p className="mb-4">
                        Məlumatlarınızın təhlükəsizliyini təmin etmək üçün müvafiq texniki və təşkilati tədbirlər görürük.
                        Bu tədbirlərə məlumatların şifrələnməsi, giriş nəzarəti və təhlükəsizlik sistemləri daxildir.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Cookie İstifadəsi</h2>
                    <p className="mb-4">
                        Vebsaytımızda cookie-lərdən istifadə edirik. Bu cookie-lər vebsaytın işləməsi və istifadəçi təcrübəsinin
                        yaxşılaşdırılması üçün zəruridir. Cookie-ləri idarə etmək üçün brauzer parametrlərindən istifadə edə bilərsiniz.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">6. Hüquqlarınız</h2>
                    <p className="mb-4">
                        Sizə aid məlumatlar üzrə aşağıdakı hüquqlara sahibsiniz:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Məlumatlarınıza daxil olmaq</li>
                        <li>Məlumatlarınızı düzəltmək</li>
                        <li>Məlumatlarınızın silinməsini tələb etmək</li>
                        <li>Məlumatların emalına etiraz etmək</li>
                        <li>Məlumatların köçürülməsini tələb etmək</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">7. Əlaqə</h2>
                    <p className="mb-4">
                        Məxfilik siyasətimizlə bağlı suallarınız varsa, bizimlə əlaqə saxlaya bilərsiniz:
                    </p>
                    <p className="mb-4">
                        E-poçt: info@metalab.az<br />
                        Telefon: +994 XX XXX XX XX
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">8. Dəyişikliklər</h2>
                    <p className="mb-4">
                        Bu məxfilik siyasətini vaxtaşırı yeniləyə bilərik. Dəyişikliklər vebsaytda dərc edildikdən sonra qüvvəyə minir.
                    </p>
                </section>
            </div>
        </div>
    )
} 