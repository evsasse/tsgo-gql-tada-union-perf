import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1081 } from "./fragment1081";
import type { FragmentToken1082 } from "./fragment1082";

export const FRAGMENT_1083 = gql(`
  fragment Fragment1083 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult1083 = ResultOf<typeof FRAGMENT_1083>;
type FragmentSelf1083 = NonNullable<FragmentResult1083>;

export type FragmentToken1083 =
  | FragmentSelf1083["__typename"]
  | FragmentSelf1083["typenameHint"] | FragmentToken1081 | FragmentToken1082;
