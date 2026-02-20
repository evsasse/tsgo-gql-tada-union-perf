import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1565 } from "./fragment1565";
import type { FragmentToken1566 } from "./fragment1566";

export const FRAGMENT_1567 = gql(`
  fragment Fragment1567 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult1567 = ResultOf<typeof FRAGMENT_1567>;
type FragmentSelf1567 = NonNullable<FragmentResult1567>;

export type FragmentToken1567 =
  | FragmentSelf1567["__typename"]
  | FragmentSelf1567["typenameHint"] | FragmentToken1565 | FragmentToken1566;
