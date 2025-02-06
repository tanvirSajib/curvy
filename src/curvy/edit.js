import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls,  } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody, ToggleControl, } from '@wordpress/components';
import metadata from './block.json';
import { Curve } from './components/Curve';
import TopCurveSettings from './components/TopCurveSettings';
import BottomCurveSettings from './components/BottomCurveSettings';


export default function Edit({ attributes, setAttributes }) {
	const { enableTopCurve, topWidth, topHeight, topFlipX, topFlipY, topColor, enableBottomCurve,bottomFlipX,bottomFlipY,bottomHeight,bottomWidth,bottomColor } = attributes;
	const {className, ...blockProps} = useBlockProps();
	 	
	return (
		<>	
		<section className={`${className} alignfull`} {...blockProps}>
			{enableTopCurve && <Curve
			flipX={topFlipX}
			flipY={topFlipY} 
			height={topHeight} 
			width={topWidth} 
			color={topColor}
			/>  }

			{enableBottomCurve && <Curve
			isBottom
			flipX={bottomFlipX}
			flipY={bottomFlipY} 
			height={bottomHeight} 
			width={bottomWidth} 
			color={bottomColor}
			/>  }	 
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

				{enableTopCurve && <TopCurveSettings attributes={attributes} setAttributes={setAttributes} />}
				

			</PanelBody>

			<PanelBody title={__("Bottom Curve", metadata.textdomain)}>
				<div style={{display:"flex"}}>
					<ToggleControl 
					checked={ enableBottomCurve }
					onChange={(isChecked) => setAttributes( { enableBottomCurve : isChecked } )} 
					/>
					<span>{ __("Enable Bottom Curve", metadata.textdomain) }</span>
				</div>

				{enableBottomCurve && <BottomCurveSettings attributes={attributes} setAttributes={setAttributes} />}
				

			</PanelBody>
		</InspectorControls>
		</>

	);
}
