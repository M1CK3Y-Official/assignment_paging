import Link from 'next/link';
import styles from './searchResults.module.css';
import Image from 'next/image';

const SearchResults = ({results}) => {
  
    const resultItems = results.data;
    console.log(resultItems);


    return (

        <div className={styles.container}>
            {
                resultItems?.map( (item, index) => {

                    return <div className={styles.item} key={index}>
                        <h3><Link href={`/author/${item.author}`}>{item.author}</Link></h3>
                        <p>Gallery: <Link href={`/gallery/${item.gallery}`}>{item.gallery}</Link></p>
                        <p>Camera Model: {item.meta.image.Model}</p>
                        
                        
                        <hr/>
                    </div>

                })
            }
        </div>
    )
};
export default SearchResults;