import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2180 } from "./fragment2180";
import type { FragmentToken2181 } from "./fragment2181";

export const FRAGMENT_2182 = gql(`
  fragment Fragment2182 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult2182 = ResultOf<typeof FRAGMENT_2182>;
type FragmentSelf2182 = NonNullable<FragmentResult2182>;

export type FragmentToken2182 =
  | FragmentSelf2182["__typename"]
  | FragmentSelf2182["typenameHint"] | FragmentToken2180 | FragmentToken2181;
