import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1192 } from "./fragment1192";
import type { FragmentToken1193 } from "./fragment1193";

export const FRAGMENT_1194 = gql(`
  fragment Fragment1194 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult1194 = ResultOf<typeof FRAGMENT_1194>;
type FragmentSelf1194 = NonNullable<FragmentResult1194>;

export type FragmentToken1194 =
  | FragmentSelf1194["__typename"]
  | FragmentSelf1194["typenameHint"] | FragmentToken1192 | FragmentToken1193;
