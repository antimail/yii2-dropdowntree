<?php
namespace antimail\dropdowntree;

use yii\web\AssetBundle;

class DropdownTreeAsset extends AssetBundle
{
    public $sourcePath = '@vendor/antimail/yii2-dropdown-tree/assets';

    public $js = [
    ];

    public $css = [
        'css/dropdowntree.css',
    ];
}