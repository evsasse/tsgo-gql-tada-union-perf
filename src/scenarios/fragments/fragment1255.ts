import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1253 } from "./fragment1253";
import type { FragmentToken1254 } from "./fragment1254";

export const FRAGMENT_1255 = gql(`
  fragment Fragment1255 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult1255 = ResultOf<typeof FRAGMENT_1255>;
type FragmentSelf1255 = NonNullable<FragmentResult1255>;

export type FragmentToken1255 =
  | FragmentSelf1255["__typename"]
  | FragmentSelf1255["typenameHint"] | FragmentToken1253 | FragmentToken1254;
