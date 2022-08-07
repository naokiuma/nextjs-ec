import Document,{DocumentContext,DocumentInitialProps} from "next/document";
import { ServerStyleSheet } from "styled-components";

//デフォルトのドキュメントをマイドキュメントで上書きする。

export default class MyDocument extends Document{
    static async getInitialProps(
        ctx:DocumentContext,
    ):Promise<DocumentInitialProps>{
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        // React のレンダリングロジックを同期的に動かす
        try {
            ctx.renderPage = () => 
            originalRenderPage({
                enhanceApp:(App) => (props) => 
                    sheet.collectStyles(<App{...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)

            return {
                ...initialProps,
                styles:[
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>,
                ],
            }
             
        }finally{
            sheet.seal()
        }
    }
}