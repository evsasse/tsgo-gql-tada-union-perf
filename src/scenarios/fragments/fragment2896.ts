import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2894 } from "./fragment2894";
import type { FragmentToken2895 } from "./fragment2895";

export const FRAGMENT_2896 = gql(`
  fragment Fragment2896 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult2896 = ResultOf<typeof FRAGMENT_2896>;
type FragmentSelf2896 = NonNullable<FragmentResult2896>;

export type FragmentToken2896 =
  | FragmentSelf2896["__typename"]
  | FragmentSelf2896["typenameHint"] | FragmentToken2894 | FragmentToken2895;
