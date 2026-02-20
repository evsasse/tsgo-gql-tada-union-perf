import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1255 } from "./fragment1255";
import type { FragmentToken1256 } from "./fragment1256";

export const FRAGMENT_1257 = gql(`
  fragment Fragment1257 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult1257 = ResultOf<typeof FRAGMENT_1257>;
type FragmentSelf1257 = NonNullable<FragmentResult1257>;

export type FragmentToken1257 =
  | FragmentSelf1257["__typename"]
  | FragmentSelf1257["typenameHint"] | FragmentToken1255 | FragmentToken1256;
