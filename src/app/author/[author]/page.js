// import { fetchImagesByAuthorName } from '@/lib/data.service';
import styles from './page.module.css';
import { fetchImagesForAuthor } from '@/lib/data.service';


export default async function Page({ searchParams }) {


    let author = await fetchImagesForAuthor(searchParams.author);


    return (
      <main className={styles.page}>
        <h1>{author}</h1>
      </main>
    )
  }