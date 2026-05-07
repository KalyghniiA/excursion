import styles from "./NewsBlock.module.css";
import type {INews} from "../../../../interfaces/INews.interface.ts";

export function NewsBlock({newsData}: {newsData: INews}) {
	return (
		<section className={styles.container}>
			<img src={newsData.imageUrl} alt={newsData.name} className={styles.img}/>
			<h4 className={styles.title}>{newsData.name}</h4>
			<p className={styles.text}>{newsData.description}</p>
		</section>
	);
}