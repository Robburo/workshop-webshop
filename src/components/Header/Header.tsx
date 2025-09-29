import styles from '@/components/Header/Header.module.css'
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
    return(
        <div className={styles.header}>
            <SearchBar/>
        </div>
    );
}