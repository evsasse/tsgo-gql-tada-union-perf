import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2454 } from "./fragment2454";
import type { FragmentToken2455 } from "./fragment2455";

export const FRAGMENT_2456 = gql(`
  fragment Fragment2456 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult2456 = ResultOf<typeof FRAGMENT_2456>;
type FragmentSelf2456 = NonNullable<FragmentResult2456>;

export type FragmentToken2456 =
  | FragmentSelf2456["__typename"]
  | FragmentSelf2456["typenameHint"] | FragmentToken2454 | FragmentToken2455;
