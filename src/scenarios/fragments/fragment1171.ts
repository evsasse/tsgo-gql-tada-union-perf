import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1169 } from "./fragment1169";
import type { FragmentToken1170 } from "./fragment1170";

export const FRAGMENT_1171 = gql(`
  fragment Fragment1171 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult1171 = ResultOf<typeof FRAGMENT_1171>;
type FragmentSelf1171 = NonNullable<FragmentResult1171>;

export type FragmentToken1171 =
  | FragmentSelf1171["__typename"]
  | FragmentSelf1171["typenameHint"] | FragmentToken1169 | FragmentToken1170;
