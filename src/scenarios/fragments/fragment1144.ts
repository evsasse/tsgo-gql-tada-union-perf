import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1142 } from "./fragment1142";
import type { FragmentToken1143 } from "./fragment1143";

export const FRAGMENT_1144 = gql(`
  fragment Fragment1144 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult1144 = ResultOf<typeof FRAGMENT_1144>;
type FragmentSelf1144 = NonNullable<FragmentResult1144>;

export type FragmentToken1144 =
  | FragmentSelf1144["__typename"]
  | FragmentSelf1144["typenameHint"] | FragmentToken1142 | FragmentToken1143;
