// import styles from './page.module.css';

import { fetchAuthorByName, fetchImagesByAuthorName } from "@/lib/data.service";
import Image from "next/image";

export default async function Page({ params }) {
    console.log('r', params.author);
    const author = await fetchAuthorByName(params.author.replace('%20', ' '));

    console.log('AUTHOR', author);
    const authorImages = await fetchImagesByAuthorName(author.author);
    console.log(authorImages);

    return (
      <main>
        <h1>Author {author.author}</h1>
        {authorImages.map ((image, index) => {
            return <Image src={`/galleries${image.path}`} key={index} alt="dwdw" width={500} height={500} />
            
        })}
      </main>
    )
  }