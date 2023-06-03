import IconStars from './icons/IconStars';

export const Testimonial = () => {
  return (
    <section className="bg-gray-800">
      <div className="container mx-auto px-4 py-24">
        <div className="mb-16">
          <p className="text-lg font-bold text-gray-400 mb-3">DEPOIMENTOS</p>
          <h2 className="text-5xl text-gray-50 mb-5">
            Confira as opiniões de quem já teve a experiência de trabalhar
            comigo
          </h2>
        </div>
        <div className="flex lg:flex-row md:flex-col  gap-8">
          {/* card  */}
          <div className="w-full flex flex-col bg-gray-600 rounded-2xl gap-4 p-8 ">
            <div className="rounded-2xl h-52 w-52  overflow-hidden mb-10">
              <img
                src="https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Portrait-Photographers-Yousuf-Karsh-King.jpg"
                alt=""
                className="h-52 w-52"
              />
            </div>
            <div className="">
              <IconStars />
              <p className="text-gray-50 text-lg mt-4 mb-8">
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it.
              </p>
              <p className="text-gray-50 text-sm ">- Jhon green</p>
            </div>
          </div>
          {/* card  */}
          <div className="w-full flex flex-col bg-gray-600 rounded-2xl gap-4 p-8 ">
            <div className="rounded-2xl h-52 w-52  overflow-hidden mb-10">
              <img
                src="https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg?w=1060&t=st=1685058613~exp=1685059213~hmac=a94b4f05d6f51c29384bf9821234b591a7dfb2310571e29d42e7a169a46f92c5"
                alt=""
                className="h-52 w-52"
              />
            </div>
            <div className="">
              <IconStars />
              <p className="text-gray-50 text-lg mt-4 mb-8">
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it.
              </p>
              <p className="text-gray-50 text-sm ">- Jhon green</p>
            </div>
          </div>
          {/* card  */}
          <div className="w-full flex flex-col bg-gray-600 rounded-2xl gap-4 p-8 ">
            <div className="rounded-2xl h-52 w-52  overflow-hidden mb-10">
              <img
                src="https://img.freepik.com/free-photo/young-beautiful-woman-looking-camera-trendy-girl-casual-summer-white-t-shirt-jeans-shorts-positive-female-shows-facial-emotions-funny-model-isolated-yellow_158538-15796.jpg?w=740&t=st=1685058396~exp=1685058996~hmac=ad2dfd9ec84eca12b2e7dcc1645e7df047db3c1f8d7fdb835c1d0bb9e41f3469"
                alt=""
                className="h-52 w-52"
              />
            </div>
            <div className="">
              <IconStars />
              <p className="text-gray-50 text-lg mt-4 mb-8">
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it.
              </p>
              <p className="text-gray-50 text-sm ">- Jhon green</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
