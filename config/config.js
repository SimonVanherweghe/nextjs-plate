import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import { ELEMENT_CODE_BLOCK } from '@udecode/plate-code-block';
import { isBlockAboveEmpty, isSelectionAtBlockStart } from '@udecode/plate-core';
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6, KEYS_HEADING } from '@udecode/plate-heading';
import { ELEMENT_TODO_LI } from '@udecode/plate-list';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { ELEMENT_TD } from '@udecode/plate-table';
import { autoformatRules } from './autoformat/autoformatRules';
import { MENTIONABLES } from './mentionables';


const resetBlockTypesCommonRule = {
	types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
	defaultType: ELEMENT_PARAGRAPH,
};

export const CONFIG = {
	editableProps: {
		// autoFocus: process.env.NODE_ENV !== 'production',
		autoFocus: false,
		spellCheck: false,
		placeholder: 'Type…',
	},


	align: {
		inject: {
			props: {
				validTypes: [
					ELEMENT_PARAGRAPH,
					ELEMENT_H1,
					ELEMENT_H2,
					ELEMENT_H3,
					ELEMENT_H4,
					ELEMENT_H5,
					ELEMENT_H6,
				],
			},
		},
	},
	indent: {
		inject: {
			props: {
				validTypes: [
					ELEMENT_PARAGRAPH,
					ELEMENT_H1,
					ELEMENT_H2,
					ELEMENT_H3,
					ELEMENT_H4,
					ELEMENT_H5,
					ELEMENT_H6,
					ELEMENT_BLOCKQUOTE,
					ELEMENT_CODE_BLOCK,
				],
			},
		},
	},
	lineHeight: {
		inject: {
			props: {
				defaultNodeValue: 'normal',
				validTypes: [
					ELEMENT_PARAGRAPH,
					ELEMENT_H1,
					ELEMENT_H2,
					ELEMENT_H3,
					ELEMENT_H4,
					ELEMENT_H5,
					ELEMENT_H6,
				],
			},
		},
	},
	resetBlockType: {
		options: {
			rules: [
				{
					...resetBlockTypesCommonRule,
					hotkey: 'Enter',
					predicate: isBlockAboveEmpty,
				},
				{
					...resetBlockTypesCommonRule,
					hotkey: 'Backspace',
					predicate: isSelectionAtBlockStart,
				},
			],
		},
	},
	trailingBlock: { type: ELEMENT_PARAGRAPH },
	softBreak: {
		options: {
			rules: [
				{ hotkey: 'shift+enter' },
				{
					hotkey: 'enter',
					query: {
						allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
					},
				},
			],
		},
	},
	exitBreak: {
		options: {
			rules: [
				{
					hotkey: 'mod+enter',
				},
				{
					hotkey: 'mod+shift+enter',
					before: true,
				},
				{
					hotkey: 'enter',
					query: {
						start: true,
						end: true,
						allow: KEYS_HEADING,
					},
				},
			],
		},
	},
	autoformat: {
		options: {
			rules: autoformatRules,
		},
	},
	mentionItems: MENTIONABLES,
};
