import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1153 } from "./fragment1153";
import type { FragmentToken1154 } from "./fragment1154";

export const FRAGMENT_1155 = gql(`
  fragment Fragment1155 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult1155 = ResultOf<typeof FRAGMENT_1155>;
type FragmentSelf1155 = NonNullable<FragmentResult1155>;

export type FragmentToken1155 =
  | FragmentSelf1155["__typename"]
  | FragmentSelf1155["typenameHint"] | FragmentToken1153 | FragmentToken1154;
