import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1226 } from "./fragment1226";
import type { FragmentToken1227 } from "./fragment1227";

export const FRAGMENT_1228 = gql(`
  fragment Fragment1228 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult1228 = ResultOf<typeof FRAGMENT_1228>;
type FragmentSelf1228 = NonNullable<FragmentResult1228>;

export type FragmentToken1228 =
  | FragmentSelf1228["__typename"]
  | FragmentSelf1228["typenameHint"] | FragmentToken1226 | FragmentToken1227;
