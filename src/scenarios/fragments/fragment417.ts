import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken415 } from "./fragment415";
import type { FragmentToken416 } from "./fragment416";

export const FRAGMENT_417 = gql(`
  fragment Fragment417 on Member136 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_136
    memberCount_136
    memberMetric_136
  }
`);

type FragmentResult417 = ResultOf<typeof FRAGMENT_417>;
type FragmentSelf417 = NonNullable<FragmentResult417>;

export type FragmentToken417 =
  | FragmentSelf417["__typename"]
  | FragmentSelf417["typenameHint"] | FragmentToken415 | FragmentToken416;
