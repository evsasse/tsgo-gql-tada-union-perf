import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1087 } from "./fragment1087";
import type { FragmentToken1088 } from "./fragment1088";

export const FRAGMENT_1089 = gql(`
  fragment Fragment1089 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult1089 = ResultOf<typeof FRAGMENT_1089>;
type FragmentSelf1089 = NonNullable<FragmentResult1089>;

export type FragmentToken1089 =
  | FragmentSelf1089["__typename"]
  | FragmentSelf1089["typenameHint"] | FragmentToken1087 | FragmentToken1088;
