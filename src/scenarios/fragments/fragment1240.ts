import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1238 } from "./fragment1238";
import type { FragmentToken1239 } from "./fragment1239";

export const FRAGMENT_1240 = gql(`
  fragment Fragment1240 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult1240 = ResultOf<typeof FRAGMENT_1240>;
type FragmentSelf1240 = NonNullable<FragmentResult1240>;

export type FragmentToken1240 =
  | FragmentSelf1240["__typename"]
  | FragmentSelf1240["typenameHint"] | FragmentToken1238 | FragmentToken1239;
