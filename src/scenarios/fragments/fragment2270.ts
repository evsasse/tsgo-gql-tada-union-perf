import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2268 } from "./fragment2268";
import type { FragmentToken2269 } from "./fragment2269";

export const FRAGMENT_2270 = gql(`
  fragment Fragment2270 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult2270 = ResultOf<typeof FRAGMENT_2270>;
type FragmentSelf2270 = NonNullable<FragmentResult2270>;

export type FragmentToken2270 =
  | FragmentSelf2270["__typename"]
  | FragmentSelf2270["typenameHint"] | FragmentToken2268 | FragmentToken2269;
