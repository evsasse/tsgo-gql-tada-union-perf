import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1155 } from "./fragment1155";
import type { FragmentToken1156 } from "./fragment1156";

export const FRAGMENT_1157 = gql(`
  fragment Fragment1157 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult1157 = ResultOf<typeof FRAGMENT_1157>;
type FragmentSelf1157 = NonNullable<FragmentResult1157>;

export type FragmentToken1157 =
  | FragmentSelf1157["__typename"]
  | FragmentSelf1157["typenameHint"] | FragmentToken1155 | FragmentToken1156;
