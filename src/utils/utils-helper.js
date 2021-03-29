/* eslint-disable no-undef */
/* globals: window */

import _ from "lodash";

export class UtilsHelper {
  static serialize(obj, prefix = false) {
    const str = [];

    for (const p in obj) {

      if (obj.hasOwnProperty(p)) {
        const k = prefix ? `${prefix}[${p}]` : p;
        const v = obj[p];
        str.push(
          v !== null && typeof v === "object"
            ? UtilsHelper.serialize(v, k)
            : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
        );
      }
    }
    return str.join("&");
  }
}
