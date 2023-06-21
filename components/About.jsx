import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">A propos</p>
          <h2 className="py-4">Mon parcours</h2>
          <p className="py-2 text-gray-600">//En reconversion</p>
          <p className="py-2 text-gray-600">
            "Cupcake ipsum dolor sit amet donut dessert chocolate cake biscuit.
            Sesame snaps lollipop sesame snaps oat cake carrot cake jelly-o
            topping. Cookie lemon drops marzipan donut tiramisu powder fruitcake
            candy I love. Bonbon I love candy canes shortbread pudding. I love
            pastry donut tiramisu jelly-o. Jelly beans icing I love caramels
            pastry marzipan. Carrot cake tiramisu jelly-o brownie brownie oat
            cake. Ice cream wafer chupa chups bear claw I love. Marshmallow
            cheesecake fruitcake topping gummies brownie shortbread toffee.
            Macaroon cake apple pie I love lollipop. Bonbon soufflé soufflé
            sweet cotton candy cake. Danish caramels tart pudding carrot cake
            brownie halvah sugar plum I love. Oat cake cupcake oat cake jelly-o
            caramels cake fruitcake liquorice. Powder tiramisu apple pie I love
            jujubes chocolate. Bear claw danish I love chocolate pudding
            marzipan chocolate bar."
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Jetez un oeil à mes derniers projets en date</p>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hovers:scale-105 ease-in duration-300  ">
          <Image className="rounded-xl" src="/../public/assets/profile-pic (1).png" width="400"
          height="400"/>
        </div>
      </div>
    </div>
  );
};

export default About;
