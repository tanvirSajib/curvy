<?php 
$block_wrapper_attributes = get_block_wrapper_attributes([
    'class'     => 'alignfull'
]);

// wp_send_json($content); 
?>

<div <?php echo $block_wrapper_attributes; ?>>
    <?php echo $content; ?>
</div>