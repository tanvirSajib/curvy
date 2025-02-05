import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody, ToggleControl, RangeControl } from '@wordpress/components';
import metadata from './block.json';
import { Curve } from './components/Curve';


export default function Edit({ attributes, setAttributes }) {
	const { enableTopCurve, topWidth, topHeight } = attributes;
	const {className, ...blockProps} = useBlockProps();

	console.log( className );
 	
	return (
		<>	
		<section className={`${className} alignfull`} {...blockProps}>
			{enableTopCurve && <Curve />  }	 
		</section>
		
		

		<InspectorControls>
			<PanelBody title={__("Top Curve", metadata.textdomain)}>
				<div style={{display:"flex"}}>
					<ToggleControl 
					checked={ enableTopCurve }
					onChange={(isChecked) => setAttributes( { enableTopCurve : isChecked } )} 
					/>
					<span>{ __("Enable Top Curve", metadata.textdomain) }</span>
				</div>

				<RangeControl 
				label={__("Width", metadata.textdomain)} 
				min={100}
				max={300}
				value={ topWidth || 100 }
				onChange={(newValue)=>{
					setAttributes({topWidth: parseInt(newValue)})
				}}
				/>

				<RangeControl 
				label={__("Height", metadata.textdomain)} 
				min={0}
				max={200}
				value={ topHeight }
				onChange={(newValue)=>{
					setAttributes({topHeight: parseInt(newValue)})
				}}
				/>
			</PanelBody>
		</InspectorControls>
		</>

	);
}
