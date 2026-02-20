import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2455 } from "./fragment2455";
import type { FragmentToken2456 } from "./fragment2456";

export const FRAGMENT_2457 = gql(`
  fragment Fragment2457 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult2457 = ResultOf<typeof FRAGMENT_2457>;
type FragmentSelf2457 = NonNullable<FragmentResult2457>;

export type FragmentToken2457 =
  | FragmentSelf2457["__typename"]
  | FragmentSelf2457["typenameHint"] | FragmentToken2455 | FragmentToken2456;
