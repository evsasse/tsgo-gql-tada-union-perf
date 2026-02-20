import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3216 } from "./fragment3216";
import type { FragmentToken3217 } from "./fragment3217";

export const FRAGMENT_3218 = gql(`
  fragment Fragment3218 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult3218 = ResultOf<typeof FRAGMENT_3218>;
type FragmentSelf3218 = NonNullable<FragmentResult3218>;

export type FragmentToken3218 =
  | FragmentSelf3218["__typename"]
  | FragmentSelf3218["typenameHint"] | FragmentToken3216 | FragmentToken3217;
