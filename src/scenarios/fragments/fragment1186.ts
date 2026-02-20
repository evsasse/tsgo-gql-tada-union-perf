import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1184 } from "./fragment1184";
import type { FragmentToken1185 } from "./fragment1185";

export const FRAGMENT_1186 = gql(`
  fragment Fragment1186 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult1186 = ResultOf<typeof FRAGMENT_1186>;
type FragmentSelf1186 = NonNullable<FragmentResult1186>;

export type FragmentToken1186 =
  | FragmentSelf1186["__typename"]
  | FragmentSelf1186["typenameHint"] | FragmentToken1184 | FragmentToken1185;
