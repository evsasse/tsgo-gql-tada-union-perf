import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1363 } from "./fragment1363";
import type { FragmentToken1364 } from "./fragment1364";

export const FRAGMENT_1365 = gql(`
  fragment Fragment1365 on Member244 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_244
    memberCount_244
    memberMetric_244
  }
`);

type FragmentResult1365 = ResultOf<typeof FRAGMENT_1365>;
type FragmentSelf1365 = NonNullable<FragmentResult1365>;

export type FragmentToken1365 =
  | FragmentSelf1365["__typename"]
  | FragmentSelf1365["typenameHint"] | FragmentToken1363 | FragmentToken1364;
