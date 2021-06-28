import searchBarStyles from '../styles/SearchBar.module.css'

const SearchBar = ({...rest}) => {
    return (
        <div className={searchBarStyles.coin_search}>
            <input className={searchBarStyles.coin_input} {...rest}/>
        </div>
    )
}

export default SearchBar
