import '../../dist/style.css';
import './card.css';

export const createCard = ({
  title = 'Card Title',
  content = '<p>Card Inner Text</p>',
}) => {
  const componentName = 'en-card';
  const container = document.createElement('section');
  const containerStyle = `${componentName}
	bg-black
	text-white
	flex
	flex-col
	min-w-[200px]
	min-h-[200px]
	rounded-[20px]
	p-4
	`;
  container.className = containerStyle;
  const template = `
	<h2 class='text-center text-lg'>${title}</h2>
	<div class='${componentName}__content'>
		${content}
	</div>
`;
  container.insertAdjacentHTML('afterbegin', template);
  return container;
};
