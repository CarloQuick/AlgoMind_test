//from login video
export {default} from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] }; // list all pages you want protected