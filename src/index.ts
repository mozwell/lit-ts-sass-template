import {
	customElement, //
	html,
	LitElement,
	property
} from 'lit-element'
import style from './style.scss'

/** REGISTER THE CUSTOM ELEMENT */
@customElement('my-element')

/** YOUR WEB COMPONENT CLASS */
export class MyElement extends LitElement {
	/** DECLARE AND INITIALIZE PROPS */
	@property({ type: String }) mood = 'cool!'

	/** REGISTER IMPORTED STYLE SHEET */
	static get styles() {
		return [style] as any
	}

	/** RENDER TEMPLATE */
	render() {
		return html`
			Web Components are <span>${this.mood}</span>!
		`
	}
}
