import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <di className="flex justify-start items-center  gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </di>
        <p className="mt-4">Anything you want to show</p>
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          dignissimos nostrum dolor deleniti vel magnam quam ea porro modi
          asperiores pariatur iure, nesciunt saepe id blanditiis ipsum doloribus
          consectetur vitae.lo Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ullam, rem quibusdam in quam officiis dolores.
          Aliquid reiciendis doloremque nobis dolore delectus aut unde. Fuga in
          eum veniam officiis alias maiores. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Praesentium eaque provident officiis
          quaerat soluta mollitia! At asperiores eum sunt beatae saepe eos, rem
          expedita explicabo quisquam corrupti iusto nihil magni!
        </p>
      </div>
    </div>
  );
};
export default BookModel;
