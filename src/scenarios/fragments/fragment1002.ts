import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1000 } from "./fragment1000";
import type { FragmentToken1001 } from "./fragment1001";

export const FRAGMENT_1002 = gql(`
  fragment Fragment1002 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult1002 = ResultOf<typeof FRAGMENT_1002>;
type FragmentSelf1002 = NonNullable<FragmentResult1002>;

export type FragmentToken1002 =
  | FragmentSelf1002["__typename"]
  | FragmentSelf1002["typenameHint"] | FragmentToken1000 | FragmentToken1001;
