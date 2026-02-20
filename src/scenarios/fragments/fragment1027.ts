import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1025 } from "./fragment1025";
import type { FragmentToken1026 } from "./fragment1026";

export const FRAGMENT_1027 = gql(`
  fragment Fragment1027 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult1027 = ResultOf<typeof FRAGMENT_1027>;
type FragmentSelf1027 = NonNullable<FragmentResult1027>;

export type FragmentToken1027 =
  | FragmentSelf1027["__typename"]
  | FragmentSelf1027["typenameHint"] | FragmentToken1025 | FragmentToken1026;
