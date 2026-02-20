import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken572 } from "./fragment572";
import type { FragmentToken573 } from "./fragment573";

export const FRAGMENT_574 = gql(`
  fragment Fragment574 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult574 = ResultOf<typeof FRAGMENT_574>;
type FragmentSelf574 = NonNullable<FragmentResult574>;

export type FragmentToken574 =
  | FragmentSelf574["__typename"]
  | FragmentSelf574["typenameHint"] | FragmentToken572 | FragmentToken573;
