import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt';
import { CodeBlock } from '@styled-icons/boxicons-regular/CodeBlock';
import { Highlight } from '@styled-icons/boxicons-regular/Highlight';
import { Subscript } from '@styled-icons/foundation/Subscript';
import { Superscript } from '@styled-icons/foundation/Superscript';
import { Done } from '@styled-icons/material/Done';
import { FormatAlignCenter } from '@styled-icons/material/FormatAlignCenter';
import { FormatAlignJustify } from '@styled-icons/material/FormatAlignJustify';
import { FormatAlignLeft } from '@styled-icons/material/FormatAlignLeft';
import { FormatAlignRight } from '@styled-icons/material/FormatAlignRight';
import { FormatBold } from '@styled-icons/material/FormatBold';
import { FormatIndentDecrease } from '@styled-icons/material/FormatIndentDecrease';
import { FormatIndentIncrease } from '@styled-icons/material/FormatIndentIncrease';
import { FormatItalic } from '@styled-icons/material/FormatItalic';
import { FormatListBulleted } from '@styled-icons/material/FormatListBulleted';
import { FormatListNumbered } from '@styled-icons/material/FormatListNumbered';
import { FormatQuote } from '@styled-icons/material/FormatQuote';
import { FormatStrikethrough } from '@styled-icons/material/FormatStrikethrough';
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined';
import { Keyboard } from '@styled-icons/material/Keyboard';
import { Looks3 } from '@styled-icons/material/Looks3';
import { Looks4 } from '@styled-icons/material/Looks4';
import { Looks5 } from '@styled-icons/material/Looks5';
import { Looks6 } from '@styled-icons/material/Looks6';
import { LooksOne } from '@styled-icons/material/LooksOne';
import { LooksTwo } from '@styled-icons/material/LooksTwo';
import { MARK_BOLD, MARK_CODE, MARK_ITALIC, MARK_STRIKETHROUGH, MARK_SUBSCRIPT, MARK_SUPERSCRIPT, MARK_UNDERLINE } from '@udecode/plate-basic-marks';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import { ELEMENT_CODE_BLOCK } from '@udecode/plate-code-block';
import { getPluginType, getPreventDefaultHandler, usePlateEditorRef } from '@udecode/plate-core';
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6 } from '@udecode/plate-heading';
import { MARK_HIGHLIGHT } from '@udecode/plate-highlight';
import { indent, outdent } from '@udecode/plate-indent';
import { MARK_KBD } from '@udecode/plate-kbd';
import { ELEMENT_OL, ELEMENT_TODO_LI, ELEMENT_UL } from '@udecode/plate-list';
import { AlignToolbarButton } from '@udecode/plate-ui-alignment';
import { CodeBlockToolbarButton } from '@udecode/plate-ui-code-block';
import { ListToolbarButton } from '@udecode/plate-ui-list';
import { BalloonToolbar, BlockToolbarButton, MarkToolbarButton, ToolbarButton } from '@udecode/plate-ui-toolbar';

import React from 'react';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css';

export const BasicElementToolbarButtons = () => {
	const editor = usePlateEditorRef();

	return (
		<>
			<BlockToolbarButton
				type={getPluginType(editor, ELEMENT_H1)}
				icon={<LooksOne />}
			/>
			<BlockToolbarButton
				type={getPluginType(editor, ELEMENT_H2)}
				icon={<LooksTwo />}
			/>
			<BlockToolbarButton
				type={getPluginType(editor, ELEMENT_H3)}
				icon={<Looks3 />}
			/>
			<BlockToolbarButton
				type={getPluginType(editor, ELEMENT_H4)}
				icon={<Looks4 />}
			/>
			<BlockToolbarButton
				type={getPluginType(editor, ELEMENT_H5)}
				icon={<Looks5 />}
			/>
			<BlockToolbarButton
				type={getPluginType(editor, ELEMENT_H6)}
				icon={<Looks6 />}
			/>
			<BlockToolbarButton
				type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
				icon={<FormatQuote />}
			/>
			<CodeBlockToolbarButton
				type={getPluginType(editor, ELEMENT_CODE_BLOCK)}
				icon={<CodeBlock />}
			/>
		</>
	);
};

