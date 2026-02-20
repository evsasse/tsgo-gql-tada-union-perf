import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4494 } from "./fragment4494";
import type { FragmentToken4495 } from "./fragment4495";

export const FRAGMENT_4496 = gql(`
  fragment Fragment4496 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult4496 = ResultOf<typeof FRAGMENT_4496>;
type FragmentSelf4496 = NonNullable<FragmentResult4496>;

export type FragmentToken4496 =
  | FragmentSelf4496["__typename"]
  | FragmentSelf4496["typenameHint"] | FragmentToken4494 | FragmentToken4495;
