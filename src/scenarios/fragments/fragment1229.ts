import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1227 } from "./fragment1227";
import type { FragmentToken1228 } from "./fragment1228";

export const FRAGMENT_1229 = gql(`
  fragment Fragment1229 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult1229 = ResultOf<typeof FRAGMENT_1229>;
type FragmentSelf1229 = NonNullable<FragmentResult1229>;

export type FragmentToken1229 =
  | FragmentSelf1229["__typename"]
  | FragmentSelf1229["typenameHint"] | FragmentToken1227 | FragmentToken1228;
