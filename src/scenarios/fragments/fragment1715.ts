import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1713 } from "./fragment1713";
import type { FragmentToken1714 } from "./fragment1714";

export const FRAGMENT_1715 = gql(`
  fragment Fragment1715 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult1715 = ResultOf<typeof FRAGMENT_1715>;
type FragmentSelf1715 = NonNullable<FragmentResult1715>;

export type FragmentToken1715 =
  | FragmentSelf1715["__typename"]
  | FragmentSelf1715["typenameHint"] | FragmentToken1713 | FragmentToken1714;
