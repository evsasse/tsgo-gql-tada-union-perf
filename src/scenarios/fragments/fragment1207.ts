import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1205 } from "./fragment1205";
import type { FragmentToken1206 } from "./fragment1206";

export const FRAGMENT_1207 = gql(`
  fragment Fragment1207 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult1207 = ResultOf<typeof FRAGMENT_1207>;
type FragmentSelf1207 = NonNullable<FragmentResult1207>;

export type FragmentToken1207 =
  | FragmentSelf1207["__typename"]
  | FragmentSelf1207["typenameHint"] | FragmentToken1205 | FragmentToken1206;
