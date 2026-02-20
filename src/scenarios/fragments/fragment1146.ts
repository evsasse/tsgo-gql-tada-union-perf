import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1144 } from "./fragment1144";
import type { FragmentToken1145 } from "./fragment1145";

export const FRAGMENT_1146 = gql(`
  fragment Fragment1146 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult1146 = ResultOf<typeof FRAGMENT_1146>;
type FragmentSelf1146 = NonNullable<FragmentResult1146>;

export type FragmentToken1146 =
  | FragmentSelf1146["__typename"]
  | FragmentSelf1146["typenameHint"] | FragmentToken1144 | FragmentToken1145;
