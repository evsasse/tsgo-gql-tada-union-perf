import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4713 } from "./fragment4713";
import type { FragmentToken4714 } from "./fragment4714";

export const FRAGMENT_4715 = gql(`
  fragment Fragment4715 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult4715 = ResultOf<typeof FRAGMENT_4715>;
type FragmentSelf4715 = NonNullable<FragmentResult4715>;

export type FragmentToken4715 =
  | FragmentSelf4715["__typename"]
  | FragmentSelf4715["typenameHint"] | FragmentToken4713 | FragmentToken4714;
