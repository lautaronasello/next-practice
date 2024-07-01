'use client';

import { useRouter } from 'next/navigation';
// export const metadata = {
//   title: 'Acerca de nosotros - Lau Nasello',
// };

export default function AboutPage() {
  const router = useRouter();
  console.log(router);
  return (
    <section>
      <h1>This is the about page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
        voluptatibus totam autem doloribus assumenda temporibus. Quae quod dicta
        impedit. Culpa cum ad ea voluptatum, rerum reiciendis praesentium enim
        earum dolor! Vero soluta praesentium exercitationem vitae fugiat animi
        itaque cum doloremque adipisci rerum ullam commodi asperiores, aut
        magnam sed, dolorum ipsam voluptatum consequatur repellat? Ipsum et
        quidem libero repellat odio unde! Veritatis sapiente quam veniam ab.
        Numquam maxime quia nihil sunt distinctio minus. Totam ut rem dolorum
        ratione nihil quis natus culpa, dolorem odit, eius quo neque dolor
        fugit, soluta facere? Distinctio ipsa deserunt voluptatem nostrum
        debitis voluptatum et maiores minus, neque illo asperiores repellat,
        sint optio. Placeat numquam minus iste repellendus! Labore commodi, enim
        sit a quod ipsa fugiat adipisci. Nam molestiae voluptatibus beatae
        eligendi, quis dolorum, aliquam impedit vel tenetur corrupti explicabo
        officiis iure aspernatur accusamus, quibusdam amet exercitationem
        blanditiis fuga? Hic rerum harum possimus aspernatur quaerat
        perspiciatis optio? Eius maiores sit ipsum dolores reprehenderit error
        est saepe unde velit suscipit voluptatem soluta quod repellendus iure
        explicabo corrupti commodi dolor, iusto, temporibus nisi earum fuga?
        Dolores ipsa distinctio similique? Nihil recusandae itaque soluta
        ratione quae quas repellat ex accusamus molestias iste exercitationem
        nesciunt dolorum, optio corrupti quaerat animi iure aut numquam et est
        esse sint! Voluptate magni animi molestias. Officiis nesciunt sequi rem
        sapiente voluptates, nostrum sed aliquam explicabo dolor provident
        quibusdam nam animi asperiores similique pariatur minus deleniti officia
        distinctio ratione sint modi, vel a amet temporibus. Rerum. Deleniti,
        illum exercitationem. Nostrum nobis molestiae veritatis aperiam
        voluptates, eaque quae iste nisi sint velit repellat suscipit neque
        tempora dicta doloremque totam cupiditate et libero animi ratione
        possimus?
      </p>
      <button
        className='bg-emerald-400 py-2 px-3 rounded-sm active:bg-emerald-600 hover:bg-emerald-500'
        onClick={() => {
          router.push('/characters');
        }}
      >
        click me!
      </button>
    </section>
  );
}
