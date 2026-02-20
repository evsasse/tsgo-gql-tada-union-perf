import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1163 } from "./fragment1163";
import type { FragmentToken1164 } from "./fragment1164";

export const FRAGMENT_1165 = gql(`
  fragment Fragment1165 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult1165 = ResultOf<typeof FRAGMENT_1165>;
type FragmentSelf1165 = NonNullable<FragmentResult1165>;

export type FragmentToken1165 =
  | FragmentSelf1165["__typename"]
  | FragmentSelf1165["typenameHint"] | FragmentToken1163 | FragmentToken1164;
