import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1017 } from "./fragment1017";
import type { FragmentToken1018 } from "./fragment1018";

export const FRAGMENT_1019 = gql(`
  fragment Fragment1019 on Member178 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_178
    memberCount_178
    memberMetric_178
  }
`);

type FragmentResult1019 = ResultOf<typeof FRAGMENT_1019>;
type FragmentSelf1019 = NonNullable<FragmentResult1019>;

export type FragmentToken1019 =
  | FragmentSelf1019["__typename"]
  | FragmentSelf1019["typenameHint"] | FragmentToken1017 | FragmentToken1018;