export const IndentToolbarButtons = () => {
	const editor = usePlateEditorRef();

	return (
		<>
			<ToolbarButton
				onMouseDown={editor && getPreventDefaultHandler(outdent, editor)}
				icon={<FormatIndentDecrease />}
			/>
			<ToolbarButton
				onMouseDown={editor && getPreventDefaultHandler(indent, editor)}
				icon={<FormatIndentIncrease />}
			/>
		</>
	);
};

export const ListToolbarButtons = () => {
	const editor = usePlateEditorRef();

	return (
		<>
			<ListToolbarButton
				type={getPluginType(editor, ELEMENT_UL)}
				icon={<FormatListBulleted />}
			/>
			<ListToolbarButton
				type={getPluginType(editor, ELEMENT_OL)}
				icon={<FormatListNumbered />}
			/>
			<BlockToolbarButton
				type={getPluginType(editor, ELEMENT_TODO_LI)}
				icon={<Done />}
			/>
		</>
	);
};

export const AlignToolbarButtons = () => {
	return (
		<>
			<AlignToolbarButton value="left" icon={<FormatAlignLeft />} />
			<AlignToolbarButton value="center" icon={<FormatAlignCenter />} />
			<AlignToolbarButton value="right" icon={<FormatAlignRight />} />
			<AlignToolbarButton value="justify" icon={<FormatAlignJustify />} />
		</>
	);
};

export const BasicMarkToolbarButtons = () => {
	const editor = usePlateEditorRef();

	return (
		<>
			<MarkToolbarButton
				type={getPluginType(editor, MARK_BOLD)}
				icon={<FormatBold />}
			/>
			<MarkToolbarButton
				type={getPluginType(editor, MARK_ITALIC)}
				icon={<FormatItalic />}
			/>
			<MarkToolbarButton
				type={getPluginType(editor, MARK_UNDERLINE)}
				icon={<FormatUnderlined />}
			/>
			<MarkToolbarButton
				type={getPluginType(editor, MARK_STRIKETHROUGH)}
				icon={<FormatStrikethrough />}
			/>
			<MarkToolbarButton
				type={getPluginType(editor, MARK_CODE)}
				icon={<CodeAlt />}
			/>
			<MarkToolbarButton
				type={getPluginType(editor, MARK_SUPERSCRIPT)}
				clear={getPluginType(editor, MARK_SUBSCRIPT)}
				icon={<Superscript />}
			/>
			<MarkToolbarButton
				type={getPluginType(editor, MARK_SUBSCRIPT)}
				clear={getPluginType(editor, MARK_SUPERSCRIPT)}
				icon={<Subscript />}
			/>
		</>
	);
};

export const KbdToolbarButton = () => {
	const editor = usePlateEditorRef();

	return (
		<MarkToolbarButton
			type={getPluginType(editor, MARK_KBD)}
			icon={<Keyboard />}
		/>
	);
};

export const HighlightToolbarButton = () => {
	const editor = usePlateEditorRef();

	return (
		<MarkToolbarButton
			type={getPluginType(editor, MARK_HIGHLIGHT)}
			icon={<Highlight />}
		/>
	);
};


export const MarkBallonToolbar = () => {
	const editor = usePlateEditorRef();

	const arrow = false;
	const theme = 'dark';
	const tooltip = {
		arrow: true,
		delay: 0,
		duration: [200, 0],
		hideOnClick: false,
		offset: [0, 17],
		placement: 'top',
	};

	return (
		<BalloonToolbar
			popperOptions={{
				placement: 'top',
			}}
			theme={theme}
			arrow={arrow}
		>
			<MarkToolbarButton
				type={getPluginType(editor, MARK_BOLD)}
				icon={<FormatBold />}
				tooltip={{ content: 'Bold (⌘B)', ...tooltip }}
			/>
			<MarkToolbarButton
				type={getPluginType(editor, MARK_ITALIC)}
				icon={<FormatItalic />}
				tooltip={{ content: 'Italic (⌘I)', ...tooltip }}
			/>
			<MarkToolbarButton
				type={getPluginType(editor, MARK_UNDERLINE)}
				icon={<FormatUnderlined />}
				tooltip={{ content: 'Underline (⌘U)', ...tooltip }}
			/>
		</BalloonToolbar>
	);
};
