import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1634 } from "./fragment1634";
import type { FragmentToken1635 } from "./fragment1635";

export const FRAGMENT_1636 = gql(`
  fragment Fragment1636 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult1636 = ResultOf<typeof FRAGMENT_1636>;
type FragmentSelf1636 = NonNullable<FragmentResult1636>;

export type FragmentToken1636 =
  | FragmentSelf1636["__typename"]
  | FragmentSelf1636["typenameHint"] | FragmentToken1634 | FragmentToken1635;
