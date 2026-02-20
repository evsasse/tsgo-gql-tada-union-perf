import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2374 } from "./fragment2374";
import type { FragmentToken2375 } from "./fragment2375";

export const FRAGMENT_2376 = gql(`
  fragment Fragment2376 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult2376 = ResultOf<typeof FRAGMENT_2376>;
type FragmentSelf2376 = NonNullable<FragmentResult2376>;

export type FragmentToken2376 =
  | FragmentSelf2376["__typename"]
  | FragmentSelf2376["typenameHint"] | FragmentToken2374 | FragmentToken2375;
