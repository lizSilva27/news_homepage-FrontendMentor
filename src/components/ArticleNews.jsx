export const ArticleNews = ({img, number, title, txt}) => {
	return (
		<article className='flex h-[162px] md:w-[343px] md:flex-grow'>
			<div className='w-[100px] flex-none'>
				<img src={img} alt="Img Retro PC's" />
			</div>
			<div className='pl-6'>
				<p className='text-grayishBlue text-3xl mb-[18px] font-bold'>{number}</p>
				<h2 className='font-bold mb-[18px] hover:text-softOrange cursor-pointer'>{title}</h2>
				<p className='text-veryDarkBlue'>{txt}</p>
			</div>
		</article>
	)
}


// 02
// Top 10 Laptops of 2022
// Our best picks for various needs and budgets.

// 03
// The Growth of Gaming
// How the pandemic has sparked fresh opportunities.