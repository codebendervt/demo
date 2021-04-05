import 'style/index.css'
import { App, Container } from 'components'
// import 'sauveur_style/animate.css'




function MyApp({ Component, pageProps }) {

  let Comp = new Component();
  //console.log("props", pageProps)
  //console.log("component", Component().home)
  return (

    Comp.home ? (
      <Container  auth={true} app={true} >
        <App>

          <Comp.home {...pageProps}/>
          <Comp.content  {...pageProps}/>
          {/* {Component().home({...pageProps})}
        {Component().content({...pageProps})} */}
          <div className="text-black h-16">
            <div>3</div>
          </div>

        </App>
      </Container>
    ) : <Component {...pageProps} />




  )
}

export default MyApp