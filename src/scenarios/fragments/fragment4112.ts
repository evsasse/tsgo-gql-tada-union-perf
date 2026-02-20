import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4110 } from "./fragment4110";
import type { FragmentToken4111 } from "./fragment4111";

export const FRAGMENT_4112 = gql(`
  fragment Fragment4112 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult4112 = ResultOf<typeof FRAGMENT_4112>;
type FragmentSelf4112 = NonNullable<FragmentResult4112>;

export type FragmentToken4112 =
  | FragmentSelf4112["__typename"]
  | FragmentSelf4112["typenameHint"] | FragmentToken4110 | FragmentToken4111;
