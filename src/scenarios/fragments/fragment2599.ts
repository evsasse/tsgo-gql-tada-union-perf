import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2597 } from "./fragment2597";
import type { FragmentToken2598 } from "./fragment2598";

export const FRAGMENT_2599 = gql(`
  fragment Fragment2599 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult2599 = ResultOf<typeof FRAGMENT_2599>;
type FragmentSelf2599 = NonNullable<FragmentResult2599>;

export type FragmentToken2599 =
  | FragmentSelf2599["__typename"]
  | FragmentSelf2599["typenameHint"] | FragmentToken2597 | FragmentToken2598;
