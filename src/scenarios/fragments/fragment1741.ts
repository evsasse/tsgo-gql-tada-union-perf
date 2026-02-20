import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1739 } from "./fragment1739";
import type { FragmentToken1740 } from "./fragment1740";

export const FRAGMENT_1741 = gql(`
  fragment Fragment1741 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult1741 = ResultOf<typeof FRAGMENT_1741>;
type FragmentSelf1741 = NonNullable<FragmentResult1741>;

export type FragmentToken1741 =
  | FragmentSelf1741["__typename"]
  | FragmentSelf1741["typenameHint"] | FragmentToken1739 | FragmentToken1740;
