import Meta from './Meta.js'
import Header from './Header.js'
import layoutStyles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={layoutStyles.layout}>
            <Meta />
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout
