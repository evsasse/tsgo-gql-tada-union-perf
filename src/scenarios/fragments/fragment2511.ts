import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2509 } from "./fragment2509";
import type { FragmentToken2510 } from "./fragment2510";

export const FRAGMENT_2511 = gql(`
  fragment Fragment2511 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult2511 = ResultOf<typeof FRAGMENT_2511>;
type FragmentSelf2511 = NonNullable<FragmentResult2511>;

export type FragmentToken2511 =
  | FragmentSelf2511["__typename"]
  | FragmentSelf2511["typenameHint"] | FragmentToken2509 | FragmentToken2510;
