import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1183 } from "./fragment1183";
import type { FragmentToken1184 } from "./fragment1184";

export const FRAGMENT_1185 = gql(`
  fragment Fragment1185 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult1185 = ResultOf<typeof FRAGMENT_1185>;
type FragmentSelf1185 = NonNullable<FragmentResult1185>;

export type FragmentToken1185 =
  | FragmentSelf1185["__typename"]
  | FragmentSelf1185["typenameHint"] | FragmentToken1183 | FragmentToken1184;
