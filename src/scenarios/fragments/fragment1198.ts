import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1196 } from "./fragment1196";
import type { FragmentToken1197 } from "./fragment1197";

export const FRAGMENT_1198 = gql(`
  fragment Fragment1198 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult1198 = ResultOf<typeof FRAGMENT_1198>;
type FragmentSelf1198 = NonNullable<FragmentResult1198>;

export type FragmentToken1198 =
  | FragmentSelf1198["__typename"]
  | FragmentSelf1198["typenameHint"] | FragmentToken1196 | FragmentToken1197;
