import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1111 } from "./fragment1111";
import type { FragmentToken1112 } from "./fragment1112";

export const FRAGMENT_1113 = gql(`
  fragment Fragment1113 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult1113 = ResultOf<typeof FRAGMENT_1113>;
type FragmentSelf1113 = NonNullable<FragmentResult1113>;

export type FragmentToken1113 =
  | FragmentSelf1113["__typename"]
  | FragmentSelf1113["typenameHint"] | FragmentToken1111 | FragmentToken1112;
