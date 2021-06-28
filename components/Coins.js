import coinsStyles from '../styles/Coins.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Coins = ({
    id, 
    name, 
    image, 
    symbol, 
    price, 
    volume,
    priceChange,
    marketcap
}) => {
    return (
        <Link href='/coin/[id]' as={`/coin/${id}`} passHref>
            <a>
                <div className={coinsStyles.coin_container}>
                    <div className={coinsStyles.coin_row}>
                        <div className={coinsStyles.coin}>
                            <Image src={image} alt={name} className={coinsStyles.coin_img} width={30} height={30}/>
                            <h1 className={coinsStyles.coin_h1}>{name}</h1>
                            <p className={coinsStyles.coin_symbol}>{symbol}</p>
                        </div>
                        <div className={coinsStyles.coin_data}>
                            <p className={coinsStyles.coin_price}>${price}</p>
                            <p className={coinsStyles.coin_volume}>${volume.toLocaleString()}</p>

                            {priceChange < 0 ? (
                                <p className={(coinsStyles.coin_percent, coinsStyles.red)}>
                                    {priceChange.toFixed(2)}%
                                </p>
                            ) : (
                                <p className={(coinsStyles.coin_percent, coinsStyles.green)}>
                                    {priceChange.toFixed(2)}%
                                </p>
                            )}

                            <p className={coinsStyles.coin_marketcap}>
                                Mkt Cap: ${marketcap.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Coins
