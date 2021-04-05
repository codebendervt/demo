import Link from 'next/link'
import { useReducer, useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const NavHeader = ({ name, model }) => {
  return (
    <>
      <div className="flex">
        <div className="flex-initial p-2 bg-gray-800 rounded">
          {model}

        </div>
      </div>
      <h1 className="text-7xl lg:text-gxl font-secondary-title ">Hello</h1>
      <h2 className="text-5xl lg:text-6xl font-secondary-sub-title">{name}</h2>
    </>
  )
}

const NavComment = ({ comment }) => {
  return (
    <p className="text-xl lg:text-2xl font-default-paragraph w-full lg:w-3/4 my-2">{comment}</p>
  )
}

const NavLinks = ({ version }) => {
  return (
    <>
      <Link href={`/kraft/genus`}>
        <a className="font-default-accent text-xl mr-4">Kraft</a>
      </Link>
    </>

  )
}


const isAuth = ({ auth, user, url, message, btn,children }) => {
  const router = useRouter()

  useEffect(() => {
    // const getUser = getLocalStorage('user');

    // ClientInsight;
    // console.log(getUser)
    // console.log(auth)

    //console.log("this is the ", user)

    return () => {

    }

  }, []);
  return (
    <>





      <div className="w-screen h-auto flex-grow flex flex-row items-end">


        <div className="w-full py-8 p-4 lg:w-1/3 lg:p-8 h-auto leading-none uppercase animated fadeIn">


          {
            auth && user ? <NavHeader name={user.name} model={user.model} /> : ""
          }

          {
            auth && user ? <NavComment comment={"Welcome Home are you ready to take on the world"} /> : <NavComment comment={message} />
          }

          <div className="flex flex-row my-2">
            {
              auth && user ? <NavLinks version={user.ver} /> : (<div onClick={() => router.push(url)} className="cursor-emoji font-default-accent text-xl mr-4">{btn}</div>)
            }

            {
              auth ? "" : <div className="cursor-emoji font-default-accent text-xl" onClick={() => router.back()}>go back</div>
            }
            {children}

          </div>


        </div>

        <div className=" flex justify-end lg:w-2/3 lg:p-8">

        </div>

      </div>






    </>
  )
}

export default isAuth;