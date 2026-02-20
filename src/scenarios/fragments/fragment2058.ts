import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2056 } from "./fragment2056";
import type { FragmentToken2057 } from "./fragment2057";

export const FRAGMENT_2058 = gql(`
  fragment Fragment2058 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult2058 = ResultOf<typeof FRAGMENT_2058>;
type FragmentSelf2058 = NonNullable<FragmentResult2058>;

export type FragmentToken2058 =
  | FragmentSelf2058["__typename"]
  | FragmentSelf2058["typenameHint"] | FragmentToken2056 | FragmentToken2057;
