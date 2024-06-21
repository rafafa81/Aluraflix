import { createGlobalStyle } from "styled-components";
import SourceSansProRegular from "./fonts/SourceSansPro-Regular.otf"
import SourceSansProBold from "./fonts/SourceSansPro-Bold.otf"


const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "SourceSansProRegular";
    src: local("Source Sans Pro Regular"), local("SourceSansProRegular"), url(${SourceSansProRegular})
}
@font-face {
    font-family: "SourceSansProBold";
    src: local("Source Sans Pro Bold"), local("SourceSansProBold"), url(${SourceSansProBold})
}

:root {
    --azul-letras: #2271D1;
}

html{
    font-family: "SourceSansProRegular";
}
`

export default GlobalStyles