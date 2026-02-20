import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1108 } from "./fragment1108";
import type { FragmentToken1109 } from "./fragment1109";

export const FRAGMENT_1110 = gql(`
  fragment Fragment1110 on Member269 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_269
    memberCount_269
    memberMetric_269
  }
`);

type FragmentResult1110 = ResultOf<typeof FRAGMENT_1110>;
type FragmentSelf1110 = NonNullable<FragmentResult1110>;

export type FragmentToken1110 =
  | FragmentSelf1110["__typename"]
  | FragmentSelf1110["typenameHint"] | FragmentToken1108 | FragmentToken1109;
