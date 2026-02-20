import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1027 } from "./fragment1027";
import type { FragmentToken1028 } from "./fragment1028";

export const FRAGMENT_1029 = gql(`
  fragment Fragment1029 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult1029 = ResultOf<typeof FRAGMENT_1029>;
type FragmentSelf1029 = NonNullable<FragmentResult1029>;

export type FragmentToken1029 =
  | FragmentSelf1029["__typename"]
  | FragmentSelf1029["typenameHint"] | FragmentToken1027 | FragmentToken1028;
