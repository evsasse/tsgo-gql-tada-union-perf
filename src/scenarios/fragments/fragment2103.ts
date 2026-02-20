import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2101 } from "./fragment2101";
import type { FragmentToken2102 } from "./fragment2102";

export const FRAGMENT_2103 = gql(`
  fragment Fragment2103 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult2103 = ResultOf<typeof FRAGMENT_2103>;
type FragmentSelf2103 = NonNullable<FragmentResult2103>;

export type FragmentToken2103 =
  | FragmentSelf2103["__typename"]
  | FragmentSelf2103["typenameHint"] | FragmentToken2101 | FragmentToken2102;
