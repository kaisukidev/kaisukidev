import Image from "next/image"

export function Technologies() {
  return (
    <div className="flex flex-col">

      <p>With extensive experience in software development, I have a strong knowledge of various technologies relevant to the field of development. My main areas of expertise include:</p>
      <div className="flex flex-wrap">
        <Image className="p-1 lg:mr-0 mr-2 lg:mb-0 mb-2 rounded border-2 border-sky-500" src="/svg/aws.svg" alt="AWS" height={50} width={50} />
        <Image className="p-1 lg:mx-2 lg:mr-0 mr-2 lg:mb-0 mb-2 rounded border-2 border-sky-500" src="/svg/javascript.svg" alt="Javascript" height={50} width={50} />
        <Image className="p-1 lg:mx-2 lg:mr-0 mr-2 lg:mb-0 mb-2 rounded border-2 border-sky-500" src="/svg/typescript.svg" alt="Typescript" height={50} width={50} />
        <Image className="p-1 lg:mx-2 lg:mr-0 mr-2 lg:mb-0 mb-2 rounded border-2 border-sky-500" src="/svg/react.svg" alt="React" height={50} width={50} />
        <Image className="p-1 lg:mx-2 lg:mr-0 mr-2 lg:mb-0 mb-2 rounded border-2 border-sky-500" src="/svg/next.svg" alt="Next.js" height={50} width={50} />
        <Image className="p-1 lg:mx-2 lg:mr-0 mr-2 lg:mb-0 mb-2 rounded border-2 border-sky-500" src="/svg/vercel.svg" alt="Vercel" height={50} width={50} />
        <Image className="p-1 lg:mx-2 lg:mr-0 mr-2 lg:mb-0 mb-2 rounded border-2 border-sky-500" src="/svg/node-js.svg" alt="Node.js" height={50} width={50} />
        <Image className="p-1 lg:mx-2 lg:mr-0 mr-2 lg:mb-0 mb-2 rounded border-2 border-sky-500" src="/svg/graphql.svg" alt="GraphQL" height={50} width={50} />
        <Image className="p-1 lg:mx-2 lg:mr-0 mr-2 lg:mb-0 mb-2 rounded border-2 border-sky-500" src="/svg/strapi.svg" alt="Strapi" height={50} width={50} />
        <Image className="p-1 lg:mx-2 lg:mr-0 mr-2 lg:mb-0 mb-2 rounded border-2 border-sky-500" src="/svg/mysql.svg" alt="MySQL" height={50} width={50} />
        <Image className="p-1 lg:ml-2 lg:mr-0 mr-2 lg:mb-0 mb-2 rounded border-2 border-sky-500" src="/svg/php.svg" alt="PHP" height={50} width={50} />
      </div>
      <p>These are some of the key technologies I have been working with, gaining significant experience throughout my career. I am always seeking to enhance my knowledge and stay up-to-date with the latest trends in the e-commerce market.</p>
      <p>In addition to my experience with various technologies relevant to software development, I have also gained knowledge and skills in different e-commerce platforms. These platforms provide the necessary foundation for creating and managing successful online stores. Throughout my career, I have had the opportunity to work with some of the leading e-commerce platforms in the market, leveraging their unique functionalities and features. Below are some of the e-commerce platforms I am familiar with and readily able to use in development projects. Explore these platforms and discover how they can drive your online business forward!</p>
      <ul className="flex">
        <li className="text-sky-500 justify-center mr-2 p-1 rounded border-2 border-sky-500 h-12 w-12 flex">
          <a className="flex" href="https://vtex.com/br-pt/" target="_blank">
            <Image src="/svg/vtex.svg" alt="VTEX" height={40} width={40} />
          </a>
        </li>
        <li className="text-sky-500 justify-center mx-2 p-1 rounded border-2 border-sky-500 h-12 w-12 flex">
          <a className="flex" href="https://www.deco.cx/pt" target="_blank">
            <Image src="/svg/deco.svg" alt="Deco.cx" height={40} width={40} />
          </a>
        </li>
        <li className="text-sky-500 justify-center mx-2 p-1 rounded border-2 border-sky-500 h-12 w-12 flex">
          <a className="flex" href="https://www.shopify.com" target="_blank">
            <Image src="/svg/shopify.svg" alt="Shopify" height={30} width={30} />
          </a>
        </li>
        <li className="text-sky-500 justify-center mx-2 p-1 rounded border-2 border-sky-500 h-12 w-12 flex">
          <a className="flex" href="https://www.linx.com.br/linx-commerce/" target="_blank">
            <Image className="h-auto self-center grayscale brightness-200" src="/img/linx-logo.png" alt="Linx Commerce" height={40} width={40} />
          </a>
        </li>
        <li className="text-sky-500 justify-center ml-2 p-1 rounded border-2 border-sky-500 h-12 w-12 flex">
          <a className="flex" href="https://woocommerce.com" target="_blank">
            <Image src="/svg/woocommerce.svg" alt="Woocommerce" height={40} width={40} />
          </a>
        </li>
      </ul>
    </div>
  )
}