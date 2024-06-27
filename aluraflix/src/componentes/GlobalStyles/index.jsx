import { createGlobalStyle } from "styled-components";
import SourceSansProRegular from "./fonts/SourceSansPro-Regular.otf"
import SourceSansProBold from "./fonts/SourceSansPro-Bold.otf"
import SourceSansProLight from './fonts/SourceSansPro-Light.otf'
import SourceSansProBoldIt from './fonts/SourceSansPro-BoldIt.otf'
import SourceSansProBlack from './fonts/SourceSansPro-Black.otf'


const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "SourceSansProRegular";
    src: local("Source Sans Pro Regular"), local("SourceSansProRegular"), url(${SourceSansProRegular})
}
@font-face {
    font-family: "SourceSansProBold";
    src: local("Source Sans Pro Bold"), local("SourceSansProBold"), url(${SourceSansProBold})
}
@font-face {
    font-family: "SourceSansProLight";
    src: local("Source Sans Pro Light"), local("SourceSansProLight"), url(${SourceSansProLight})
}

@font-face {
    font-family: "SourceSansProBoldIt";
    src: local("Source Sans Pro BoldIt"), local("SourceSansProBoldIt"), url(${SourceSansProBoldIt})
}

@font-face {
    font-family: "SourceSansProBlack";
    src: local("Source Sans Pro Black"), local("SourceSansProBlack"), url(${SourceSansProBlack})
}

:root {
    --azul-letras: #2271D1;
}

html{
    font-family: "SourceSansProRegular";
}
`

export default GlobalStyles