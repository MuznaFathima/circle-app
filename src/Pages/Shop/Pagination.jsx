import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import style from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div style={{ display: "flex", gap: "0.5rem" ,padding:"0rem 2rem" }}>
      {currentPage === 1 ? (
        ""
      ) : (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={style.firstBtn}
        >
          <IoIosArrowRoundBack />
        </button>
      )}
      {[...Array(totalPages)].map((_, index) => (
        <button
          onClick={() => onPageChange(index + 1)}
          key={index}
          className={`${style.arrayBtn} ${currentPage===index+1 ? style.currentBtn : ""}`}
        >
          {index + 1}
        </button>
      ))}
      {currentPage === totalPages ? (
        ""
      ) : (
        <button onClick={() => onPageChange(currentPage + 1)} className={style.lastBtn}>
          <IoIosArrowRoundForward />
        </button>
      )}
    </div>
  );
};

export default Pagination;
