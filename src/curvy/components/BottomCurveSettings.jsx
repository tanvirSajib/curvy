import { __ } from '@wordpress/i18n';
import {  ColorPalette,  } from '@wordpress/block-editor';
import {  ToggleControl, RangeControl, } from '@wordpress/components';
import metadata from '../block.json';


function BottomCurveSettings({attributes, setAttributes}) {
    const { bottomWidth, bottomHeight, bottomFlipX, bottomFlipY, bottomColor } = attributes;
  return (
    <>
                <RangeControl 
                    label={__("Width", metadata.textdomain)} 
                    min={100}
                    max={300}
                    value={ bottomWidth || 100 }
                    onChange={(newValue)=>{
                        setAttributes({bottomWidth: parseInt(newValue)})
                    }}
				/>

				<RangeControl 
                    label={__("Height", metadata.textdomain)} 
                    min={0}
                    max={200}
                    value={ bottomHeight }
                    onChange={(newValue)=>{
                        setAttributes({bottomHeight: parseInt(newValue)})
                    }}
				/>


				<div style={{display:"flex"}}>
					<ToggleControl 
					checked={ bottomFlipX }
					onChange={(isChecked) => setAttributes( { bottomFlipX : isChecked } )} 
					/>
					<span>{ __("Flip Horizontaly", metadata.textdomain) }</span>
				</div>

				<div style={{display:"flex"}}>
					<ToggleControl 
					checked={ bottomFlipY }
					onChange={(isChecked) => setAttributes( { bottomFlipY : isChecked } )} 
					/>
					<span>{ __("Flip Vertically", metadata.textdomain) }</span>
				</div>

				<div>
					<label>{__("Curvy Color", metadata.textdomain)}</label>
					<ColorPalette 
						value={bottomColor}
						onChange={(newValue) => setAttributes({bottomColor: newValue})}
					/>
				</div>
    </>
  )
}

export default BottomCurveSettings