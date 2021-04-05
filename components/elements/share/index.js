
// import { useState, useEffect } from 'components'

export default function ShareButton({ url,data,text }) {




    // useEffect(() => {



    //     return () => {

    //     }
    // }, [])


    
  const shareData = (_data) => ({
    title: text,
    // text: 'Learn web development on MDN!',
    url: `${url}${_data}`,
  });

  const share = async (_data) => {
      console.log(data)
    try {
      await navigator.share(shareData(_data))
      console.log('MDN shared successfully')
    } catch (err) {
      try {
        navigator.clipboard.writeText(`${url}${_data}`)
          .then(() => {
            console.log('MDN can not be shared, but text copied')
            //setIsShare(!isShare)
          })
          .catch(err => {
            console.log('Something went wrong', err);
          });
      } catch (err) {
        console.log('Something went wrong', err);
      }
     
    }
  };


    return (
        <div className={"flex"}>

            <div onClick={() => share(data)} className="cursor-emoji font-default-accent">
              {text}
            </div>

        </div>
    )
}

//if no backpack reroute
//here is where you set the link to go somewhere