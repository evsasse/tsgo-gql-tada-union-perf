import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3666 } from "./fragment3666";
import type { FragmentToken3667 } from "./fragment3667";

export const FRAGMENT_3668 = gql(`
  fragment Fragment3668 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult3668 = ResultOf<typeof FRAGMENT_3668>;
type FragmentSelf3668 = NonNullable<FragmentResult3668>;

export type FragmentToken3668 =
  | FragmentSelf3668["__typename"]
  | FragmentSelf3668["typenameHint"] | FragmentToken3666 | FragmentToken3667;
