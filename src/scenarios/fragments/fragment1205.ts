import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1203 } from "./fragment1203";
import type { FragmentToken1204 } from "./fragment1204";

export const FRAGMENT_1205 = gql(`
  fragment Fragment1205 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult1205 = ResultOf<typeof FRAGMENT_1205>;
type FragmentSelf1205 = NonNullable<FragmentResult1205>;

export type FragmentToken1205 =
  | FragmentSelf1205["__typename"]
  | FragmentSelf1205["typenameHint"] | FragmentToken1203 | FragmentToken1204;
