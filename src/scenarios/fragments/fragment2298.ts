import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2296 } from "./fragment2296";
import type { FragmentToken2297 } from "./fragment2297";

export const FRAGMENT_2298 = gql(`
  fragment Fragment2298 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult2298 = ResultOf<typeof FRAGMENT_2298>;
type FragmentSelf2298 = NonNullable<FragmentResult2298>;

export type FragmentToken2298 =
  | FragmentSelf2298["__typename"]
  | FragmentSelf2298["typenameHint"] | FragmentToken2296 | FragmentToken2297;
