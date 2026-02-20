import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1262 } from "./fragment1262";
import type { FragmentToken1263 } from "./fragment1263";

export const FRAGMENT_1264 = gql(`
  fragment Fragment1264 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult1264 = ResultOf<typeof FRAGMENT_1264>;
type FragmentSelf1264 = NonNullable<FragmentResult1264>;

export type FragmentToken1264 =
  | FragmentSelf1264["__typename"]
  | FragmentSelf1264["typenameHint"] | FragmentToken1262 | FragmentToken1263;
