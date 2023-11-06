export const NewArticle = ({titleArticle, textArticle}) => {
	return (
		<article className="h-[140px] border-b-2 border-grayishBlue py-7 last:border-none lg:h-[160px] lg:py-4">
			<h2 className="cursor-pointer hover:text-softOrange text-[20px] mb-3 font-bold lg:text-[16px]">{ titleArticle }</h2>
			<p className="text-[15px]">{ textArticle }</p>
		</article>
	)
}
