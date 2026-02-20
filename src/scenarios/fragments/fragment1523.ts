import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1521 } from "./fragment1521";
import type { FragmentToken1522 } from "./fragment1522";

export const FRAGMENT_1523 = gql(`
  fragment Fragment1523 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult1523 = ResultOf<typeof FRAGMENT_1523>;
type FragmentSelf1523 = NonNullable<FragmentResult1523>;

export type FragmentToken1523 =
  | FragmentSelf1523["__typename"]
  | FragmentSelf1523["typenameHint"] | FragmentToken1521 | FragmentToken1522;
