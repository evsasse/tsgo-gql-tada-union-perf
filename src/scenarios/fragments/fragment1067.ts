import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1065 } from "./fragment1065";
import type { FragmentToken1066 } from "./fragment1066";

export const FRAGMENT_1067 = gql(`
  fragment Fragment1067 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult1067 = ResultOf<typeof FRAGMENT_1067>;
type FragmentSelf1067 = NonNullable<FragmentResult1067>;

export type FragmentToken1067 =
  | FragmentSelf1067["__typename"]
  | FragmentSelf1067["typenameHint"] | FragmentToken1065 | FragmentToken1066;
