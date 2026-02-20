import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1088 } from "./fragment1088";
import type { FragmentToken1089 } from "./fragment1089";

export const FRAGMENT_1090 = gql(`
  fragment Fragment1090 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult1090 = ResultOf<typeof FRAGMENT_1090>;
type FragmentSelf1090 = NonNullable<FragmentResult1090>;

export type FragmentToken1090 =
  | FragmentSelf1090["__typename"]
  | FragmentSelf1090["typenameHint"] | FragmentToken1088 | FragmentToken1089;
