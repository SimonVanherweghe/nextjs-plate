import { createPlugins, Plate } from '@udecode/plate-core';
import { createPlateUI } from '@udecode/plate-ui';
import PropTypes from 'prop-types';

const CONFIG = {
	editableProps: {
		// autoFocus: process.env.NODE_ENV !== 'production',
		autoFocus: false,
		spellCheck: false,
		placeholder: 'Type…'
	}
};


const plugins = createPlugins([], {
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
