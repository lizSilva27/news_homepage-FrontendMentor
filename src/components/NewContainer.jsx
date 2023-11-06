import { NewArticle } from "./NewArticle";

export const NewContainer = () => {
	return (
		<aside className="bg-veryDarkBlue text-offWhite py-[28px] px-[20px]">
			<h1 className="text-softOrange text-4xl font-bold">New</h1>
			<NewArticle
				titleArticle = 'Hydrogen VS Electric Cars'
				textArticle = 'Will hydrogen-fueled cars ever catch up to EVs?'
			/>
			<NewArticle
				titleArticle = 'The Downsides of AI Artistry'
				textArticle = 'What are the possible adverse effects of on-demand AI image generation?'
			/>
			<NewArticle
				titleArticle = 'Is VC Funding Drying Up?'
				textArticle = 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
			/>
		</aside>
	)
} 