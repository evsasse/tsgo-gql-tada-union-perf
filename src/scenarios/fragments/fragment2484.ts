import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2482 } from "./fragment2482";
import type { FragmentToken2483 } from "./fragment2483";

export const FRAGMENT_2484 = gql(`
  fragment Fragment2484 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult2484 = ResultOf<typeof FRAGMENT_2484>;
type FragmentSelf2484 = NonNullable<FragmentResult2484>;

export type FragmentToken2484 =
  | FragmentSelf2484["__typename"]
  | FragmentSelf2484["typenameHint"] | FragmentToken2482 | FragmentToken2483;
