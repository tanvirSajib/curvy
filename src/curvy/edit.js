import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody, ToggleControl } from '@wordpress/components';
import metadata from './block.json';


export default function Edit({ attributes, setAttributes }) {
	const { enableTopCurve } = attributes;
 	
	return (
		<>		
		<p { ...useBlockProps() }>
			{ __( 'Curvy – hello from the editor!', metadata.textdomain ) }
		</p>

		<InspectorControls>
			<PanelBody title={__("Top Curve", metadata.textdomain)}>
				<div style={{display:"flex"}}>
					<ToggleControl 
					checked={ enableTopCurve }
					onChange={(isChecked) => setAttributes( { enableTopCurve : isChecked } )} 
					/>
					<span>{ __("Enable Top Curve", metadata.textdomain) }</span>
				</div>
			</PanelBody>
		</InspectorControls>
		</>

	);
}
