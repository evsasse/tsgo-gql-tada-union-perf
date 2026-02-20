import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2742 } from "./fragment2742";
import type { FragmentToken2743 } from "./fragment2743";

export const FRAGMENT_2744 = gql(`
  fragment Fragment2744 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult2744 = ResultOf<typeof FRAGMENT_2744>;
type FragmentSelf2744 = NonNullable<FragmentResult2744>;

export type FragmentToken2744 =
  | FragmentSelf2744["__typename"]
  | FragmentSelf2744["typenameHint"] | FragmentToken2742 | FragmentToken2743;
