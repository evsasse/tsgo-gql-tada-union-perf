import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1936 } from "./fragment1936";
import type { FragmentToken1937 } from "./fragment1937";

export const FRAGMENT_1938 = gql(`
  fragment Fragment1938 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult1938 = ResultOf<typeof FRAGMENT_1938>;
type FragmentSelf1938 = NonNullable<FragmentResult1938>;

export type FragmentToken1938 =
  | FragmentSelf1938["__typename"]
  | FragmentSelf1938["typenameHint"] | FragmentToken1936 | FragmentToken1937;
