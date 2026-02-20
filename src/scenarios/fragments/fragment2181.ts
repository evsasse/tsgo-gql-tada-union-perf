import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2179 } from "./fragment2179";
import type { FragmentToken2180 } from "./fragment2180";

export const FRAGMENT_2181 = gql(`
  fragment Fragment2181 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult2181 = ResultOf<typeof FRAGMENT_2181>;
type FragmentSelf2181 = NonNullable<FragmentResult2181>;

export type FragmentToken2181 =
  | FragmentSelf2181["__typename"]
  | FragmentSelf2181["typenameHint"] | FragmentToken2179 | FragmentToken2180;
