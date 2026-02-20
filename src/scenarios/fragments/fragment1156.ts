import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1154 } from "./fragment1154";
import type { FragmentToken1155 } from "./fragment1155";

export const FRAGMENT_1156 = gql(`
  fragment Fragment1156 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult1156 = ResultOf<typeof FRAGMENT_1156>;
type FragmentSelf1156 = NonNullable<FragmentResult1156>;

export type FragmentToken1156 =
  | FragmentSelf1156["__typename"]
  | FragmentSelf1156["typenameHint"] | FragmentToken1154 | FragmentToken1155;
