import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1286 } from "./fragment1286";
import type { FragmentToken1287 } from "./fragment1287";

export const FRAGMENT_1288 = gql(`
  fragment Fragment1288 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult1288 = ResultOf<typeof FRAGMENT_1288>;
type FragmentSelf1288 = NonNullable<FragmentResult1288>;

export type FragmentToken1288 =
  | FragmentSelf1288["__typename"]
  | FragmentSelf1288["typenameHint"] | FragmentToken1286 | FragmentToken1287;
