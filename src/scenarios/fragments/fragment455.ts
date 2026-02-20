import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken453 } from "./fragment453";
import type { FragmentToken454 } from "./fragment454";

export const FRAGMENT_455 = gql(`
  fragment Fragment455 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult455 = ResultOf<typeof FRAGMENT_455>;
type FragmentSelf455 = NonNullable<FragmentResult455>;

export type FragmentToken455 =
  | FragmentSelf455["__typename"]
  | FragmentSelf455["typenameHint"] | FragmentToken453 | FragmentToken454;
