import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Editor, EditorState, RichUtils, SelectionState } from 'draft-js'
import styles from './textEditor.css'

export const links = () => [{ rel: 'stylesheet', href: styles }]

export const TextEditor = ({ label }) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())
	const editorRef = useRef(null)

	const handleKeyCommand = (command) => {
		const newState = RichUtils.handleKeyCommand(editorState, command)
		if (newState) setEditorState(newState)
	}

	const onUnderlineClick = () =>
		setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))

	const onBoldClick = () =>
		setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))

	const onItalicClick = () =>
		setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))

	useEffect(() => {
		setEditorState(EditorState.createEmpty())
	}, [])

	const focusEditor = () => editorRef.current.focus()

	console.log(editorState)

	return (
		<div className='textEditor'>
			<p className='label'>{label}</p>
			<div className='editor'>
				<span className='actions'>
					<button className='action' onClick={onUnderlineClick}>
						<p className='underlined'>U</p>
					</button>
					<button className='action' onClick={onBoldClick}>
						<b>B</b>
					</button>
					<button className='action' onClick={onItalicClick}>
						<em>I</em>
					</button>
				</span>
				<div className='field' onClick={() => focusEditor()}>
					<Editor
						editorState={editorState}
						handleKeyCommand={handleKeyCommand}
						onChange={setEditorState}
						ref={editorRef}
					/>
				</div>
			</div>
		</div>
	)
}
