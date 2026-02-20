import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken447 } from "./fragment447";
import type { FragmentToken448 } from "./fragment448";

export const FRAGMENT_449 = gql(`
  fragment Fragment449 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult449 = ResultOf<typeof FRAGMENT_449>;
type FragmentSelf449 = NonNullable<FragmentResult449>;

export type FragmentToken449 =
  | FragmentSelf449["__typename"]
  | FragmentSelf449["typenameHint"] | FragmentToken447 | FragmentToken448;
