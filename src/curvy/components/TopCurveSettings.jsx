import { __ } from '@wordpress/i18n';
import {  ColorPalette,  } from '@wordpress/block-editor';
import {  ToggleControl, RangeControl, } from '@wordpress/components';
import metadata from '../block.json';


function TopCurveSettings({attributes, setAttributes}) {
    const { topWidth, topHeight, topFlipX, topFlipY, topColor } = attributes;
  return (
    <>
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


				<div style={{display:"flex"}}>
					<ToggleControl 
					checked={ topFlipX }
					onChange={(isChecked) => setAttributes( { topFlipX : isChecked } )} 
					/>
					<span>{ __("Flip Horizontaly", metadata.textdomain) }</span>
				</div>

				<div style={{display:"flex"}}>
					<ToggleControl 
					checked={ topFlipY }
					onChange={(isChecked) => setAttributes( { topFlipY : isChecked } )} 
					/>
					<span>{ __("Flip Vertically", metadata.textdomain) }</span>
				</div>

				<div>
					<label>{__("Curvy Color", metadata.textdomain)}</label>
					<ColorPalette 
						value={topColor}
						onChange={(newValue) => setAttributes({topColor: newValue})}
					/>
				</div>
    </>
  )
}

export default TopCurveSettings