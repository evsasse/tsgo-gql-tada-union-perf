import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1168 } from "./fragment1168";
import type { FragmentToken1169 } from "./fragment1169";

export const FRAGMENT_1170 = gql(`
  fragment Fragment1170 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult1170 = ResultOf<typeof FRAGMENT_1170>;
type FragmentSelf1170 = NonNullable<FragmentResult1170>;

export type FragmentToken1170 =
  | FragmentSelf1170["__typename"]
  | FragmentSelf1170["typenameHint"] | FragmentToken1168 | FragmentToken1169;
