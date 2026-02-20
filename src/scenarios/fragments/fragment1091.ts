import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1089 } from "./fragment1089";
import type { FragmentToken1090 } from "./fragment1090";

export const FRAGMENT_1091 = gql(`
  fragment Fragment1091 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult1091 = ResultOf<typeof FRAGMENT_1091>;
type FragmentSelf1091 = NonNullable<FragmentResult1091>;

export type FragmentToken1091 =
  | FragmentSelf1091["__typename"]
  | FragmentSelf1091["typenameHint"] | FragmentToken1089 | FragmentToken1090;
