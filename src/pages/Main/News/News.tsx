import styles from "./News.module.css";
import type {INews} from "../../../interfaces/INews.interface.ts";
import {NewsBlock} from "./NewsBlock/NewsBlock.tsx";


export function News({newsData}:{newsData: INews[]}) {

	return (
		<section className={styles.container}>
			{newsData.map((news) => (<NewsBlock newsData={news} />))}
		</section>
	);
}