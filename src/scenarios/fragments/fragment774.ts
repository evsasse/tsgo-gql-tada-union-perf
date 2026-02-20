import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken772 } from "./fragment772";
import type { FragmentToken773 } from "./fragment773";

export const FRAGMENT_774 = gql(`
  fragment Fragment774 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult774 = ResultOf<typeof FRAGMENT_774>;
type FragmentSelf774 = NonNullable<FragmentResult774>;

export type FragmentToken774 =
  | FragmentSelf774["__typename"]
  | FragmentSelf774["typenameHint"] | FragmentToken772 | FragmentToken773;
