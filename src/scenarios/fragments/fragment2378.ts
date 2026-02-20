import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2376 } from "./fragment2376";
import type { FragmentToken2377 } from "./fragment2377";

export const FRAGMENT_2378 = gql(`
  fragment Fragment2378 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult2378 = ResultOf<typeof FRAGMENT_2378>;
type FragmentSelf2378 = NonNullable<FragmentResult2378>;

export type FragmentToken2378 =
  | FragmentSelf2378["__typename"]
  | FragmentSelf2378["typenameHint"] | FragmentToken2376 | FragmentToken2377;
