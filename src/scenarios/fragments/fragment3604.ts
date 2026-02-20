import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3602 } from "./fragment3602";
import type { FragmentToken3603 } from "./fragment3603";

export const FRAGMENT_3604 = gql(`
  fragment Fragment3604 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult3604 = ResultOf<typeof FRAGMENT_3604>;
type FragmentSelf3604 = NonNullable<FragmentResult3604>;

export type FragmentToken3604 =
  | FragmentSelf3604["__typename"]
  | FragmentSelf3604["typenameHint"] | FragmentToken3602 | FragmentToken3603;
