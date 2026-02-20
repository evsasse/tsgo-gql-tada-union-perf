import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2501 } from "./fragment2501";
import type { FragmentToken2502 } from "./fragment2502";

export const FRAGMENT_2503 = gql(`
  fragment Fragment2503 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult2503 = ResultOf<typeof FRAGMENT_2503>;
type FragmentSelf2503 = NonNullable<FragmentResult2503>;

export type FragmentToken2503 =
  | FragmentSelf2503["__typename"]
  | FragmentSelf2503["typenameHint"] | FragmentToken2501 | FragmentToken2502;
