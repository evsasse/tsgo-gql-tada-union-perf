import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4495 } from "./fragment4495";
import type { FragmentToken4496 } from "./fragment4496";

export const FRAGMENT_4497 = gql(`
  fragment Fragment4497 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult4497 = ResultOf<typeof FRAGMENT_4497>;
type FragmentSelf4497 = NonNullable<FragmentResult4497>;

export type FragmentToken4497 =
  | FragmentSelf4497["__typename"]
  | FragmentSelf4497["typenameHint"] | FragmentToken4495 | FragmentToken4496;
