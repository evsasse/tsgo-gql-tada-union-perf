import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4493 } from "./fragment4493";
import type { FragmentToken4494 } from "./fragment4494";

export const FRAGMENT_4495 = gql(`
  fragment Fragment4495 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult4495 = ResultOf<typeof FRAGMENT_4495>;
type FragmentSelf4495 = NonNullable<FragmentResult4495>;

export type FragmentToken4495 =
  | FragmentSelf4495["__typename"]
  | FragmentSelf4495["typenameHint"] | FragmentToken4493 | FragmentToken4494;
