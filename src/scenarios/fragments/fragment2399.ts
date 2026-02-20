import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2397 } from "./fragment2397";
import type { FragmentToken2398 } from "./fragment2398";

export const FRAGMENT_2399 = gql(`
  fragment Fragment2399 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult2399 = ResultOf<typeof FRAGMENT_2399>;
type FragmentSelf2399 = NonNullable<FragmentResult2399>;

export type FragmentToken2399 =
  | FragmentSelf2399["__typename"]
  | FragmentSelf2399["typenameHint"] | FragmentToken2397 | FragmentToken2398;
