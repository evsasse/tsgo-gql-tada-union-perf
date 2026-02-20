import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3649 } from "./fragment3649";
import type { FragmentToken3650 } from "./fragment3650";

export const FRAGMENT_3651 = gql(`
  fragment Fragment3651 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult3651 = ResultOf<typeof FRAGMENT_3651>;
type FragmentSelf3651 = NonNullable<FragmentResult3651>;

export type FragmentToken3651 =
  | FragmentSelf3651["__typename"]
  | FragmentSelf3651["typenameHint"] | FragmentToken3649 | FragmentToken3650;
