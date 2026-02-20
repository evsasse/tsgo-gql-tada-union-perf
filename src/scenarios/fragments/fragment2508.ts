import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2506 } from "./fragment2506";
import type { FragmentToken2507 } from "./fragment2507";

export const FRAGMENT_2508 = gql(`
  fragment Fragment2508 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult2508 = ResultOf<typeof FRAGMENT_2508>;
type FragmentSelf2508 = NonNullable<FragmentResult2508>;

export type FragmentToken2508 =
  | FragmentSelf2508["__typename"]
  | FragmentSelf2508["typenameHint"] | FragmentToken2506 | FragmentToken2507;
