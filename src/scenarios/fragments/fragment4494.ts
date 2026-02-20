import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4492 } from "./fragment4492";
import type { FragmentToken4493 } from "./fragment4493";

export const FRAGMENT_4494 = gql(`
  fragment Fragment4494 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult4494 = ResultOf<typeof FRAGMENT_4494>;
type FragmentSelf4494 = NonNullable<FragmentResult4494>;

export type FragmentToken4494 =
  | FragmentSelf4494["__typename"]
  | FragmentSelf4494["typenameHint"] | FragmentToken4492 | FragmentToken4493;
