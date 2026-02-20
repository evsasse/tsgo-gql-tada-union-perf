import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1001 } from "./fragment1001";
import type { FragmentToken1002 } from "./fragment1002";

export const FRAGMENT_1003 = gql(`
  fragment Fragment1003 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult1003 = ResultOf<typeof FRAGMENT_1003>;
type FragmentSelf1003 = NonNullable<FragmentResult1003>;

export type FragmentToken1003 =
  | FragmentSelf1003["__typename"]
  | FragmentSelf1003["typenameHint"] | FragmentToken1001 | FragmentToken1002;
