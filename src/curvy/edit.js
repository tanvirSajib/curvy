import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';


export default function Edit() {
	return (
		<>		
		<p { ...useBlockProps() }>
			{ __( 'Curvy – hello from the editor!', 'curvy' ) }
		</p>

		<InspectorControls>
			Test
		</InspectorControls>
		</>

	);
}
