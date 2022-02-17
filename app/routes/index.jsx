import { useEffect } from 'react'
import {
	TextEditor,
	links as textEditorLinks,
} from '~/components/textEditor/textEditor'

export const links = () => [...textEditorLinks()]

export default function Index() {
	return (
		<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
			<h1>Text Editor</h1>
			<TextEditor label='Blog post:' />
		</div>
	)
}
