import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2691 } from "./fragment2691";
import type { FragmentToken2692 } from "./fragment2692";

export const FRAGMENT_2693 = gql(`
  fragment Fragment2693 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult2693 = ResultOf<typeof FRAGMENT_2693>;
type FragmentSelf2693 = NonNullable<FragmentResult2693>;

export type FragmentToken2693 =
  | FragmentSelf2693["__typename"]
  | FragmentSelf2693["typenameHint"] | FragmentToken2691 | FragmentToken2692;
