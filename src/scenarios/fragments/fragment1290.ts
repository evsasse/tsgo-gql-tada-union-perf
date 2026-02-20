import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1288 } from "./fragment1288";
import type { FragmentToken1289 } from "./fragment1289";

export const FRAGMENT_1290 = gql(`
  fragment Fragment1290 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult1290 = ResultOf<typeof FRAGMENT_1290>;
type FragmentSelf1290 = NonNullable<FragmentResult1290>;

export type FragmentToken1290 =
  | FragmentSelf1290["__typename"]
  | FragmentSelf1290["typenameHint"] | FragmentToken1288 | FragmentToken1289;
