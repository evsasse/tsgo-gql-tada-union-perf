import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1935 } from "./fragment1935";
import type { FragmentToken1936 } from "./fragment1936";

export const FRAGMENT_1937 = gql(`
  fragment Fragment1937 on Member256 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_256
    memberCount_256
    memberMetric_256
  }
`);

type FragmentResult1937 = ResultOf<typeof FRAGMENT_1937>;
type FragmentSelf1937 = NonNullable<FragmentResult1937>;

export type FragmentToken1937 =
  | FragmentSelf1937["__typename"]
  | FragmentSelf1937["typenameHint"] | FragmentToken1935 | FragmentToken1936;
