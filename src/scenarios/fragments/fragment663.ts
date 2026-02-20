import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken661 } from "./fragment661";
import type { FragmentToken662 } from "./fragment662";

export const FRAGMENT_663 = gql(`
  fragment Fragment663 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult663 = ResultOf<typeof FRAGMENT_663>;
type FragmentSelf663 = NonNullable<FragmentResult663>;

export type FragmentToken663 =
  | FragmentSelf663["__typename"]
  | FragmentSelf663["typenameHint"] | FragmentToken661 | FragmentToken662;
