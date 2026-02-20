import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2713 } from "./fragment2713";
import type { FragmentToken2714 } from "./fragment2714";

export const FRAGMENT_2715 = gql(`
  fragment Fragment2715 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult2715 = ResultOf<typeof FRAGMENT_2715>;
type FragmentSelf2715 = NonNullable<FragmentResult2715>;

export type FragmentToken2715 =
  | FragmentSelf2715["__typename"]
  | FragmentSelf2715["typenameHint"] | FragmentToken2713 | FragmentToken2714;
