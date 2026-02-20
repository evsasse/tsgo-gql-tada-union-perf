import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken713 } from "./fragment713";
import type { FragmentToken714 } from "./fragment714";

export const FRAGMENT_715 = gql(`
  fragment Fragment715 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult715 = ResultOf<typeof FRAGMENT_715>;
type FragmentSelf715 = NonNullable<FragmentResult715>;

export type FragmentToken715 =
  | FragmentSelf715["__typename"]
  | FragmentSelf715["typenameHint"] | FragmentToken713 | FragmentToken714;
