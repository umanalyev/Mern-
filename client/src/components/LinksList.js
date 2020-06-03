import React from "react";
import { Link } from "react-router-dom";

export const LinksList = ({ links, fallback }) => {
  if (!links.length) {
    return <p className="center">Ссылок пока нет :(</p>;
  }

  if (!links || links.length === 0) {
    return fallback;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Оргинальная</th>
            <th>Сокращенная</th>
            <th>
              <i
                className="fas fa-lock-open x4"
                style={{ alignItems: "center", justifyContent: "center" }}
              ></i>
            </th>
          </tr>
        </thead>

        <tbody>
          {links.map((link, index) => {
            return (
              <tr key={link._id}>
                <td>{index + 1}</td>
                <td>{link.from}</td>
                <td>{link.to}</td>
                <td>
                  {" "}
                  <Link to={`/detail/${link._id}`}>Открыть</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
};
