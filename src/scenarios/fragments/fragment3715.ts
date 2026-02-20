import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3713 } from "./fragment3713";
import type { FragmentToken3714 } from "./fragment3714";

export const FRAGMENT_3715 = gql(`
  fragment Fragment3715 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult3715 = ResultOf<typeof FRAGMENT_3715>;
type FragmentSelf3715 = NonNullable<FragmentResult3715>;

export type FragmentToken3715 =
  | FragmentSelf3715["__typename"]
  | FragmentSelf3715["typenameHint"] | FragmentToken3713 | FragmentToken3714;
