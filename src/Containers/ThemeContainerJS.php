<?php

namespace DSguidedTheme\Containers;

use Plenty\Plugin\Templates\Twig;

class ThemeContainerJS
{
    public function call(Twig $twig):string
    {
        return $twig->render('DSguidedTheme::content.ThemeJS');
    }
}
