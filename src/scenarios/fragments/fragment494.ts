import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken492 } from "./fragment492";
import type { FragmentToken493 } from "./fragment493";

export const FRAGMENT_494 = gql(`
  fragment Fragment494 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult494 = ResultOf<typeof FRAGMENT_494>;
type FragmentSelf494 = NonNullable<FragmentResult494>;

export type FragmentToken494 =
  | FragmentSelf494["__typename"]
  | FragmentSelf494["typenameHint"] | FragmentToken492 | FragmentToken493;
