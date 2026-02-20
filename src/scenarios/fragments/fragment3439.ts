import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3437 } from "./fragment3437";
import type { FragmentToken3438 } from "./fragment3438";

export const FRAGMENT_3439 = gql(`
  fragment Fragment3439 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult3439 = ResultOf<typeof FRAGMENT_3439>;
type FragmentSelf3439 = NonNullable<FragmentResult3439>;

export type FragmentToken3439 =
  | FragmentSelf3439["__typename"]
  | FragmentSelf3439["typenameHint"] | FragmentToken3437 | FragmentToken3438;
