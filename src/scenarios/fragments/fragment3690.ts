import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3688 } from "./fragment3688";
import type { FragmentToken3689 } from "./fragment3689";

export const FRAGMENT_3690 = gql(`
  fragment Fragment3690 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult3690 = ResultOf<typeof FRAGMENT_3690>;
type FragmentSelf3690 = NonNullable<FragmentResult3690>;

export type FragmentToken3690 =
  | FragmentSelf3690["__typename"]
  | FragmentSelf3690["typenameHint"] | FragmentToken3688 | FragmentToken3689;
