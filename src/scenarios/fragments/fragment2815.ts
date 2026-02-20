import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2813 } from "./fragment2813";
import type { FragmentToken2814 } from "./fragment2814";

export const FRAGMENT_2815 = gql(`
  fragment Fragment2815 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult2815 = ResultOf<typeof FRAGMENT_2815>;
type FragmentSelf2815 = NonNullable<FragmentResult2815>;

export type FragmentToken2815 =
  | FragmentSelf2815["__typename"]
  | FragmentSelf2815["typenameHint"] | FragmentToken2813 | FragmentToken2814;
