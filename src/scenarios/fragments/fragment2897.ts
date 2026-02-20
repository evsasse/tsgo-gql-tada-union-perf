import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2895 } from "./fragment2895";
import type { FragmentToken2896 } from "./fragment2896";

export const FRAGMENT_2897 = gql(`
  fragment Fragment2897 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult2897 = ResultOf<typeof FRAGMENT_2897>;
type FragmentSelf2897 = NonNullable<FragmentResult2897>;

export type FragmentToken2897 =
  | FragmentSelf2897["__typename"]
  | FragmentSelf2897["typenameHint"] | FragmentToken2895 | FragmentToken2896;
