import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Aarav",
    lastName: "Aarath",
    username: "aaravaarath",
    password: "#789@88aA",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
