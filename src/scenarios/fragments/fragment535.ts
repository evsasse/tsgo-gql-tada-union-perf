import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken533 } from "./fragment533";
import type { FragmentToken534 } from "./fragment534";

export const FRAGMENT_535 = gql(`
  fragment Fragment535 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult535 = ResultOf<typeof FRAGMENT_535>;
type FragmentSelf535 = NonNullable<FragmentResult535>;

export type FragmentToken535 =
  | FragmentSelf535["__typename"]
  | FragmentSelf535["typenameHint"] | FragmentToken533 | FragmentToken534;
