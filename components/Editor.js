import { Check } from '@styled-icons/foundation/Check';
import { FontDownload } from '@styled-icons/material/FontDownload';
import { FormatColorText } from '@styled-icons/material/FormatColorText';
import { Link } from '@styled-icons/material/Link';
import { createAlignPlugin } from '@udecode/plate-alignment';
import { createAutoformatPlugin } from '@udecode/plate-autoformat';
import { createBoldPlugin, createCodePlugin, createItalicPlugin, createStrikethroughPlugin, createUnderlinePlugin } from '@udecode/plate-basic-marks';
import { createBlockquotePlugin } from '@udecode/plate-block-quote';
import { createExitBreakPlugin, createSoftBreakPlugin } from '@udecode/plate-break';
import { createCodeBlockPlugin } from '@udecode/plate-code-block';
import { createPlugins, Plate } from '@udecode/plate-core';
import { createFontBackgroundColorPlugin, createFontColorPlugin, createFontFamilyPlugin, createFontSizePlugin, createFontWeightPlugin, MARK_BG_COLOR, MARK_COLOR } from '@udecode/plate-font';
import { createHeadingPlugin } from '@udecode/plate-heading';
import { createHighlightPlugin } from '@udecode/plate-highlight';
import { createIndentPlugin } from '@udecode/plate-indent';
import { createLinkPlugin } from '@udecode/plate-link';
import { createListPlugin, createTodoListPlugin } from '@udecode/plate-list';
import { createMentionPlugin } from '@udecode/plate-mention';
import { createNormalizeTypesPlugin } from '@udecode/plate-normalizers';
import { createParagraphPlugin } from '@udecode/plate-paragraph';
import { createResetNodePlugin } from '@udecode/plate-reset-node';
import { createDeserializeCsvPlugin } from '@udecode/plate-serializer-csv';
import { createDeserializeMdPlugin } from '@udecode/plate-serializer-md';
import { createTrailingBlockPlugin } from '@udecode/plate-trailing-block';
import { createPlateUI } from '@udecode/plate-ui';
import { ColorPickerToolbarDropdown } from '@udecode/plate-ui-font';
import { LinkToolbarButton } from '@udecode/plate-ui-link';
import { MentionCombobox } from '@udecode/plate-ui-mention';
import { HeadingToolbar } from '@udecode/plate-ui-toolbar';
import { BasicElementToolbarButtons, BasicMarkToolbarButtons, IndentToolbarButtons, ListToolbarButtons, MarkBallonToolbar } from '../config/components/Toolbars';
import { CONFIG } from '../config/config';
import PropTypes from 'prop-types';




const plugins = createPlugins([
	createParagraphPlugin(),
	createBlockquotePlugin(),
	createTodoListPlugin(),
	createHeadingPlugin(),
	createLinkPlugin(),
	createListPlugin(),
	createCodeBlockPlugin(),
	createAlignPlugin(CONFIG.align),
	createBoldPlugin(),
	createCodePlugin(),
	createItalicPlugin(),
	createHighlightPlugin(),
	createUnderlinePlugin(),
	createStrikethroughPlugin(),
	createFontBackgroundColorPlugin(),
	createFontFamilyPlugin(),
	createFontColorPlugin(),
	createFontSizePlugin(),
	createFontWeightPlugin(),
	createIndentPlugin(CONFIG.indent),
	createAutoformatPlugin(CONFIG.autoformat),
	createResetNodePlugin(CONFIG.resetBlockType),
	createSoftBreakPlugin(CONFIG.softBreak),
	createExitBreakPlugin(CONFIG.exitBreak),
	createNormalizeTypesPlugin(CONFIG.forceLayout),
	createTrailingBlockPlugin(CONFIG.trailingBlock),
	createMentionPlugin(),
	createDeserializeMdPlugin(),
	createDeserializeCsvPlugin(),
], {
	// Plate components
	components: createPlateUI(),
});


const Editor = ({ onChange, value }) => {
	const initialValue = [{ children: [{ text: value }] }];

	return <Plate id="1"
		editableProps={CONFIG.editableProps}
		plugins={plugins}
		onChange={onChange}
		initialValue={initialValue}
	>
		<HeadingToolbar>
			<BasicElementToolbarButtons />
			<ListToolbarButtons />
			<IndentToolbarButtons />
			<BasicMarkToolbarButtons />
			<ColorPickerToolbarDropdown
				pluginKey={MARK_COLOR}
				icon={<FormatColorText />}
				selectedIcon={<Check />}
				tooltip={{ content: 'Text color' }}
			/>
			<ColorPickerToolbarDropdown
				pluginKey={MARK_BG_COLOR}
				icon={<FontDownload />}
				selectedIcon={<Check />}
				tooltip={{ content: 'Highlight color' }}
			/>
			<LinkToolbarButton icon={<Link />} />

		</HeadingToolbar>

		<MarkBallonToolbar />

		<MentionCombobox items={CONFIG.mentionItems} />
	</Plate>;
}

Editor.defaultProps = {
	value: '',
}

Editor.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string.isRequired,
}

export default Editor;
