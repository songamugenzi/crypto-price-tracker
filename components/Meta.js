import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <meta name='keywords' content={keywords}/>
            <meta name='description' content={description}/>
            <meta charset='utf-8'/>
            <link rel='icon' href='/layered-tab-icon.svg' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Crypto Price Tracker',
    keywords: 'cryptocurrency, crypto, bitcoin, ethereum, dogecoin, crypto price',
    description: 'Cryptocurrency price tracker using CoinGecko, the #1 most comprehensive cryptocurrency API'
}

export default Meta
