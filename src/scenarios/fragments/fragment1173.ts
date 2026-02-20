import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1171 } from "./fragment1171";
import type { FragmentToken1172 } from "./fragment1172";

export const FRAGMENT_1173 = gql(`
  fragment Fragment1173 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult1173 = ResultOf<typeof FRAGMENT_1173>;
type FragmentSelf1173 = NonNullable<FragmentResult1173>;

export type FragmentToken1173 =
  | FragmentSelf1173["__typename"]
  | FragmentSelf1173["typenameHint"] | FragmentToken1171 | FragmentToken1172;
