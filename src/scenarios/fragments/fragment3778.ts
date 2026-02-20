import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3776 } from "./fragment3776";
import type { FragmentToken3777 } from "./fragment3777";

export const FRAGMENT_3778 = gql(`
  fragment Fragment3778 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult3778 = ResultOf<typeof FRAGMENT_3778>;
type FragmentSelf3778 = NonNullable<FragmentResult3778>;

export type FragmentToken3778 =
  | FragmentSelf3778["__typename"]
  | FragmentSelf3778["typenameHint"] | FragmentToken3776 | FragmentToken3777;
