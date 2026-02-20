import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1259 } from "./fragment1259";
import type { FragmentToken1260 } from "./fragment1260";

export const FRAGMENT_1261 = gql(`
  fragment Fragment1261 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult1261 = ResultOf<typeof FRAGMENT_1261>;
type FragmentSelf1261 = NonNullable<FragmentResult1261>;

export type FragmentToken1261 =
  | FragmentSelf1261["__typename"]
  | FragmentSelf1261["typenameHint"] | FragmentToken1259 | FragmentToken1260;
