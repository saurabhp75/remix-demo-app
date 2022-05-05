import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { logout } from "~/utils/session.server";

/**
 * we're using an action (rather than a loader) is because we want to
 * avoid CSRF problems by using a POST request rather than a GET request. 
 * This is why the logout button is a form and not a link. Additionally, 
 * Remix will only re-call our loaders when we perform an action, so if 
 * we used a loader then the cache would not get invalidated. 
 * @param param0 
 * @returns 
 */
export const action: ActionFunction = async ({ request }) => {
  return logout(request);
};

export const loader: LoaderFunction = async () => {
  return redirect("/");
};
