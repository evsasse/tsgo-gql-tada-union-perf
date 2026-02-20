import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1186 } from "./fragment1186";
import type { FragmentToken1187 } from "./fragment1187";

export const FRAGMENT_1188 = gql(`
  fragment Fragment1188 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult1188 = ResultOf<typeof FRAGMENT_1188>;
type FragmentSelf1188 = NonNullable<FragmentResult1188>;

export type FragmentToken1188 =
  | FragmentSelf1188["__typename"]
  | FragmentSelf1188["typenameHint"] | FragmentToken1186 | FragmentToken1187;
