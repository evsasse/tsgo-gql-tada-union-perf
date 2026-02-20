import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken094 } from "./fragment094";
import type { FragmentToken095 } from "./fragment095";

export const FRAGMENT_096 = gql(`
  fragment Fragment096 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult096 = ResultOf<typeof FRAGMENT_096>;
type FragmentSelf096 = NonNullable<FragmentResult096>;

export type FragmentToken096 =
  | FragmentSelf096["__typename"]
  | FragmentSelf096["typenameHint"] | FragmentToken094 | FragmentToken095;
