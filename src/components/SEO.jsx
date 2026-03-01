import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url = 'https://luzrenaceperu.org', image = 'https://luzrenaceperu.org/logo-png.png' }) => {
    const siteTitle = 'Luz Renace - ONG Perú';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || 'Mujeres con propósito que transforman el Perú. ONG peruana enfocada en la institucionalidad y el liderazgo femenino.';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
