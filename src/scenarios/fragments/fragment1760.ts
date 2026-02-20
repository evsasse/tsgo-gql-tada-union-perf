import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1758 } from "./fragment1758";
import type { FragmentToken1759 } from "./fragment1759";

export const FRAGMENT_1760 = gql(`
  fragment Fragment1760 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult1760 = ResultOf<typeof FRAGMENT_1760>;
type FragmentSelf1760 = NonNullable<FragmentResult1760>;

export type FragmentToken1760 =
  | FragmentSelf1760["__typename"]
  | FragmentSelf1760["typenameHint"] | FragmentToken1758 | FragmentToken1759;
