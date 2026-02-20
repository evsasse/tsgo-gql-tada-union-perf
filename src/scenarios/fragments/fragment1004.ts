import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1002 } from "./fragment1002";
import type { FragmentToken1003 } from "./fragment1003";

export const FRAGMENT_1004 = gql(`
  fragment Fragment1004 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult1004 = ResultOf<typeof FRAGMENT_1004>;
type FragmentSelf1004 = NonNullable<FragmentResult1004>;

export type FragmentToken1004 =
  | FragmentSelf1004["__typename"]
  | FragmentSelf1004["typenameHint"] | FragmentToken1002 | FragmentToken1003;
