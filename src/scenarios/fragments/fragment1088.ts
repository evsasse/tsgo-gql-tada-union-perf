import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1086 } from "./fragment1086";
import type { FragmentToken1087 } from "./fragment1087";

export const FRAGMENT_1088 = gql(`
  fragment Fragment1088 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult1088 = ResultOf<typeof FRAGMENT_1088>;
type FragmentSelf1088 = NonNullable<FragmentResult1088>;

export type FragmentToken1088 =
  | FragmentSelf1088["__typename"]
  | FragmentSelf1088["typenameHint"] | FragmentToken1086 | FragmentToken1087;
