import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1190 } from "./fragment1190";
import type { FragmentToken1191 } from "./fragment1191";

export const FRAGMENT_1192 = gql(`
  fragment Fragment1192 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult1192 = ResultOf<typeof FRAGMENT_1192>;
type FragmentSelf1192 = NonNullable<FragmentResult1192>;

export type FragmentToken1192 =
  | FragmentSelf1192["__typename"]
  | FragmentSelf1192["typenameHint"] | FragmentToken1190 | FragmentToken1191;
