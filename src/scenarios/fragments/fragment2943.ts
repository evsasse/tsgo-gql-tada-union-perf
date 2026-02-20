import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2941 } from "./fragment2941";
import type { FragmentToken2942 } from "./fragment2942";

export const FRAGMENT_2943 = gql(`
  fragment Fragment2943 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult2943 = ResultOf<typeof FRAGMENT_2943>;
type FragmentSelf2943 = NonNullable<FragmentResult2943>;

export type FragmentToken2943 =
  | FragmentSelf2943["__typename"]
  | FragmentSelf2943["typenameHint"] | FragmentToken2941 | FragmentToken2942;
