import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1023 } from "./fragment1023";
import type { FragmentToken1024 } from "./fragment1024";

export const FRAGMENT_1025 = gql(`
  fragment Fragment1025 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult1025 = ResultOf<typeof FRAGMENT_1025>;
type FragmentSelf1025 = NonNullable<FragmentResult1025>;

export type FragmentToken1025 =
  | FragmentSelf1025["__typename"]
  | FragmentSelf1025["typenameHint"] | FragmentToken1023 | FragmentToken1024;
