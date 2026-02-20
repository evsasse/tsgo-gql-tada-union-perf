import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken282 } from "./fragment282";
import type { FragmentToken283 } from "./fragment283";

export const FRAGMENT_284 = gql(`
  fragment Fragment284 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult284 = ResultOf<typeof FRAGMENT_284>;
type FragmentSelf284 = NonNullable<FragmentResult284>;

export type FragmentToken284 =
  | FragmentSelf284["__typename"]
  | FragmentSelf284["typenameHint"] | FragmentToken282 | FragmentToken283;
