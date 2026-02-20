import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1501 } from "./fragment1501";
import type { FragmentToken1502 } from "./fragment1502";

export const FRAGMENT_1503 = gql(`
  fragment Fragment1503 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult1503 = ResultOf<typeof FRAGMENT_1503>;
type FragmentSelf1503 = NonNullable<FragmentResult1503>;

export type FragmentToken1503 =
  | FragmentSelf1503["__typename"]
  | FragmentSelf1503["typenameHint"] | FragmentToken1501 | FragmentToken1502;
