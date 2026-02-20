import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1258 } from "./fragment1258";
import type { FragmentToken1259 } from "./fragment1259";

export const FRAGMENT_1260 = gql(`
  fragment Fragment1260 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult1260 = ResultOf<typeof FRAGMENT_1260>;
type FragmentSelf1260 = NonNullable<FragmentResult1260>;

export type FragmentToken1260 =
  | FragmentSelf1260["__typename"]
  | FragmentSelf1260["typenameHint"] | FragmentToken1258 | FragmentToken1259;
