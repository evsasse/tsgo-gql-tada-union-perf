import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2654 } from "./fragment2654";
import type { FragmentToken2655 } from "./fragment2655";

export const FRAGMENT_2656 = gql(`
  fragment Fragment2656 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult2656 = ResultOf<typeof FRAGMENT_2656>;
type FragmentSelf2656 = NonNullable<FragmentResult2656>;

export type FragmentToken2656 =
  | FragmentSelf2656["__typename"]
  | FragmentSelf2656["typenameHint"] | FragmentToken2654 | FragmentToken2655;
