import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3629 } from "./fragment3629";
import type { FragmentToken3630 } from "./fragment3630";

export const FRAGMENT_3631 = gql(`
  fragment Fragment3631 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult3631 = ResultOf<typeof FRAGMENT_3631>;
type FragmentSelf3631 = NonNullable<FragmentResult3631>;

export type FragmentToken3631 =
  | FragmentSelf3631["__typename"]
  | FragmentSelf3631["typenameHint"] | FragmentToken3629 | FragmentToken3630;
