import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1539 } from "./fragment1539";
import type { FragmentToken1540 } from "./fragment1540";

export const FRAGMENT_1541 = gql(`
  fragment Fragment1541 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult1541 = ResultOf<typeof FRAGMENT_1541>;
type FragmentSelf1541 = NonNullable<FragmentResult1541>;

export type FragmentToken1541 =
  | FragmentSelf1541["__typename"]
  | FragmentSelf1541["typenameHint"] | FragmentToken1539 | FragmentToken1540;
