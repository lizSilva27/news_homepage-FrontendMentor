import { ArticleNews } from "./ArticleNews";
import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

export const ArticleNewsContainer = () => {
  return (
    <section className="mt-6 md:flex md:flex-wrap md:gap-10">
      <ArticleNews
        img={img1}
        number='01'
        title='Reviving Retro PCs'
        txt='What happens when old PCs are given modern updrades?'
        />
      <ArticleNews 
        img={img2}
        number='02'
        title='Top 10 Laptops pf 2022'
        txt='Our best picks for various needs and budgets.'
      />
      <ArticleNews
        img={img3}
        number='03'
        title='The Growth of Gaming'
        txt='How the pandemic has sparked fresh opportunities.'
      />
    </section>
  );
};
