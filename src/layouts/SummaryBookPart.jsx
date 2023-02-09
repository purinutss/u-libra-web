import React from "react";
import { Link } from "react-router-dom";

export default function SummaryBookPart() {
  return (
    <>
      <div className="flex justify-evenly mx-4 mt-4">
        <div className="flex w-full">
          <div>
            <img src="https://picsum.photos/400/600" alt="" />
          </div>
          <div className="w-full ml-10 ">
            <div className="flex justify-between">
              <div>
                <div>
                  <h1 className="text-3xl font-extrabold">Atomic Habits</h1>
                </div>
                <div>
                  <h1 className="text-xs font-bold">
                    Assumption University / Self-Development
                  </h1>
                </div>
              </div>
              <div className="grid items-center">
                <Link to="/read/:bookId">
                  <button
                    type="button"
                    className=" rounded-xl bg-emerald-200 p-1.5 w-32 font-bold text-xl"
                  >
                    Read
                  </button>
                </Link>
              </div>
            </div>
            <div className=" self-center mt-4">
              <h1 className="self-center font-light text-xs w-10/12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                alias maiores iure facilis ab minus ratione doloremque eum
                atque, saepe libero animi iusto vel id repellat! Eligendi quidem
                voluptates quis dolore pariatur quasi. Vel id, aperiam inventore
                impedit temporibus sed laudantium numquam iure quibusdam? Animi
                quia ipsa itaque voluptas totam voluptatum ad dolor, aut,
                mollitia cum nihil suscipit sit molestias. Dicta quo iusto
                laborum, blanditiis eveniet veniam non optio nihil, quibusdam
                praesentium, ex voluptatibus voluptatem rem quia numquam.
                Laudantium dicta molestias dolor blanditiis aspernatur est optio
                perferendis amet iure quae cupiditate provident, explicabo
                aliquid quia rem tempore reprehenderit, mollitia odio veniam et
                sunt. Libero ipsa commodi deleniti error aut voluptates ullam
                ratione odit maxime. Delectus cumque qui laborum, accusantium
                laboriosam aspernatur quibusdam voluptates facilis sint modi,
                amet commodi velit. Quasi similique ducimus odit. Quam eius
                eaque et perferendis molestiae in sint impedit accusamus rem!
                Nisi, perferendis debitis nobis dolorem ea enim. Error totam
                numquam esse nostrum, autem nesciunt rem officia molestiae
                tenetur hic aliquid, praesentium, quis ea iure suscipit neque!
                Ab exercitationem dolorum corrupti nam animi dolorem maxime ut
                quaerat repellendus fuga? Soluta officiis perspiciatis totam
                nemo quia itaque rerum culpa? Quisquam quibusdam accusantium
                dolores voluptatem doloremque, eum sapiente laboriosam?
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
