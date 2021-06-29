import coinStyles from '../../../styles/Coin.module.css'
import Image from 'next/image'

const Coin = ({coin}) => {
    return (
        <div className={coinStyles.coin_page}>
            <div className={coinStyles.coin_container}>
                <Image src={coin.image.large} alt={coin.name} className={coinStyles.coin_image} width={80} height={80}/>
                <h1 className={coinStyles.coin_name}>{coin.name}</h1>
                <p className={coinStyles.coin_ticker}>{coin.symbol}</p>
                <p className={coinStyles.coin_current}>
                    ${coin.market_data.current_price.usd}
                </p>
            </div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${context.params.id}`)

    const coin = await res.json()

    return {
        props: {
            coin
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)

    const coins = await res.json()

    const ids = coins.map(coin => coin.id)

    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default Coin
